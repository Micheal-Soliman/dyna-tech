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
      className="absolute inset-0 flex items-center justify-center z-20 px-6"
    >
      <div className="max-w-4xl border-l-8 border-[#0087cb] pl-10 bg-white/5 backdrop-blur-sm p-12 rounded-r-3xl">
        <div className="mb-8">
          <span className="text-[#006db1] font-black text-xs uppercase tracking-[0.3em] block mb-2">
            {data.established}
          </span>
          <span className="text-white/60 font-mono text-sm">
            {data.capital}
          </span>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-[#0087cb] text-sm font-bold tracking-widest mb-4 uppercase italic">
              {data.kicker}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-white font-black text-2xl uppercase tracking-tight mb-3">
                  {data.visionTitle}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {data.visionText}
                </p>
              </div>
              <div>
                <h3 className="text-white font-black text-2xl uppercase tracking-tight mb-3">
                  {data.missionTitle}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {data.missionText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
