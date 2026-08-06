"use client";

import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
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

const autoHubGallery = [
  "/autohub/The%20Auto%20Hub/IMG-20260623-WA0017.jpg",
  "/autohub/The%20Auto%20Hub/IMG-20260623-WA0019.jpg",
  "/autohub/The%20Auto%20Hub/IMG-20260623-WA0021.jpg",
  "/autohub/The%20Auto%20Hub/IMG-20260623-WA0027.jpg",
  "/autohub/The%20Auto%20Hub/IMG-20260623-WA0028.jpg",
  "/autohub/The%20Auto%20Hub/IMG-20260623-WA0038.jpg",
];

type TeamMember = {
  category: string;
  name: string;
  image: string;
  imagePosition: string;
  biography: string;
};

type ProjectFigure = {
  label: string;
  value: string;
  description: string;
  countTo?: number;
  prefix?: string;
  suffix?: string;
};

function pageCopy(isAr: boolean) {
  return isAr
    ? {
        hero: "6 وحدات أعمال استراتيجية. مركز سيارات واحد متكامل.",
        introductionTitle: "مقدمة المشروع",
        introduction:
          "مشروع مركز السيارات هو منشأة شاملة من فئة 3S تقع استراتيجيا في المنطقة الصناعية بالقاهرة الجديدة. بمساحة تشغيلية مبنية تبلغ 6,000 متر مربع، صمم المركز لخدمة ما يصل إلى 40 سيارة يوميا، لتلبية احتياجات ما بعد البيع لكل من سيارات محركات الاحتراق الداخلي (ICE) وجميع أنواع سيارات الطاقة الجديدة (NEVs). ستجمع المنشأة مجموعة واسعة من خدمات السيارات المتكاملة، بما في ذلك الخدمات الميكانيكية والكهربائية، والسمكرة، وقطع الغيار، والإصلاح الذكي، ومراكز التدريب المتخصصة لأحدث تقنيات السيارات. كما ستشمل معرضا للسيارات المستعملة يقدم سيارات بضمان ممتد وباقات صيانة. سيمثل هذا المشروع علامة فارقة في سوق السيارات المصري، إذ يخطط له أن يصبح أول مركز خدمة مدعوم بأدوات الذكاء الاصطناعي المتقدمة، بما في ذلك تعلم الآلة وتقنيات التوأم الرقمي، لينقل صيانة السيارات من الصيانة الوقائية إلى الصيانة التنبؤية. ومن خلال منصات الذكاء الاصطناعي المتقدمة هذه، أصبح من الممكن في صيانة السيارات التنبؤ بالأعطال المحتملة واكتشافها مبكرا، وتحديد موقعها بدقة، والتدخل في الوقت المناسب لمنع الأعطال مع خفض تكاليف الإصلاح ووقت التوقف، بما يعود بالنفع في النهاية على مالكي السيارات.",
        teamTitle: "فريق إدارة المشروع",
        figuresTitle: "أهم أرقام مشروع مركز السيارات",
      }
    : {
        hero: "6 STRATEGIC BUSINESS UNITS . ONE INEGRATED AUTO HUB .",
        introductionTitle: "Project INTRODUCTION",
        introduction:
          "The Automotive Hub Project is a comprehensive 3S Facility strategically located in the New Cairo Industrial Zone. With an operational built-up area of 6,000 sqm, the hub is designed to serve up to 40 car/day, addressing the aftermarket needs of both (ICE) & all types of (NEVs) cars. The facility will bring together a wide range of integrated automotive services, including mechanical and Electrical services, Body Shop, spare parts, SMART Repair, and specialized training centres for the latest automotive technologies. It will also include A Showroom for pre-owned vehicles , offering vehicles with extended warranty and maintenance packages. This project will be a milestone in the Egyptian automotive market, as it is planned to become the First Service Centre Powered by advanced AI tools, including Machine Learning & Digital Twin technologies, transforming car maintenance from preventive maintenance into predictive maintenance. Through these advanced AI platforms, it has become possible in car maintenance to predict and detect potential faults early, identify their exact location, and intervene at the right time to prevent breakdowns while reducing repair costs and downtime, ultimately benefiting car owners.",
        teamTitle: "Project Management Team",
        figuresTitle: "The Auto Hub — Key Project Figures",
      };
}

