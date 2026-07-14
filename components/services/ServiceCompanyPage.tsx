"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Image as ImageIcon, Play } from "lucide-react";

export type ServicePartnersContent = {
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

type Partner = ServicePartnersContent["partners"][number];
type EcosystemColumn = ServicePartnersContent["ecosystem"]["columns"][number];

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

function galleryItems(id: string): GalleryItem[] {
  if (id === "fft") {
    return [
      {
        label: "FFT Partnership Signing Day",
        src: "/fft/main.jpeg",
        type: "image",
        featured: true,
      },
      {
        label: "FFT Technology",
        src: "/fft/FFT/IMG-20260623-WA0015.jpg",
        type: "image",
      },
      {
        label: "FFT Partnership",
        src: "/fft/FFT/IMG-20260623-WA0013.jpg",
        type: "image",
      },
      {
        label: "FFT Site Visit",
        src: "/fft/FFT/IMG-20260623-WA0010.jpg",
        type: "image",
      },
      {
        label: "FFT Facilities",
        src: "/fft/FFT/IMG-20260623-WA0009.jpg",
        type: "image",
      },
      {
        label: "FFT Video",
        src: "/fft/FFT/VID-20260624-WA0031.mp4",
        poster: "/fft/FFT/IMG-20260623-WA0015.jpg",
        type: "video",
      },
      {
        label: "FFT Walkthrough",
        src: "/fft/FFT/VID-20260623-WA0008.mp4",
        poster: "/fft/FFT/IMG-20260623-WA0013.jpg",
        type: "video",
      },
    ];
  }

  if (id === "cu") {
    return [
      {
        label: "CU Lightweight Technology",
        src: "/cu/IMG-20260622-WA0005.jpg",
        type: "image",
      },
      {
        label: "CU Partnership Video",
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

function companyHeroCopy(id: string) {
  if (id === "fft") {
    return {
      eyebrow: "FFT Company",
      title: "Intelligent Manufacturing Systems",
      paragraphs: [
        "Since 1974, we have stood for dynamism, solidity, global presence and a claim to technological leadership.",
        "As a leading global provider of innovative, flexible and complex manufacturing systems, we specialize in their development, project planning and implementation. We assume overall responsibility for turnkey solutions and carry out projects worldwide, including for the automotive and aviation industries.",
      ],
      href: "https://www.fft.de/en/",
    };
  }

  return {
    eyebrow: "CU Company",
    title: "Composite Lightweight Technologies",
    paragraphs: [
      "Composites United e. V. (CU), one of the world's largest networks for fiber-based multi-material lightweight design, emerged by the two associations Carbon Composites e. V. and CFK Valley e. V. About 350 members have joined to form this high-performance industry and research association to jointly develop lightweight design solutions for the future.",
    ],
    href: "https://composites-united.com/en/",
  };
}

function PartnerLogo({ id }: { id: string }) {
  if (id === "fft") {
    return (
      <div className="text-[clamp(3rem,5vw,5.8rem)] font-[1000] italic leading-none tracking-[-0.08em] text-[#45f5ca] drop-shadow-[0_0_18px_rgba(69,245,202,0.28)]">
        FFT
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center leading-none">
      <div className="text-[clamp(2.8rem,4.4vw,5rem)] font-[1000] tracking-[-0.12em]">
        <span className="text-[#006db1]">C</span>
        <span className="text-[#ef6a25]">U</span>
      </div>
      <span className="mt-1 text-[10px] font-black uppercase tracking-[0.08em] text-[#006db1]">
        Composites
      </span>
      <span className="text-[10px] font-black uppercase tracking-[0.08em] text-[#006db1]">
        United
      </span>
    </div>
  );
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

export default function ServiceCompanyPage({ partner, ecosystemColumn, locale }: Props) {
  const isAr = locale === "ar";
  const accent = accentFor(partner.id);
  const shortLabel = partner.id === "fft" ? "FFT" : "CU";
  const hero = companyHeroCopy(partner.id);
  const reduceMotion = useReducedMotion();
  const reveal = reduceMotion
    ? { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }
    : { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } };
  const revealTransition = { duration: 0.75, ease: "easeOut" as const };

  return (
    <main
      dir={isAr ? "rtl" : "ltr"}
      lang={locale}
      className={`min-h-screen bg-[#080d20] pt-24 text-white ${isAr ? "font-cairo" : ""}`}
      style={{ ["--accent" as string]: accent }}
    >
      <section className="relative flex min-h-[calc(100vh-6rem)] items-end overflow-hidden px-6 pb-16 pt-20 md:px-12 lg:px-20">
        {partner.id === "fft" || partner.id === "cu" ? (
          <Image
            src={partner.id === "fft" ? "/fft/main.jpeg" : "/cu/IMG-20260622-WA0005.jpg"}
            alt={partner.id === "fft" ? "FFT main visual" : "CU main visual"}
            fill
            priority
            sizes="100vw"
            className="absolute inset-0 object-cover opacity-45"
          />
        ) : (
          <video
            className="absolute inset-0 h-full w-full object-cover opacity-35"
            src="/hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        )}
        <div className="absolute inset-0 bg-[#080d20]/80" />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,#080d20_0%,rgba(8,13,32,0.76)_54%,rgba(8,13,32,0.46)_100%)]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            animate="show"
            variants={reveal}
            transition={revealTransition}
          >
            <Link
              href={`/${locale}/technology-partners`}
              className="mb-12 inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.22em] text-zinc-400 transition hover:text-white"
            >
              <ArrowLeft size={16} />
              Partners
            </Link>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            variants={reveal}
            transition={{ ...revealTransition, delay: reduceMotion ? 0 : 0.1 }}
            className="max-w-3xl"
          >
            <div className="mb-7 flex min-h-24 w-fit items-center justify-center border border-white/10 bg-[#080d20]/70 px-5 py-4 backdrop-blur">
              <PartnerLogo id={partner.id} />
            </div>
            <SectionKicker color={accent} className="mb-5">
              {hero.eyebrow}
            </SectionKicker>
            <h1 className="text-4xl font-black leading-tight tracking-tight md:text-6xl lg:text-7xl">
              {hero.title}
            </h1>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-zinc-300 md:text-lg">
              {hero.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <a
              href={hero.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center gap-3 px-6 py-4 text-xs font-black uppercase tracking-widest text-black transition hover:bg-white"
              style={{ backgroundColor: accent }}
            >
              Know more
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
              Gallery
            </SectionKicker>
            <h2 className="text-3xl font-black uppercase tracking-tight md:text-5xl">
              {shortLabel} Visual Gallery
            </h2>
          </div>
          <a
            href={hero.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white px-5 py-3 text-xs font-black uppercase tracking-widest text-black transition hover:bg-[#43becc]"
          >
            Know more
            <ArrowUpRight size={16} />
          </a>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-3">
          {galleryItems(partner.id).map((item, index) => (
            <motion.div
              key={item.label}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.22 }}
              variants={reveal}
              transition={{ ...revealTransition, delay: reduceMotion ? 0 : index * 0.07 }}
              className={`group relative overflow-hidden border border-white/10 bg-[#111936] ${
                item.featured
                  ? "aspect-[16/10] md:col-span-2 md:row-span-2 md:min-h-[520px]"
                  : "aspect-[4/3]"
              }`}
            >
              {item.src && item.type === "image" ? (
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="bg-[#080d20] object-contain transition duration-700 group-hover:scale-[1.02]"
                />
              ) : item.src && item.type === "video" ? (
                <div className="absolute inset-0 bg-black">
                  <video
                    poster={item.poster}
                    className="h-full w-full object-contain"
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
