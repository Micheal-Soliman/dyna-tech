"use client";

import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
  Building2,
  Clock3,
  Factory,
  Gauge,
  Wrench,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

export type ProjectsInvestmentContent = {
  hero: {
    kicker: string;
    title: string;
    description: string;
  };
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
  market: {
    kicker: string;
    title: string;
    description: string;
  };
  timeline: {
    title: string;
    items: string[];
  };
  partner: {
    title: string;
    description: string;
    ctaLabel: string;
  };
  closing: {
    title: string;
    description: string;
    ctaLabel: string;
  };
};

type Props = {
  content: ProjectsInvestmentContent;
  locale: string;
};

const projectFolderUrl = "https://drive.google.com/drive/folders/1xfF2ZEhj_q8TFFb1XGgPMJgj6YUMAUbY?usp=sharing";

const autoHubGallery = [
  "/autohub/The%20Auto%20Hub/IMG-20260623-WA0040.jpg",
  "/autohub/The%20Auto%20Hub/IMG-20260623-WA0038.jpg",
  "/autohub/The%20Auto%20Hub/IMG-20260623-WA0036.jpg",
  "/autohub/The%20Auto%20Hub/IMG-20260623-WA0034.jpg",
  "/autohub/The%20Auto%20Hub/IMG-20260623-WA0030.jpg",
  "/autohub/The%20Auto%20Hub/IMG-20260623-WA0029.jpg",
  "/autohub/The%20Auto%20Hub/IMG-20260623-WA0028.jpg",
  "/autohub/The%20Auto%20Hub/IMG-20260623-WA0027.jpg",
  "/autohub/The%20Auto%20Hub/IMG-20260623-WA0026.jpg",
];

const autoHubFigures = [
  {
    label: "Built-Up Area (BUA)",
    value: "6,500 sqm",
    description: "6,500 sqm of state-of-the-art facility space.",
  },
  {
    label: "Service Capacity",
    value: "36",
    description: "36 fully equipped work bays handling up to 40 vehicles daily.",
  },
  {
    label: "Strategic Infrastructure",
    value: "6",
    description: "Structured across 6 Strategic Business Units (SBUs).",
  },
  {
    label: "Financial Investment",
    value: "250M EGP",
    description: "250M EGP projected initial investment.",
  },
  {
    label: "Profitability",
    value: "12%",
    description: "12% expected Return on Investment (ROI).",
  },
  {
    label: "Leadership Expertise",
    value: "30 years",
    description: "Backed by 30 years of automotive industry management experience.",
  },
  {
    label: "Project Timeline",
    value: "Q4 2027",
    description: "Soft opening projected for Q4 2027.",
  },
  {
    label: "Market Innovation",
    value: "1st",
    description: "First service center in Egypt & MENA region featuring real-time BEV diagnostics powered by AI and Machine Learning.",
  },
];

function parseFigureValue(raw: string) {
  const value = String(raw ?? "").trim();
  const numericMatches = value.match(/\d+(?:[,.]\d+)?/g) ?? [];

  if (numericMatches.length !== 1) {
    return { numericValue: 0, prefix: "", suffix: value, precision: 0, canCount: false };
  }

  const match = value.match(/^([^0-9]*)(\d+(?:[,.]\d+)?)(.*)$/);
  if (!match) {
    return { numericValue: 0, prefix: "", suffix: value, precision: 0, canCount: false };
  }

  const prefix = match[1] ?? "";
  const numericText = (match[2] ?? "").replace(/,/g, "");
  const suffix = match[3] ?? "";
  const numericValue = Number.parseFloat(numericText);
  const precision = (numericText.split(".")[1] ?? "").length;

  return {
    numericValue: Number.isFinite(numericValue) ? numericValue : 0,
    prefix,
    suffix,
    precision,
    canCount: Number.isFinite(numericValue),
  };
}