function projectTeam(isAr: boolean): TeamMember[] {
  return isAr
    ? [
        {
          category: "المؤسس",
          name: "م. أحمد سرور",
          image: "/team/Eng.Ahmed Sorour.jpeg",
          imagePosition: "50% 15%",
          biography:
            "م. أحمد هو مؤسس والرئيس التنفيذي لشركة دايناتك، ويتمتع بخبرة تقارب 30 عاما في العمل مع كبرى شركات تصنيع السيارات العالمية، بما في ذلك TOYOTA وBMW وJLR وVolkswagen. وشملت مسيرته تولي مناصب تنفيذية عليا والعمل في المجالس الاستشارية لعدد من كبرى التكتلات التجارية وصناديق الثروة السيادية في منطقة الشرق الأوسط وشمال أفريقيا، مساهما بقيادة استراتيجية وخبرة صناعية على أعلى المستويات.",
        },
        {
          category: "المعماري",
          name: "م. بيتر ماهر",
          image: "/team/Eng.Peter Maher.jpeg",
          imagePosition: "50% 35%",
          biography:
            "يتمتع م. بيتر بخبرة تزيد على 20 عاما في تصميم المشروعات السكنية والتجارية والفندقية الكبرى. وخلال مسيرته، تعاون مع مؤسسات رائدة، بما في ذلك Orascom Development وLiving In وGIZ-GmbH، ومؤسسات حكومية مثل CAOA. ويسترشد نهجه المعماري بفلسفة تصميم حديثة تعطي الأولوية للاستدامة البيئية والكفاءة ومبدأ «الشكل يتبع الوظيفة» في التصميم واختيار المواد، مع الحفاظ على الجودة الجمالية والجاذبية البصرية لكل مشروع. بيتر هو مؤسس Genesis Design Studio، المعترف به كأحد بيوت التصميم الرائدة في مصر.",
        },
        {
          category: "المصمم الإنشائي",
          name: "د. أحمد النادي",
          image: "/team/Dr.Ahmed El Nadi.jpeg",
          imagePosition: "50% 12%",
          biography:
            "د. أحمد استشاري هندسة إنشائية وأستاذ مساعد حاصل على الدكتوراه، ويتمتع بخبرة تزيد على 18 عاما في التحليل والتصميم الإنشائي للمشروعات السكنية والتجارية والصناعية والأبراج والمنشآت الخاصة. وقد ساهم في أبراج كبرى من الخرسانة المسلحة ومشروعات البنية التحتية والمياه والصرف الصحي، وله أبحاث دولية منشورة في السلوك الزلزالي والمنشآت المرنة والأساسات البحرية والتدعيم والنمذجة المتقدمة بالعناصر المحدودة.",
        },
        {
          category: "مستشار التكنولوجيا المتقدمة",
          name: "م. صالح سعدني",
          image: "/team/Eng.Saleh El Saadany.jpeg",
          imagePosition: "50% 28%",
          biography:
            "يتمتع بخبرة تزيد على 30 عاما في إدارة وتشغيل مراكز خدمة السيارات، وسجل مثبت في العمل مع علامات سيارات عالمية رائدة، بما في ذلك BMW وLand Rover. وقد أدى دورا رئيسيا في إعادة تصميم وتجهيز وتطوير وتحديث عدد من مراكز خدمة BMW Group في مصر ومنطقة الخليج، مما عزز كفاءتها التشغيلية بشكل كبير. كما عمل مستشارا لعدد من وكالات السيارات، داعما تحسين الإنتاجية وجودة الخدمة والأداء التشغيلي العام.",
        },
      ]
    : [
        {
          category: "The Founder",
          name: "Eng. Ahmed Sorour",
          image: "/team/Eng.Ahmed Sorour.jpeg",
          imagePosition: "50% 15%",
          biography:
            "Eng. Ahmed is the founder and CEO of DYNATECH, he has nearly 30 years of experience working with leading global automotive OEMs, including TOYOTA, BMW, JLR, and Volkswagen. His career includes serving in C suite roles and on the advisory boards of several major business conglomerates & sovereign wealth fund across the MENA region, contributing strategic leadership and industry expertise at the highest levels.",
        },
        {
          category: "The Architect",
          name: "Eng. Peter Maher",
          image: "/team/Eng.Peter Maher.jpeg",
          imagePosition: "50% 35%",
          biography:
            "Eng. Peter brings over 20 years of experience in designing major residential, commercial, and hospitality projects. Throughout his career, he has collaborated with leading organizations, including Orascom Development, Living In, GIZ-GmbH, and government institutions such as CAOA. His architectural approach is guided by a modern design philosophy that prioritizes environmental sustainability, efficiency, and the principle of “form follows function” in both design and material selection, while preserving the aesthetic quality and visual appeal of each project. Peter is the founder of Genesis Design Studio, recognized as one of Egypt’s leading design houses",
        },
        {
          category: "The Structure Designer",
          name: "Dr. Ahmed El Nadi",
          image: "/team/Dr.Ahmed El Nadi.jpeg",
          imagePosition: "50% 12%",
          biography:
            "DR. Ahmed is a Structural Engineering Consultant and Assistant Professor (PHD) with over 18 years of experience in structural analysis and design across residential, commercial, industrial, high-rise, and special structures. He has contributed to major reinforced-concrete towers, infrastructure, water, and wastewater projects, with international research published in seismic behaviour, resilient structures, offshore foundations, strengthening, and advanced finite-element modelling.",
        },
        {
          category: "The High-Tech Advisor",
          name: "Eng. Saleh Saadany",
          image: "/team/Eng.Saleh El Saadany.jpeg",
          imagePosition: "50% 28%",
          biography:
            "He brings over 30 years of experience in managing and operating automotive service centres, with a proven track record working with leading international automotive brands, including BMW and Land Rover. He has played a key role in redesigning, equipping, upgrading, and modernizing several BMW Group service centres across Egypt and the Gulf region, significantly enhancing their operational efficiency. He has also served as a consultant to multiple automotive agencies, supporting improvements in productivity, service quality, and overall operational performance.",
        },
      ];
}

