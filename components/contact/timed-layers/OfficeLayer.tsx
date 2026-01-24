"use client";

import type { MotionValue } from "framer-motion";
import { Clock, Globe, MapPin } from "lucide-react";

import Layer from "./Layer";

type Props = {
  progress: MotionValue<number>;
};

export default function OfficeLayer({ progress }: Props) {
  return (
    <Layer progress={progress} range={[0.4, 0.6]}>
      <div className="w-full max-w-5xl bg-white/[0.03] border border-white/10 backdrop-blur-3xl rounded-[40px] grid md:grid-cols-2 overflow-hidden">
        <div className="p-12 space-y-6">
          <span className="text-[#43becc] font-mono text-[10px] tracking-widest uppercase italic">
            {"// STATION_EGYPT"}
          </span>
          <h2 className="text-5xl font-black italic uppercase leading-tight text-white text-left">
            CAIRO <br /> <span className="text-[#bcd647]">HQ.</span>
          </h2>
          <div className="space-y-3 text-zinc-400 font-mono text-[10px] text-left">
            <p className="flex items-center gap-3">
              <MapPin size={14} className="text-[#43becc]" /> District 5, New Cairo
            </p>
            <p className="flex items-center gap-3">
              <Clock size={14} className="text-[#bcd647]" /> Sun - Thu [09:00 - 18:00]
            </p>
            <p className="flex items-center gap-3 text-white border-t border-white/5 pt-3 mt-3">
              <Globe size={14} /> Egypt_Node_Active
            </p>
          </div>
        </div>
        <div className="bg-zinc-900/40 flex items-center justify-center text-zinc-700 font-mono text-[8px] uppercase rotate-90 tracking-[2em]">
          Live_Map_Feed
        </div>
      </div>
    </Layer>
  );
}
