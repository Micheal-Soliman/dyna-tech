"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";
import { Activity, Send } from "lucide-react";

type Props = {
  smoothProgress: MotionValue<number>;
};

export default function ContactUltimateFormSection({ smoothProgress }: Props) {
  const opacity = useTransform(smoothProgress, [0.85, 0.95], [0, 1]);
  const y = useTransform(smoothProgress, [0.85, 0.95], [100, 0]);

  return (
    <section className="h-screen flex items-center justify-center sticky top-0">
      <motion.div
        style={{ opacity, y }}
        className="w-full max-w-5xl bg-white/[0.03] border border-white/10 backdrop-blur-3xl p-16 rounded-[60px] relative overflow-hidden"
      >
        <div className="grid md:grid-cols-2 gap-16 relative z-10">
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-[#43becc]">
              <Activity size={20} className="animate-pulse" />
              <span className="font-mono text-xs tracking-widest uppercase italic">System_Ready</span>
            </div>
            <h2 className="text-7xl font-black text-white uppercase leading-none">
              START <br />THE <span className="text-[#bcd647]">LOG.</span>
            </h2>
            <p className="text-zinc-500 max-w-xs text-sm italic">
              Transmission protocols are online. Speak to us in digital frequencies.
            </p>
          </div>

          <form className="space-y-6">
            <input
              type="text"
              placeholder="OPERATOR"
              className="w-full bg-white/5 border border-white/10 py-5 px-8 rounded-2xl text-xs focus:border-[#43becc] outline-none transition-all placeholder:text-zinc-700"
            />
            <input
              type="email"
              placeholder="SIGNAL_ID"
              className="w-full bg-white/5 border border-white/10 py-5 px-8 rounded-2xl text-xs focus:border-[#43becc] outline-none transition-all placeholder:text-zinc-700"
            />
            <textarea
              rows={3}
              placeholder="PAYLOAD"
              className="w-full bg-white/5 border border-white/10 py-5 px-8 rounded-2xl text-xs focus:border-[#43becc] outline-none transition-all resize-none placeholder:text-zinc-700"
            />
            <button className="w-full py-6 bg-[#43becc] text-black font-black uppercase tracking-[0.5em] text-[10px] rounded-2xl hover:bg-[#bcd647] transition-all flex items-center justify-center gap-3">
              Confirm Transmission <Send size={14} />
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
