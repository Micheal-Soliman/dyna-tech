"use client";

import { MotionValue, motion } from "framer-motion";

export type AboutStickyStatItem = {
  label: string;
  value: string;
  color: string;
};

type Props = {
  z: MotionValue<number>;
  opacity: MotionValue<number>;
  items: AboutStickyStatItem[];
};

export default function AboutStatsLayer({ z, opacity, items }: Props) {
  return (
    <motion.div
      style={{ z, opacity }}
      className="absolute inset-0 flex items-center justify-center z-40 px-6"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-6xl">
        {items.map((s, i) => (
          <motion.div
            key={i}
            className="p-10 bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-2xl text-center"
            whileHover={{ borderColor: s.color }}
          >
            <div className="text-5xl font-black mb-2" style={{ color: s.color }}>
              {s.value}
            </div>
            <div className="text-zinc-500 text-[10px] uppercase tracking-widest font-bold">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
