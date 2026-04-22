"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Factory } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="h-screen flex flex-col justify-center px-6 md:px-16 relative overflow-hidden bg-[#020202]">
      {/* Scanline Effect */}
      <div className="absolute inset-0 pointer-events-none z-50 opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,118,0.06))] bg-[length:100%_2px,3px_100%]" />

      {/* System Status Bar */}
      <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center border-b border-white/5 z-20 bg-black/50 backdrop-blur-md">
        <div className="flex items-center gap-4">
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-[#006db1]/50 animate-pulse" />
            <div className="w-2 h-2 rounded-full bg-white/20" />
          </div>
          <span className="text-[9px] font-mono tracking-[0.2em] text-zinc-500 uppercase">
            Project_Vault: <span className="text-white">ACTIVE_INVESTMENTS</span> // Mode: <span className="text-[#006db1]">SECURE</span>
          </span>
        </div>
        <div className="hidden md:block text-[9px] font-mono text-zinc-500 tracking-widest uppercase italic">
          Industrial_Ref: DYN_P-2026 // <span className="text-[#006db1]">Access_Granted</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 pt-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Title */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -top-16 -left-8 text-[15vw] font-black text-white/[0.02] italic select-none -z-10 tracking-[-0.1em] uppercase">
                Dynatech_Assets
              </div>

              <h1 className="text-[12vw] md:text-[9vw] font-[1000] italic leading-[0.8] tracking-tighter uppercase">
                <span className="block text-white">PROJECTS &</span>
                <span className="relative inline-block mt-4">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#006db1] to-white">
                    INVESTMENT.
                  </span>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 1, duration: 1.5 }}
                    className="absolute -bottom-2 left-0 h-1 bg-[#006db1]/30"
                  />
                </span>
              </h1>
            </motion.div>
          </div>

          {/* Info Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="lg:col-span-4 bg-zinc-950/80 border border-white/5 p-8 relative group"
          >
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#0087cb]" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#006db1]" />

            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <Factory size={14} className="text-[#006db1]" />
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest italic font-mono">Investment_Core</span>
              </div>
              <p className="text-zinc-400 text-lg font-light leading-relaxed italic border-l border-white/10 pl-4">
                &ldquo;Strategic capital deployment into <span className="text-white">E-Mobility & ESS</span> infrastructures within the Egyptian industrial sector.&rdquo;
              </p>
              <div className="pt-4 flex items-center justify-between border-t border-white/5">
                <div className="text-[10px] font-black text-zinc-600 uppercase tracking-tighter">Total_RFPs: [03]</div>
                <div className="text-[10px] font-black text-[#006db1]">Sectors: ENERGY | AUTO</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-20 flex flex-col md:flex-row items-center gap-8 px-16 max-w-7xl mx-auto w-full"
      >
        <button className="group relative px-12 py-5 overflow-hidden">
          <div className="absolute inset-0 bg-white skew-x-[-20deg] group-hover:bg-[#006db1] transition-colors duration-300" />
          <span className="relative z-10 text-black font-[1000] uppercase text-xs tracking-[0.5em] flex items-center gap-3">
            VIEW_ACTIVE_RFPs <ArrowUpRight size={18} />
          </span>
        </button>
        <div className="hidden md:block flex-1 h-[1px] bg-white/5 relative">
          <motion.div
            animate={{ left: ['0%', '100%'] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            className="absolute top-0 w-20 h-full bg-gradient-to-r from-transparent via-[#0087cb]/20 to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}
