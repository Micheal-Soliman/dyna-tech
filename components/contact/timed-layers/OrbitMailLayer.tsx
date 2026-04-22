"use client";

import type { MotionValue } from "framer-motion";
import { Mail } from "lucide-react";

import Layer from "./Layer";

type Props = {
  progress: MotionValue<number>;
};

export default function OrbitMailLayer({ progress }: Props) {
  return (
    <Layer progress={progress} range={[0.25, 0.35]} xOffset={200}>
      <div className="flex items-center gap-6 bg-white/5 backdrop-blur-3xl p-8 rounded-[30px] border border-white/10 min-w-[400px]">
        <div className="w-14 h-14 bg-[#006db1] text-black rounded-full flex items-center justify-center shadow-[0_0_20px_#006db1]">
          <Mail size={20} />
        </div>
        <div>
          <p className="text-[#0087cb] font-mono text-[9px] uppercase tracking-widest">{"// COMM_LINK"}</p>
          <h3 className="text-2xl font-black italic">info@dynatech-eg.net</h3>
        </div>
      </div>
    </Layer>
  );
}
