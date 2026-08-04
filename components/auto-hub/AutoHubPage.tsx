"use client";

import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  BrainCircuit,
  Building2,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Factory,
  Maximize2,
  ShieldCheck,
  Wrench,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

export type AutoHubContent = {
  hero: { kicker: string; title: string; description: string };
  hub: {
    kicker: string;
    title: string;
    paragraphs: string[];
    infoTitle: string;
    statusLabel: string;
    status: string;
    locationLabel: string;
    location: string;
    figuresTitle: string;
    figures: { label: string; value: string; description: string }[];
  };
  businessUnits: {
    kicker: string;
    title: string;
    description: string;
    units: { title: string; description: string }[];
  };
  market: { kicker: string; title: string; description: string };
  timeline: { title: string; items: string[] };
  partner: { title: string; description: string; ctaLabel: string };
  closing: { title: string; description: string; ctaLabel: string };
};

type Props = { content: AutoHubContent; locale: string };
type GalleryMedia = { src: string; type: "image" | "video"; poster?: string };
type ProjectFigure = {
  label: string;
  value: string;
  description: string;
  countTo?: number;
  prefix?: string;
  suffix?: string;
};
type TeamMember = {
  name: string;
  role: string;
  category: string;
  image: string;
  imagePosition: string;
  summary: string;
  highlights: string[];
};

const autoHubGallery: GalleryMedia[] = [
  { src: "/autohub/The%20Auto%20Hub/IMG-20260623-WA0017.jpg", type: "image" },
  { src: "/autohub/The%20Auto%20Hub/IMG-20260623-WA0019.jpg", type: "image" },
  { src: "/autohub/The%20Auto%20Hub/IMG-20260623-WA0021.jpg", type: "image" },
  { src: "/autohub/The%20Auto%20Hub/IMG-20260623-WA0027.jpg", type: "image" },
  { src: "/autohub/The%20Auto%20Hub/IMG-20260623-WA0028.jpg", type: "image" },
  { src: "/autohub/The%20Auto%20Hub/IMG-20260623-WA0038.jpg", type: "image" },
];

function galleryNumber(index: number) {
  return String(index + 1).padStart(2, "0");
}

