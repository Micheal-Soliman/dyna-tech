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
        <div className="flex items-center gap-3 justify-center text-[#006db1] mb-6">
          <span className="w-2 h-2 bg-[#006db1] rounded-full animate-ping" />
          <span className="font-mono text-[10px] tracking-[0.5em] uppercase">// ESTABLISH_CONNECTION</span>
        </div>
        <h1 className="text-[8vw] font-black italic leading-none tracking-tighter text-white">
          CONNECT_WITH <br /> <span className="text-[#006db1]">DYNATECH.</span>
        </h1>
        <p className="mt-6 text-zinc-500 font-mono text-[10px] tracking-[0.4em] uppercase max-w-xl mx-auto">
          Government Officials • Investors • Institutional Partners
        </p>
      </div>
    </Layer>
  );
}
