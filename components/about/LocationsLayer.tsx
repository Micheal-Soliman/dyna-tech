"use client";

import { MotionValue, motion } from "framer-motion";
import { LocationItem, LocationsSectionCopy } from "./types";

type Props = {
  opacity: MotionValue<number>;
  copy: LocationsSectionCopy;
  items: LocationItem[];
  closing: {
    title: string;
    text: string;
  };
  isAr?: boolean;
};

export default function LocationsLayer({ opacity, copy, items, closing, isAr = false }: Props) {
  return (
    <motion.div 
      style={{ opacity }} 
      className="absolute inset-0 flex flex-col items-center justify-center z-[60] px-6"
    >
      {/* Section Header */}
      <div className={`mb-16 ${isAr ? 'text-right' : 'text-left'} w-full max-w-5xl`}>
        <div className={`flex items-center gap-4 mb-4 ${isAr ? 'flex-row-reverse' : ''}`}>
          <div className="h-[2px] w-16 bg-[#006db1]" />
          <span dir="auto" style={{ unicodeBidi: "plaintext" }} className="text-[#006db1] font-mono text-xs tracking-[0.3em] uppercase">{copy.kicker}</span>
        </div>
        <h2 
          dir="auto"
          style={{ unicodeBidi: "plaintext" }}
          className="text-white text-5xl md:text-7xl font-black italic tracking-tighter"
        >
          {copy.titleLine1} <span className="text-[#0087cb]">{copy.titleHighlight}</span>
        </h2>
      </div>
      
      {/* Location Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10 max-w-5xl w-full">
        {items.map((loc, i) => (
          <div 
            key={i} 
            className="p-10 md:p-12 bg-[#121b43] group hover:bg-[#0f1738] transition-all duration-500"
          >
            {/* Location Number */}
            <div className="text-[#006db1] font-mono text-xs tracking-widest mb-6">
              0{i + 1}
            </div>
            
            {/* Location Name */}
            <h3 
              dir="auto"
              style={{ unicodeBidi: "plaintext" }}
              className="text-white text-xl md:text-2xl font-black uppercase tracking-tight mb-3 group-hover:text-[#0087cb] transition-colors"
            >
              {loc.name}
            </h3>
            
            {/* Divider */}
            <div className={`h-[1px] w-12 bg-white/20 mb-4 ${isAr ? 'mr-auto' : ''}`} />
            
            {/* Location Detail */}
            <p 
              dir="auto"
              style={{ unicodeBidi: "plaintext" }}
              className="text-zinc-500 text-sm font-mono"
            >
              {loc.detail}
            </p>
            {loc.status && (
              <p
                dir="auto"
                style={{ unicodeBidi: "plaintext" }}
                className="mt-3 text-[#43becc] text-xs font-bold uppercase tracking-wider"
              >
                {loc.status}
              </p>
            )}
          </div>
        ))}
      </div>

      <div className={`mt-10 max-w-4xl text-center ${isAr ? 'font-cairo' : ''}`}>
        <h3
          dir="auto"
          style={{ unicodeBidi: "plaintext" }}
          className="text-white text-2xl md:text-4xl font-black uppercase tracking-tight"
        >
          {closing.title}
        </h3>
        <p
          dir="auto"
          style={{ unicodeBidi: "plaintext" }}
          className="mt-4 text-zinc-400 text-sm md:text-base leading-relaxed"
        >
          {closing.text}
        </p>
      </div>
    </motion.div>
  );
}
