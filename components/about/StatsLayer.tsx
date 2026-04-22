"use client";

import { MotionValue, motion } from "framer-motion";
import { StatItem } from "./types";

type Props = {
  opacity: MotionValue<number>;
  items: StatItem[];
  isAr?: boolean;
};

export default function StatsLayer({ opacity, items, isAr = false }: Props) {
  return (
    <motion.div 
      style={{ opacity }} 
      className="absolute inset-0 flex items-center justify-center z-30 px-6"
    >
      <div className="w-full max-w-7xl">
        {/* Title for the Stats Section - adds authority */}
        <div className={`mb-12 ${isAr ? 'border-r-2 pr-6 text-right' : 'border-l-2 pl-6'} border-[#006db1]`}>
          <h2 className="text-white text-xs font-mono tracking-[0.5em] uppercase">Capital Structure & Scale</h2>
        </div>

        {/* Industrial Precision Grid Layout - Sharp & Engineering Style */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {items.map((s, i) => (
            <div
              key={i}
              className="p-8 md:p-10 bg-[#050505] flex flex-col justify-between group hover:bg-zinc-900/50 transition-all duration-500"
            >
              <div className="text-zinc-600 text-[10px] uppercase tracking-[0.2em] font-black mb-8 group-hover:text-[#0087cb] transition-colors">
                {s.label}
              </div>
              <div 
                className="text-4xl md:text-5xl font-black tracking-tighter" 
                style={{ color: s.color }}
              >
                {s.value}
              </div>
            </div>
          ))}
        </div>
        
        {/* Official footer note */}
        <div className={`mt-6 text-[9px] text-zinc-600 font-mono uppercase tracking-widest ${isAr ? 'text-left' : 'text-right'}`}>
          * Figures verified as of 2024 Corporate Profile
        </div>
      </div>
    </motion.div>
  );
}