function pageCopy(isAr: boolean) {
  return isAr
    ? {
        hero: {
          kicker: "مشروع دايناتك أوتو هب",
          title: "6 وحدات أعمال استراتيجية. مركز سيارات واحد متكامل.",
          description: "منظومة سيارات من الجيل الجديد تجمع الخدمات المتخصصة والتدريب والتشخيص المتقدم في موقع واحد بالقاهرة الجديدة.",
        },
        intro: {
          kicker: "نظرة عامة على المشروع",
          title: "جيل جديد من خدمات السيارات",
          paragraphs: [
            "مشروع أوتو هب هو منشأة سيارات متكاملة من فئة 3S تقع استراتيجيا في المنطقة الصناعية بالقاهرة الجديدة، بمساحة تشغيلية مبنية تبلغ 6,000 متر مربع وطاقة تصل إلى 40 سيارة يوميا.",
            "يخدم المركز متطلبات ما بعد البيع لمركبات الاحتراق الداخلي وجميع أنواع مركبات الطاقة الجديدة، ويجمع الخدمات الميكانيكية والكهربائية والسمكرة وقطع الغيار والإصلاح الذكي والتدريب والتشخيص المتقدم.",
            "يتضمن المشروع أيضا معرضا للسيارات المستعملة المعتمدة، مدعوما بضمان ممتد وباقات صيانة تمنح العملاء قيمة وثقة أكبر.",
          ],
          servicesTitle: "خدمات متكاملة تحت سقف واحد",
          services: ["الخدمات الميكانيكية", "الخدمات الكهربائية", "خدمات السمكرة", "قطع الغيار", "الإصلاح الذكي", "مراكز التدريب المتخصصة", "التشخيص والتكنولوجيا المتقدمة"],
          techTitle: "من الصيانة الوقائية إلى الصيانة التنبؤية",
          techText: "يقدم المشروع أول مركز خدمة سيارات في المنطقة يعتمد على الذكاء الاصطناعي لاكتشاف الأعطال مبكرا وتحديد موقعها والتدخل قبل حدوث التوقف، بما يقلل التكلفة ووقت التعطل ويرفع كفاءة الخدمة.",
          technologies: ["تعلم الآلة", "تقنية التوأم الرقمي", "التشخيص اللحظي للمركبات", "أنظمة الصيانة التنبؤية"],
          galleryKicker: "مرئيات المشروع",
          galleryTitle: "تصميم أوتو هب وتطويره",
          galleryDescription: "تصورات معمارية ومراجع بصرية توضح مرافق المشروع ووحداته المتكاملة.",
        },
        team: {
          kicker: "فريق إدارة المشروع",
          title: "تعرف على الخبراء وراء أوتو هب",
          description: "خبرات متكاملة في قيادة قطاع السيارات والعمارة والهندسة الإنشائية والتكنولوجيا التشغيلية.",
        },
        figures: { kicker: "المشروع بالأرقام", title: "أهم مؤشرات أوتو هب" },
        labels: { location: "الموقع", area: "المساحة المبنية", capacity: "الطاقة اليومية", image: "صورة المشروع", close: "إغلاق المعرض", previous: "السابق", next: "التالي" },
      }
    : {
        hero: {
          kicker: "DYNATECH Auto Hub",
          title: "6 Strategic Business Units. One Integrated Auto Hub.",
          description: "A next-generation automotive ecosystem bringing specialized services, training, and advanced diagnostics together in New Cairo.",
        },
        intro: {
          kicker: "Project Introduction",
          title: "A New Generation Of Automotive Services",
          paragraphs: [
            "The Automotive Hub Project is a comprehensive 3S automotive facility strategically located in the New Cairo Industrial Zone, with an operational built-up area of 6,000 sqm and capacity for up to 40 vehicles per day.",
            "The hub serves the aftermarket requirements of Internal Combustion Engine vehicles and all types of New Energy Vehicles, bringing mechanical, electrical, body shop, spare parts, SMART repair, training, and advanced diagnostic services together.",
            "The project also includes a dedicated pre-owned vehicle showroom offering inspected vehicles supported by extended warranty and maintenance packages.",
          ],
          servicesTitle: "Integrated Services Under One Roof",
          services: ["Mechanical Services", "Electrical Services", "Body Shop Services", "Spare Parts", "SMART Repair", "Specialized Training Centres", "Advanced Diagnostics & Technology"],
          techTitle: "From Preventive To Predictive Maintenance",
          techText: "The hub is planned to introduce the region's first AI-powered automotive service centre, detecting potential faults early, identifying their location, and supporting intervention before breakdowns occur to reduce costs, downtime, and improve service efficiency.",
          technologies: ["Machine Learning", "Digital Twin Technology", "Real-Time Vehicle Diagnostics", "Predictive Maintenance Systems"],
          galleryKicker: "Project Media",
          galleryTitle: "Auto Hub Design & Development",
          galleryDescription: "Architectural visuals and development references showing the project's integrated facilities and business units.",
        },
        team: {
          kicker: "Project Management Team",
          title: "Meet The Experts Behind The Auto Hub",
          description: "An integrated leadership team spanning automotive strategy, architecture, structural engineering, and high-tech operations.",
        },
        figures: { kicker: "The Project In Numbers", title: "Auto Hub Key Project Figures" },
        labels: { location: "Location", area: "Built-Up Area", capacity: "Daily Capacity", image: "Project Image", close: "Close gallery", previous: "Previous", next: "Next" },
      };
}

