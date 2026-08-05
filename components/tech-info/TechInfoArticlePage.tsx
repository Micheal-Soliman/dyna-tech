import { 
  ArrowLeft,
  Clock, User,
  ChevronRight, ArrowRight
} from "lucide-react";
import Link from "next/link";

import type { Locale } from "@/i18n/config";

// Article data map with full content
const ARTICLES: Record<string, { 
  title: string; 
  subtitle: string; 
  date: string;
  author: string;
  category: string;
  categoryColor: string;
  reportId: string; 
  readTime: string;
  excerpt: string;
  sourceUrl?: string;
  highlights?: string[];
} > = {
  "tech-info-fft-dynatech-egypt": {
    title: "FFT Enters the Egyptian Market:",
    subtitle: "Strategic partnership with DYNATECH",
    date: "March 26, 2024",
    author: "Al-Ahram Auto",
    category: "Tech Info",
    categoryColor: "#0087cb",
    reportId: "112235",
    readTime: "4_Min_Read",
    excerpt: "Al-Ahram Auto covers the strategic partnership between DYNATECH Corporation Egypt and Germany's FFT in production and manufacturing systems.",
    sourceUrl: "https://auto.ahram.org.eg/News/112235.aspx",
    highlights: [
      "DYNATECH Corporation Egypt and FFT announced a strategic partnership in Fulda, Germany.",
      "The partnership focuses on automotive assembly lines, component production, advanced manufacturing, EV battery assembly, e-mobility, welding, laser technologies, and lightweight materials.",
      "FFT brings nearly 50 years of production systems experience, with a global footprint across Europe, Asia, and Latin America.",
      "The article highlights FFT technologies including FFTplace, FFT BestFit, FFTpicAI, production conveyors, and autonomous IGV solutions.",
      "DYNATECH is positioned as a bridge for advanced manufacturing systems, energy storage, and lightweight component technologies in Egypt and the region."
    ]
  }
};

const ARTICLES_AR: typeof ARTICLES = {
  "tech-info-fft-dynatech-egypt": {
    title: "FFT تدخل السوق المصري:",
    subtitle: "شراكة استراتيجية مع DYNATECH",
    date: "26 مارس 2024",
    author: "الأهرام أوتو",
    category: "معلومات تقنية",
    categoryColor: "#0087cb",
    reportId: "112235",
    readTime: "4 دقائق قراءة",
    excerpt: "يستعرض الأهرام أوتو الشراكة الاستراتيجية بين DYNATECH Corporation Egypt وشركة FFT الألمانية في أنظمة الإنتاج والتصنيع.",
    sourceUrl: "https://auto.ahram.org.eg/News/112235.aspx",
    highlights: [
      "أعلنت DYNATECH Corporation Egypt وFFT عن شراكة استراتيجية في مدينة فولدا الألمانية.",
      "تركز الشراكة على خطوط تجميع السيارات وإنتاج المكونات والتصنيع المتقدم وتجميع بطاريات المركبات الكهربائية والتنقل الكهربائي وتقنيات اللحام والليزر والمواد خفيفة الوزن.",
      "تتمتع FFT بخبرة تقارب 50 عاما في أنظمة الإنتاج، وبحضور عالمي يمتد عبر أوروبا وآسيا وأمريكا اللاتينية.",
      "يسلط المقال الضوء على تقنيات FFT، ومنها FFTplace وFFT BestFit وFFTpicAI وناقلات الإنتاج وحلول IGV ذاتية التشغيل.",
      "تعمل DYNATECH كحلقة وصل لإتاحة أنظمة التصنيع المتقدمة وتخزين الطاقة وتقنيات المكونات خفيفة الوزن في مصر والمنطقة.",
    ],
  },
};

export const techInfoArticleSlugs = Object.keys(ARTICLES);

type TechInfoArticlePageProps = {
  locale: Locale;
  slug: string;
};

