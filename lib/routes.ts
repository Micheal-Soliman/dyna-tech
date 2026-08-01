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

export const primaryNavigation = [
  { label: "Home", path: siteRoutes.home },
  { label: "About Us", path: siteRoutes.about },
  { label: "Technology Partners", path: siteRoutes.partners },
  { label: "Auto Hub", path: siteRoutes.autoHub },
  { label: "Tech Info", path: siteRoutes.techInfo },
  { label: "Careers", path: siteRoutes.careers },
] as const;

export function localizedPath(locale: Locale, path: string) {
  return `/${locale}${path}`;
}
