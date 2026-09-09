export const cmsPages = [
  { key: "global", label: "Global & Navigation", labelAr: "الإعدادات العامة والتنقل" },
  { key: "home", label: "Home", labelAr: "الرئيسية" },
  { key: "about-us", label: "About Us", labelAr: "من نحن" },
  { key: "technology-partners", label: "Technology Partners", labelAr: "شركاء التكنولوجيا" },
  { key: "partner-fft", label: "FFT Partner", labelAr: "شريك FFT" },
  { key: "partner-cu", label: "CU Partner", labelAr: "شريك CU" },
  { key: "the-auto-hub", label: "The Auto Hub", labelAr: "مشروع مركز السيارات" },
  { key: "tech-info", label: "Tech Info", labelAr: "المعلومات التقنية" },
  { key: "careers", label: "Careers", labelAr: "الوظائف" },
  { key: "contact", label: "Contact", labelAr: "تواصل معنا" },
  { key: "legal-disclaimer", label: "Legal Disclaimer", labelAr: "إخلاء المسؤولية" },
] as const;

export type CmsPageKey = (typeof cmsPages)[number]["key"];
