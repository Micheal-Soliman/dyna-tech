"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Image as ImageIcon, Play } from "lucide-react";

export type TechnologyPartnerContent = {
  partners: {
    id: string;
    name: string;
    location?: string;
    title: string;
    paragraphs: string[];
    roleTitle: string;
    roleText: string;
    scopeTitle: string;
    scope: string[];
    milestoneTitle: string;
    milestoneText: string;
    ctaLabel: string;
    ctaHref: string;
  }[];
  ecosystem: {
    columns: {
      label: string;
      title: string;
      items: string[];
    }[];
  };
};

type Partner = TechnologyPartnerContent["partners"][number];
type EcosystemColumn = TechnologyPartnerContent["ecosystem"]["columns"][number];

type Props = {
  partner: Partner;
  ecosystemColumn: EcosystemColumn;
  locale: string;
};

function accentFor(id: string) {
  return id === "fft" ? "#0087cb" : "#43becc";
}

type GalleryItem = {
  label: string;
  src?: string;
  poster?: string;
  type?: "image" | "video";
  featured?: boolean;
};

function galleryItems(id: string, isAr: boolean): GalleryItem[] {
  if (id === "fft") {
    return [
      {
        label: isAr ? "يوم توقيع اتفاقية الشراكة مع FFT" : "FFT Partnership Agreement Signing Day",
        src: "/fft/main.jpeg",
        type: "image",
        featured: true,
      },
      {
        label: isAr ? "مقابلة الرئيس التنفيذي لـFFT - مترجمة إلى العربية" : "FFT CEO Interview - Arabic Subtitles",
        src: "/fft/FFT/VID-20260624-WA0031.mp4",
        poster: "/fft/main.jpeg",
        type: "video",
      },
      {
        label: isAr ? "الإنتاج الذكي لدى FFT" : "FFT Intelligent Production",
        src: "/fft/FFT/IMG-20260623-WA0010.jpg",
        type: "image",
      },
      {
        label: isAr ? "خمسون عاما من FFT" : "50 Years of FFT",
        src: "/fft/FFT/IMG-20260623-WA0013.jpg",
        type: "image",
      },
      {
        label: isAr ? "الهوية الرسمية لـFFT" : "FFT Official Identity",
        src: "/fft/FFT/IMG-20260623-WA0015.jpg",
        type: "image",
      },
      {
        label: isAr ? "جولة داخل أنظمة إنتاج FFT" : "Inside FFT Production Systems",
        src: "/fft/FFT/VID-20260623-WA0008.mp4",
        poster: "/fft/FFT/IMG-20260623-WA0010.jpg",
        type: "video",
      },
      {
        label: isAr ? "خمسون عاما من الابتكار" : "50 Years of Innovation",
        src: "/fft/FFT/IMG-20260623-WA0009.jpg",
        type: "image",
      },
    ];
  }

  if (id === "cu") {
    return [
      {
        label: isAr ? "اتفاقية الشراكة مع CU في Hannover Messe" : "CU Partnership at Hannover Messe",
        src: "/cu/IMG-20260622-WA0005.jpg",
        type: "image",
        featured: true,
      },
      {
        label: isAr ? "كلمة م. أحمد سرور في Hannover Messe" : "Eng. Ahmed Sorour's Speech at Hannover Messe",
        src: "/cu/VID-20260624-WA0032.mp4",
        poster: "/cu/IMG-20260622-WA0005.jpg",
        type: "video",
      },
    ];
  }

  const label = id === "fft" ? "FFT" : "CU";

  return [
    { label: `${label} Technology` },
    { label: `${label} Partnership` },
    { label: `${label} Gallery` },
  ];
}

function companyHeroCopy(id: string, isAr: boolean) {
  if (id === "fft") {
    return {
      eyebrow: "FFT production systems",
      title: "one step ahead in INTELLIGENT production",
      paragraphs: [
        "We Are Production Optimizers",
      ],
      href: "https://www.fft.de/en/",
    };
  }

  return {
    eyebrow: isAr ? "شبكة Composites United" : "Composites United Network",
    title: "Composites United e. V. (CU)",
    paragraphs: [
      isAr
        ? "تعد Composites United e. V. شبكة من الشركات والمؤسسات البحثية تغطي، من خلال تجمعاتها وشبكاتها في ألمانيا والنمسا وسويسرا، سلسلة القيمة الكاملة للإنشاءات خفيفة الوزن متعددة المواد القائمة على الألياف."
        : "Composites United e. V. is a network of companies and research institutions that covers the entire value chain for fiber-based multi-material lightweight construction with its clusters and networks in Germany, Austria, and Switzerland.",
    ],
    href: "https://composites-united.com/en/",
  };
}

