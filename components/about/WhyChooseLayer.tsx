"use client";

import { MotionValue, motion } from "framer-motion";

type WhyChooseItem = {
  title: string;
  description: string;
};

type Props = {
  x: MotionValue<number>;
  opacity: MotionValue<number>;
  kicker: string;
  titlePrefix: string;
  titleHighlight: string;
  titleSuffix: string;
  items: WhyChooseItem[];
};

export default function WhyChooseLayer({
  x,
  opacity,
  kicker,
  titlePrefix,
  titleHighlight,
  titleSuffix,
  items,
}: Props) {
  return (
    <motion.div
      style={{ x, opacity, zIndex: 60 }}
      className="absolute inset-0 flex items-center justify-center z-50 px-6"
    >
      <div className="w-full max-w-6xl">
        <div className="mb-12 text-center">
          <div className="text-[#bcd647] font-mono text-[10px] tracking-[0.5em] uppercase italic mb-4">
            {kicker}
          </div>
          <h2 className="text-white text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
            {titlePrefix} <span className="text-[#43becc]">{titleHighlight}</span> {titleSuffix}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              className="relative p-10 bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-3xl"
              whileHover={{ borderColor: "#43becc" }}
            >
              <div className="text-[#43becc] font-mono text-[10px] tracking-[0.4em] uppercase mb-4">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="text-white text-2xl font-black uppercase tracking-tight mb-3">
                {item.title}
              </div>
              <div className="text-zinc-400 text-sm leading-relaxed">
                {item.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
