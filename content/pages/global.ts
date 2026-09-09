import { siteRoutes } from "@/lib/routes";

export type GlobalCmsContent = {
  navigation: { label: string; labelAr: string; path: string }[];
  contact: {
    email: string;
    phone: { display: string; href: string };
    locations: {
      cfcOffice: string;
      autoHub: string;
      cfcOfficeAr: string;
      autoHubAr: string;
    };
  };
  labels: {
    contact: string;
    contactAr: string;
    location: string;
    locationAr: string;
    quickLinks: string;
    quickLinksAr: string;
    connect: string;
    connectAr: string;
    email: string;
    emailAr: string;
    cfcOffice: string;
    cfcOfficeAr: string;
    autoHubProject: string;
    autoHubProjectAr: string;
  };
  footerSlogan: string;
  footerSloganAr: string;
  copyright: string;
  copyrightAr: string;
};

export const globalCmsContent: GlobalCmsContent = {
  navigation: [
    { label: "Home", labelAr: "الرئيسية", path: siteRoutes.home },
    { label: "About Us", labelAr: "من نحن", path: siteRoutes.about },
    { label: "Technology Partners", labelAr: "شركاء التكنولوجيا", path: siteRoutes.partners },
    { label: "Auto Hub Project", labelAr: "مشروع مركز السيارات", path: siteRoutes.autoHub },
    { label: "Tech Info", labelAr: "معلومات تقنية", path: siteRoutes.techInfo },
    { label: "Careers", labelAr: "الوظائف", path: siteRoutes.careers },
  ],
  contact: {
    email: "info@dynatech-eg.com",
    phone: { display: "+2 01010299 435", href: "tel:+201010299435" },
    locations: {
      cfcOffice: "Cairo Festival City, The Podium, P6-109, New Cairo, Egypt.",
      autoHub: "Industrial Zone, New Cairo, Egypt.",
      cfcOfficeAr: "كايرو فيستيفال سيتي، ذا بوديوم، P6-109، القاهرة الجديدة، مصر.",
      autoHubAr: "المنطقة الصناعية، القاهرة الجديدة، مصر.",
    },
  },
  labels: {
    contact: "Contact",
    contactAr: "تواصل معنا",
    location: "Location",
    locationAr: "المواقع",
    quickLinks: "Quick Links",
    quickLinksAr: "روابط سريعة",
    connect: "Connect",
    connectAr: "تواصل",
    email: "Email",
    emailAr: "البريد الإلكتروني",
    cfcOffice: "CFC Main Office",
    cfcOfficeAr: "المقر الرئيسي في CFC",
    autoHubProject: "Auto Hub Project",
    autoHubProjectAr: "مشروع مركز السيارات",
  },
  footerSlogan: "A New Driving Force In Egypt's Automotive Industry",
  footerSloganAr: "قوة دفع جديدة في صناعة السيارات في مصر",
  copyright: "ALL RIGHTS RESERVED",
  copyrightAr: "جميع الحقوق محفوظة",
};
