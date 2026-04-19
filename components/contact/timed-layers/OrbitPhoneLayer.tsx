"use client";

import type { MotionValue } from "framer-motion";
import { Phone } from "lucide-react";

import Layer from "./Layer";

type Props = {
  progress: MotionValue<number>;
};

export default function OrbitPhoneLayer({ progress }: Props) {
  return (
    <Layer progress={progress} range={[0.12, 0.22]} xOffset={-200}>
      <div className="flex items-center gap-6 bg-white/5 backdrop-blur-3xl p-8 rounded-[30px] border border-white/10 min-w-[400px]">
        <div className="w-14 h-14 bg-[#43becc] text-black rounded-full flex items-center justify-center shadow-[0_0_20px_#43becc]">
          <Phone size={20} />
        </div>
        <div>
          <p className="text-[#bcd647] font-mono text-[9px] uppercase tracking-widest">{"// DIRECT_LINE"}</p>
          <h3 className="text-2xl font-black italic">+20 105 528 2565</h3>
        </div>
      </div>
    </Layer>
  );
}