function DynamicFigureCircle({
  figure,
  index,
}: {
  figure: (typeof autoHubFigures)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();
  const { numericValue, prefix, suffix, precision, canCount } = parseFigureValue(figure.value);
  const [count, setCount] = useState(reduceMotion || !canCount ? numericValue : 0);

  useEffect(() => {
    if (!isInView || !canCount) return;
    if (reduceMotion) {
      return;
    }

    const duration = 1250;
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Number((numericValue * eased).toFixed(precision)));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [canCount, isInView, numericValue, precision, reduceMotion]);

  const displayValue = canCount
    ? `${prefix}${count.toLocaleString("en-US", {
        maximumFractionDigits: precision,
        minimumFractionDigits: precision,
      })}${suffix}`
    : figure.value;

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, delay: index * 0.04, ease: "easeOut" }}
      className="group flex flex-col items-center text-center"
    >
      <div className="relative flex h-44 w-44 items-center justify-center rounded-full border border-[#0087cb]/40 bg-[#0a0f29] shadow-[0_0_46px_rgba(0,135,203,0.14)] transition duration-500 group-hover:-translate-y-1 group-hover:border-[#43becc]/80">
        <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_160deg,#0087cb,#43becc33,#8e257a,#0087cb)] opacity-75" />
        <div className="absolute inset-[3px] rounded-full bg-[#121b43]" />
        <div className="absolute inset-5 rounded-full border border-dashed border-white/12" />
        <div className="absolute inset-9 rounded-full bg-[#0a0f29]" />
        <span className="relative z-10 max-w-[132px] text-3xl font-black uppercase leading-none tracking-tight text-white">
          {displayValue}
        </span>
      </div>
      <h3 className="mt-5 max-w-[280px] text-sm font-black uppercase leading-tight tracking-wider text-[#43becc]">
        {figure.label}
      </h3>
      <p className="mt-3 max-w-[300px] text-sm leading-relaxed text-zinc-400">
        {figure.description}
      </p>
    </motion.article>
  );
}

function SectionKicker({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 flex items-center gap-4">
      <span className="h-px w-12 bg-[#0087cb]" />
      <p className="text-xs font-black uppercase tracking-[0.32em] text-[#0087cb]">
        {children}
      </p>
    </div>
  );
}

