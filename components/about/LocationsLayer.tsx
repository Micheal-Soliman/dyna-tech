"use client";

import { MotionValue, motion } from "framer-motion";
import { LocationItem } from "./types";

type Props = {
  opacity: MotionValue<number>;
  items: LocationItem[];
  isAr?: boolean;
};

export default function LocationsLayer({ opacity, items, isAr = false }: Props) {
  return (
    <motion.div 
      style={{ opacity }} 
      className="absolute inset-0 flex flex-col items-center justify-center z-[60] px-6"
    >
      {/* Section Header */}
      <div className={`mb-16 ${isAr ? 'text-right' : 'text-left'} w-full max-w-5xl`}>
        <div className={`flex items-center gap-4 mb-4 ${isAr ? 'flex-row-reverse' : ''}`}>
          <div className="h-[2px] w-16 bg-[#bcd647]" />
          <span className="text-[#bcd647] font-mono text-xs tracking-[0.3em] uppercase">Operations</span>
        </div>
        <h2 
          dir="auto"
          style={{ unicodeBidi: "plaintext" }}
          className="text-white text-5xl md:text-7xl font-black italic tracking-tighter"
        >
          OUR <span className="text-[#43becc]">PRESENCE</span>
        </h2>
      </div>
      
      {/* Location Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10 max-w-5xl w-full">
        {items.map((loc, i) => (
          <div 
            key={i} 
            className="p-10 md:p-12 bg-[#050505] group hover:bg-zinc-900/30 transition-all duration-500"
          >
            {/* Location Number */}
            <div className="text-[#bcd647] font-mono text-xs tracking-widest mb-6">
              0{i + 1}
            </div>
            
            {/* Location Name */}
            <h3 
              dir="auto"
              style={{ unicodeBidi: "plaintext" }}
              className="text-white text-xl md:text-2xl font-black uppercase tracking-tight mb-3 group-hover:text-[#43becc] transition-colors"
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
            
            {/* Hover Indicator */}
            <div className={`mt-8 flex items-center gap-2 text-[10px] uppercase tracking-widest text-zinc-600 group-hover:text-[#bcd647] transition-colors ${isAr ? 'flex-row-reverse' : ''}`}>
              <span>View on Map</span>
              <span>{isAr ? '←' : '→'}</span>
            </div>
          </div>
        ))}
      </div>
      
      {/* HQ Badge */}
      <div className={`mt-12 flex items-center gap-6 ${isAr ? 'flex-row-reverse' : ''}`}>
        <div className="w-3 h-3 bg-[#bcd647] rounded-full shadow-[0_0_15px_#bcd647]" />
        <div className={`text-center ${isAr ? 'text-right' : 'text-left'}`}>
          <div className="text-white font-bold text-sm uppercase tracking-wider">CFC Business Park, New Cairo</div>
          <div className="text-zinc-500 text-xs font-mono mt-1">Primary Headquarters • Building A3</div>
        </div>
      </div>
    </motion.div>
  );
}
