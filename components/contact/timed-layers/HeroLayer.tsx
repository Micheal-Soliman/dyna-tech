"use client";

import type { MotionValue } from "framer-motion";

import Layer from "./Layer";

type Props = {
  progress: MotionValue<number>;
};

export default function HeroLayer({ progress }: Props) {
  return (
    <Layer progress={progress} range={[-0.03, 0.08]}>
      <div className="text-center">
        <h1 className="text-[9vw] font-black italic leading-none tracking-tighter">
          UNLEASH <br /> <span className="text-[#43becc]">THE SIGNAL.</span>
        </h1>
        <p className="mt-6 text-zinc-500 font-mono text-[10px] tracking-[0.6em] uppercase animate-pulse">
          Establish Connection
        </p>
      </div>
    </Layer>
  );
}
