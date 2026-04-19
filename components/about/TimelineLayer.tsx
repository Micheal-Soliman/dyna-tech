"use client";

import { MotionValue, motion } from "framer-motion";
import { TimelineItem } from "./types";

type Props = {
  x: MotionValue<number>;
  opacity: MotionValue<number>;
  scale: MotionValue<number>;
  items: TimelineItem[];
  isAr?: boolean;
};

export default function TimelineLayer({ x, opacity, scale, items, isAr = false }: Props) {
  return (
    <motion.div 
      style={{ x, opacity, scale }} 
      className="absolute inset-0 flex items-center z-50 px-10 md:px-20"
    >
      <div className="flex gap-8 md:gap-12 items-start min-w-max">
        {/* Title Block */}
        <div className={`min-w-[200px] md:min-w-[280px] sticky left-0 ${isAr ? 'text-right' : ''}`}>
          <div className={`flex items-center gap-4 mb-6 ${isAr ? 'flex-row-reverse' : ''}`}>
            <div className="h-[2px] w-16 bg-[#bcd647]" />
            <span className="text-[#bcd647] font-mono text-xs tracking-[0.3em] uppercase">History</span>
          </div>
          <h2 className={`text-white text-5xl md:text-8xl font-black italic tracking-tighter leading-none ${isAr ? '[direction:rtl]' : ''}`}>
            THE<br/>
            <span className="text-[#43becc]">JOURNEY</span>
          </h2>
        </div>
        
        {/* Timeline Items */}
        {items.map((item, i) => (
          <div key={i} className={`min-w-[180px] md:min-w-[220px] relative pt-16 ${isAr ? 'text-right' : ''}`}>
            {/* Background Year */}
            <div className={`text-[100px] md:text-[140px] font-black text-white/[0.03] absolute -top-10 ${isAr ? '-right-6' : '-left-6'} leading-none select-none`}>
              {item.year}
            </div>
            
            {/* Content */}
            <div className="relative z-10">
              <div className={`w-3 h-3 bg-[#bcd647] rounded-full mb-6 shadow-[0_0_10px_#bcd647] ${isAr ? 'mr-auto' : ''}`} />
              <div className="text-white font-black text-2xl md:text-4xl mb-3 tracking-tighter">{item.year}</div>
              <p 
                dir="auto"
                style={{ unicodeBidi: "plaintext" }}
                className="text-zinc-400 text-sm md:text-base uppercase tracking-wider leading-relaxed max-w-[200px]"
              >
                {item.desc}
              </p>
            </div>
            
            {/* Connector Line */}
            {i < items.length - 1 && (
              <div className={`absolute top-[70px] ${isAr ? 'right-[12px]' : 'left-[12px]'} w-[calc(100%+40px)] h-[1px] bg-gradient-to-r from-white/20 to-transparent`} />
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