function projectFigures(isAr: boolean): ProjectFigure[] {
  return isAr
    ? [
        { label: "المساحة المبنية (BUA)", value: "6,000 متر مربع", countTo: 6000, suffix: " متر مربع", description: "من مساحة المنشأة الحديثة" },
        { label: "الطاقة الخدمية", value: "36", countTo: 36, description: "مساحة عمل مجهزة بالكامل تتعامل مع ما يصل إلى 40 سيارة يوميا" },
        { label: "البنية التحتية الاستراتيجية", value: "6", countTo: 6, description: "مهيكلة عبر 6 وحدات أعمال استراتيجية (SBUs)" },
        { label: "الاستثمار المالي", value: "250 مليون جنيه", countTo: 250, suffix: " مليون جنيه", description: "استثمار أولي متوقع" },
        { label: "الربحية", value: "12%", countTo: 12, suffix: "%", description: "عائد متوقع على الاستثمار (ROI)" },
        { label: "خبرة القيادة", value: "30 عاما", countTo: 30, suffix: " عاما", description: "مدعومة بخبرة 30 عاما في إدارة صناعة السيارات" },
        { label: "الجدول الزمني للمشروع", value: "الربع الرابع 2027", description: "الافتتاح التجريبي المتوقع في الربع الرابع من عام 2027" },
        { label: "ابتكار السوق", value: "الأول", countTo: 1, suffix: "ST", description: "مركز خدمة في مصر ومنطقة الشرق الأوسط وشمال أفريقيا يوفر تشخيصا لحظيا للمركبات الكهربائية بالبطارية (BEV) مدعوما بالذكاء الاصطناعي وتعلم الآلة" },
      ]
    : [
        { label: "Built-Up Area (BUA)", value: "6,000 sqm", countTo: 6000, suffix: " sqm", description: "of state-of-the-art facility space" },
        { label: "Service Capacity", value: "36", countTo: 36, description: "fully equipped work bays handling up to 40 vehicles daily" },
        { label: "Strategic Infrastructure", value: "6", countTo: 6, description: "Structured across 6 Strategic Business Units (SBUs)" },
        { label: "Financial Investment", value: "250M EGP", countTo: 250, suffix: "M EGP", description: "projected initial investment" },
        { label: "Profitability", value: "12%", countTo: 12, suffix: "%", description: "expected Return on Investment (ROI)" },
        { label: "Leadership Expertise", value: "30 years", countTo: 30, suffix: " years", description: "Backed by 30 years of automotive industry management experience" },
        { label: "Project Timeline", value: "Q4 2027", description: "Soft opening projected for Q4 2027" },
        { label: "Market Innovation", value: "1ST", countTo: 1, suffix: "ST", description: "service centre in Egypt& MENA region featuring real-time Battery Electric Vehicle (BEV) diagnostics powered by AI and Machine Learning" },
      ];
}