function PartnerLogo({ id }: { id: string }) {
  return (
    <Image
      src={id === "fft" ? "/logo-fft.png" : "/logo-cu.png"}
      alt={id === "fft" ? "FFT Produktionssysteme official logo" : "Composites United official logo"}
      width={id === "fft" ? 952 : 959}
      height={id === "fft" ? 376 : 729}
      className={id === "fft" ? "h-16 w-auto md:h-20" : "h-20 w-auto md:h-24"}
    />
  );
}

function mediaSectionCopy(id: string, isAr: boolean) {
  if (id === "fft") {
    return isAr
      ? { kicker: "الشراكة والإنتاج", title: "FFT: اتفاقية وشراكة وإنتاج ذكي" }
      : { kicker: "Partnership & Production", title: "FFT Partnership And Intelligent Production" };
  }

  return isAr
    ? { kicker: "الشراكة في Hannover Messe", title: "CU: اتفاقية الشراكة والكلمة الرئيسية" }
    : { kicker: "Partnership At Hannover Messe", title: "CU Partnership And Hannover Messe Speech" };
}

function mediaBadge(isAr: boolean, type?: "image" | "video") {
  if (type === "video") {
    return isAr ? "فيديو" : "Video";
  }

  return isAr ? "صورة" : "Image";
}

function SectionKicker({
  children,
  color,
  className = "mb-4",
}: {
  children: React.ReactNode;
  color: string;
  className?: string;
}) {
  return (
    <div className={`inline-flex flex-col gap-3 ${className}`}>
      <p className="text-xs font-black uppercase tracking-[0.3em]" style={{ color }}>
        {children}
      </p>
      <span className="h-px w-16" style={{ backgroundColor: color }} />
    </div>
  );
}

