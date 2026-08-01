"use client";

import { MotionValue, motion } from "framer-motion";
import { DynatechContent } from "./types";

type Props = {
  opacity: MotionValue<number>;
  data: DynatechContent["company"];
  isAr?: boolean;
};

export default function MissionVisionLayer({ opacity, data, isAr = false }: Props) {
  const paragraphs = data.paragraphs;

  return (
    <motion.div
      style={{ opacity }}
      className="absolute inset-0 z-20 flex items-start justify-center px-4 pb-6 pt-[132px] sm:pt-[145px] md:px-6 md:pt-[150px] lg:pt-[142px]"
    >
      <div
        className={`w-full max-w-5xl bg-[#111936]/82 p-6 shadow-[0_26px_90px_rgba(0,0,0,0.36)] backdrop-blur-sm md:p-8 lg:p-10 ${
          isAr ? "border-r-4 border-[#0087cb] text-right" : "border-l-4 border-[#0087cb]"
        }`}
      >
        <div className="max-w-4xl">
          <h2 className="text-4xl font-black uppercase leading-none tracking-tight text-white sm:text-5xl md:text-6xl">
            {data.title}
          </h2>
          <p className="mt-5 text-base font-black leading-relaxed text-[#43becc] md:text-lg">
            {data.lead}
          </p>
          <div className="mt-6 space-y-4">
            {paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="max-w-3xl text-sm font-medium leading-relaxed text-zinc-300 md:text-base"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
