"use client";

import { MotionValue, motion } from "framer-motion";

type Props = {
  rotateX: MotionValue<number>;
  opacity: MotionValue<number>;
  kicker: string;
  textPrefix: string;
  highlight: string;
  textSuffix: string;
};

export default function AboutVisionLayer({
  rotateX,
  opacity,
  kicker,
  textPrefix,
  highlight,
  textSuffix,
}: Props) {
  return (
    <motion.div
      style={{ rotateX, opacity }}
      className="absolute inset-0 flex flex-col items-center justify-center z-30 px-6 text-center"
    >
      <div className="max-w-5xl">
        <h2 className="text-[#bcd647] text-sm font-bold tracking-[0.5em] mb-6 uppercase">
          {kicker}
        </h2>
        <p className="text-white text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">
          {textPrefix} <span className="text-[#43becc]">{highlight}</span> {textSuffix}
        </p>
      </div>
    </motion.div>
  );
}