export default function TechnologyPartnerPage({ partner, ecosystemColumn, locale }: Props) {
  const isAr = locale === "ar";
  const accent = accentFor(partner.id);
  const hero = companyHeroCopy(partner.id, isAr);
  const mediaCopy = mediaSectionCopy(partner.id, isAr);
  const reduceMotion = useReducedMotion();
  const reveal = reduceMotion
    ? { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }
    : { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } };
  const revealTransition = { duration: 0.75, ease: "easeOut" as const };

  return (
    <main
      dir={isAr ? "rtl" : "ltr"}
      lang={locale}
      className="min-h-screen bg-[#080d20] pt-24 text-white"
      style={{ ["--accent" as string]: accent }}
    >
      <section className="relative flex min-h-[540px] items-center overflow-hidden px-6 py-12 md:px-12 md:py-10 lg:min-h-[560px] lg:px-20">
        <video
          className="absolute inset-0 h-full w-full object-cover object-center"
          poster={partner.id === "fft" ? "/fft/main.jpeg" : "/cu/IMG-20260622-WA0005.jpg"}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={partner.id === "fft" ? "FFT partnership video" : "CU partnership video"}
        >
          <source
            src={
              partner.id === "fft"
                ? "/fft/FFT/VID-20260624-WA0031.mp4"
                : "/cu/VID-20260624-WA0032.mp4"
            }
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-[#080d20]/20" />
        <div
          className={`absolute inset-0 ${
            isAr
              ? "bg-[linear-gradient(270deg,rgba(8,13,32,0.76)_0%,rgba(8,13,32,0.56)_48%,rgba(8,13,32,0.08)_100%)]"
              : "bg-[linear-gradient(90deg,rgba(8,13,32,0.76)_0%,rgba(8,13,32,0.56)_48%,rgba(8,13,32,0.08)_100%)]"
          }`}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(8,13,32,0.7)_0%,transparent_32%,rgba(8,13,32,0.12)_100%)]" />

        <div className="relative z-10 mx-auto w-full max-w-[1440px]">
          <motion.div
            initial="hidden"
            animate="show"
            variants={reveal}
            transition={revealTransition}
          >
            <Link
              href={`/${locale}/technology-partners`}
              className="mb-5 inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.22em] text-zinc-300 transition hover:text-white"
            >
              <ArrowLeft size={16} />
              {isAr ? "الشركاء" : "Partners"}
            </Link>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            variants={reveal}
            transition={{ ...revealTransition, delay: reduceMotion ? 0 : 0.1 }}
            className="max-w-5xl"
          >
            <div className="mb-4 flex flex-col items-start">
              <SectionKicker color={accent} className="mb-0">
                {hero.eyebrow}
              </SectionKicker>
              <div className="mt-4 flex min-h-20 w-fit items-center justify-center border border-white/20 bg-white/95 px-5 py-3 backdrop-blur">
                <PartnerLogo id={partner.id} />
              </div>
            </div>
            <h1 className="max-w-5xl text-4xl font-black leading-[1.02] tracking-normal md:text-6xl xl:text-[4rem]">
              {hero.title}
            </h1>
            <div className="mt-4 max-w-3xl space-y-3 text-base leading-relaxed text-zinc-200 md:text-lg">
              {hero.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <a
              href={hero.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-3 px-6 py-4 text-xs font-black uppercase tracking-widest text-black transition hover:bg-white"
              style={{ backgroundColor: accent }}
            >
              {isAr ? "اعرف المزيد" : "Know more"}
              <ArrowUpRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-14 md:px-12 lg:grid-cols-[1fr_0.85fr] lg:px-20">
        <motion.article
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.22 }}
          variants={reveal}
          transition={revealTransition}
          className="border border-white/10 bg-[#111936] p-7 md:p-9"
        >
          <SectionKicker color={accent}>{partner.roleTitle}</SectionKicker>
          <p className="text-lg leading-relaxed text-zinc-300 md:text-xl">
            {partner.roleText}
          </p>

          <h2 className="mt-10 text-2xl font-black uppercase tracking-tight">
            {partner.scopeTitle}
          </h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {partner.scope.map((item) => (
              <div key={item} className="flex items-center gap-3 border border-white/10 bg-[#080d20] p-4 text-sm font-bold text-zinc-300">
                <CheckCircle2 size={16} style={{ color: accent }} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.article>

        <motion.aside
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.22 }}
          variants={reveal}
          transition={{ ...revealTransition, delay: reduceMotion ? 0 : 0.08 }}
          className="border border-white/10 bg-[#111936] p-7 md:p-9"
        >
          <SectionKicker color={accent}>{ecosystemColumn.label}</SectionKicker>
          <h2 className="text-3xl font-black uppercase tracking-tight">
            {ecosystemColumn.title}
          </h2>
          <ul className="mt-7 space-y-4">
            {ecosystemColumn.items.map((item) => (
              <li key={item} className="border-b border-white/10 pb-3 text-sm font-bold uppercase tracking-wide text-zinc-400">
                {item}
              </li>
            ))}
          </ul>
        </motion.aside>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-12 lg:px-20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.26 }}
          variants={reveal}
          transition={revealTransition}
          className="mb-8 flex flex-wrap items-end justify-between gap-5"
        >
          <div>
            <SectionKicker color={accent} className="mb-3">
              {mediaCopy.kicker}
            </SectionKicker>
            <h2 className="text-3xl font-black uppercase tracking-tight md:text-5xl">
              {mediaCopy.title}
            </h2>
          </div>
          <a
            href={hero.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white px-5 py-3 text-xs font-black uppercase tracking-widest text-black transition hover:bg-[#43becc]"
          >
            {isAr ? "اعرف المزيد" : "Know more"}
            <ArrowUpRight size={16} />
          </a>
        </motion.div>

        <div className="grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems(partner.id, isAr).map((item, index) => (
            <motion.div
              key={item.label}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.22 }}
              variants={reveal}
              transition={{ ...revealTransition, delay: reduceMotion ? 0 : index * 0.07 }}
              className="group relative aspect-[4/3] w-full overflow-hidden border border-white/10 bg-[#111936]"
            >
              {item.src && item.type === "image" ? (
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="bg-[#080d20] object-contain object-center transition duration-500 group-hover:brightness-110"
                />
              ) : item.src && item.type === "video" ? (
                <div className="absolute inset-0 bg-black">
                  <video
                    poster={item.poster}
                    className="h-full w-full object-contain object-center"
                    muted
                    playsInline
                    preload="metadata"
                    controls
                  >
                    <source src={item.src} type="video/mp4" />
                  </video>
                </div>
              ) : (
                <>
                  <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:38px_38px]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ImageIcon size={34} className="text-white/30 transition group-hover:text-white/60" />
                  </div>
                </>
              )}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080d20]/88 via-[#080d20]/5 to-transparent" />
              {item.type === "video" && (
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-black/55 text-white shadow-[0_18px_60px_rgba(0,0,0,0.45)] backdrop-blur-sm transition duration-300 group-hover:scale-105 group-hover:bg-[#0087cb]">
                    <Play size={26} fill="currentColor" className="translate-x-0.5" />
                  </div>
                </div>
              )}
              <div className="pointer-events-none absolute right-5 top-5 border border-white/20 bg-black/70 px-3 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-white backdrop-blur-sm">
                {mediaBadge(isAr, item.type)}
              </div>
              {item.featured && (
                <div className="pointer-events-none absolute left-5 top-5 border border-white/20 bg-[#0087cb] px-3 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-black shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
                  {isAr ? "مميزة" : "Featured"}
                </div>
              )}
              <div className={`pointer-events-none absolute left-0 border-t border-white/10 bg-[#080d20]/82 p-5 backdrop-blur ${
                item.type === "video" ? "top-0 max-w-[calc(100%-7.5rem)] border-b border-r border-t-0" : "bottom-0 right-0"
              }`}>
                <span className="text-xs font-black uppercase tracking-[0.22em]" style={{ color: accent }}>
                  0{index + 1}
                </span>
                <p className="mt-2 text-sm font-black uppercase tracking-wide text-white">
                  {item.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
