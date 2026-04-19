"use client";

import React from "react";

export default function InvestmentCTA() {
  return (
    <section className="py-32 border-t border-white/5 text-center px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-white/[0.02] uppercase italic select-none">
        Invest
      </div>
      <div className="relative z-10 space-y-8">
        <h2 className="text-4xl md:text-6xl font-[1000] italic uppercase tracking-tighter">Accelerate the Mission.</h2>
        <p className="text-zinc-500 max-w-xl mx-auto text-xs uppercase tracking-widest leading-loose font-bold">
          Download our full 2026 investment prospectus or submit technical proposals for open RFPs.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button className="px-12 py-6 bg-[#bcd647] text-black font-[1000] text-[10px] uppercase tracking-[0.4em] hover:bg-white transition-colors">
            SUBMIT_PROPOSAL()
          </button>
          <button className="px-12 py-6 border-2 border-white/10 text-white font-[1000] text-[10px] uppercase tracking-[0.4em] hover:bg-[#bcd647] hover:text-black transition-all">
            INVEST_PROSPECTUS.PDF
          </button>
        </div>
      </div>
    </section>
  );
}
