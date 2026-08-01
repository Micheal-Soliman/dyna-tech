"use client";

import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  BrainCircuit,
  Building2,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Factory,
  Gauge,
  Maximize2,
  Play,
  Wrench,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

export type AutoHubContent = {
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
  content: AutoHubContent;
  locale: string;
};

type GalleryMedia = {
  src: string;
  type: "image" | "video";
  poster?: string;
};

const autoHubGallery: GalleryMedia[] = [
  { src: "/autohub/The%20Auto%20Hub/IMG-20260623-WA0017.jpg", type: "image" },
  { src: "/autohub/The%20Auto%20Hub/IMG-20260623-WA0019.jpg", type: "image" },
  { src: "/autohub/The%20Auto%20Hub/IMG-20260623-WA0021.jpg", type: "image" },
  { src: "/autohub/The%20Auto%20Hub/IMG-20260623-WA0027.jpg", type: "image" },
  { src: "/autohub/The%20Auto%20Hub/IMG-20260623-WA0028.jpg", type: "image" },
  { src: "/autohub/The%20Auto%20Hub/IMG-20260623-WA0023.jpg", type: "image" },
  { src: "/autohub/The%20Auto%20Hub/IMG-20260623-WA0022.jpg", type: "image" },
  { src: "/autohub/The%20Auto%20Hub/IMG-20260623-WA0024.jpg", type: "image" },
  { src: "/autohub/The%20Auto%20Hub/IMG-20260623-WA0024%281%29.jpg", type: "image" },
  { src: "/autohub/The%20Auto%20Hub/IMG-20260623-WA0025.jpg", type: "image" },
  { src: "/autohub/The%20Auto%20Hub/IMG-20260623-WA0026.jpg", type: "image" },
  { src: "/autohub/The%20Auto%20Hub/IMG-20260623-WA0029.jpg", type: "image" },
  { src: "/autohub/The%20Auto%20Hub/IMG-20260623-WA0030.jpg", type: "image" },
  { src: "/autohub/The%20Auto%20Hub/IMG-20260623-WA0034.jpg", type: "image" },
  { src: "/autohub/The%20Auto%20Hub/IMG-20260623-WA0036.jpg", type: "image" },
  { src: "/autohub/The%20Auto%20Hub/IMG-20260623-WA0038.jpg", type: "image" },
  { src: "/autohub/The%20Auto%20Hub/IMG-20260623-WA0040.jpg", type: "image" },
];

function galleryNumber(index: number) {
  return String(index + 1).padStart(2, "0");
}

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

function SectionKicker({
  children,
  tone = "blue",
}: {
  children: React.ReactNode;
  tone?: "blue" | "cyan";
}) {
  const textColor = tone === "cyan" ? "text-[#43becc]" : "text-[#0087cb]";
  const lineColor = tone === "cyan" ? "bg-[#43becc]" : "bg-[#0087cb]";

  return (
    <div className="mb-4 inline-flex flex-col gap-3">
      <p className={`text-xs font-black uppercase tracking-[0.32em] ${textColor}`}>
        {children}
      </p>
      <span className={`h-px w-16 self-center ${lineColor}`} />
    </div>
  );
}

