import type { Locale } from "@/i18n/config";

export function getTechInfoVideoSection(locale: Locale) {
  if (locale === "ar") {
    return {
      kicker: "مكتبة الفيديو",
      title: "مراجع تقنية مختارة",
      items: [
        { title: "تقرير وكالة الطاقة الدولية عن البطاريات", description: "مرجع تقني مركز عن اتجاه سوق البطاريات عالميًا، والتنقل الكهربائي، ونمو حلول تخزين الطاقة." },
        { title: "مقابلة روبن زينج، الرئيس التنفيذي لشركة CATL", description: "رؤية تنفيذية حول ابتكار البطاريات وسلاسل الإمداد والتقنيات التي تشكل الجيل القادم من التنقل." },
      ],
    };
  }
  return {
    kicker: "Video Library",
    title: "Selected Technical References",
    items: [
      { title: "IEA Battery Report", description: "A focused technical reference on global battery market direction, electric mobility, and energy storage growth." },
      { title: "Interview With Robin Zeng, CATL CEO", description: "An executive perspective on battery innovation, supply chains, and the technologies shaping next-generation mobility." },
    ],
  };
}

