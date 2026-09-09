import type { Locale } from "@/i18n/config";
import type { PartnerPageCopy } from "@/content/schema/site";

export function getPartnerPageCopy(partnerId: "fft" | "cu", locale: Locale): PartnerPageCopy {
  const isAr = locale === "ar";
  const common = {
    backLabel: isAr ? "الشركاء" : "Partners",
    mediaSection: {
      kicker: isAr ? "مكتبة الفيديو" : "Video Library",
      title: partnerId === "fft"
        ? (isAr ? "تقنيات وحلول FFT" : "FFT Technologies And Solutions")
        : (isAr ? "فيديوهات Composites United" : "Composites United Videos"),
      ctaLabel: isAr ? "اعرف المزيد" : "Know more",
      videoBadge: isAr ? "فيديو" : "Video",
      imageBadge: isAr ? "صورة" : "Image",
      featuredLabel: isAr ? "مميزة" : "Featured",
    },
  };

  if (partnerId === "fft") {
    return {
      ...common,
      hero: {
        eyebrow: isAr ? "أنظمة إنتاج FFT" : "FFT production systems",
        title: isAr ? "خطوة للأمام في الإنتاج الذكي" : "one step ahead in INTELLIGENT production",
        paragraphs: [isAr ? "نحن خبراء تحسين الإنتاج" : "We Are Production Optimizers"],
        href: "https://www.fft.de/en/",
        ctaLabel: isAr ? "اعرف المزيد" : "Know more",
      },
      gallery: [
        { label: isAr ? "FFT في دقيقتين" : "FFT Services At A Glance In 2 Minutes", type: "video", featured: true },
        { label: isAr ? "هندسة مصانع FFT" : "FFT Plant Engineering", type: "video" },
        { label: isAr ? "تقنيات الإنتاج المرنة من FFT" : "FFT's Flexible Production Technologies", type: "video" },
        { label: isAr ? "قصة FFT مترجمة بالعربية" : "FFT Story Translated Into Arabic", type: "video" },
      ],
    };
  }

  return {
    ...common,
    hero: {
      eyebrow: isAr ? "شبكة Composites United" : "Composites United Network",
      title: "Composites United e. V. (CU)",
      paragraphs: [isAr
        ? "تعد Composites United e. V. شبكة من الشركات والمؤسسات البحثية تغطي، من خلال تجمعاتها وشبكاتها في ألمانيا والنمسا وسويسرا، سلسلة القيمة الكاملة للإنشاءات خفيفة الوزن متعددة المواد القائمة على الألياف."
        : "Composites United e. V. is a network of companies and research institutions that covers the entire value chain for fiber-based multi-material lightweight construction with its clusters and networks in Germany, Austria, and Switzerland."],
      href: "https://composites-united.com/en/",
      ctaLabel: isAr ? "اعرف المزيد" : "Know more",
    },
    gallery: [
      { label: isAr ? "كلمة م. أحمد سرور في Hannover Messe" : "Eng. Ahmed Sorour's Speech at Hannover Messe", type: "video", featured: true },
      { label: isAr ? "فيديو الكربون مترجم بالعربية" : "Carbon Video Translated Into Arabic", type: "video" },
    ],
  };
}
