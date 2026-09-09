import type { Locale } from "@/i18n/config";

export const siteRoutes = {
  home: "",
  about: "/about-us",
  partners: "/technology-partners",
  autoHub: "/the-auto-hub",
  techInfo: "/tech-info",
  careers: "/careers",
  contact: "/contact",
  legalDisclaimer: "/legal-disclaimer",
} as const;

export function localizedPath(locale: Locale, path: string) {
  return `/${locale}${path}`;
}