function AnimatedFigure({ figure, index }: { figure: ProjectFigure; index: number }) {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-70px" });
  const reduceMotion = useReducedMotion();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView || figure.countTo === undefined || reduceMotion) return;

    const duration = 1200;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.round(figure.countTo! * (1 - Math.pow(1 - progress, 3))));
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
      <div className="relative flex h-40 w-40 shrink-0 items-center justify-center rounded-full border border-[#43becc]/40 bg-[#080d20] shadow-[0_0_42px_rgba(0,135,203,0.13)] md:h-44 md:w-44">
        <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_155deg,#0087cb,#43becc44,#8e257a,#0087cb)] opacity-80 transition duration-700 group-hover:rotate-90" />
        <div className="absolute inset-[3px] rounded-full bg-[#111936]" />
        <div className="absolute inset-5 rounded-full border border-dashed border-white/15" />
        <p className="relative z-10 max-w-[138px] text-[clamp(1.15rem,2vw,1.8rem)] font-black leading-tight text-white">{displayValue}</p>
      </div>
      <h3 className="mt-5 min-h-10 text-sm font-black uppercase leading-tight text-[#43becc]">{figure.label}:</h3>
      <p className="mt-2 max-w-[270px] text-sm leading-relaxed text-zinc-400">{figure.description}</p>
    </motion.article>
  );
}

