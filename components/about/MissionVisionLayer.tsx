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
      className="absolute inset-0 z-20 flex items-start justify-center px-4 pb-6 pt-[140px] sm:pt-[150px] md:px-6 md:pt-[155px] lg:pt-[145px]"
    >
      <div className="w-full max-w-6xl border-l-4 border-[#0087cb] bg-white/5 p-5 backdrop-blur-sm md:p-7">
        <div className="grid items-start gap-6 md:gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="mb-3 text-xs font-bold uppercase italic tracking-widest text-[#0087cb] md:text-sm">
              {data.kicker}
            </h2>
            <h3 className="mb-4 text-3xl font-black uppercase leading-[1.05] tracking-tight text-white md:text-4xl xl:text-5xl">
              {data.title}
            </h3>
            <p className="mb-4 text-base font-semibold leading-relaxed text-[#43becc] md:text-lg">
              {data.subtitle}
            </p>
            <p className="max-w-2xl text-sm leading-relaxed text-zinc-300 md:text-base">
              {data.intro}
            </p>
          </div>

          <div className="space-y-5">
            <div>
              <h4 className="mb-3 text-2xl font-black uppercase tracking-tight text-white md:text-3xl">
                {data.platformsTitle}
              </h4>
              <p className="text-sm leading-relaxed text-zinc-400 md:text-base">
                {data.platformsIntro}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10">
              {data.platforms.map((platform) => (
                <div key={platform.title} className="bg-[#121b43] p-5 md:p-6">
                  <h5 className="mb-3 text-base font-black uppercase tracking-tight text-[#0087cb] md:text-lg">
                    {platform.title}
                  </h5>
                  <p className="text-sm leading-relaxed text-zinc-400">
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
