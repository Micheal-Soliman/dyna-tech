"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function WhiteBlueprintAccelerator() {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className="bg-[#050505] text-white font-sans antialiased selection:bg-white selection:text-black relative">
      
      {/* --- BACKGROUND GRID SYSTEM --- */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />

      {/* --- SECTION 1: HERO (WHITE LINE FRAME) --- */}
      <ScrollSection>
        <div className="max-w-6xl w-full border border-white/10 p-10 md:p-20 relative overflow-hidden group">

          {/* Decorative Corner Lines */}
          <div className="absolute top-10 left-0 w-4 h-4 border-t border-l border-white/40" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/40" />
          
          <p className="text-white/60 tracking-[0.6em] text-[11px] font-bold uppercase mb-6 italic">Document_Ref: RAP-2026-PX</p>
          <h1 className="text-7xl md:text-[8vw] font-black leading-[0.85] tracking-tighter uppercase italic">
            PAYROLL<br/><span className="text-white/20 italic font-light">ENGINE.</span>
          </h1>
          <div className="mt-20 flex flex-col md:flex-row justify-between items-end gap-10">
             <p className="text-zinc-300 text-sm max-w-sm font-light leading-relaxed uppercase tracking-widest italic">
                Strategic Localization layer for SAP SuccessFactors. Engineered for high-scale GCC compliance.
             </p>
             <div className="flex items-center gap-4">
                <div className="w-12 h-12 border border-white/10 flex items-center justify-center rotate-45">
                   <div className="w-2 h-2 bg-white" />
                </div>
                <span className="text-[10px] font-black tracking-widest uppercase italic">Active_Status</span>
             </div>
          </div>
        </div>
      </ScrollSection>

      {/* --- SECTION 2: THE PROBLEM (CONTRAST LINES) --- */}
      <ScrollSection bg="transparent">
        <div className="grid lg:grid-cols-2 gap-0 w-full border border-white/10">
          <div className="p-12 md:p-20 border-r border-white/10 bg-white/[0.01]">
            <h2 className="text-[11px] text-white/55 font-black uppercase tracking-[0.5em] mb-10 italic">// 01_Problem_Scope</h2>
            <h3 className="text-5xl font-light italic leading-tight tracking-tighter uppercase">
              Regulatory <br/> <span className="font-black text-white">Fragmentation.</span>
            </h3>
          </div>
          <div className="p-12 md:p-20 flex flex-col justify-center gap-8">
            <p className="text-zinc-300 text-lg font-light leading-relaxed italic border-l border-white/20 pl-10">
              Legacy systems struggle with GOSI, WPS, and EOSB requirements, creating massive compliance gaps and manual risks.
            </p>
            <div className="h-[1px] w-full bg-gradient-to-r from-white/20 to-transparent" />
          </div>
        </div>
      </ScrollSection>

      {/* --- SECTION 3: KEY FEATURES (TECHNICAL GRID) --- */}
      <ScrollSection>
        <div className="w-full">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-white/10">

              {[
                { t: "GOSI Sync", d: "Automated calculations for all GCC nationals." },
                { t: "EOSB Engine", d: "End-of-Service Benefit law automation." },
                { t: "SIF Generator", d: "Instant bank-ready files for KSA/UAE." },
                { t: "Off-Cycle Pay", d: "Mid-month calculation precision." }
              ].map((item, i) => (
                <div key={i} className="p-10 border border-white/5 bg-black hover:bg-white/[0.03] transition-all group relative">
                   <span className="absolute top-4 right-4 text-[8px] text-white/20 font-mono tracking-tighter">NODE_{i+1}</span>
                   <h4 className="text-xl font-bold uppercase italic mb-6 text-white">{item.t}</h4>
                   <p className="text-zinc-300 text-xs leading-loose uppercase tracking-[0.2em]">{item.d}</p>
                </div>
              ))}
           </div>
        </div>
      </ScrollSection>

      {/* --- SECTION 4: ARCHITECTURE (BLUEPRINT DRAWING) --- */}
      <ScrollSection>
        <div className="w-full border border-white/10 bg-[#080808] p-12 md:p-20 relative">
           <h2 className="text-[11px] text-white/55 font-black uppercase tracking-[0.5em] mb-16 text-center italic">// 02_System_Architecture</h2>
           
           <div className="flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="max-w-md space-y-6">
                 <h3 className="text-4xl font-black italic tracking-tighter uppercase">Clean Core Strategy.</h3>
                 <p className="text-zinc-300 text-xs uppercase tracking-widest leading-loose">
                    Deploying side-by-side extensions via SAP BTP. 
                    Local logic remains external to ensure clean ERP upgrades.
                 </p>
              </div>

              {/* الرسم الهندسي بالخطوط البيضاء النحيفة */}
              <div className="w-full md:w-[400px] h-[300px] border border-white/10 relative flex items-center justify-center">
                 <div className="absolute inset-4 border border-white/5 rotate-12" />
                 <div className="absolute inset-8 border border-white/5 -rotate-12" />
                 <div className="w-32 h-32 border border-white/20 flex items-center justify-center relative bg-black">
                    <div className="w-16 h-16 border border-white/40 rotate-45" />
                    <span className="absolute -bottom-10 text-[9px] tracking-[1em] text-white/60 uppercase">BTP_Core</span>
                 </div>
              </div>
           </div>

           
        </div>
      </ScrollSection>

      {/* --- SECTION 5: TARGET SECTOR (MINIMALIST TABLE) --- */}
      <ScrollSection>
         <div className="w-full border-y border-white/10 py-20 flex flex-col md:flex-row justify-between items-center gap-10">
            <h3 className="text-5xl font-black italic tracking-tighter uppercase text-white/25">TARGET_INDUSTRIES</h3>
            <div className="flex flex-wrap justify-center gap-4">
               {["Banking", "Oil & Gas", "Retail", "Government", "Healthcare"].map((s, i) => (
                  <span key={i} className="px-6 py-2 border border-white/10 text-[11px] font-bold uppercase tracking-[0.3em] text-zinc-300 hover:text-white transition-colors">
                     {s}
                  </span>
               ))}
            </div>
         </div>
      </ScrollSection>

      {/* --- SECTION 6: CASE STUDY (THE DOCUMENT) --- */}
      <ScrollSection>
        <div className="w-full max-w-5xl border border-white/10 p-16 bg-[#0a0a0a] relative">
           <div className="absolute top-0 right-0 w-24 h-24 border-t border-r border-white/20" />
           <h2 className="text-[11px] text-white/55 font-black uppercase tracking-[0.5em] mb-12 italic">// Case_Study_v4.2</h2>
           <div className="grid md:grid-cols-2 gap-20">
              <div className="space-y-6">
                 <h3 className="text-4xl font-bold uppercase italic tracking-tighter text-white">Saudi Holding Group</h3>
                 <p className="text-zinc-300 text-sm leading-loose uppercase tracking-widest italic">
                    Automated 15,000+ records. Reduced cycle time from 7 days to 4 hours.
                 </p>
              </div>
              <div className="flex flex-col justify-end gap-6 border-l border-white/10 pl-10">
                 <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-[11px] text-zinc-400 uppercase">Efficiency</span>
                    <span className="text-xl font-bold italic text-white">+85%</span>
                 </div>
                 <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-[11px] text-zinc-400 uppercase">Compliance</span>
                    <span className="text-xl font-bold italic text-white">100%</span>
                 </div>
              </div>
           </div>
        </div>
      </ScrollSection>

      {/* --- SECTION 7: THE CLOSE (ACTION) --- */}
      <section className="relative min-h-[80vh] flex flex-col justify-center px-10 md:px-24 bg-black border-t border-white/10 py-20 z-50">
         <div className="flex flex-col md:flex-row justify-between items-center gap-20">
            <div className="space-y-6 text-center md:text-left">
               <h2 className="text-7xl font-black italic tracking-tighter uppercase leading-none italic">
                  STRATEGIC<br/><span className="text-white/20">DEPLOYMENT.</span>
               </h2>
               <p className="text-zinc-400 text-[11px] tracking-[0.5em] uppercase font-bold italic">Raptors Technical Group // All Rights Reserved</p>
            </div>
            <div className="flex flex-col gap-4 w-full md:w-auto">
               <button className="px-16 py-8 bg-white text-black font-black uppercase text-[10px] tracking-[0.4em] hover:bg-zinc-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                  Schedule Executive Briefing
               </button>
               <button className="px-16 py-8 border border-white/10 text-white font-black uppercase text-[10px] tracking-[0.4em] hover:bg-white/5 transition-colors">
                  Technical Specifications (PDF)
               </button>
            </div>
         </div>
      </section>

    </div>
  );
}

function ScrollSection({ children, bg = "transparent" }: { children: React.ReactNode, bg?: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0.3, 0.45, 0.6, 0.75], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.3, 0.45, 0.6, 0.75], [0.98, 1, 1, 0.98]);

  return (
    <section ref={ref} className="h-[140vh] relative" style={{ backgroundColor: bg }}>
      <div className="sticky top-0 h-screen w-full flex items-center justify-center px-6 md:px-24 overflow-hidden">
        <motion.div style={{ opacity, scale }} className="w-full flex justify-center">
          {children}
        </motion.div>
      </div>
    </section>
  );
}