export default function AutoHubPage({ locale }: Props) {
  const isAr = locale === "ar";
  const copy = pageCopy(isAr);
  const heroLines = isAr
    ? ["6 وحدات أعمال استراتيجية.", "مركز سيارات واحد متكامل."]
    : ["6 STRATEGIC BUSINESS UNITS .", "ONE INEGRATED AUTO HUB ."];
  const team = projectTeam(isAr);
  const figures = projectFigures(isAr);
  const reduceMotion = useReducedMotion();
  const [activeTeamIndex, setActiveTeamIndex] = useState<number | null>(null);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState<number | null>(null);
  const reveal = reduceMotion
    ? { initial: { opacity: 1, y: 0 }, whileInView: { opacity: 1, y: 0 } }
    : { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 } };

  useEffect(() => {
    if (activeGalleryIndex === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveGalleryIndex(null);
      if (event.key === "ArrowLeft") {
        setActiveGalleryIndex((current) => current === null ? current : (current - 1 + autoHubGallery.length) % autoHubGallery.length);
      }
      if (event.key === "ArrowRight") {
        setActiveGalleryIndex((current) => current === null ? current : (current + 1) % autoHubGallery.length);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeGalleryIndex]);

  return (
    <main dir={isAr ? "rtl" : "ltr"} lang={locale} className="min-h-screen bg-[#080d20] pt-24 text-white">
      <section className="relative flex min-h-[650px] items-end overflow-hidden px-5 pb-12 pt-28 sm:px-6 md:min-h-[calc(100svh-6rem)] md:px-12 md:pb-24 lg:px-20">
        <Image
          src="/autohub/The%20Auto%20Hub/IMG-20260623-WA0021.jpg"
          alt={isAr ? "التصميم ثلاثي الأبعاد لمشروع مركز السيارات" : "Hi-Res 3D Auto Hub design"}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#080d20]/36" />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,#080d20_0%,rgba(8,13,32,0.62)_44%,rgba(8,13,32,0.08)_100%)]" />
        <motion.div {...reveal} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }} className="relative z-10 mx-auto w-full max-w-[1440px]">
          <h1 className="text-4xl font-black uppercase leading-[0.98] tracking-normal sm:text-5xl lg:text-[clamp(2.75rem,3.4vw,4.25rem)]">
            {heroLines.map((line) => (
              <span key={line} className="block lg:whitespace-nowrap">{line}</span>
            ))}
          </h1>
        </motion.div>
      </section>

      <section className="relative border-y border-white/10 bg-[#080d20] px-5 py-16 sm:px-6 md:px-12 md:py-24 lg:px-20">
        <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:58px_58px]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <motion.div {...reveal} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.65 }}>
            <h2 className="text-4xl font-black uppercase leading-tight tracking-normal md:text-5xl lg:text-6xl">{copy.introductionTitle}</h2>
            <span className="mt-5 block h-px w-16 bg-[#0087cb]" />
          </motion.div>
          <motion.p {...reveal} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.65, delay: 0.06 }} className="text-base leading-[1.9] text-zinc-300 md:text-lg">
            {copy.introduction}
          </motion.p>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#111936] px-5 py-16 sm:px-6 md:px-12 md:py-24 lg:px-20">
        <div className="mx-auto max-w-[1440px]">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-black uppercase leading-tight tracking-normal md:text-4xl lg:text-5xl">{copy.teamTitle}</h2>
            <span className="mx-auto mt-5 block h-px w-16 bg-[#0087cb]" />
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
                  <div className={`absolute inset-0 flex flex-col justify-end overflow-y-auto bg-[#080d20]/96 p-4 transition duration-500 md:p-5 ${activeTeamIndex === index ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"}`}>
                    <span className="w-fit bg-[#0087cb] px-2.5 py-1.5 text-[9px] font-black uppercase text-black">{member.category}</span>
                    <h3 className="mt-3 text-lg font-black leading-tight text-white md:text-xl">{member.name}</h3>
                    <p className="mt-4 text-[11px] leading-[1.65] text-zinc-300 md:text-xs">{member.biography}</p>
                  </div>
                  <div className={`absolute inset-x-0 bottom-0 p-5 transition duration-300 ${activeTeamIndex === index ? "pointer-events-none opacity-0" : "opacity-100 group-hover:opacity-0 group-focus-visible:opacity-0"}`}>
                    <span className="inline-block bg-[#0087cb] px-2.5 py-1.5 text-[9px] font-black uppercase text-black">{member.category}</span>
                    <h3 className="mt-3 text-xl font-black leading-tight text-white md:text-2xl">{member.name}</h3>
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
            <h2 className="text-3xl font-black uppercase leading-tight tracking-normal md:text-4xl lg:text-5xl">{copy.figuresTitle}</h2>
            <span className="mx-auto mt-5 block h-px w-16 bg-[#0087cb]" />
          </div>
          <div className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {figures.map((figure, index) => <AnimatedFigure key={figure.label} figure={figure} index={index} />)}
          </div>
        </div>
      </section>

      <section className="relative border-t border-white/10 bg-[#111936] px-5 py-16 sm:px-6 md:px-12 md:py-24 lg:px-20">
        <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:58px_58px]" />
        <div className="relative mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {autoHubGallery.map((src, index) => (
            <motion.button
              key={src}
              type="button"
              {...reveal}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: Math.min(index * 0.03, 0.15) }}
              onClick={() => setActiveGalleryIndex(index)}
              className="group relative aspect-[4/3] cursor-pointer overflow-hidden border border-white/10 bg-white"
              aria-label={isAr ? "فتح صورة المشروع" : "Open project image"}
            >
              <Image src={src} alt="" fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-contain transition duration-500 group-hover:brightness-105" />
              <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center border border-white/20 bg-black/55 text-white opacity-0 backdrop-blur transition group-hover:opacity-100">
                <Maximize2 size={17} />
              </span>
            </motion.button>
          ))}
        </div>
      </section>

      {activeGalleryIndex !== null ? (
        <div className="fixed inset-0 z-[310] flex items-center justify-center bg-black/92 px-4 py-5 backdrop-blur-md md:px-8" role="dialog" aria-modal="true" aria-label={isAr ? "صورة المشروع" : "Project image"}>
          <button type="button" onClick={() => setActiveGalleryIndex(null)} className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center bg-white text-black transition hover:bg-[#43becc] md:right-7 md:top-7" aria-label={isAr ? "إغلاق" : "Close"}><X size={20} /></button>
          <button type="button" onClick={() => setActiveGalleryIndex((current) => current === null ? current : (current - 1 + autoHubGallery.length) % autoHubGallery.length)} className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/15 bg-black/55 text-white transition hover:bg-white hover:text-black md:left-7" aria-label={isAr ? "السابق" : "Previous"}><ChevronLeft size={22} /></button>
          <button type="button" onClick={() => setActiveGalleryIndex((current) => current === null ? current : (current + 1) % autoHubGallery.length)} className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/15 bg-black/55 text-white transition hover:bg-white hover:text-black md:right-7" aria-label={isAr ? "التالي" : "Next"}><ChevronRight size={22} /></button>
          <div className="relative h-full max-h-[86vh] w-full max-w-6xl overflow-hidden border border-white/10 bg-[#080d20]">
            <Image src={autoHubGallery[activeGalleryIndex]} alt="" fill sizes="100vw" className="object-contain" priority />
          </div>
        </div>
      ) : null}
    </main>
  );
}
