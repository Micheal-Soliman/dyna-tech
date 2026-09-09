import type { Locale } from "@/i18n/config";

export type JsonPrimitive = string | number | boolean | null;
export type JsonValue = JsonPrimitive | JsonValue[] | { [key: string]: JsonValue };

export type CmsMediaMap = Record<string, string | string[]>;

export type CmsDocument<T> = {
  content: T;
  media: CmsMediaMap;
};

export type CmsPageDefinition = {
  key: string;
  label: string;
  labelAr: string;
};

export type CmsPageRow = {
  page_key: string;
  locale: Locale;
  document: JsonValue;
  updated_at: string;
  published_at?: string | null;
};

