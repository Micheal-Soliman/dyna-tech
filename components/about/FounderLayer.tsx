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
      <div className={`max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center ${isAr ? 'md:[direction:rtl]' : ''}`}>
        {/* Image - Order changes for RTL */}
        <div className={`relative h-[400px] md:h-[600px] w-full rounded-3xl overflow-hidden border border-white/10 ${isAr ? 'order-1 md:order-2' : 'order-2 md:order-1'}`}>
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
              className="bg-[#43becc] text-black font-black text-xs px-4 py-2 uppercase tracking-widest"
            >
              {data.title}
            </span>
          </div>
        </div>
        
        {/* Content - Order changes for RTL */}
        <div className={`space-y-8 ${isAr ? 'order-2 md:order-1 md:text-right' : 'order-1 md:order-2'}`}>
          <h2 
            dir="auto"
            style={{ unicodeBidi: "plaintext" }}
            className="text-white text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none"
          >
            {data.name}
          </h2>
          
          {/* Highlights - flex direction changes for RTL */}
          <div className={`flex flex-wrap gap-3 ${isAr ? 'md:justify-end' : ''}`}>
            {data.highlights.map((h, i) => (
              <span 
                key={i} 
                dir="auto"
                style={{ unicodeBidi: "plaintext" }}
                className="text-[#bcd647] border border-[#bcd647]/30 px-4 py-2 text-xs font-bold uppercase tracking-wider"
              >
                {h}
              </span>
            ))}
          </div>
          
          {/* Experience Timeline - Border flips for RTL */}
          <div className="space-y-6 pt-6">
            {data.experience.map((exp, i) => (
              <div 
                key={i} 
                className={`${isAr ? 'border-r-2 pr-6' : 'border-l-2 pl-6'} border-[#43becc] py-2`}
              >
                <div className={`flex items-baseline gap-4 mb-1 ${isAr ? 'flex-row-reverse md:justify-end' : ''}`}>
                  <span className="text-[#43becc] font-black text-lg">{exp.period}</span>
                  <span 
                    dir="auto"
                    style={{ unicodeBidi: "plaintext" }}
                    className="text-white font-bold uppercase text-sm tracking-wider"
                  >
                    {exp.company}
                  </span>
                </div>
                <p 
                  dir="auto"
                  style={{ unicodeBidi: "plaintext" }}
                  className={`text-zinc-500 text-sm italic ${isAr ? 'md:text-right' : ''}`}
                >
                  {exp.achievement}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
