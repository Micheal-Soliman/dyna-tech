"use client";

import type { MotionValue } from "framer-motion";
import { Activity, Send } from "lucide-react";

import Layer from "./Layer";

type Props = {
  progress: MotionValue<number>;
};

export default function FormLayer({ progress }: Props) {
  return (
    <Layer progress={progress} range={[0.65, 0.88]}>
      <div className="w-full max-w-4xl bg-[#080808]/90 border border-white/10 backdrop-blur-3xl p-10 rounded-[40px]">
        <div className="flex items-center gap-3 text-[#43becc] mb-8">
          <Activity size={16} className="animate-pulse" />
          <span className="font-mono text-[10px] uppercase italic">Start_Transmission</span>
        </div>
        <form className="grid grid-cols-2 gap-4 text-left">
          <input
            placeholder="OPERATOR NAME"
            className="bg-white/5 border border-white/10 p-5 rounded-xl text-[10px] outline-none focus:border-[#43becc]"
          />
          <input
            placeholder="COMPANY"
            className="bg-white/5 border border-white/10 p-5 rounded-xl text-[10px] outline-none focus:border-[#43becc]"
          />
          <input
            placeholder="EMAIL ID"
            className="col-span-2 bg-white/5 border border-white/10 p-5 rounded-xl text-[10px] outline-none focus:border-[#43becc]"
          />
          <select className="col-span-2 bg-[#111] border border-white/10 p-5 rounded-xl text-[10px] text-zinc-500 uppercase">
            <option>Type: Implementation</option>
            <option>Type: Managed Services</option>
            <option>Type: Training</option>
          </select>
          <textarea
            placeholder="MESSAGE PAYLOAD"
            className="col-span-2 bg-white/5 border border-white/10 p-5 rounded-xl text-[10px] h-28 outline-none"
          />
          <button className="col-span-2 py-6 bg-[#43becc] text-black font-black uppercase text-[10px] tracking-widest rounded-xl hover:bg-[#bcd647] transition-all flex items-center justify-center gap-3">
            Transmit_Signal <Send size={14} />
          </button>
        </form>
      </div>
    </Layer>
  );
}
