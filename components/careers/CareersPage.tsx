"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Factory,
  Globe2,
  GraduationCap,
  Rocket,
  Wrench,
  Zap,
} from "lucide-react";

export type CareersPageContent = {
  hero: {
    kicker: string;
    title: string;
    description: string;
  };
  why: {
    title: string;
    description: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  positions: {
    title: string;
    description: string;
    areas: string[];
  };
};

type Props = {
  content: CareersPageContent;
  locale: string;
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function SectionKicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 inline-flex border border-[#0087cb]/35 bg-[#0087cb]/10 px-3 py-2 text-xs font-black uppercase tracking-[0.24em] text-[#43becc]">
      {children}
    </p>
  );
}

function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.18, ease: "easeOut" }}
      className="group relative min-h-[430px] overflow-hidden border border-white/10 bg-[#121b43]/75 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.45)] transition-colors duration-300 hover:border-[#0087cb]/55"
    >
      <div className="absolute left-0 top-0 h-12 w-12 border-l border-t border-[#0087cb]/70" />
      <div className="absolute bottom-0 right-0 h-12 w-12 border-b border-r border-[#43becc]/60" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(#0087cb_1px,transparent_1px),linear-gradient(90deg,#0087cb_1px,transparent_1px)] [background-size:38px_38px]" />
      <div className="absolute inset-x-8 top-1/2 h-px bg-gradient-to-r from-transparent via-[#0087cb] to-transparent" />
      <div className="absolute inset-y-8 left-1/2 w-px bg-gradient-to-b from-transparent via-[#43becc] to-transparent" />
      <div className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-[#43becc] transition-transform duration-700 group-hover:scale-x-100" />

      <div className="absolute inset-x-10 bottom-12 flex items-end justify-center gap-4">
        {[140, 180, 112, 160].map((height, index) => (
          <motion.div
            key={`${height}-${index}`}
            initial={{ height: 0 }}
            animate={{ height }}
            transition={{ duration: 0.7, delay: 0.18 + index * 0.06 }}
            className="relative w-full max-w-[92px] border border-[#0087cb]/35 bg-[#0087cb]/10"
          >
            <div className="absolute inset-x-3 top-4 h-px bg-[#43becc]/50" />
            <div className="absolute inset-x-3 top-10 h-px bg-[#43becc]/25" />
            <div className="absolute bottom-4 left-1/2 h-8 w-8 -translate-x-1/2 border border-[#43becc]/50 bg-[#0a0f29]" />
          </motion.div>
        ))}
      </div>

      <div className="absolute left-10 right-10 top-16 grid grid-cols-3 gap-4">
        {[Zap, Factory, Wrench].map((Icon, index) => (
          <div
            key={index}
            className="flex h-20 items-center justify-center border border-white/10 bg-[#0a0f29] text-[#43becc]"
          >
            <Icon size={26} strokeWidth={1.5} />
          </div>
        ))}
      </div>

      <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between border-t border-white/10 pt-4">
        <span className="text-[10px] font-black uppercase tracking-widest text-white">
          EV
        </span>
        <span className="text-[10px] font-black uppercase tracking-widest text-[#43becc]">
          Smart Manufacturing
        </span>
        <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">
          Technical Systems
        </span>
      </div>
    </motion.div>
  );
}

function BenefitIcon({ index }: { index: number }) {
  if (index === 0) return <Globe2 size={24} />;
  if (index === 1) return <Rocket size={24} />;
  if (index === 2) return <GraduationCap size={24} />;
  return <Factory size={24} />;
}

export default function CareersPage({ content, locale }: Props) {
  const isAr = locale === "ar";

  return (
    <main
      dir={isAr ? "rtl" : "ltr"}
      lang={locale}
      className={`min-h-screen bg-[#0a0f29] pt-32 text-white selection:bg-[#0087cb] selection:text-black ${isAr ? "font-cairo" : "font-mono"}`}
    >
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:58px_58px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0087cb] to-transparent" />
        <div className="pointer-events-none absolute -right-12 top-12 text-[15vw] font-black uppercase leading-none tracking-tight text-white/[0.025]">
          Careers
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <SectionKicker>{content.hero.kicker}</SectionKicker>
            <h1 className="max-w-4xl text-5xl font-black uppercase leading-[0.94] tracking-tight md:text-7xl">
              {content.hero.title}
            </h1>
            <p className="mt-7 max-w-2xl text-base font-semibold leading-relaxed text-zinc-400 md:text-lg">
              {content.hero.description}
            </p>
          </motion.div>

          <HeroVisual />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <SectionKicker>{content.why.title}</SectionKicker>
            <h2 className="text-3xl font-black uppercase leading-tight tracking-tight md:text-5xl">
              {content.why.title}
            </h2>
          </div>
          <p className="text-base leading-relaxed text-zinc-400">
            {content.why.description}
          </p>
        </div>

        <div className="grid gap-px border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
          {content.why.items.map((item, index) => (
            <motion.article
              key={item.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="group relative min-h-[260px] overflow-hidden bg-[#121b43] p-6 transition hover:bg-[#0f1738]"
            >
              <div className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-[#0087cb] transition-transform duration-500 group-hover:scale-x-100" />
              <div className="mb-6 flex h-12 w-12 items-center justify-center border border-[#0087cb]/35 bg-[#0087cb]/10 text-[#43becc]">
                <BenefitIcon index={index} />
              </div>
              <h3 className="text-xl font-black uppercase leading-tight tracking-tight text-white transition-colors group-hover:text-[#0087cb]">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#121b43]/70 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <SectionKicker>{content.positions.title}</SectionKicker>
            <h2 className="text-3xl font-black uppercase leading-tight tracking-tight md:text-5xl">
              {content.positions.title}
            </h2>
            <p className="mt-7 text-base leading-relaxed text-zinc-400">
              {content.positions.description}
            </p>
          </div>

          <div className="grid gap-px border border-white/10 bg-white/10 md:grid-cols-2">
            {content.positions.areas.map((area, index) => (
              <motion.div
                key={area}
                whileHover={{ y: -3 }}
                className="group flex items-center justify-between gap-6 bg-[#121b43] p-6 transition hover:bg-[#0f1738]"
              >
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-[#0087cb]">
                    0{index + 1}
                  </p>
                  <h3 className="mt-3 text-lg font-black uppercase leading-snug text-white transition-colors group-hover:text-[#43becc]">
                    {area}
                  </h3>
                </div>
                <ArrowUpRight className="shrink-0 text-zinc-700 transition-colors group-hover:text-[#0087cb]" size={24} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
