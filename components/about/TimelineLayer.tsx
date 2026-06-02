"use client";

import { MotionValue, motion } from "framer-motion";
import { TimelineItem, TimelineSectionCopy } from "./types";

type Props = {
  x: MotionValue<number>;
  opacity: MotionValue<number>;
  scale: MotionValue<number>;
  copy: TimelineSectionCopy;
  items: TimelineItem[];
  isAr?: boolean;
};

export default function TimelineLayer({ x, opacity, scale, copy, items, isAr = false }: Props) {
  return (
    <motion.div 
      style={{ x, opacity, scale }} 
      className="absolute inset-0 flex items-center z-50 px-10 md:px-20"
    >
      <div className="flex gap-8 md:gap-12 items-start min-w-max">
        {/* Title Block */}
        <div className={`min-w-[200px] md:min-w-[280px] sticky left-0 ${isAr ? 'text-right' : ''}`}>
          <div className={`flex items-center gap-4 mb-6 ${isAr ? 'flex-row-reverse' : ''}`}>
            <div className="h-[2px] w-16 bg-[#006db1]" />
            <span dir="auto" style={{ unicodeBidi: "plaintext" }} className="text-[#006db1] font-mono text-xs tracking-[0.3em] uppercase">{copy.kicker}</span>
          </div>
          <h2 className={`text-white text-5xl md:text-8xl font-black italic tracking-tighter leading-none ${isAr ? '[direction:rtl]' : ''}`}>
            {copy.titleLine1}<br/>
            {copy.titleHighlight && <span className="text-[#0087cb]">{copy.titleHighlight}</span>}
          </h2>
        </div>
        
        {/* Timeline Items */}
        {items.map((item, i) => (
          <div key={i} className={`min-w-[220px] md:min-w-[320px] relative pt-16 ${isAr ? 'text-right' : ''}`}>
            {/* Background Year */}
            <div className={`text-[100px] md:text-[140px] font-black text-white/[0.03] absolute -top-10 ${isAr ? '-right-6' : '-left-6'} leading-none select-none`}>
              {item.year}
            </div>
            
            {/* Content */}
            <div className="relative z-10">
              <div className={`w-3 h-3 bg-[#006db1] rounded-full mb-6 shadow-[0_0_10px_#006db1] ${isAr ? 'mr-auto' : ''}`} />
              <div className="text-white font-black text-2xl md:text-4xl mb-3 tracking-tighter">{item.year}</div>
              <p 
                dir="auto"
                style={{ unicodeBidi: "plaintext" }}
                className="text-zinc-400 text-xs md:text-sm leading-relaxed max-w-[280px]"
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
