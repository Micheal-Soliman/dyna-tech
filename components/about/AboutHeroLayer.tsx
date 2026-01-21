"use client";

import { MotionValue, motion } from "framer-motion";

type Props = {
  scale: MotionValue<number>;
  opacity: MotionValue<number>;
  titleLeft: string;
  titleRight: string;
  tagline: string;
};

export default function AboutHeroLayer({
  scale,
  opacity,
  titleLeft,
  titleRight,
  tagline,
}: Props) {
  return (
    <motion.div
      style={{ scale, opacity }}
      className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center"
    >
      <h1 className="text-[12vw] font-black italic tracking-tighter text-white uppercase">
        {titleLeft} <span className="text-[#43becc]">{titleRight}</span>
      </h1>
      <p className="text-[#bcd647] font-mono tracking-[1em] text-xs">
        {tagline}
      </p>
    </motion.div>
  );
}