export default function TechInfoArticlePage({ locale, slug }: TechInfoArticlePageProps) {
  const isAr = locale === "ar";
  const knowledgeHref = `/${locale}/tech-info`;
  const partnersHref = `/${locale}/technology-partners`;
  const article = (isAr ? ARTICLES_AR : ARTICLES)[slug];
  const ui = isAr
    ? {
        section: "معلومات تقنية", notFound: "المقال غير موجود", back: "العودة إلى المعلومات التقنية",
        archives: "العودة إلى الأرشيف", report: "تقرير", publisher: "الناشر الأصلي",
        metadata: "بيانات المستند", status: "الحالة", verified: "موثّق", published: "تاريخ النشر",
        author: "الناشر", category: "التصنيف", tags: "وسوم ذات صلة", manufacturing: "التصنيع",
        mobility: "التنقل الكهربائي", intro: "يلخص هذا المحتوى التقني تقرير الأهرام أوتو المنشور عن دخول FFT إلى السوق المصري من خلال شراكتها الاستراتيجية مع DYNATECH.",
        point: "النقطة", original: "فتح المقال الأصلي", discuss: "هل ترغب في مناقشة الموضوع؟",
        discussText: "تواصل مع فريقنا الهندسي للحصول على معلومات أعمق أو لمناقشة فرص الشراكة.",
        explore: "استكشف الشركاء", continueReading: "تابع القراءة", viewAll: "عرض الكل", archiveCard: "العودة إلى أرشيف المعلومات التقنية",
      }
    : {
        section: "Tech Info", notFound: "Article Not Found", back: "Back To Tech Info",
        archives: "Back to Archives", report: "Report", publisher: "Original Publisher",
        metadata: "Document Metadata", status: "Status", verified: "Verified", published: "Published",
        author: "Author", category: "Category", tags: "Related Tags", manufacturing: "Manufacturing",
        mobility: "E-Mobility", intro: "This Tech Info entry summarizes the published Al-Ahram Auto feature about FFT's entry into the Egyptian market through its strategic partnership with DYNATECH.",
        point: "Point", original: "Open Original Article", discuss: "Discuss This Topic?",
        discussText: "Connect with our engineering team for deeper insights or partnership inquiries.",
        explore: "Explore Partners", continueReading: "Continue Reading", viewAll: "View All", archiveCard: "Back to Tech Info archive",
      };

  if (!article) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0a0f29] px-6 text-center text-white">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.32em] text-[#0087cb]">
            {ui.section}
          </p>
          <h1 className="mt-4 text-4xl font-black uppercase tracking-tight">
            {ui.notFound}
          </h1>
          <Link
            href={knowledgeHref}
            className="mt-8 inline-flex bg-[#006db1] px-6 py-4 text-[10px] font-black uppercase tracking-[0.26em] text-black"
          >
            {ui.back}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div dir={isAr ? "rtl" : "ltr"} lang={locale} className={`bg-[#0a0f29] text-zinc-300 selection:bg-[#006db1] selection:text-black min-h-screen pb-24 ${isAr ? "" : "font-mono"}`}>
      
      {/* --- 1. TOP NAVIGATION --- */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/5 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href={knowledgeHref} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-500 hover:text-[#006db1] transition-colors">
            <ArrowLeft size={14} /> {ui.archives}
          </Link>
        </div>
      </nav>

      {/* --- ARTICLE HERO - Editorial Style --- */}
      <header className="pt-28 pb-20 px-6 md:px-16 lg:px-32 border-b-2 border-white/5 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          {/* Top Meta Bar */}
          <div className="flex flex-wrap items-center gap-6 mb-8 pb-6 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span 
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: article.categoryColor }}
              />
              <span 
                className="text-[10px] font-black uppercase tracking-widest"
                style={{ color: article.categoryColor }}
              >
                {article.category}
              </span>
            </div>
            
            <div className="h-4 w-px bg-white/10" />
            
            <span className="text-[9px] font-black uppercase tracking-widest text-zinc-500">
              {article.date}
            </span>
            
            <div className="h-4 w-px bg-white/10" />
            
            <span className="text-[9px] font-black uppercase tracking-widest text-zinc-500 flex items-center gap-2">
              <Clock size={11} /> {article.readTime}
            </span>
            
            <div className="h-4 w-px bg-white/10" />
            
            <span className="text-[9px] font-black uppercase tracking-widest text-zinc-600">
              {ui.report} #{article.reportId}
            </span>
          </div>

          {/* Title Stack */}
          <div className="space-y-4 mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-[1000] italic text-white uppercase tracking-tighter leading-[0.95]">
              {article.title}
            </h1>
            <p className="text-xl md:text-2xl font-light italic text-[#006db1] tracking-tight">
              {article.subtitle}
            </p>
          </div>

          {/* Author & Excerpt Row */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            {/* Author Card */}
            <div className="flex items-center gap-4 p-4 bg-[#121b43]/60 border border-white/5 min-w-fit">
              <div className="w-12 h-12 bg-[#006db1] rounded-full flex items-center justify-center">
                <User size={20} className="text-black" />
              </div>
              <div>
                <p className="text-[10px] font-black text-white uppercase tracking-widest">{article.author}</p>
                <p className="text-[9px] text-zinc-500 font-black uppercase tracking-widest mt-1">
                  {ui.publisher}
                </p>
              </div>
            </div>
            
            {/* Excerpt */}
            <p className={`text-lg text-zinc-400 italic font-light leading-relaxed ${isAr ? "border-r-2 border-[#006db1]/30 pr-6" : "border-l-2 border-[#006db1]/30 pl-6"}`}>
              {article.excerpt}
            </p>
          </div>
        </div>
      </header>

      {/* --- 3. MAIN CONTENT AREA --- */}
      <main className="max-w-7xl mx-auto px-6 md:px-16 mt-16 grid lg:grid-cols-12 gap-16">
        
        {/* LEFT SIDEBAR: TECH SPECS */}
        <aside className="lg:col-span-3 space-y-12 order-2 lg:order-1">
          <div className="p-6 border border-white/5 bg-[#121b43]/75 space-y-6">
            <h4 className="text-[10px] font-black text-[#006db1] uppercase tracking-[0.3em] border-b border-white/5 pb-4">{ui.metadata}</h4>
            
            <div className="space-y-4">
              {[
                { label: ui.status, value: ui.verified, color: "text-green-500" },
                { label: ui.published, value: article.date, color: "text-white" },
                { label: ui.author, value: article.author, color: "text-white" },
                { label: ui.category, value: article.category, color: "text-[#006db1]" },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center text-[10px]">
                  <span className="text-zinc-600 font-bold uppercase">{item.label}:</span>
                  <span className={`${item.color} font-black`}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-[10px] font-black text-white uppercase tracking-[0.3em]">{ui.tags}</h4>
            <div className="flex flex-wrap gap-2">
              {["FFT", "DYNATECH", ui.manufacturing, ui.mobility].map(tag => (
                <span key={tag} className="px-2 py-1 bg-zinc-900 text-zinc-500 text-[8px] font-black uppercase hover:text-[#006db1] cursor-pointer transition-colors">#{tag}</span>
              ))}
            </div>
          </div>
        </aside>

        {/* CENTER: ARTICLE BODY */}
        <article className="lg:col-span-9 order-1 lg:order-2 space-y-12">
          
          <section className="prose prose-invert max-w-none">
            <p className="text-lg leading-relaxed text-zinc-400">
              {ui.intro}
            </p>

            <div className="my-12 grid gap-4 md:grid-cols-2">
              {article.highlights?.map((highlight, index) => (
                <div key={highlight} className="border border-white/10 bg-[#121b43] p-6">
                  <p className="mb-4 text-[10px] font-black uppercase tracking-[0.28em] text-[#006db1]">
                    {ui.point}_{String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="text-base font-semibold leading-relaxed text-zinc-300">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>

            {article.sourceUrl ? (
              <a
                href={article.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 bg-[#006db1] px-8 py-4 text-[10px] font-black uppercase tracking-[0.3em] text-black no-underline transition-colors hover:bg-white"
              >
                {ui.original} <ArrowRight size={16} />
              </a>
            ) : null}
          </section>

          {/* CTA / CONTACT */}
          <div className="p-12 bg-[#121b43] border-2 border-[#006db1]">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
              <div className="space-y-2">
                <h4 className="text-2xl font-[1000] uppercase tracking-tighter italic text-white">{ui.discuss}</h4>
                <p className="text-sm font-bold uppercase tracking-wide text-zinc-500">
                  {ui.discussText}
                </p>
              </div>
              <Link 
                href={partnersHref}
                className="flex items-center gap-4 bg-[#006db1] text-black px-8 py-4 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-white transition-colors"
              >
                {ui.explore} <ArrowRight size={16} />
              </Link>
            </div>
          </div>

        </article>
      </main>

      {/* --- 4. FOOTER: RELATED ARTICLES --- */}
      <footer className="mt-32 px-6 md:px-16 border-t border-white/5 pt-24">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex justify-between items-end">
            <h5 className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-600 italic">{ui.continueReading}</h5>
            <Link href={knowledgeHref} className="text-[9px] font-black uppercase tracking-widest text-[#006db1] flex items-center gap-2">{ui.viewAll} <ChevronRight size={14}/></Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-1">
            <Link
              href={knowledgeHref}
              className="block p-8 bg-[#121b43]/75 border border-white/5 hover:bg-[#0f1738] transition-all group"
            >
              <span className="text-[8px] font-black text-[#006db1] uppercase tracking-widest">{ui.section}</span>
              <h6 className="text-lg font-black text-white uppercase italic tracking-tighter mt-2 group-hover:underline">
                {ui.archiveCard}
              </h6>
            </Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
