"use client";

import type { MotionValue } from "framer-motion";

import type { ContactPageContent } from "../ContactPage";
import Layer from "./Layer";

type Props = {
  progress: MotionValue<number>;
  content: ContactPageContent;
};

export default function HeroLayer({ progress, content }: Props) {
  return (
    <Layer progress={progress} range={[-0.03, 0.08]}>
      <div className="max-w-6xl px-6 text-center">
        <div className="mb-6 flex items-center justify-center gap-3 text-[#006db1]">
          <span className="h-2 w-2 animate-ping rounded-full bg-[#006db1]" />
          <span className="font-mono text-[10px] uppercase tracking-[0.5em]">
            {content.hero.kicker}
          </span>
        </div>
        <h1 className="text-[7vw] font-black italic uppercase leading-none tracking-tighter text-white">
          {content.hero.title}
        </h1>
        <p className="mx-auto mt-6 max-w-3xl font-mono text-[10px] uppercase leading-loose tracking-[0.28em] text-zinc-500">
          {content.hero.description}
        </p>
      </div>
    </Layer>
  );
}
