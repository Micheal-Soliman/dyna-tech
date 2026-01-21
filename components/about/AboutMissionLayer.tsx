"use client";

import { MotionValue, motion } from "framer-motion";

type Props = {
  x: MotionValue<number>;
  rotateY: MotionValue<number>;
  opacity: MotionValue<number>;
  kicker: string;
  textPrefix: string;
  highlight: string;
  textMiddle: string;
  italic: string;
};

export default function AboutMissionLayer({
  x,
  rotateY,
  opacity,
  kicker,
  textPrefix,
  highlight,
  textMiddle,
  italic,
}: Props) {
  return (
    <motion.div
      style={{ x, rotateY, opacity }}
      className="absolute inset-0 flex items-center justify-center z-20 px-6"
    >
      <div className="max-w-4xl border-l-8 border-[#43becc] pl-10 bg-white/5 backdrop-blur-sm p-12 rounded-r-3xl">
        <h2 className="text-[#43becc] text-sm font-bold tracking-widest mb-4 uppercase italic">
          {kicker}
        </h2>
        <p className="text-white text-5xl font-black uppercase leading-tight">
          {textPrefix} <span className="text-[#bcd647]">{highlight}</span> {textMiddle}{" "}
          <span className="italic">{italic}</span>
        </p>
      </div>
    </motion.div>
  );
}
