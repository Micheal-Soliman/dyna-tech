"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Camera,
  Filter,
  Handshake,
  Image as ImageIcon,
  MapPin,
  Newspaper,
  Play,
  Video,
} from "lucide-react";

export type EventsMediaContent = {
  hero: {
    kicker: string;
    title: string;
    description: string;
  };
  featured: {
    kicker: string;
    ctaLabel: string;
    events: {
      title: string;
      description: string;
      location?: string;
      date?: string;
    }[];
  };
  press: {
    title: string;
    filterLabel: string;
    years: string[];
  };
  gallery: {
    title: string;
    photoLabel: string;
    videoLabel: string;
    items: string[];
  };
};

type Props = {
  content: EventsMediaContent;
  locale: string;
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function SectionKicker({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4">
      <p className="inline-flex border border-[#0087cb]/35 bg-[#0087cb]/10 px-3 py-2 text-xs font-black uppercase tracking-[0.24em] text-[#43becc]">
        {children}
      </p>
    </div>
  );
}

function HeroMediaPanel({ content }: { content: EventsMediaContent }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.18, ease: "easeOut" }}
      className="group relative overflow-hidden border border-white/10 bg-black/70 p-4 shadow-[0_30px_90px_rgba(0,0,0,0.45)] transition-colors duration-300 hover:border-[#0087cb]/55 md:p-5"
    >
      <div className="absolute left-0 top-0 h-12 w-12 border-l border-t border-[#0087cb]/70" />
      <div className="absolute bottom-0 right-0 h-12 w-12 border-b border-r border-[#43becc]/60" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(#0087cb_1px,transparent_1px),linear-gradient(90deg,#0087cb_1px,transparent_1px)] [background-size:38px_38px]" />
      <div className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-[#43becc] transition-transform duration-700 group-hover:scale-x-100" />

      <div className="relative z-10">
        <div className="mb-4 flex items-center justify-between gap-4 border-b border-white/10 pb-3">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center border border-[#0087cb]/40 bg-[#0087cb]/10 text-[#43becc]">
              <Camera size={20} strokeWidth={1.6} />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#43becc]">
                {content.hero.kicker}
              </p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-zinc-600">
                {content.gallery.title}
              </p>
            </div>
          </div>
          <div className="hidden border border-white/10 px-3 py-2 text-[10px] font-black uppercase tracking-widest text-zinc-500 sm:block">
            {content.featured.events.length} Events
          </div>
        </div>

        <div className="relative mb-4 min-h-[210px] overflow-hidden border border-white/10 bg-[#050505]">
          <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(#0087cb33_1px,transparent_1px),linear-gradient(90deg,#0087cb33_1px,transparent_1px)] [background-size:42px_42px]" />
          <div className="absolute inset-x-8 top-1/2 h-px bg-gradient-to-r from-transparent via-[#0087cb] to-transparent" />
          <div className="absolute inset-y-8 left-1/2 w-px bg-gradient-to-b from-transparent via-[#43becc] to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-20 w-20 items-center justify-center border border-[#0087cb]/50 bg-black text-[#0087cb] shadow-[0_0_36px_rgba(0,135,203,0.18)] transition-transform duration-300 group-hover:scale-105">
              <Play size={30} />
            </div>
          </div>
          <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-4 border-t border-white/10 pt-4">
            <span className="text-[10px] font-black uppercase tracking-widest text-white">
              {content.featured.kicker}
            </span>
            <span className="text-[10px] font-black uppercase tracking-widest text-[#43becc]">
              {content.press.title}
            </span>
          </div>
        </div>

        <div className="space-y-2">
          {content.featured.events.map((event) => (
            <div
              key={event.title}
              className="flex items-center justify-between gap-4 border border-white/10 bg-white/[0.03] px-4 py-2.5 transition-colors hover:border-[#0087cb]/45 hover:bg-white/[0.055]"
            >
              <div className="min-w-0">
                <p className="truncate text-xs font-black uppercase tracking-wide text-white">
                  {event.title}
                </p>
                <p className="mt-1 truncate text-[10px] font-bold uppercase tracking-widest text-zinc-600">
                  {event.location}
                </p>
              </div>
              <span className="shrink-0 text-[10px] font-black uppercase tracking-widest text-[#43becc]">
                {event.date}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function EventCard({
  event,
  index,
}: {
  event: EventsMediaContent["featured"]["events"][number];
  index: number;
}) {
  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="group relative overflow-hidden border border-white/10 bg-white/[0.03] transition hover:-translate-y-1 hover:border-[#0087cb]/50 hover:bg-white/[0.05]"
    >
      <div className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-[#0087cb] transition-transform duration-500 group-hover:scale-x-100" />
      <div className="relative flex min-h-56 items-center justify-center border-b border-white/10 bg-[#050505]">
        <div className="absolute inset-0 opacity-15 [background-image:linear-gradient(#0087cb33_1px,transparent_1px),linear-gradient(90deg,#0087cb33_1px,transparent_1px)] [background-size:34px_34px]" />
        <div className="absolute left-6 top-6 h-10 w-10 border-l border-t border-[#0087cb]/60" />
        <div className="absolute bottom-6 right-6 h-10 w-10 border-b border-r border-[#0087cb]/60" />
        <ImageIcon
          className="relative z-10 text-[#0087cb]/45"
          size={46}
        />
        {event.date && (
          <span className="absolute right-5 top-5 border border-white/10 bg-black px-3 py-2 text-[10px] font-black uppercase tracking-widest text-zinc-300">
            {event.date}
          </span>
        )}
      </div>
      <div className="p-6">
        {event.location && (
          <div className="mb-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#43becc]">
            <MapPin size={14} />
            {event.location}
          </div>
        )}
        <h3
          className="text-2xl font-black uppercase leading-tight tracking-tight text-white transition-colors group-hover:text-[#0087cb]"
        >
          {event.title}
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-zinc-400">
          {event.description}
        </p>
      </div>
    </motion.article>
  );
}

function GalleryBlock({ content }: { content: EventsMediaContent }) {
  return (
    <div className="grid min-h-[680px] gap-4 md:grid-cols-4 md:grid-rows-2">
      <motion.div
        whileHover={{ y: -4 }}
        className="group relative overflow-hidden border border-white/10 bg-[#050505] md:col-span-2 md:row-span-2"
      >
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(#0087cb33_1px,transparent_1px),linear-gradient(90deg,#0087cb33_1px,transparent_1px)] [background-size:42px_42px]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-20 w-20 items-center justify-center border border-[#0087cb]/45 bg-black text-[#0087cb] transition-transform duration-300 group-hover:scale-105">
            <Play size={34} />
          </div>
        </div>
        <div className="absolute left-6 top-6 h-10 w-10 border-l border-t border-[#0087cb]/60" />
        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/80 p-6">
          <p className="text-xs font-black uppercase tracking-widest text-white">
            {content.gallery.videoLabel}
          </p>
        </div>
      </motion.div>

      {content.gallery.items.map((item, index) => (
        <motion.div
          key={item}
          whileHover={{ y: -4 }}
          className={`group relative overflow-hidden border border-white/10 bg-[#050505] p-6 transition hover:-translate-y-1 hover:border-[#0087cb]/50 ${
            index === 0 ? "md:col-span-2" : ""
          }`}
        >
          <div className="absolute inset-0 opacity-15 [background-image:linear-gradient(#0087cb33_1px,transparent_1px),linear-gradient(90deg,#0087cb33_1px,transparent_1px)] [background-size:34px_34px]" />
          <div className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-[#0087cb] transition-transform duration-500 group-hover:scale-x-100" />
          <Camera className="relative z-10 text-[#0087cb]/45" size={28} />
          <p className="absolute bottom-6 left-6 right-6 text-xs font-black uppercase tracking-widest text-zinc-300">
            {item}
          </p>
        </motion.div>
      ))}
    </div>
  );
}

export default function EventsMediaPage({ content, locale }: Props) {
  const isAr = locale === "ar";

  return (
    <main
      dir={isAr ? "rtl" : "ltr"}
      lang={locale}
      className={`min-h-screen bg-[#030303] text-white selection:bg-[#0087cb] selection:text-black ${isAr ? "font-cairo" : "font-mono"}`}
    >
      <section className="relative h-[100svh] min-h-[680px] overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:58px_58px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0087cb] to-transparent" />
        <div className="pointer-events-none absolute -right-12 top-10 text-[16vw] font-black uppercase leading-none tracking-tight text-white/[0.025]">
          Media
        </div>
        <div className="relative mx-auto grid h-full max-w-7xl gap-8 px-6 pb-8 pt-28 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <SectionKicker>{content.hero.kicker}</SectionKicker>
            <h1 className="max-w-4xl text-5xl font-black uppercase leading-[0.92] tracking-tight md:text-6xl lg:text-7xl">
              {content.hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base font-semibold leading-relaxed text-zinc-400">
              {content.hero.description}
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="border border-white/10 bg-black/70 p-4">
                <p className="text-2xl font-black text-white">
                  {content.featured.events.length}
                </p>
                <p className="mt-1 text-[10px] font-black uppercase tracking-widest text-zinc-500">
                  {content.featured.kicker}
                </p>
              </div>
              <div className="border border-white/10 bg-black/70 p-4">
                <p className="text-2xl font-black text-white">
                  {content.press.years.length}
                </p>
                <p className="mt-1 text-[10px] font-black uppercase tracking-widest text-zinc-500">
                  {content.press.filterLabel}
                </p>
              </div>
              <div className="border border-white/10 bg-black/70 p-4">
                <p className="text-2xl font-black text-white">
                  {content.gallery.items.length}
                </p>
                <p className="mt-1 text-[10px] font-black uppercase tracking-widest text-zinc-500">
                  {content.gallery.title}
                </p>
              </div>
            </div>
          </motion.div>
          <HeroMediaPanel content={content} />
        </div>
      </section>

      <section className="border-y border-white/10 bg-black/45 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <SectionKicker>{content.featured.kicker}</SectionKicker>
              <h2 className="text-3xl font-black uppercase leading-tight tracking-tight md:text-5xl">
                {content.featured.kicker}
              </h2>
            </div>
            <button
              type="button"
              className="inline-flex items-center gap-3 border border-white/15 px-6 py-4 text-xs font-black uppercase tracking-widest text-white transition hover:border-[#0087cb]/60 hover:text-[#43becc]"
            >
              {content.featured.ctaLabel}
              <ArrowUpRight size={16} />
            </button>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {content.featured.events.map((event, index) => (
              <EventCard key={event.title} event={event} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <SectionKicker>{content.press.title}</SectionKicker>
            <h2 className="text-3xl font-black uppercase leading-tight tracking-tight md:text-5xl">
              {content.press.title}
            </h2>
            <div className="mt-8 max-w-sm border border-white/10 bg-white/[0.03] p-5">
              <Handshake
                className="mb-4 text-[#43becc]"
                size={26}
                strokeWidth={1.5}
              />
              <p className="text-sm leading-relaxed text-zinc-400">
                {content.press.filterLabel}
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#43becc]">
                <Filter size={15} />
                {content.press.filterLabel}
              </div>
              {content.press.years.map((year) => (
                <button
                  key={year}
                  className="border border-white/10 bg-[#050505] px-4 py-2 text-xs font-black uppercase tracking-widest text-zinc-400 transition hover:border-[#0087cb]/50 hover:text-white"
                  type="button"
                >
                  {year}
                </button>
              ))}
            </div>
            <div className="grid gap-px border border-white/10 bg-white/10">
              {content.featured.events.map((event) => (
                <div
                  key={event.title}
                  className="group flex items-center justify-between gap-6 bg-[#050505] p-6 transition hover:bg-black"
                >
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-[#0087cb]">
                      {event.date}
                    </p>
                    <h3 className="mt-3 text-base font-black uppercase leading-snug text-white transition-colors group-hover:text-[#43becc]">
                      {event.title}
                    </h3>
                  </div>
                  <Newspaper className="shrink-0 text-zinc-700 transition-colors group-hover:text-[#0087cb]" size={24} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-black/55 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <SectionKicker>{content.gallery.title}</SectionKicker>
              <h2 className="text-3xl font-black uppercase leading-tight tracking-tight md:text-5xl">
                {content.gallery.title}
              </h2>
            </div>
            <div className="flex gap-4 text-xs font-black uppercase tracking-widest text-zinc-500">
              <span className="flex items-center gap-2">
                <Camera size={16} />
                {content.gallery.photoLabel}
              </span>
              <span className="flex items-center gap-2">
                <Video size={16} />
                {content.gallery.videoLabel}
              </span>
            </div>
          </div>
          <GalleryBlock content={content} />
        </div>
      </section>

    </main>
  );
}
