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
      className="absolute inset-0 z-[60] flex flex-col items-center justify-start px-4 pb-6 pt-[150px] sm:px-6 md:pt-[160px] lg:pt-[150px]"
    >
      {/* Section Header */}
      <div className={`mb-8 w-full max-w-5xl md:mb-10 ${isAr ? 'text-right' : 'text-left'}`}>
        <h2 
          dir="auto"
          style={{ unicodeBidi: "plaintext" }}
          className="text-4xl font-black italic tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {copy.titleLine1} <span className="text-[#0087cb]">{copy.titleHighlight}</span>
        </h2>
      </div>
      
      {/* Location Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10 max-w-5xl w-full">
        {items.map((loc, i) => (
          <div 
            key={i} 
            className="group bg-[#121b43] p-6 transition-all duration-500 hover:bg-[#0f1738] sm:p-8 md:p-9 lg:p-10"
          >
            {/* Location Number */}
            <div className="mb-5 font-mono text-xs tracking-widest text-[#006db1]">
              0{i + 1}
            </div>
            
            {/* Location Name */}
            <h3 
              dir="auto"
              style={{ unicodeBidi: "plaintext" }}
              className="mb-3 text-xl font-black uppercase tracking-tight text-white transition-colors group-hover:text-[#0087cb] md:text-2xl"
            >
              {loc.name}
            </h3>
            
            {/* Divider */}
            <div className={`h-[1px] w-12 bg-white/20 mb-4 ${isAr ? 'mr-auto' : ''}`} />
            
            {/* Location Detail */}
            <p 
              dir="auto"
              style={{ unicodeBidi: "plaintext" }}
              className="font-mono text-sm leading-relaxed text-zinc-400"
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

      <div className={`mt-8 max-w-4xl text-center md:mt-9 ${isAr ? 'font-cairo' : ''}`}>
        <h3
          dir="auto"
          style={{ unicodeBidi: "plaintext" }}
          className="text-2xl font-black uppercase tracking-tight text-white md:text-4xl"
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
