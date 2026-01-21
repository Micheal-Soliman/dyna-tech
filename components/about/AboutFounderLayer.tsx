"use client";

import Image from "next/image";
import { MotionValue, motion } from "framer-motion";

type Props = {
  scale: MotionValue<number>;
  opacity: MotionValue<number>;
  badge: string;
  nameLine1: string;
  nameHighlight: string;
  quote: string;
  buttonLabel: string;
  imageSrc: string;
  imageAlt: string;
};

export default function AboutFounderLayer({
  scale,
  opacity,
  badge,
  nameLine1,
  nameHighlight,
  quote,
  buttonLabel,
  imageSrc,
  imageAlt,
}: Props) {
  return (
    <motion.div
      style={{ scale, opacity }}
      className="absolute inset-0 flex items-center justify-center z-50 px-6"
    >
      <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl w-full">
        <div className="relative h-[550px] w-full rounded-3xl overflow-hidden border border-white/10 group">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent" />
        </div>
        <div className="space-y-8">
          <span className="text-[#bcd647] font-bold uppercase tracking-widest text-[10px] border border-[#bcd647] px-3 py-1 font-mono">
            {badge}
          </span>
          <h2 className="text-white text-7xl font-black uppercase tracking-tighter leading-none">
            {nameLine1} <br /> <span className="text-[#43becc]">{nameHighlight}</span>
          </h2>
          <p className="text-zinc-400 text-xl leading-relaxed italic border-l-2 border-[#43becc] pl-6">
            {quote}
          </p>
          <button className="bg-white text-black px-12 py-4 font-black uppercase text-[10px] tracking-[0.3em] rounded-full hover:bg-[#43becc] hover:text-white transition-all">
            {buttonLabel}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
