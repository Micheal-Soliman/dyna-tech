"use client";

import { MotionValue, motion } from "framer-motion";
import Image from "next/image";
import { DynatechContent } from "./types";

type Props = {
  opacity: MotionValue<number>;
  scale: MotionValue<number>;
  y: MotionValue<number>;
  data: DynatechContent["founder"];
  isAr?: boolean;
};

export default function FounderLayer({
  opacity,
  scale,
  y,
  data,
  isAr = false,
}: Props) {
  return (
    <motion.div 
      style={{ opacity, scale, y }} 
      className="absolute inset-0 flex items-center justify-center z-40 px-6"
    >
      <div className={`max-w-6xl w-full grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-8 md:gap-14 items-center ${isAr ? 'md:[direction:rtl]' : ''}`}>
        {/* Image - Order changes for RTL */}
        <div className={`relative h-[260px] md:h-[560px] w-full rounded-3xl overflow-hidden border border-white/10 ${isAr ? 'order-1 md:order-2' : 'order-2 md:order-1'}`}>
          <Image
            src={data.imageSrc}
            alt={data.imageAlt}
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
          
          {/* Badge - Position flips for RTL */}
          <div className={`absolute top-6 ${isAr ? 'right-6' : 'left-6'}`}>
            <span 
              dir="auto"
              style={{ unicodeBidi: "plaintext" }}
              className="bg-[#0087cb] text-black font-black text-xs px-4 py-2 uppercase tracking-widest"
            >
              {data.title}
            </span>
          </div>
        </div>
        
        {/* Content - Order changes for RTL */}
        <div className={`space-y-5 md:space-y-6 ${isAr ? 'order-2 md:order-1 md:text-right' : 'order-1 md:order-2'}`}>
          <h2 
            dir="auto"
            style={{ unicodeBidi: "plaintext" }}
            className="text-white text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none"
          >
            {data.name}
          </h2>

          <p
            dir="auto"
            style={{ unicodeBidi: "plaintext" }}
            className={`text-zinc-300 text-sm md:text-base leading-relaxed max-w-2xl ${isAr ? 'md:mr-auto' : ''}`}
          >
            {data.intro}
          </p>
          
          {/* Highlights - flex direction changes for RTL */}
          <div>
            <div
              dir="auto"
              style={{ unicodeBidi: "plaintext" }}
              className="text-[#0087cb] text-xs font-black uppercase tracking-[0.25em] mb-3"
            >
              {data.highlightsTitle}
            </div>
            <div className={`flex flex-wrap gap-2 ${isAr ? 'md:justify-end' : ''}`}>
            {data.highlights.map((h, i) => (
              <span 
                key={i} 
                dir="auto"
                style={{ unicodeBidi: "plaintext" }}
                className="text-[#43becc] border border-[#006db1]/30 px-3 py-2 text-[10px] md:text-xs font-bold uppercase tracking-wider"
              >
                {h}
              </span>
            ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
