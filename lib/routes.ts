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
  { label: "Home", labelAr: "الرئيسية", path: siteRoutes.home },
  { label: "About Us", labelAr: "من نحن", path: siteRoutes.about },
  { label: "Technology Partners", labelAr: "شركاء التكنولوجيا", path: siteRoutes.partners },
  { label: "Auto Hub Project", labelAr: "مشروع مركز السيارات", path: siteRoutes.autoHub },
  { label: "Tech Info", labelAr: "معلومات تقنية", path: siteRoutes.techInfo },
  { label: "Careers", labelAr: "الوظائف", path: siteRoutes.careers },
] as const;

export function localizedPath(locale: Locale, path: string) {
  return `/${locale}${path}`;
}
