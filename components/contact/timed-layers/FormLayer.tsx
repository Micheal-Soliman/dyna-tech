"use client";

import type { MotionValue } from "framer-motion";
import { Send, Terminal } from "lucide-react";

import Layer from "./Layer";

type Props = {
  progress: MotionValue<number>;
};

export default function FormLayer({ progress }: Props) {
  return (
    <Layer progress={progress} range={[0.65, 0.88]}>
      <div className="w-full max-w-4xl bg-[#080808]/90 border border-white/10 backdrop-blur-3xl p-10 rounded-[40px]">
        {/* DYNATECH Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-[#006db1] rounded-full flex items-center justify-center mb-4 shadow-[0_0_30px_#006db1]/30">
            <span className="text-black font-[1000] text-2xl italic">D</span>
          </div>
          <h2 className="text-2xl font-[1000] uppercase italic tracking-tight text-white">DYNATECH</h2>
          <p className="text-[9px] font-black uppercase tracking-[0.4em] text-zinc-500 mt-1">Industrial Systems</p>
        </div>

        <div className="flex items-center gap-3 text-[#006db1] mb-8">
          <Terminal size={16} />
          <span className="font-mono text-[10px] uppercase italic">// ESTABLISH_CONNECTION</span>
        </div>

        <form className="grid grid-cols-2 gap-4 text-left">
          {/* Name */}
          <input
            placeholder="FULL_NAME"
            className="bg-white/5 border border-white/10 p-5 rounded-xl text-[10px] outline-none focus:border-[#006db1]"
          />
          {/* Organization */}
          <input
            placeholder="ORGANIZATION"
            className="bg-white/5 border border-white/10 p-5 rounded-xl text-[10px] outline-none focus:border-[#006db1]"
          />
          {/* Title */}
          <input
            placeholder="TITLE / POSITION"
            className="bg-white/5 border border-white/10 p-5 rounded-xl text-[10px] outline-none focus:border-[#006db1]"
          />
          {/* Phone */}
          <input
            placeholder="PHONE_NUMBER"
            type="tel"
            className="bg-white/5 border border-white/10 p-5 rounded-xl text-[10px] outline-none focus:border-[#006db1]"
          />
          {/* Email */}
          <input
            placeholder="EMAIL_ADDRESS"
            type="email"
            className="col-span-2 bg-white/5 border border-white/10 p-5 rounded-xl text-[10px] outline-none focus:border-[#006db1]"
          />
          {/* Inquiry Type */}
          <select className="col-span-2 bg-[#111] border border-white/10 p-5 rounded-xl text-[10px] text-zinc-500 uppercase">
            <option>SELECT_INQUIRY_TYPE</option>
            <option>Partnership</option>
            <option>Investment</option>
            <option>Media</option>
            <option>General</option>
          </select>
          {/* Message */}
          <textarea
            placeholder="MESSAGE"
            className="col-span-2 bg-white/5 border border-white/10 p-5 rounded-xl text-[10px] h-28 outline-none resize-none"
          />
          {/* Submit */}
          <button className="col-span-2 py-6 bg-[#006db1] text-black font-black uppercase text-[11px] tracking-[0.3em] rounded-xl hover:bg-white transition-all flex items-center justify-center gap-3">
            TRANSMIT <Send size={14} />
          </button>
        </form>
      </div>
    </Layer>
  );
}
