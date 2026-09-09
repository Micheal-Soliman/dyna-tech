import type { Locale } from "@/i18n/config";
import { createPublicSupabaseClient } from "@/lib/cms/supabase";
import type { CmsDocument } from "@/lib/cms/types";

function isObject(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

export function mergeCmsValues<T>(fallback: T, value: unknown): T {
  if (Array.isArray(value)) return value as T;
  if (!isObject(fallback) || !isObject(value)) {
    return (value === undefined || value === null ? fallback : value) as T;
  }

  const merged: Record<string, unknown> = { ...fallback };
  for (const [key, nextValue] of Object.entries(value)) {
    merged[key] = key in merged
      ? mergeCmsValues(merged[key], nextValue)
      : nextValue;
  }
  return merged as T;
}

export async function getCmsDocument<T>(
  pageKey: string,
  locale: Locale,
  fallback: CmsDocument<T>,
): Promise<CmsDocument<T>> {
  const supabase = createPublicSupabaseClient();
  if (!supabase) return fallback;

  try {
    const { data, error } = await supabase
      .from("cms_pages")
      .select("document")
      .eq("page_key", pageKey)
      .eq("locale", locale)
      .maybeSingle();

    if (error || !data?.document) return fallback;
    return mergeCmsValues(fallback, data.document);
  } catch {
    return fallback;
  }
}

