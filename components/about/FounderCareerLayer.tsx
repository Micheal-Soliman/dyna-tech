"use client";

import { MotionValue, motion } from "framer-motion";
import { DynatechContent } from "./types";

type Props = {
  opacity: MotionValue<number>;
  data: DynatechContent["founder"];
  isAr?: boolean;
};

export default function FounderCareerLayer({ opacity, data, isAr = false }: Props) {
  return (
    <motion.div
      style={{ opacity }}
      className="absolute inset-0 flex items-center justify-center z-50 px-4 md:px-8"
    >
      <div className="w-full max-w-7xl">
        <div className={`mb-10 ${isAr ? 'border-r-2 pr-6 text-right' : 'border-l-2 pl-6'} border-[#006db1]`}>
          <h2
            dir="auto"
            style={{ unicodeBidi: "plaintext" }}
            className="text-white text-4xl md:text-6xl font-black uppercase tracking-tight"
          >
            {data.careerTimelineTitle}
          </h2>
          <p
            dir="auto"
            style={{ unicodeBidi: "plaintext" }}
            className="mt-3 text-[#43becc] text-sm md:text-base font-semibold"
          >
            {data.name}
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {data.experience.map((exp) => (
            <div key={`${exp.period}-${exp.company}`} className={`bg-[#050505] p-6 md:p-7 min-h-[260px] ${isAr ? 'text-right' : ''}`}>
              <div className="text-[#0087cb] font-black text-xl md:text-2xl mb-4">
                {exp.period}
              </div>
              <h3
                dir="auto"
                style={{ unicodeBidi: "plaintext" }}
                className="text-white font-black uppercase text-sm md:text-base tracking-tight mb-4"
              >
                {exp.company}
              </h3>
              <p
                dir="auto"
                style={{ unicodeBidi: "plaintext" }}
                className="text-zinc-400 text-sm leading-relaxed"
              >
                {exp.achievement}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