function projectTeam(isAr: boolean): TeamMember[] {
  return isAr
    ? [
        { name: "م. أحمد سرور", role: "مؤسس ورئيس تنفيذي لشركة دايناتك", category: "المؤسس", image: "/team/Eng.Ahmed Sorour.jpeg", imagePosition: "50% 15%", summary: "خبرة تقارب 30 عاما مع كبرى شركات السيارات العالمية وفي المناصب التنفيذية والاستشارية العليا.", highlights: ["Toyota وBMW وJaguar Land Rover وVolkswagen", "القيادة الاستراتيجية وتطوير الأعمال", "خبرة تنفيذية واستشارية في منطقة الشرق الأوسط"] },
        { name: "م. بيتر ماهر", role: "مؤسس Genesis Design Studio", category: "المعماري", image: "/team/Eng.Peter Maher.jpeg", imagePosition: "50% 35%", summary: "أكثر من 20 عاما من الخبرة المعمارية في المشروعات السكنية والتجارية والضيافة والمؤسسات.", highlights: ["الاستدامة والكفاءة التشغيلية", "Form Follows Function", "حلول تصميم حديثة وهوية بصرية متماسكة"] },
        { name: "د. أحمد النادي", role: "استشاري هندسة إنشائية وأستاذ مساعد", category: "المصمم الإنشائي", image: "/team/Dr.Ahmed El Nadi.jpeg", imagePosition: "50% 12%", summary: "حاصل على الدكتوراه ويتمتع بأكثر من 18 عاما في التحليل والتصميم الإنشائي للمشروعات المتنوعة.", highlights: ["المنشآت الصناعية والأبراج والبنية التحتية", "التحليل الزلزالي والأنظمة المرنة", "النمذجة المتقدمة بالعناصر المحدودة"] },
        { name: "م. صالح السعدني", role: "مستشار عمليات وتكنولوجيا السيارات", category: "مستشار التكنولوجيا المتقدمة", image: "/team/Eng.Saleh El Saadany.jpeg", imagePosition: "50% 28%", summary: "أكثر من 30 عاما في إدارة وتشغيل وتحديث مراكز خدمة السيارات في مصر ومنطقة الخليج.", highlights: ["خبرة مع BMW وLand Rover", "رفع كفاءة وإنتاجية الورش", "تحديث المرافق ودمج تكنولوجيا السيارات"] },
      ]
    : [
        { name: "Eng. Ahmed Sorour", role: "Founder and CEO of DYNATECH", category: "The Founder", image: "/team/Eng.Ahmed Sorour.jpeg", imagePosition: "50% 15%", summary: "Nearly 30 years of experience with leading global automotive manufacturers and in senior executive and advisory roles.", highlights: ["Toyota, BMW, Jaguar Land Rover & Volkswagen", "Strategic Leadership & Business Development", "C-suite and MENA Advisory Experience"] },
        { name: "Eng. Peter Maher", role: "Founder of Genesis Design Studio", category: "The Architect", image: "/team/Eng.Peter Maher.jpeg", imagePosition: "50% 35%", summary: "More than 20 years of architectural experience across residential, commercial, hospitality, and institutional projects.", highlights: ["Environmental Sustainability", "Form Follows Function", "Operational Efficiency & Modern Design"] },
        { name: "Dr. Ahmed El Nadi", role: "Structural Engineering Consultant and Assistant Professor", category: "The Structural Designer", image: "/team/Dr.Ahmed El Nadi.jpeg", imagePosition: "50% 12%", summary: "A PhD holder with more than 18 years of experience in structural analysis and design across complex project types.", highlights: ["Industrial Facilities, Towers & Infrastructure", "Seismic Behaviour & Resilient Systems", "Advanced Finite-Element Modelling"] },
        { name: "Eng. Saleh El Saadany", role: "Automotive Operations and Technology Advisor", category: "The High-Tech Advisor", image: "/team/Eng.Saleh El Saadany.jpeg", imagePosition: "50% 28%", summary: "More than 30 years of experience managing, modernizing, and improving automotive service centre operations.", highlights: ["BMW & Land Rover Experience", "Workshop Productivity & Service Quality", "Facility Modernization & Technology Integration"] },
      ];
}