function AutoHubContentView({ content, locale }: Props) {
  const isAr = locale === "ar";
  const units = content.businessUnits.units.slice(0, 6);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState<number | null>(null);
  const activeGalleryItem =
    activeGalleryIndex === null ? null : autoHubGallery[activeGalleryIndex];

  const showPreviousGalleryItem = () => {
    setActiveGalleryIndex((current) =>
      current === null
        ? current
        : (current - 1 + autoHubGallery.length) % autoHubGallery.length,
    );
  };

  const showNextGalleryItem = () => {
    setActiveGalleryIndex((current) =>
      current === null ? current : (current + 1) % autoHubGallery.length,
    );
  };

  useEffect(() => {
    if (activeGalleryIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveGalleryIndex(null);
      }

      if (event.key === "ArrowLeft") {
        setActiveGalleryIndex((current) =>
          current === null
            ? current
            : (current - 1 + autoHubGallery.length) % autoHubGallery.length,
        );
      }

      if (event.key === "ArrowRight") {
        setActiveGalleryIndex((current) =>
          current === null ? current : (current + 1) % autoHubGallery.length,
        );
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeGalleryIndex]);

  return (
    <main
      dir={isAr ? "rtl" : "ltr"}
      lang={locale}
      className="min-h-screen bg-[#0a0f29] pt-24 text-white selection:bg-[#0087cb] selection:text-black"
    >
      <section className="relative flex min-h-[720px] items-end overflow-hidden px-5 pb-12 pt-28 sm:px-6 md:min-h-[calc(100vh-6rem)] md:px-12 md:pb-16 lg:px-20">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Auto Hub hero video"
        />
        <div className="absolute inset-0 bg-[#0a0f29]/76" />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,#0a0f29_0%,rgba(10,15,41,0.72)_52%,rgba(10,15,41,0.42)_100%)]" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <div>
            <div className="mb-5">
              <SectionKicker tone="cyan">
              Auto Hub
              </SectionKicker>
            </div>
            <h1 className="max-w-5xl text-[clamp(3rem,15vw,5rem)] font-black uppercase leading-[0.92] tracking-tight md:text-7xl lg:text-8xl">
              Auto Hub
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
              Auto Hub - Key Project Figures
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
                Auto Hub Gallery
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-400">
                Visual references from the Auto Hub site and development material.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {autoHubGallery.map((item, index) => (
              <motion.figure
                key={item.src}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.22 }}
                transition={{ duration: 0.5, delay: index * 0.03, ease: "easeOut" }}
                className="group relative aspect-[4/3] overflow-hidden border border-white/10 bg-white"
              >
                <button
                  type="button"
                  onClick={() => setActiveGalleryIndex(index)}
                  className="absolute inset-0 cursor-pointer text-left"
                  aria-label={`Open Auto Hub media ${galleryNumber(index)}`}
                >
                  {item.type === "image" ? (
                    <Image
                      src={item.src}
                      alt={`Auto Hub gallery image ${galleryNumber(index)}`}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="bg-white object-contain transition duration-700 group-hover:scale-[1.02]"
                    />
                  ) : (
                    <video
                      poster={item.poster}
                      className="h-full w-full bg-black object-contain"
                      muted
                      playsInline
                      preload="metadata"
                    >
                      <source src={item.src} type="video/mp4" />
                    </video>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f29]/72 via-transparent to-transparent opacity-80" />
                  {item.type === "video" ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-black/55 text-white backdrop-blur">
                        <Play size={24} fill="currentColor" className="translate-x-0.5" />
                      </div>
                    </div>
                  ) : (
                    <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center border border-white/20 bg-black/45 text-white opacity-0 backdrop-blur transition group-hover:opacity-100">
                      <Maximize2 size={17} />
                    </div>
                  )}
                  <figcaption className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-[#0a0f29]/80 p-4 text-xs font-black uppercase tracking-[0.22em] text-[#43becc] backdrop-blur">
                    Auto Hub {galleryNumber(index)}
                  </figcaption>
                </button>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {activeGalleryItem && activeGalleryIndex !== null && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/92 px-4 py-5 backdrop-blur-md md:px-8"
          role="dialog"
          aria-modal="true"
          aria-label={`Auto Hub media ${galleryNumber(activeGalleryIndex)}`}
        >
          <button
            type="button"
            onClick={() => setActiveGalleryIndex(null)}
            className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center border border-white/15 bg-white text-black transition hover:bg-[#43becc] md:right-7 md:top-7"
            aria-label="Close gallery"
          >
            <X size={20} />
          </button>

          <button
            type="button"
            onClick={showPreviousGalleryItem}
            className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/15 bg-white/10 text-white backdrop-blur transition hover:bg-white hover:text-black md:left-7"
            aria-label="Previous media"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            type="button"
            onClick={showNextGalleryItem}
            className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/15 bg-white/10 text-white backdrop-blur transition hover:bg-white hover:text-black md:right-7"
            aria-label="Next media"
          >
            <ChevronRight size={22} />
          </button>

          <div className="relative flex h-full max-h-[86vh] w-full max-w-6xl items-center justify-center overflow-hidden border border-white/10 bg-[#0a0f29] shadow-[0_30px_120px_rgba(0,0,0,0.65)]">
            {activeGalleryItem.type === "image" ? (
              <Image
                src={activeGalleryItem.src}
                alt={`Auto Hub gallery image ${galleryNumber(activeGalleryIndex)}`}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            ) : (
              <video
                className="h-full w-full object-contain"
                poster={activeGalleryItem.poster}
                controls
                autoPlay
                playsInline
              >
                <source src={activeGalleryItem.src} type="video/mp4" />
              </video>
            )}
          </div>

          <div className="absolute bottom-5 left-1/2 z-20 -translate-x-1/2 border border-white/10 bg-[#0a0f29]/88 px-5 py-3 text-center backdrop-blur">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#43becc]">
              Auto Hub {galleryNumber(activeGalleryIndex)}
            </p>
            <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white/45">
              {activeGalleryIndex + 1} / {autoHubGallery.length}
            </p>
          </div>
        </div>
      )}

      <section className="px-5 py-16 sm:px-6 md:px-12 md:py-20 lg:px-20">
        <div className="mx-auto max-w-7xl border border-[#0087cb]/30 bg-[#0087cb]/10 p-6 md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="mb-4 text-[#43becc]">
                <Gauge size={20} />
                <div className="mt-3">
                  <SectionKicker tone="cyan">
                  {content.market.kicker}
                  </SectionKicker>
                </div>
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

export default function AutoHubPage({ content, locale }: Props) {
  return <AutoHubContentView content={content} locale={locale} />;
}
