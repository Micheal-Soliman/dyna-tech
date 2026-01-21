"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  smoothProgress: MotionValue<number>;
  icon: ReactNode;
  label: string;
  value: string;
  range: [number, number];
  xOffset: number;
};

export default function ContactOrbitItemSection({
  smoothProgress,
  icon,
  label,
  value,
  range,
  xOffset,
}: Props) {
  const mid = (range[0] + range[1]) / 2;

  const x = useTransform(smoothProgress, [range[0], mid, range[1]], [xOffset, 0, xOffset]);
  const opacity = useTransform(smoothProgress, [range[0], mid, range[1]], [0, 1, 0]);
  const scale = useTransform(smoothProgress, [range[0], mid, range[1]], [0.5, 1, 0.5]);

  return (
    <motion.div style={{ x, opacity, scale }} className="sticky top-0 h-screen flex items-center justify-center">
      <div className="flex items-center gap-8 bg-white/5 backdrop-blur-md p-8 rounded-[30px] border border-white/10 min-w-[400px]">
        <div className="w-16 h-16 bg-[#43becc] text-black rounded-full flex items-center justify-center">
          {icon}
        </div>
        <div>
          <p className="text-[#bcd647] font-mono text-[10px] uppercase tracking-widest">{label}</p>
          <h3 className="text-2xl font-black text-white uppercase tracking-tight">{value}</h3>
        </div>
      </div>
    </motion.div>
  );
}
