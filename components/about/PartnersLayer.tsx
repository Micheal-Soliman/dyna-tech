"use client";

import { MotionValue, motion } from "framer-motion";

type PartnerBadge = {
  label: string;
};

type Props = {
  opacity: MotionValue<number>;
  titlePrefix: string;
  titleHighlight: string;
  titleSuffix: string;
  subtitle: string;
  badges: PartnerBadge[];
  ctaLabel: string;
};

export default function PartnersLayer({
  opacity,
  titlePrefix,
  titleHighlight,
  titleSuffix,
  subtitle,
  badges,
  ctaLabel,
}: Props) {
  return (
    <motion.div
      style={{ opacity, zIndex: 80 }}
      className="absolute inset-0 flex items-center justify-center z-50 px-6"
    >
      <div className="w-full max-w-6xl text-center">
        <div className="space-y-4 mb-14">
          <h2 className="text-white text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-none">
            {titlePrefix} <span className="text-[#bcd647]">{titleHighlight}</span> {titleSuffix}
          </h2>
          <div className="text-zinc-500 font-mono text-[10px] tracking-[0.4em] uppercase italic">
            {subtitle}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-10 opacity-60 grayscale hover:grayscale-0 transition-all duration-700 mb-16">
          {badges.map((b, i) => (
            <div
              key={i}
              className="w-40 h-16 border border-white/20 rounded-2xl flex items-center justify-center font-mono text-[10px] tracking-widest text-white/90 bg-white/5"
            >
              {b.label}
            </div>
          ))}
        </div>

        <button className="relative group overflow-hidden bg-white text-black px-16 py-6 rounded-full font-black italic uppercase tracking-widest transition-all hover:bg-[#43becc] hover:text-white">
          <span className="relative z-10">{ctaLabel}</span>
          <div className="absolute inset-0 bg-[#43becc] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </button>
      </div>
    </motion.div>
  );
}
