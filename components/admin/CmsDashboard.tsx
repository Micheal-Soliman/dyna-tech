"use client";

import { createBrowserClient } from "@supabase/ssr";
import type { Session } from "@supabase/supabase-js";
import {
  Check,
  ChevronRight,
  Copy,
  DatabaseZap,
  Eye,
  FileText,
  LoaderCircle,
  LogOut,
  Save,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";

import type { Locale } from "@/i18n/config";
import type { CmsPageDefinition, JsonValue } from "@/lib/cms/types";
import { ContentEditor } from "@/components/admin/ContentEditor";
import { LoginForm } from "@/components/admin/LoginForm";

type EditableDocument = { content: JsonValue; media: Record<string, JsonValue> };
type DefaultResponse = {
  configured: boolean;
  pages: CmsPageDefinition[];
  document: EditableDocument;
};
type MediaRow = {
  id: string;
  public_id: string;
  resource_type: "image" | "video" | "raw";
  secure_url: string;
  width: number | null;
  height: number | null;
  duration: number | null;
  created_at: string;
};

function setAtPath(value: JsonValue, path: (string | number)[], next: JsonValue): JsonValue {
  if (!path.length) return next;
  const [head, ...rest] = path;
  if (Array.isArray(value)) {
    const copy = [...value];
    copy[Number(head)] = setAtPath(copy[Number(head)], rest, next);
    return copy;
  }
  const object = { ...(value as Record<string, JsonValue>) };
  object[String(head)] = setAtPath(object[String(head)], rest, next);
  return object;
}

function mergeEditorValues(fallback: JsonValue, saved: JsonValue | null | undefined): JsonValue {
  if (saved === null || saved === undefined) return fallback;
  if (Array.isArray(saved)) return saved;
  if (
    typeof fallback !== "object" ||
    fallback === null ||
    Array.isArray(fallback) ||
    typeof saved !== "object"
  ) {
    return saved;
  }

  const merged = { ...(fallback as Record<string, JsonValue>) };
  for (const [key, value] of Object.entries(saved as Record<string, JsonValue>)) {
    merged[key] = mergeEditorValues(merged[key] ?? null, value);
  }
  return merged;
}

export default function CmsDashboard({ locale }: { locale: Locale }) {
  const [session, setSession] = useState<Session | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [pages, setPages] = useState<CmsPageDefinition[]>([]);
  const [pageKey, setPageKey] = useState("home");
  const [editingLocale, setEditingLocale] = useState<Locale>(locale);
  const [document, setDocument] = useState<EditableDocument | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [notice, setNotice] = useState("");
  const [uploadingPath, setUploadingPath] = useState<string | null>(null);
  const [mediaLibrary, setMediaLibrary] = useState<MediaRow[]>([]);
  const [configured, setConfigured] = useState(true);
  const [initializing, setInitializing] = useState(false);
  const isAr = locale === "ar";
  const supabase = useMemo(() => {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
    return url && key ? createBrowserClient(url, key) : null;
  }, []);

  useEffect(() => {
    if (!supabase) { setConfigured(false); setLoading(false); return; }
    supabase.auth.getSession().then(({ data }) => { setSession(data.session); setLoading(false); });
    const { data } = supabase.auth.onAuthStateChange((_event, nextSession) => { setSession(nextSession); setIsAdmin(null); });
    return () => data.subscription.unsubscribe();
  }, [supabase]);

  useEffect(() => {
    if (!supabase || !session) { setIsAdmin(null); return; }
    supabase.from("cms_admins").select("user_id").eq("user_id", session.user.id).maybeSingle()
      .then(({ data }) => setIsAdmin(Boolean(data)));
  }, [session, supabase]);

  const loadDocument = useCallback(async () => {
    if (!supabase || !session || !isAdmin) return;
    setLoading(true); setNotice("");
    const fallbackResponse = await fetch(`/api/cms/defaults?pageKey=${encodeURIComponent(pageKey)}&locale=${editingLocale}`);
    const fallback = (await fallbackResponse.json()) as DefaultResponse;
    setPages(fallback.pages);
    const [{ data: draft }, { data: published }, { data: mediaRows }] = await Promise.all([
      supabase.from("cms_drafts").select("document").eq("page_key", pageKey).eq("locale", editingLocale).maybeSingle(),
      supabase.from("cms_pages").select("document").eq("page_key", pageKey).eq("locale", editingLocale).maybeSingle(),
      supabase.from("cms_media").select("id,public_id,resource_type,secure_url,width,height,duration,created_at").order("created_at", { ascending: false }).limit(24),
    ]);
    const savedDocument = (draft?.document ?? published?.document) as JsonValue | undefined;
    setDocument(mergeEditorValues(fallback.document as unknown as JsonValue, savedDocument) as EditableDocument);
    setMediaLibrary((mediaRows ?? []) as MediaRow[]);
    setLoading(false);
  }, [editingLocale, isAdmin, pageKey, session, supabase]);

  useEffect(() => { void loadDocument(); }, [loadDocument]);

  const saveDraft = async () => {
    if (!supabase || !session || !document) return false;
    setSaving(true); setNotice("");
    const { error } = await supabase.from("cms_drafts").upsert({
      page_key: pageKey, locale: editingLocale, document, updated_by: session.user.id,
    }, { onConflict: "page_key,locale" });
    setSaving(false);
    setNotice(error ? error.message : isAr ? "تم حفظ المسودة" : "Draft saved");
    return !error;
  };

  const publish = async () => {
    if (!supabase) return;
    const saved = await saveDraft();
    if (!saved) return;
    setSaving(true);
    const { error } = await supabase.rpc("publish_cms_page", { p_page_key: pageKey, p_locale: editingLocale });
    if (!error) {
      await fetch("/api/cms/revalidate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.access_token ?? ""}`,
        },
        body: JSON.stringify({ pageKey, locale: editingLocale }),
      });
    }
    setSaving(false);
    setNotice(error ? error.message : isAr ? "تم النشر على الموقع" : "Published to website");
  };

  const upload = async (file: File, path: (string | number)[]) => {
    if (!supabase || !session || !document) return;
    setUploadingPath(path.join(".")); setNotice("");
    try {
      const signatureResponse = await fetch("/api/cloudinary/sign", { method: "POST", headers: { Authorization: `Bearer ${session.access_token}` } });
      const signatureData = await signatureResponse.json();
      if (!signatureResponse.ok) throw new Error(signatureData.error ?? "Upload authorization failed");
      const form = new FormData();
      form.set("file", file); form.set("api_key", signatureData.apiKey); form.set("timestamp", String(signatureData.timestamp)); form.set("signature", signatureData.signature); form.set("folder", signatureData.folder);
      const response = await fetch(`https://api.cloudinary.com/v1_1/${signatureData.cloudName}/auto/upload`, { method: "POST", body: form });
      const asset = await response.json();
      if (!response.ok) throw new Error(asset.error?.message ?? "Cloudinary upload failed");
      setDocument(setAtPath(document as unknown as JsonValue, path, asset.secure_url) as EditableDocument);
      await supabase.from("cms_media").insert({ public_id: asset.public_id, resource_type: asset.resource_type, secure_url: asset.secure_url, format: asset.format, width: asset.width ?? null, height: asset.height ?? null, duration: asset.duration ?? null, bytes: asset.bytes ?? null, uploaded_by: session.user.id });
      setMediaLibrary((current) => [{ id: asset.asset_id ?? asset.public_id, public_id: asset.public_id, resource_type: asset.resource_type, secure_url: asset.secure_url, width: asset.width ?? null, height: asset.height ?? null, duration: asset.duration ?? null, created_at: new Date().toISOString() }, ...current]);
      setNotice(isAr ? "تم الرفع. احفظ المسودة ثم انشر." : "Uploaded. Save the draft, then publish.");
    } catch (error) {
      setNotice(error instanceof Error ? error.message : "Upload failed");
    } finally { setUploadingPath(null); }
  };

  const initializeMissingPages = async () => {
    if (!supabase || !session || pages.length === 0) return;
    setInitializing(true); setNotice("");
    try {
      const combinations = pages.flatMap((page) => (["en", "ar"] as Locale[]).map((itemLocale) => ({ page, itemLocale })));
      const defaults = await Promise.all(combinations.map(async ({ page, itemLocale }) => {
        const response = await fetch(`/api/cms/defaults?pageKey=${encodeURIComponent(page.key)}&locale=${itemLocale}`);
        if (!response.ok) throw new Error(`Could not load ${page.key}/${itemLocale}`);
        const data = (await response.json()) as DefaultResponse;
        return { page_key: page.key, locale: itemLocale, document: data.document, updated_by: session.user.id };
      }));
      const { error } = await supabase.from("cms_drafts").upsert(defaults, { onConflict: "page_key,locale", ignoreDuplicates: true });
      if (error) throw error;
      setNotice(isAr ? "تم إنشاء المسودات الناقصة لكل الصفحات واللغات." : "Missing drafts created for every page and locale.");
      await loadDocument();
    } catch (error) {
      setNotice(error instanceof Error ? error.message : "Initialization failed");
    } finally {
      setInitializing(false);
    }
  };

  if (!configured) return <main className="min-h-screen bg-[#080d20] p-8 text-white"><div className="mx-auto max-w-2xl border border-amber-400/30 bg-amber-400/10 p-6"><h1 className="text-2xl font-black">CMS setup required</h1><p className="mt-3 text-sm leading-7 text-white/70">Add the Supabase and Cloudinary variables from <code>.env.example</code>, then restart the development server.</p></div></main>;
  if (loading && !session) return <main className="flex min-h-screen items-center justify-center bg-[#080d20] text-[#43becc]"><LoaderCircle className="animate-spin" /></main>;
  if (!supabase || !session) return supabase ? <LoginForm supabase={supabase} locale={locale} /> : null;
  if (isAdmin === null) return <main className="flex min-h-screen items-center justify-center bg-[#080d20] text-[#43becc]"><LoaderCircle className="animate-spin" /></main>;
  if (!isAdmin) return <main className="flex min-h-screen items-center justify-center bg-[#080d20] p-5 text-white"><div className="w-full max-w-lg border border-red-300/25 bg-red-400/10 p-6"><h1 className="text-2xl font-black">Administrator access required</h1><p className="mt-3 text-sm text-white/60">This account is signed in but is not listed in <code>cms_admins</code>.</p><button onClick={() => supabase.auth.signOut()} className="mt-5 h-10 border border-white/20 px-4 text-xs font-black uppercase">Sign out</button></div></main>;

  return (
    <main dir={isAr ? "rtl" : "ltr"} className="min-h-screen bg-[#080d20] text-white">
      <header className="sticky top-0 z-30 flex min-h-16 items-center justify-between gap-4 border-b border-white/10 bg-[#080d20]/95 px-5 backdrop-blur-xl md:px-8">
        <div><p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#43becc]">DYNATECH CMS</p><h1 className="text-lg font-black">{isAr ? "إدارة محتوى الموقع" : "Website Content"}</h1></div>
        <div className="flex items-center gap-2">
          <button type="button" disabled={initializing || pages.length === 0} onClick={initializeMissingPages} className="hidden h-10 items-center gap-2 border border-white/10 px-3 text-xs font-bold hover:border-[#43becc] disabled:opacity-40 sm:flex" title="Create only missing drafts from the current website"><DatabaseZap size={16} /> {initializing ? (isAr ? "جارٍ التجهيز" : "Initializing") : (isAr ? "تهيئة الصفحات" : "Initialize CMS")}</button>
          <Link href={`/${editingLocale}`} target="_blank" className="flex h-10 items-center gap-2 border border-white/10 px-3 text-xs font-bold hover:border-[#43becc]"><Eye size={16} /> {isAr ? "معاينة" : "Preview"}</Link>
          <button onClick={() => supabase.auth.signOut()} title="Sign out" className="flex h-10 w-10 items-center justify-center border border-white/10 hover:border-red-300 hover:text-red-300"><LogOut size={16} /></button>
        </div>
      </header>

      <div className="mx-auto grid max-w-[1600px] md:grid-cols-[260px_minmax(0,1fr)]">
        <aside className="border-b border-white/10 p-4 md:min-h-[calc(100vh-4rem)] md:border-b-0 md:border-e">
          <p className="mb-3 px-2 text-[10px] font-black uppercase tracking-[0.24em] text-white/40">Pages</p>
          <nav className="grid grid-cols-2 gap-1 md:grid-cols-1">
            {pages.map((page) => <button key={page.key} onClick={() => setPageKey(page.key)} className={`flex min-h-10 items-center justify-between px-3 text-start text-xs font-bold transition ${pageKey === page.key ? "bg-[#0087cb] text-black" : "text-white/65 hover:bg-white/5 hover:text-white"}`}><span>{isAr ? page.labelAr : page.label}</span><ChevronRight size={14} /></button>)}
          </nav>
        </aside>

        <section className="min-w-0 p-4 md:p-8">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3"><FileText className="text-[#43becc]" /><div><p className="text-2xl font-black uppercase">{pages.find((page) => page.key === pageKey)?.label ?? pageKey}</p><p className="text-xs text-white/45">{pageKey}</p></div></div>
            <div className="flex rounded-sm border border-white/10 bg-[#111936] p-1">{(["en", "ar"] as Locale[]).map((item) => <button key={item} onClick={() => setEditingLocale(item)} className={`h-8 min-w-12 px-3 text-xs font-black uppercase ${editingLocale === item ? "bg-white text-black" : "text-white/55"}`}>{item}</button>)}</div>
          </div>

          {loading || !document ? <div className="flex min-h-80 items-center justify-center"><LoaderCircle className="animate-spin text-[#43becc]" /></div> : (
            <div className="space-y-5">
              <details open className="border border-white/10 bg-[#111936] p-5 md:p-7"><summary className="cursor-pointer text-sm font-black uppercase tracking-[0.18em] text-[#43becc]">Content</summary><div className="mt-6"><ContentEditor value={document.content} path={["content"]} onChange={(path, next) => setDocument(setAtPath(document as unknown as JsonValue, path, next) as EditableDocument)} onUpload={upload} uploadingPath={uploadingPath} /></div></details>
              <details open className="border border-white/10 bg-[#111936] p-5 md:p-7"><summary className="cursor-pointer text-sm font-black uppercase tracking-[0.18em] text-[#43becc]">Media</summary><p className="mt-2 text-xs leading-6 text-white/45">Upload images and videos to Cloudinary or paste an existing URL.</p><div className="mt-6"><ContentEditor value={document.media} path={["media"]} onChange={(path, next) => setDocument(setAtPath(document as unknown as JsonValue, path, next) as EditableDocument)} onUpload={upload} uploadingPath={uploadingPath} /></div></details>
              <details className="border border-white/10 bg-[#111936] p-5 md:p-7"><summary className="cursor-pointer text-sm font-black uppercase tracking-[0.18em] text-[#43becc]">Media Library <span className="ms-2 text-white/35">{mediaLibrary.length}</span></summary><p className="mt-2 text-xs leading-6 text-white/45">Recently uploaded Cloudinary assets. Use the copy button to reuse an asset URL in another field.</p><div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{mediaLibrary.map((asset) => <article key={asset.id} className="overflow-hidden border border-white/10 bg-[#080d20]"><div className="relative aspect-video bg-black">{asset.resource_type === "image" ? <Image src={asset.secure_url} alt="" fill sizes="(min-width:1280px) 20vw, (min-width:640px) 40vw, 100vw" className="object-contain" /> : asset.resource_type === "video" ? <video src={asset.secure_url} className="h-full w-full object-contain" muted controls preload="metadata" /> : <div className="flex h-full items-center justify-center"><FileText className="text-white/30" /></div>}</div><div className="flex items-center gap-2 p-3"><p className="min-w-0 flex-1 truncate text-[10px] text-white/55" title={asset.public_id}>{asset.public_id}</p><button type="button" title="Copy URL" onClick={async () => { await navigator.clipboard.writeText(asset.secure_url); setNotice(isAr ? "تم نسخ رابط الملف" : "Media URL copied"); }} className="flex h-8 w-8 shrink-0 items-center justify-center border border-white/10 hover:border-[#43becc] hover:text-[#43becc]"><Copy size={14} /></button></div></article>)}</div></details>
            </div>
          )}

          <div className="sticky bottom-4 mt-6 flex flex-wrap items-center justify-between gap-3 border border-white/10 bg-[#080d20]/95 p-3 shadow-2xl backdrop-blur-xl">
            <p className="min-h-5 text-xs text-[#43becc]">{notice}</p>
            <div className="flex gap-2"><button disabled={saving || !document} onClick={saveDraft} className="flex h-10 items-center gap-2 border border-white/15 px-4 text-xs font-black uppercase hover:border-white disabled:opacity-50">{saving ? <LoaderCircle size={15} className="animate-spin" /> : <Save size={15} />} {isAr ? "حفظ مسودة" : "Save Draft"}</button><button disabled={saving || !document} onClick={publish} className="flex h-10 items-center gap-2 bg-[#0087cb] px-4 text-xs font-black uppercase text-black hover:bg-[#43becc] disabled:opacity-50"><Check size={16} /> {isAr ? "نشر" : "Publish"}</button></div>
          </div>
        </section>
      </div>
    </main>
  );
}