function AutoHubPage({ content, locale }: Props) {
  const isAr = locale === "ar";
  const units = content.businessUnits.units.slice(0, 6);

  return (
    <main
      dir={isAr ? "rtl" : "ltr"}
      lang={locale}
      className={`min-h-screen bg-[#0a0f29] pt-24 text-white selection:bg-[#0087cb] selection:text-black ${isAr ? "font-cairo" : ""}`}
    >
      <section className="relative flex min-h-[720px] items-end overflow-hidden px-5 pb-12 pt-28 sm:px-6 md:min-h-[calc(100vh-6rem)] md:px-12 md:pb-16 lg:px-20">
        <Image
          src="/autohub/main.jpeg"
          alt="The Auto Hub main visual"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 object-cover"
        />
        <div className="absolute inset-0 bg-[#0a0f29]/76" />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,#0a0f29_0%,rgba(10,15,41,0.72)_52%,rgba(10,15,41,0.42)_100%)]" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <div>
            <p className="mb-5 text-xs font-black uppercase tracking-[0.34em] text-[#43becc]">
              The Auto Hub
            </p>
            <h1 className="max-w-5xl text-[clamp(3rem,15vw,5rem)] font-black uppercase leading-[0.92] tracking-tight md:text-7xl lg:text-8xl">
              The Auto Hub
            </h1>
            <p className="mt-7 max-w-3xl text-lg font-semibold leading-relaxed text-zinc-200 md:text-xl">
              {content.hub.title}
            </p>
          </div>

          <div className="border border-white/10 bg-[#121b43]/78 p-5 backdrop-blur-md md:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.28em] text-[#43becc]">
                  {content.hub.statusLabel}
                </p>
                <p className="mt-3 text-base font-black leading-snug text-white">
                  {content.hub.status}
                </p>
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.28em] text-[#43becc]">
                  {content.hub.locationLabel}
                </p>
                <p className="mt-3 text-base font-black leading-snug text-white">
                  {content.hub.location}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-y border-white/10 bg-[#121b43]/70 px-5 py-16 sm:px-6 md:px-12 md:py-20 lg:px-20">
        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:58px_58px]" />
        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mx-auto mb-14 max-w-4xl text-center"
          >
            <SectionKicker>{content.hub.kicker}</SectionKicker>
            <h2 className="text-3xl font-black uppercase leading-tight tracking-tight md:text-5xl">
              The Auto Hub - Key Project Figures
            </h2>
          </motion.div>

          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {autoHubFigures.map((figure, index) => (
              <DynamicFigureCircle key={figure.label} figure={figure} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-6 md:px-12 md:py-20 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <SectionKicker>{content.businessUnits.kicker}</SectionKicker>
            <h2 className="text-3xl font-black uppercase leading-tight tracking-tight md:text-5xl">
              {content.businessUnits.title}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-zinc-400">
              {content.businessUnits.description}
            </p>
            <div className="mt-8 border border-white/10 bg-white/[0.03] p-6">
              <div className="mb-4 flex items-center gap-3 text-[#43becc]">
                <BrainCircuit size={20} />
                <span className="text-xs font-black uppercase tracking-[0.24em]">
                  Market Innovation
                </span>
              </div>
              <p className="text-sm leading-relaxed text-zinc-300">
                First service center in Egypt & MENA region featuring real-time Battery Electric Vehicle (BEV) diagnostics powered by AI and Machine Learning.
              </p>
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {units.map((unit, index) => {
              const Icon = index % 3 === 0 ? Wrench : index % 3 === 1 ? Factory : Building2;
              return (
                <motion.article
                  key={unit.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.55, delay: index * 0.04, ease: "easeOut" }}
                  className="border border-white/10 bg-[#121b43] p-6"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center bg-[#0a0f29] text-[#43becc]">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-base font-black uppercase leading-tight text-white">
                    {unit.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                    {unit.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#121b43]/70 px-5 py-16 sm:px-6 md:px-12 md:py-20 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div>
            <SectionKicker>Project Media</SectionKicker>
            <h2 className="text-3xl font-black uppercase leading-tight tracking-tight md:text-5xl">
              The Auto Hub Gallery
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-400">
              Visual references from The Auto Hub project site and development material.
            </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://drive.google.com/file/d/1e7T2TA76wLQKuOrvo1YQPdBcGADgrOqz/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white px-5 py-4 text-[11px] font-black uppercase tracking-widest text-black transition hover:bg-[#43becc] sm:px-6 sm:text-xs"
              >
                Open Video
                <ArrowUpRight size={16} />
              </a>
              <a
                href={projectFolderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border border-white/15 px-5 py-4 text-[11px] font-black uppercase tracking-widest text-white transition hover:border-[#43becc] hover:text-[#43becc] sm:px-6 sm:text-xs"
              >
                Open Folder
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {autoHubGallery.map((src, index) => (
              <motion.figure
                key={src}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.22 }}
                transition={{ duration: 0.5, delay: index * 0.03, ease: "easeOut" }}
                className="group relative aspect-[4/3] overflow-hidden border border-white/10 bg-white"
              >
                <Image
                  src={src}
                  alt={`The Auto Hub gallery image ${index + 1}`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f29]/72 via-transparent to-transparent opacity-80" />
                <figcaption className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-[#0a0f29]/80 p-4 text-xs font-black uppercase tracking-[0.22em] text-[#43becc] backdrop-blur">
                  Auto Hub 0{index + 1}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-6 md:px-12 md:py-20 lg:px-20">
        <div className="mx-auto max-w-7xl border border-[#0087cb]/30 bg-[#0087cb]/10 p-6 md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="mb-4 flex items-center gap-3 text-[#43becc]">
                <Gauge size={20} />
                <span className="text-xs font-black uppercase tracking-[0.24em]">
                  {content.market.kicker}
                </span>
              </div>
              <h2 className="text-3xl font-black uppercase leading-tight tracking-tight md:text-5xl">
                {content.market.title}
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-zinc-300">
                {content.market.description}
              </p>
            </div>
            <div className="grid gap-3">
              {content.timeline.items.map((item, index) => (
                <div key={item} className="flex items-center gap-4 border border-white/10 bg-[#0a0f29] p-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-[#0087cb] text-xs font-black text-black">
                    {index + 1}
                  </div>
                  <div className="flex items-center gap-3 text-sm font-bold text-zinc-300">
                    <Clock3 size={15} className="text-[#43becc]" />
                    {item}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function ProjectsInvestmentPage({ content, locale }: Props) {
  return <AutoHubPage content={content} locale={locale} />;
}
