"use client";

import { ArrowDown, ArrowUp, CloudUpload, Copy, LoaderCircle, Plus, Trash2 } from "lucide-react";

import type { JsonValue } from "@/lib/cms/types";

function labelFromKey(key: string) {
  return key
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/[_-]/g, " ")
    .replace(/^./, (letter) => letter.toUpperCase());
}

function isMediaPath(path: (string | number)[]) {
  if (path[0] === "media") return true;
  const key = String(path.at(-1) ?? "").toLowerCase();
  return key === "src" ||
    /(^|_)(image|video|poster|logo|thumbnail)(src|url)?$/.test(key) ||
    /(image|video|poster|logo|thumbnail)(src|url)?$/.test(key);
}

export function ContentEditor({
  value,
  path = [],
  onChange,
  onUpload,
  uploadingPath,
}: {
  value: JsonValue;
  path?: (string | number)[];
  onChange: (path: (string | number)[], value: JsonValue) => void;
  onUpload: (file: File, path: (string | number)[]) => void;
  uploadingPath: string | null;
}) {
  if (Array.isArray(value)) {
    const simple = value.every((item) => typeof item !== "object" || item === null);
    if (simple) {
      if (isMediaPath(path)) {
        return (
          <div className="space-y-2">
            {value.map((item, index) => (
              <div key={index} className="flex items-start gap-2">
                <div className="min-w-0 flex-1"><ContentEditor value={item} path={[...path, index]} onChange={onChange} onUpload={onUpload} uploadingPath={uploadingPath} /></div>
                <button type="button" title="Remove" onClick={() => onChange(path, value.filter((_, itemIndex) => itemIndex !== index))} className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/10 text-white/50 hover:border-red-300 hover:text-red-300"><Trash2 size={15} /></button>
              </div>
            ))}
            <button type="button" onClick={() => onChange(path, [...value, ""])} className="inline-flex h-9 items-center gap-2 border border-dashed border-white/20 px-3 text-[10px] font-black uppercase tracking-wider text-white/60 hover:border-[#43becc] hover:text-[#43becc]"><Plus size={14} /> Add media</button>
          </div>
        );
      }
      return (
        <textarea
          value={value.map(String).join("\n")}
          onChange={(event) => onChange(path, event.target.value.split("\n"))}
          rows={Math.min(10, Math.max(3, value.length + 1))}
          className="w-full resize-y border border-white/10 bg-[#080d20] px-3 py-2 text-sm leading-6 text-white outline-none focus:border-[#43becc]"
        />
      );
    }
    return (
      <div className="space-y-3">
        {value.map((item, index) => (
          <details key={index} open className="border border-white/10 bg-black/15 p-3">
            <summary className="cursor-pointer text-xs font-black uppercase tracking-wider text-[#43becc]">Item {index + 1}</summary>
            <div className="mt-3 flex justify-end gap-1">
              <button type="button" title="Move up" disabled={index === 0} onClick={() => { const next = [...value]; [next[index - 1], next[index]] = [next[index], next[index - 1]]; onChange(path, next); }} className="flex h-8 w-8 items-center justify-center border border-white/10 disabled:opacity-25"><ArrowUp size={14} /></button>
              <button type="button" title="Move down" disabled={index === value.length - 1} onClick={() => { const next = [...value]; [next[index], next[index + 1]] = [next[index + 1], next[index]]; onChange(path, next); }} className="flex h-8 w-8 items-center justify-center border border-white/10 disabled:opacity-25"><ArrowDown size={14} /></button>
              <button type="button" title="Duplicate" onClick={() => { const clone = JSON.parse(JSON.stringify(item)) as JsonValue; onChange(path, [...value.slice(0, index + 1), clone, ...value.slice(index + 1)]); }} className="flex h-8 w-8 items-center justify-center border border-white/10 hover:text-[#43becc]"><Copy size={14} /></button>
              <button type="button" title="Remove" onClick={() => onChange(path, value.filter((_, itemIndex) => itemIndex !== index))} className="flex h-8 w-8 items-center justify-center border border-white/10 hover:border-red-300 hover:text-red-300"><Trash2 size={14} /></button>
            </div>
            <div className="mt-3">
              <ContentEditor value={item} path={[...path, index]} onChange={onChange} onUpload={onUpload} uploadingPath={uploadingPath} />
            </div>
          </details>
        ))}
        {value.length > 0 ? <button type="button" onClick={() => { const clone = JSON.parse(JSON.stringify(value[value.length - 1])) as JsonValue; onChange(path, [...value, clone]); }} className="inline-flex h-9 items-center gap-2 border border-dashed border-white/20 px-3 text-[10px] font-black uppercase tracking-wider text-white/60 hover:border-[#43becc] hover:text-[#43becc]"><Plus size={14} /> Add item</button> : null}
      </div>
    );
  }

  if (value && typeof value === "object") {
    return (
      <div className="space-y-4">
        {Object.entries(value).map(([key, item]) => (
          <div key={key} className="grid gap-2">
            <label className="text-[11px] font-black uppercase tracking-[0.14em] text-white/65">
              {labelFromKey(key)}
            </label>
            <ContentEditor value={item} path={[...path, key]} onChange={onChange} onUpload={onUpload} uploadingPath={uploadingPath} />
          </div>
        ))}
      </div>
    );
  }

  if (typeof value === "boolean") {
    return (
      <label className="flex items-center gap-3 text-sm text-white">
        <input type="checkbox" checked={value} onChange={(event) => onChange(path, event.target.checked)} />
        Enabled
      </label>
    );
  }

  if (typeof value === "number") {
    return (
      <input type="number" value={value} onChange={(event) => onChange(path, Number(event.target.value))} className="h-10 border border-white/10 bg-[#080d20] px-3 text-sm text-white outline-none focus:border-[#43becc]" />
    );
  }

  const stringValue = value === null ? "" : String(value);
  const longText = stringValue.length > 90;
  const field = longText ? (
    <textarea value={stringValue} onChange={(event) => onChange(path, event.target.value)} rows={Math.min(9, Math.max(3, Math.ceil(stringValue.length / 90)))} className="w-full resize-y border border-white/10 bg-[#080d20] px-3 py-2 text-sm leading-6 text-white outline-none focus:border-[#43becc]" />
  ) : (
    <input value={stringValue} onChange={(event) => onChange(path, event.target.value)} className="h-10 w-full border border-white/10 bg-[#080d20] px-3 text-sm text-white outline-none focus:border-[#43becc]" />
  );

  if (!isMediaPath(path)) return field;
  const pathId = path.join(".");
  return (
    <div className="flex items-start gap-2">
      <div className="min-w-0 flex-1">{field}</div>
      <label className="flex h-10 shrink-0 cursor-pointer items-center gap-2 bg-[#0087cb] px-3 text-[10px] font-black uppercase tracking-wider text-black hover:bg-[#43becc]">
        {uploadingPath === pathId ? <LoaderCircle size={15} className="animate-spin" /> : <CloudUpload size={15} />}
        Upload
        <input type="file" accept="image/*,video/*" className="hidden" disabled={Boolean(uploadingPath)} onChange={(event) => {
          const file = event.target.files?.[0];
          if (file) onUpload(file, path);
          event.target.value = "";
        }} />
      </label>
    </div>
  );
}

