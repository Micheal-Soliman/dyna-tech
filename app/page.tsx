import { redirect } from "next/navigation";
import { cookies, headers } from "next/headers";

import { defaultLocale, locales, type Locale } from "@/i18n/config";

function getPreferredLocale(acceptLanguage: string): Locale {
  const lower = acceptLanguage.toLowerCase();
  if (lower.includes("ar")) return "ar";
  if (lower.includes("en")) return "en";
  return defaultLocale;
}

export default async function Home() {
  const headerStore = await headers();
  const cookieStore = await cookies();

  const cookieLocale = cookieStore.get("locale")?.value;
  const locale = locales.includes(cookieLocale as Locale)
    ? (cookieLocale as Locale)
    : getPreferredLocale(headerStore.get("accept-language") ?? "");

  redirect(`/${locale}`);
}
