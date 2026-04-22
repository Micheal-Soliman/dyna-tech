"use client";

import { motion, useTransform, MotionValue } from "framer-motion";

type Props = {
  smoothProgress: MotionValue<number>;
};

export default function IndustrialHero({ smoothProgress }: Props) {
  return (
    <section className="h-screen flex flex-col justify-center items-center px-6 sticky top-0 z-0 overflow-hidden">
      <motion.div
        style={{ 
          opacity: useTransform(smoothProgress, [0, 0.1], [1, 0]), 
          scale: useTransform(smoothProgress, [0, 0.1], [1, 0.95]) 
        }}
        className="text-center z-10 border-2 border-white/10 p-12 md:p-24 bg-black/40 backdrop-blur-3xl relative max-w-5xl"
      >
        {/* Engineering Corners */}
        <div className="absolute -top-[2px] -left-[2px] w-16 h-16 border-t-4 border-l-4 border-[#006db1]" />
        <div className="absolute -bottom-[2px] -right-[2px] w-16 h-16 border-b-4 border-r-4 border-[#0087cb]" />

        <div className="flex items-center justify-center gap-4 mb-8">
           <span className="h-[1px] w-12 bg-[#006db1]" />
           <p className="text-[#006db1] tracking-[0.8em] text-[10px] font-black uppercase italic">Industrial_Intelligence</p>
           <span className="h-[1px] w-12 bg-[#006db1]" />
        </div>
        
        <h1 className="text-6xl md:text-[9vw] font-[1000] italic uppercase leading-none tracking-tighter">
          DYNA<span className="text-[#006db1]">TECH</span>
        </h1>
        
        <p className="mt-12 text-zinc-400 max-w-2xl mx-auto text-xs md:text-sm leading-relaxed italic uppercase tracking-[0.2em] border-t border-white/10 pt-8">
          "Engineered for Capital, Driven by Tech. Localizing the future of Egyptian Industry."
        </p>
      </motion.div>
    </section>
  );
}