function projectFigures(isAr: boolean): ProjectFigure[] {
  return isAr
    ? [
        { label: "المساحة المبنية", value: "6,000 م²", countTo: 6000, suffix: " م²", description: "منشأة تشغيلية متطورة تجمع خدمات السيارات المتكاملة." },
        { label: "مساحات العمل", value: "36", countTo: 36, description: "مساحة مجهزة بالكامل لخدمة ما يصل إلى 40 سيارة يوميا." },
        { label: "وحدات الأعمال", value: "6", countTo: 6, description: "وحدات استراتيجية تعمل ضمن منظومة سيارات واحدة." },
        { label: "الاستثمار الأولي", value: "250 مليون", countTo: 250, suffix: " مليون", description: "جنيه مصري كاستثمار مبدئي متوقع لإطلاق المشروع." },
        { label: "العائد المتوقع", value: "12%", countTo: 12, suffix: "%", description: "العائد المتوقع على الاستثمار وفقا لتقديرات المشروع." },
        { label: "الخبرة القيادية", value: "30 عاما", countTo: 30, suffix: " عاما", description: "خبرات في قيادة قطاع السيارات وإدارة مراكز الخدمة." },
        { label: "الافتتاح التجريبي", value: "Q4 2027", description: "الموعد المخطط للافتتاح التجريبي للمشروع." },
        { label: "الأول في مصر والمنطقة", value: "الأول", countTo: 1, prefix: "#", description: "تشخيص لحظي للمركبات الكهربائية بالذكاء الاصطناعي." },
      ]
    : [
        { label: "Built-Up Area", value: "6,000 sqm", countTo: 6000, suffix: " sqm", description: "A state-of-the-art operational facility for integrated automotive services." },
        { label: "Work Bays", value: "36", countTo: 36, description: "Fully equipped work bays with capacity for up to 40 vehicles per day." },
        { label: "Strategic Business Units", value: "6", countTo: 6, description: "Six specialized units operating as one integrated automotive ecosystem." },
        { label: "Projected Initial Investment", value: "EGP 250M", countTo: 250, prefix: "EGP ", suffix: "M", description: "Approximately EGP 250 million projected initial investment." },
        { label: "Expected ROI", value: "12%", countTo: 12, suffix: "%", description: "Approximately 12% expected Return on Investment." },
        { label: "Leadership Experience", value: "30 Years", countTo: 30, suffix: " Years", description: "Automotive, engineering, and operational expertise." },
        { label: "Projected Soft Opening", value: "Q4 2027", description: "The planned soft opening for the project." },
        { label: "First In Egypt & MENA", value: "1st", countTo: 1, suffix: "st", description: "Real-time BEV diagnostics powered by AI and Machine Learning." },
      ];
}

function AnimatedFigure({ figure, index }: { figure: ProjectFigure; index: number }) {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-70px" });
  const reduceMotion = useReducedMotion();
  const [count, setCount] = useState(0);

  useEffect(() => {
    const target = figure.countTo;
    if (!isInView || target === undefined) return;
    if (reduceMotion) return;

    const duration = 1200;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [figure.countTo, isInView, reduceMotion]);

  const displayValue = figure.countTo === undefined
    ? figure.value
    : `${figure.prefix ?? ""}${(reduceMotion ? figure.countTo : count).toLocaleString("en-US")}${figure.suffix ?? ""}`;

  return (
    <motion.article
      ref={ref}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.04 }}
      className="group flex min-w-0 flex-col items-center text-center"
    >
      <div className="relative flex h-40 w-40 shrink-0 items-center justify-center rounded-full border border-[#43becc]/40 bg-[#080d20] shadow-[0_0_42px_rgba(0,135,203,0.13)] transition duration-500 group-hover:-translate-y-1 group-hover:border-[#43becc] md:h-44 md:w-44">
        <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_155deg,#0087cb,#43becc44,#8e257a,#0087cb)] opacity-80 transition duration-700 group-hover:rotate-90" />
        <div className="absolute inset-[3px] rounded-full bg-[#111936]" />
        <div className="absolute inset-5 rounded-full border border-dashed border-white/15" />
        <div className="absolute inset-9 rounded-full bg-[#080d20]" />
        <p className="relative z-10 max-w-[136px] text-[clamp(1.25rem,2vw,1.9rem)] font-black leading-tight text-white">
          {displayValue}
        </p>
      </div>
      <h3 className="mt-5 min-h-10 text-sm font-black uppercase leading-tight text-[#43becc]">{figure.label}</h3>
      <p className="mt-2 max-w-[260px] text-sm leading-relaxed text-zinc-400">{figure.description}</p>
    </motion.article>
  );
}

