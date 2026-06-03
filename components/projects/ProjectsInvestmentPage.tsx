"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  Clock3,
  Factory,
  Gauge,
  MapPin,
  Wrench,
} from "lucide-react";

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
    figures: { label: string; value: string }[];
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

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

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

function IndustrialVisual({
  label,
  mode,
}: {
  label: string;
  mode: "pipeline" | "hub" | "position";
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="group relative min-h-[360px] overflow-hidden border border-white/10 bg-[#050505] shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition-colors duration-300 hover:border-[#0087cb]/50"
    >
      <div className="absolute left-0 top-0 h-10 w-10 border-l border-t border-[#0087cb]/60" />
      <div className="absolute bottom-0 right-0 h-10 w-10 border-b border-r border-[#0087cb]/60" />
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(#0087cb33_1px,transparent_1px),linear-gradient(90deg,#0087cb33_1px,transparent_1px)] [background-size:42px_42px]" />
      <div className="absolute inset-x-8 top-1/2 h-px bg-gradient-to-r from-transparent via-[#0087cb] to-transparent" />
      <div className="absolute inset-y-8 left-1/2 w-px bg-gradient-to-b from-transparent via-[#43becc] to-transparent" />
      <div className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-[#43becc] transition-transform duration-700 group-hover:scale-x-100" />

      {mode === "pipeline" && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
            {[
              { icon: Factory, label: "Industrial" },
              { icon: Wrench, label: "Automotive" },
              { icon: Gauge, label: "Energy" },
              { icon: Building2, label: "Infrastructure" },
            ].map(({ icon: Icon, label: item }) => (
              <div
                key={item}
                className="flex h-24 w-24 flex-col items-center justify-center gap-3 border border-[#0087cb]/35 bg-black text-[#43becc] transition-all duration-300 group-hover:border-[#43becc]/70"
              >
                <Icon size={26} strokeWidth={1.5} />
                <span className="text-[9px] font-black uppercase tracking-wider text-zinc-400">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {mode === "hub" && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative flex h-44 w-44 items-center justify-center border border-[#0087cb]/45 bg-[#0087cb]/10 shadow-[0_0_40px_rgba(0,135,203,0.12)]">
            <span className="text-3xl font-black uppercase tracking-tight text-white">
              Hub
            </span>
            {["EV", "ICE", "Training", "Service"].map((item, index) => (
              <div
                key={item}
                  className="absolute flex h-14 w-24 items-center justify-center border border-white/10 bg-black text-[10px] font-bold uppercase tracking-wider text-zinc-300 transition-colors duration-300 group-hover:border-[#0087cb]/55"
                style={{
                  left: index % 2 === 0 ? "-42px" : "auto",
                  right: index % 2 === 1 ? "-42px" : "auto",
                  top: index < 2 ? "-22px" : "auto",
                  bottom: index >= 2 ? "-22px" : "auto",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      )}

      {mode === "position" && (
        <div className="absolute inset-0 flex items-center justify-center px-10">
          <div className="w-full max-w-md space-y-8">
            <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-zinc-500">
              <span>Market</span>
              <span>Integrated 5S</span>
            </div>
            <div className="relative h-2 bg-white/10">
              <div className="absolute inset-y-0 left-0 w-[78%] bg-[#0087cb]" />
              <div className="absolute left-[78%] top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 border border-[#43becc] bg-black" />
            </div>
            <div className="grid grid-cols-3 gap-3">
              {["Quality", "Training", "R&D"].map((item) => (
                <div
                  key={item}
                  className="border border-white/10 bg-black p-4 text-center text-[10px] font-bold uppercase tracking-wider text-zinc-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="absolute bottom-6 left-6 right-6 border-t border-white/10 pt-4">
        <p className="text-[10px] font-black uppercase tracking-[0.32em] text-[#0087cb]">
          {label}
        </p>
      </div>
    </motion.div>
  );
}

function KeyInfo({ content }: { content: ProjectsInvestmentContent }) {
  return (
    <div className="grid gap-px border border-white/10 bg-white/10 md:grid-cols-2">
      <motion.div
        whileHover={{ y: -3 }}
        className="bg-[#050505] p-6 transition-colors hover:bg-black"
      >
        <div className="mb-3 flex items-center gap-3 text-[#43becc]">
          <Clock3 size={18} />
          <span className="text-xs font-black uppercase tracking-widest">
            {content.hub.statusLabel}
          </span>
        </div>
        <p className="text-lg font-black leading-snug text-white">
          {content.hub.status}
        </p>
      </motion.div>
      <motion.div
        whileHover={{ y: -3 }}
        className="bg-[#050505] p-6 transition-colors hover:bg-black"
      >
        <div className="mb-3 flex items-center gap-3 text-[#43becc]">
          <MapPin size={18} />
          <span className="text-xs font-black uppercase tracking-widest">
            {content.hub.locationLabel}
          </span>
        </div>
        <p className="text-lg font-black leading-snug text-white">
          {content.hub.location}
        </p>
      </motion.div>
    </div>
  );
}

function FiguresGrid({ content }: { content: ProjectsInvestmentContent }) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-black uppercase tracking-widest text-white">
        {content.hub.figuresTitle}
      </h3>
      <div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
        {content.hub.figures.map((figure) => (
          <motion.div
            key={figure.label}
            whileHover={{ y: -3 }}
            className="group relative bg-[#050505] p-5 transition-colors hover:bg-black"
          >
            <div className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-[#0087cb] transition-transform duration-500 group-hover:scale-x-100" />
            <p className="text-[11px] font-bold uppercase tracking-wider text-zinc-500">
              {figure.label}
            </p>
            <p className="mt-2 text-xl font-black text-white">
              {figure.value}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function BusinessUnits({ content }: { content: ProjectsInvestmentContent }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {content.businessUnits.units.map((unit, index) => (
        <motion.article
          key={unit.title}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.45, delay: index * 0.04 }}
          className="group relative overflow-hidden border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-[#0087cb]/45 hover:bg-white/[0.05]"
        >
          <div className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-[#0087cb] transition-transform duration-500 group-hover:scale-x-100" />
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center border border-[#0087cb]/35 bg-black text-[#43becc]">
              {index % 3 === 0 ? (
                <Wrench size={18} />
              ) : index % 3 === 1 ? (
                <Factory size={18} />
              ) : (
                <Building2 size={18} />
              )}
            </div>
            <h3 className="text-base font-black uppercase leading-tight text-white">
              {unit.title}
            </h3>
          </div>
          <p className="text-sm leading-relaxed text-zinc-400">
            {unit.description}
          </p>
        </motion.article>
      ))}
    </div>
  );
}

function TimelineList({ content }: { content: ProjectsInvestmentContent }) {
  return (
    <div className="space-y-3">
      {content.timeline.items.map((item, index) => (
        <motion.div
          key={item}
          whileHover={{ x: 4 }}
          className="group flex items-center gap-4 border border-white/10 bg-[#050505] p-4 transition hover:border-[#0087cb]/45 hover:bg-black"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-[#0087cb] text-xs font-black text-black transition-transform group-hover:scale-105">
            {index + 1}
          </span>
          <span className="text-sm font-bold text-zinc-300">{item}</span>
        </motion.div>
      ))}
    </div>
  );
}

export default function ProjectsInvestmentPage({ content, locale }: Props) {
  const isAr = locale === "ar";

  return (
    <main
      dir={isAr ? "rtl" : "ltr"}
      lang={locale}
      className={`min-h-screen bg-[#030303] pt-32 text-white selection:bg-[#0087cb] selection:text-black ${isAr ? "font-cairo" : ""}`}
    >
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:58px_58px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0087cb] to-transparent" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <SectionKicker>{content.hero.kicker}</SectionKicker>
            <h1 className="max-w-4xl text-4xl font-black uppercase leading-[0.95] tracking-tight md:text-6xl lg:text-7xl">
              {content.hero.title}
            </h1>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="relative border border-white/10 border-l-[#0087cb] bg-black/50 p-6 shadow-[inset_4px_0_0_#0087cb] md:p-8"
          >
            <div className="absolute right-0 top-0 h-8 w-8 border-r border-t border-[#0087cb]/70" />
            <p className="text-lg font-semibold leading-relaxed text-[#43becc]">
              {content.hero.description}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-black/45 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <IndustrialVisual label={content.hero.kicker} mode="pipeline" />
          <div>
            <SectionKicker>{content.hub.kicker}</SectionKicker>
            <h2 className="text-3xl font-black uppercase leading-tight tracking-tight md:text-5xl">
              {content.hub.title}
            </h2>
            <div className="mt-7 space-y-4 text-base leading-relaxed text-zinc-400">
              {content.hub.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-9 space-y-8">
              <KeyInfo content={content} />
              <FiguresGrid content={content} />
            </div>

            <Link
              href={`/${locale}/case-study/automotive-hub`}
              className="mt-9 inline-flex items-center gap-3 bg-[#0087cb] px-6 py-4 text-xs font-black uppercase tracking-widest text-black transition hover:bg-white"
            >
              {content.hub.infoTitle}
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <SectionKicker>{content.businessUnits.kicker}</SectionKicker>
            <h2 className="text-3xl font-black uppercase leading-tight tracking-tight md:text-5xl">
              {content.businessUnits.title}
            </h2>
            <p className="mt-7 text-base leading-relaxed text-zinc-400">
              {content.businessUnits.description}
            </p>

            <div className="mt-9">
              <BusinessUnits content={content} />
            </div>
          </div>

          <IndustrialVisual label={content.businessUnits.kicker} mode="hub" />
        </div>
      </section>

      <section className="border-y border-white/10 bg-black/55 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <IndustrialVisual label={content.market.kicker} mode="position" />
          <div>
            <SectionKicker>{content.market.kicker}</SectionKicker>
            <h2 className="text-3xl font-black uppercase leading-tight tracking-tight md:text-5xl">
              {content.market.title}
            </h2>
            <p className="mt-7 text-base leading-relaxed text-zinc-400">
              {content.market.description}
            </p>

            <div className="mt-10 grid gap-8 md:grid-cols-[0.95fr_1.05fr]">
              <div>
                <h3 className="mb-4 text-sm font-black uppercase tracking-widest text-white">
                  {content.timeline.title}
                </h3>
                <TimelineList content={content} />
              </div>
              <div className="relative border border-white/10 bg-white/[0.03] p-6">
                <div className="absolute left-0 top-0 h-full w-px bg-[#0087cb]/50" />
                <h3 className="mb-4 text-sm font-black uppercase tracking-widest text-white">
                  {content.closing.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-400">
                  {content.closing.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="group relative mx-auto max-w-7xl overflow-hidden border border-[#0087cb]/30 bg-[#0087cb]/10 p-8 transition-colors hover:border-[#43becc]/70 md:p-12">
          <div className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-[#43becc] transition-transform duration-700 group-hover:scale-x-100" />
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-3xl font-black uppercase leading-tight tracking-tight md:text-5xl">
                {content.partner.title}
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-zinc-300">
                {content.partner.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-3 bg-white px-6 py-4 text-xs font-black uppercase tracking-widest text-black transition hover:bg-[#0087cb]"
              >
                {content.partner.ctaLabel}
                <ArrowUpRight size={16} />
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-3 border border-white/15 px-6 py-4 text-xs font-black uppercase tracking-widest text-white transition hover:border-[#0087cb]"
              >
                {content.closing.ctaLabel}
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export function ProjectsInvestmentDetailPage({ content, locale }: Props) {
  const isAr = locale === "ar";

  return (
    <main
      dir={isAr ? "rtl" : "ltr"}
      lang={locale}
      className={`min-h-screen bg-[#030303] pt-32 text-white selection:bg-[#0087cb] selection:text-black ${isAr ? "font-cairo" : ""}`}
    >
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:58px_58px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0087cb] to-transparent" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <Link
              href={`/${locale}/case-study`}
              className="mb-8 inline-flex items-center gap-3 text-xs font-black uppercase tracking-widest text-[#0087cb] transition hover:text-white"
            >
              <ArrowUpRight size={15} className="rotate-180" />
              {content.hero.kicker}
            </Link>
            <SectionKicker>{content.hub.kicker}</SectionKicker>
            <h1 className="max-w-4xl text-4xl font-black uppercase leading-[0.95] tracking-tight md:text-6xl lg:text-7xl">
              {content.hub.title}
            </h1>
          </div>
          <div className="relative border border-white/10 border-l-[#0087cb] bg-black/50 p-6 shadow-[inset_4px_0_0_#0087cb] md:p-8">
            <div className="absolute right-0 top-0 h-8 w-8 border-r border-t border-[#0087cb]/70" />
            <div className="space-y-4 text-base leading-relaxed text-zinc-400">
              {content.hub.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-black/45 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <IndustrialVisual label={content.hub.kicker} mode="hub" />
          <div className="space-y-10">
            <div>
              <SectionKicker>{content.hub.infoTitle}</SectionKicker>
              <KeyInfo content={content} />
            </div>
            <FiguresGrid content={content} />
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="mx-auto max-w-7xl px-6">
          <SectionKicker>{content.businessUnits.kicker}</SectionKicker>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h2 className="text-3xl font-black uppercase leading-tight tracking-tight md:text-5xl">
                {content.businessUnits.title}
              </h2>
              <p className="mt-7 text-base leading-relaxed text-zinc-400">
                {content.businessUnits.description}
              </p>
            </div>
            <BusinessUnits content={content} />
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-black/55 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
          <div>
            <SectionKicker>{content.market.kicker}</SectionKicker>
            <h2 className="text-3xl font-black uppercase leading-tight tracking-tight md:text-5xl">
              {content.market.title}
            </h2>
            <p className="mt-7 text-base leading-relaxed text-zinc-400">
              {content.market.description}
            </p>
          </div>
          <div>
            <SectionKicker>{content.timeline.title}</SectionKicker>
            <TimelineList content={content} />
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="group relative mx-auto max-w-7xl overflow-hidden border border-[#0087cb]/30 bg-[#0087cb]/10 p-8 transition-colors hover:border-[#43becc]/70 md:p-12">
          <div className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-[#43becc] transition-transform duration-700 group-hover:scale-x-100" />
          <h2 className="text-3xl font-black uppercase leading-tight tracking-tight md:text-5xl">
            {content.partner.title}
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-zinc-300">
            {content.partner.description}
          </p>
          <Link
            href={`/${locale}/contact`}
            className="mt-8 inline-flex items-center gap-3 bg-white px-6 py-4 text-xs font-black uppercase tracking-widest text-black transition hover:bg-[#0087cb]"
          >
            {content.partner.ctaLabel}
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
