import type { Locale } from "@/i18n/config";

const dictionaries = {
  en: () => import("@/content/locales/en.json").then((m) => m.default),
  ar: () => import("@/content/locales/ar.json").then((m) => m.default),
} satisfies Record<Locale, () => Promise<unknown>>;

export async function getLocaleContent(locale: Locale) {
  return dictionaries[locale]();
}
