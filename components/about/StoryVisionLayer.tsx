"use client";

import { MotionValue, motion } from "framer-motion";
import { DynatechContent } from "./types";

type Props = {
  opacity: MotionValue<number>;
  data: DynatechContent["missionVision"];
  isAr?: boolean;
};

export default function StoryVisionLayer({ opacity, data, isAr = false }: Props) {
  return (
    <motion.div
      style={{ opacity }}
      className="absolute inset-0 flex items-center justify-center z-30 px-4 md:px-6"
    >
      <div className={`w-full max-w-6xl grid lg:grid-cols-[1.1fr_0.9fr] gap-8 md:gap-12 items-start ${isAr ? 'lg:[direction:rtl]' : ''}`}>
        <div className={`border-l-4 border-[#0087cb] bg-white/5 backdrop-blur-sm p-6 md:p-9 ${isAr ? 'border-l-0 border-r-4 text-right' : ''}`}>
          <h2
            dir="auto"
            style={{ unicodeBidi: "plaintext" }}
            className="text-white font-black text-3xl md:text-5xl uppercase tracking-tight leading-none mb-4"
          >
            {data.storyTitle}
          </h2>
          <p
            dir="auto"
            style={{ unicodeBidi: "plaintext" }}
            className="text-[#43becc] text-base md:text-lg font-semibold mb-6"
          >
            {data.storySubtitle}
          </p>
          <div className="space-y-4">
            {data.storyParagraphs.map((paragraph, index) => (
              <p
                key={index}
                dir="auto"
                style={{ unicodeBidi: "plaintext" }}
                className="text-zinc-300 text-sm md:text-base leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="grid gap-px bg-white/10 border border-white/10">
          <div className="bg-[#121b43] p-6 md:p-8">
            <h3
              dir="auto"
              style={{ unicodeBidi: "plaintext" }}
              className="text-white font-black text-2xl md:text-3xl uppercase tracking-tight mb-4"
            >
              {data.visionTitle}
            </h3>
            <p
              dir="auto"
              style={{ unicodeBidi: "plaintext" }}
              className="text-zinc-400 text-sm md:text-base leading-relaxed"
            >
              {data.visionText}
            </p>
          </div>
          <div className="bg-[#121b43] p-6 md:p-8">
            <h3
              dir="auto"
              style={{ unicodeBidi: "plaintext" }}
              className="text-white font-black text-2xl md:text-3xl uppercase tracking-tight mb-4"
            >
              {data.missionTitle}
            </h3>
            <p
              dir="auto"
              style={{ unicodeBidi: "plaintext" }}
              className="text-zinc-400 text-sm md:text-base leading-relaxed"
            >
              {data.missionText}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
