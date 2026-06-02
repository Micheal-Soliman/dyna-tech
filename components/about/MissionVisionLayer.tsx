"use client";

import { MotionValue, motion } from "framer-motion";
import { DynatechContent } from "./types";

type Props = {
  opacity: MotionValue<number>;
  data: DynatechContent["missionVision"];
};

export default function MissionVisionLayer({ opacity, data }: Props) {
  return (
    <motion.div
      style={{ opacity }}
      className="absolute inset-0 flex items-center justify-center z-20 px-4 md:px-6 pt-24 pb-8"
    >
      <div className="w-full max-w-6xl border-l-4 border-[#0087cb] bg-white/5 backdrop-blur-sm p-5 md:p-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 md:gap-12 items-start">
          <div>
            <h2 className="text-[#0087cb] text-xs md:text-sm font-bold tracking-widest mb-3 uppercase italic">
              {data.kicker}
            </h2>
            <h3 className="text-white font-black text-3xl md:text-5xl uppercase tracking-tight leading-tight mb-5">
              {data.title}
            </h3>
            <p className="text-[#43becc] font-semibold text-base md:text-lg leading-relaxed mb-4">
              {data.subtitle}
            </p>
            <p className="text-zinc-300 text-sm md:text-base leading-relaxed max-w-2xl">
              {data.intro}
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-white font-black text-2xl md:text-3xl uppercase tracking-tight mb-3">
                {data.platformsTitle}
              </h4>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                {data.platformsIntro}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10">
              {data.platforms.map((platform) => (
                <div key={platform.title} className="bg-[#050505] p-6 md:p-8">
                  <h5 className="text-[#0087cb] font-black text-base md:text-lg uppercase tracking-tight mb-4">
                    {platform.title}
                  </h5>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {platform.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