function SectionKicker({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 inline-flex flex-col gap-3">
      <p className="text-xs font-black uppercase tracking-[0.28em] text-[#43becc]">{children}</p>
      <span className="h-px w-16 bg-[#0087cb]" />
    </div>
  );
}

export default function AutoHubPage({ locale }: Props) {
  const isAr = locale === "ar";
  const copy = pageCopy(isAr);
  const team = projectTeam(isAr);
  const figures = projectFigures(isAr);
  const reduceMotion = useReducedMotion();
  const [activeGalleryIndex, setActiveGalleryIndex] = useState<number | null>(null);
  const [activeTeamIndex, setActiveTeamIndex] = useState<number | null>(null);
  const activeGalleryItem = activeGalleryIndex === null ? null : autoHubGallery[activeGalleryIndex];

  const showPreviousGalleryItem = () => {
    setActiveGalleryIndex((current) => current === null ? current : (current - 1 + autoHubGallery.length) % autoHubGallery.length);
  };

  const showNextGalleryItem = () => {
    setActiveGalleryIndex((current) => current === null ? current : (current + 1) % autoHubGallery.length);
  };

  useEffect(() => {
    if (activeGalleryIndex === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveGalleryIndex(null);
      if (event.key === "ArrowLeft") showPreviousGalleryItem();
      if (event.key === "ArrowRight") showNextGalleryItem();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeGalleryIndex]);

  const reveal = reduceMotion
    ? { initial: { opacity: 1, y: 0 }, whileInView: { opacity: 1, y: 0 } }
    : { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 } };

  return (
    <main dir={isAr ? "rtl" : "ltr"} lang={locale} className="min-h-screen bg-[#080d20] pt-24 text-white">
      <section className="relative flex min-h-[650px] items-end overflow-hidden px-5 pb-12 pt-28 sm:px-6 md:min-h-[calc(100svh-6rem)] md:px-12 md:pb-16 lg:px-20">
        <Image
          src="/autohub/The%20Auto%20Hub/IMG-20260623-WA0021.jpg"
          alt="DYNATECH Auto Hub architectural design"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#080d20]/42" />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,#080d20_0%,rgba(8,13,32,0.68)_45%,rgba(8,13,32,0.14)_100%)]" />
        <div className="relative z-10 mx-auto grid w-full max-w-[1440px] gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <motion.div {...reveal} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }}>
            <SectionKicker>{copy.hero.kicker}</SectionKicker>
            <h1 className="max-w-5xl text-4xl font-black uppercase leading-[0.98] tracking-normal sm:text-5xl md:text-6xl xl:text-[4.5rem]">
              {copy.hero.title}
            </h1>
            <p className="mt-6 max-w-3xl text-base font-semibold leading-relaxed text-white/88 md:text-xl">
              {copy.hero.description}
            </p>
          </motion.div>
          <motion.div {...reveal} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, delay: 0.08 }} className="grid grid-cols-3 border border-white/15 bg-[#080d20]/78 backdrop-blur-md">
            {[
              [copy.labels.location, isAr ? "القاهرة الجديدة" : "New Cairo"],
              [copy.labels.area, isAr ? "6,000 م²" : "6,000 sqm"],
              [copy.labels.capacity, isAr ? "40 سيارة" : "40 Vehicles"],
            ].map(([label, value]) => (
              <div key={label} className="min-w-0 border-e border-white/10 p-4 last:border-0 md:p-5">
                <p className="text-[10px] font-black uppercase text-[#43becc]">{label}</p>
                <p className="mt-2 text-sm font-black leading-snug text-white md:text-base">{value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative border-y border-white/10 bg-[#080d20] px-5 py-16 sm:px-6 md:px-12 md:py-24 lg:px-20">
        <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:58px_58px]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
            <motion.div {...reveal} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.65 }}>
              <SectionKicker>{copy.intro.kicker}</SectionKicker>
              <h2 className="text-3xl font-black uppercase leading-tight tracking-normal md:text-4xl lg:text-5xl">{copy.intro.title}</h2>
            </motion.div>
            <motion.div {...reveal} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.65, delay: 0.06 }} className="space-y-5 text-base leading-relaxed text-zinc-300 md:text-lg">
              {copy.intro.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </motion.div>
          </div>

          <div className="mt-14 border-y border-white/10 py-10">
            <h3 className="text-xl font-black uppercase tracking-normal text-white md:text-2xl">{copy.intro.servicesTitle}</h3>
            <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {copy.intro.services.map((service, index) => {
                const Icon = index % 3 === 0 ? Wrench : index % 3 === 1 ? Factory : Building2;
                return (
                  <motion.div key={service} {...reveal} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.45, delay: index * 0.03 }} className="flex min-h-20 items-center gap-4 border border-white/10 bg-[#111936] p-4">
                    <Icon size={19} className="shrink-0 text-[#43becc]" />
                    <span className="text-sm font-bold leading-snug text-zinc-200">{service}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <motion.div {...reveal} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.65 }} className="mt-14 grid gap-8 border border-[#0087cb]/35 bg-[#0087cb]/10 p-6 md:p-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <BrainCircuit size={30} className="text-[#43becc]" />
              <h3 className="mt-5 text-2xl font-black uppercase leading-tight tracking-normal md:text-4xl">{copy.intro.techTitle}</h3>
              <p className="mt-5 text-sm leading-relaxed text-zinc-300 md:text-base">{copy.intro.techText}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {copy.intro.technologies.map((technology) => (
                <div key={technology} className="flex items-center gap-3 border border-white/10 bg-[#080d20]/80 p-5 text-sm font-black text-white">
                  <ShieldCheck size={18} className="shrink-0 text-[#43becc]" />
                  {technology}
                </div>
              ))}
            </div>
          </motion.div>

          <div className="mt-20">
            <SectionKicker>{copy.intro.galleryKicker}</SectionKicker>
            <div className="flex flex-wrap items-end justify-between gap-5">
              <h3 className="max-w-3xl text-3xl font-black uppercase leading-tight tracking-normal md:text-4xl lg:text-5xl">{copy.intro.galleryTitle}</h3>
              <p className="max-w-xl text-sm leading-relaxed text-zinc-400 md:text-base">{copy.intro.galleryDescription}</p>
            </div>
            <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {autoHubGallery.map((item, index) => (
                <motion.figure key={item.src} {...reveal} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.45, delay: Math.min(index * 0.025, 0.18) }} className="group relative aspect-[4/3] overflow-hidden border border-white/10 bg-white">
                  <button type="button" onClick={() => setActiveGalleryIndex(index)} className="absolute inset-0 cursor-pointer" aria-label={`${copy.labels.image} ${galleryNumber(index)}`}>
                    <Image src={item.src} alt={`Auto Hub ${galleryNumber(index)}`} fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-contain transition duration-500 group-hover:brightness-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080d20]/78 via-transparent to-transparent" />
                    <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center border border-white/20 bg-black/55 text-white opacity-0 backdrop-blur transition group-hover:opacity-100"><Maximize2 size={17} /></div>
                    <figcaption className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-[#080d20]/82 p-4 text-start text-xs font-black uppercase text-[#43becc] backdrop-blur">Auto Hub {galleryNumber(index)}</figcaption>
                  </button>
                </motion.figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#111936] px-5 py-16 sm:px-6 md:px-12 md:py-24 lg:px-20">
        <div className="mx-auto max-w-[1440px]">
          <div className="mx-auto max-w-4xl text-center">
            <SectionKicker>{copy.team.kicker}</SectionKicker>
            <h2 className="text-3xl font-black uppercase leading-tight tracking-normal md:text-4xl lg:text-5xl">{copy.team.title}</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-zinc-400">{copy.team.description}</p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {team.map((member, index) => (
              <motion.article key={member.name} {...reveal} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.55, delay: index * 0.06 }} className="min-w-0">
                <button
                  type="button"
                  onClick={() => setActiveTeamIndex((current) => current === index ? null : index)}
                  aria-expanded={activeTeamIndex === index}
                  className="group relative block aspect-[3/4] w-full overflow-hidden border border-white/10 bg-[#080d20] text-start transition duration-500 hover:-translate-y-1 hover:border-[#43becc]/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#43becc]"
                >
                  <Image src={member.image} alt={member.name} fill sizes="(min-width:1280px) 25vw, (min-width:640px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-[1.035]" style={{ objectPosition: member.imagePosition }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080d20] via-[#080d20]/10 to-transparent" />

                  <div className={`absolute inset-0 flex flex-col justify-end overflow-y-auto bg-[#080d20]/95 p-4 transition duration-500 md:p-5 ${activeTeamIndex === index ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"}`}>
                    <span className="w-fit bg-[#0087cb] px-2.5 py-1.5 text-[9px] font-black uppercase text-black">{member.category}</span>
                    <h3 className="mt-3 text-lg font-black leading-tight text-white md:text-xl">{member.name}</h3>
                    <p className="mt-1.5 text-[10px] font-black uppercase leading-relaxed text-[#43becc]">{member.role}</p>
                    <p className="mt-3 text-xs leading-relaxed text-zinc-300">{member.summary}</p>
                    <ul className="mt-3 space-y-2 border-t border-white/10 pt-3">
                      {member.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2 text-[11px] font-bold leading-relaxed text-zinc-300"><CheckCircle2 size={13} className="mt-0.5 shrink-0 text-[#43becc]" />{highlight}</li>
                      ))}
                    </ul>
                  </div>

                  <div className={`absolute inset-x-0 bottom-0 p-5 transition duration-300 ${activeTeamIndex === index ? "pointer-events-none opacity-0" : "opacity-100 group-hover:opacity-0 group-focus-visible:opacity-0"}`}>
                    <span className="inline-block bg-[#0087cb] px-2.5 py-1.5 text-[9px] font-black uppercase text-black">{member.category}</span>
                    <h3 className="mt-3 text-xl font-black leading-tight text-white md:text-2xl">{member.name}</h3>
                    <p className="mt-1.5 text-[10px] font-black uppercase leading-relaxed text-[#43becc]">{member.role}</p>
                  </div>
                </button>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-[#080d20] px-5 py-16 sm:px-6 md:px-12 md:py-24 lg:px-20">
        <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:58px_58px]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <SectionKicker>{copy.figures.kicker}</SectionKicker>
            <h2 className="text-3xl font-black uppercase leading-tight tracking-normal md:text-4xl lg:text-5xl">{copy.figures.title}</h2>
          </div>
          <div className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {figures.map((figure, index) => <AnimatedFigure key={figure.label} figure={figure} index={index} />)}
          </div>
        </div>
      </section>

      {activeGalleryItem && activeGalleryIndex !== null && (
        <div className="fixed inset-0 z-[310] flex items-center justify-center bg-black/92 px-4 py-5 backdrop-blur-md md:px-8" role="dialog" aria-modal="true" aria-label={`${copy.labels.image} ${galleryNumber(activeGalleryIndex)}`}>
          <button type="button" onClick={() => setActiveGalleryIndex(null)} className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center bg-white text-black transition hover:bg-[#43becc] md:right-7 md:top-7" aria-label={copy.labels.close}><X size={20} /></button>
          <button type="button" onClick={showPreviousGalleryItem} className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/15 bg-black/55 text-white transition hover:bg-white hover:text-black md:left-7" aria-label={copy.labels.previous}><ChevronLeft size={22} /></button>
          <button type="button" onClick={showNextGalleryItem} className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/15 bg-black/55 text-white transition hover:bg-white hover:text-black md:right-7" aria-label={copy.labels.next}><ChevronRight size={22} /></button>
          <div className="relative h-full max-h-[86vh] w-full max-w-6xl overflow-hidden border border-white/10 bg-[#080d20]">
            <Image src={activeGalleryItem.src} alt={`Auto Hub ${galleryNumber(activeGalleryIndex)}`} fill sizes="100vw" className="object-contain" priority />
          </div>
          <div className="absolute bottom-5 left-1/2 z-20 -translate-x-1/2 bg-[#080d20]/90 px-5 py-3 text-center text-xs font-black text-[#43becc] backdrop-blur">{activeGalleryIndex + 1} / {autoHubGallery.length}</div>
        </div>
      )}
    </main>
  );
}
