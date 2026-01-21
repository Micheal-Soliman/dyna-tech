import type { Locale } from "@/i18n/config";

const dictionaries = {
  en: () => import("@/messages/en.json").then((m) => m.default),
  ar: () => import("@/messages/ar.json").then((m) => m.default),
} satisfies Record<Locale, () => Promise<unknown>>;

export async function getDictionary(locale: Locale) {
  return dictionaries[locale]();
}
