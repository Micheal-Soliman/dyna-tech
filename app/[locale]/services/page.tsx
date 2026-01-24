"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  Cpu, Rocket, ShieldCheck, Search, Cloud,
  BarChart, GraduationCap, ArrowRight, Activity,
  Quote, Terminal, ChevronRight, Zap, Target, Layers,
  Settings, UserCheck, HardDrive, LayoutGrid
} from "lucide-react";

// --- Extended Data Structure ---
const SOLUTIONS = [
  { id: "hxm", title: "SAP HXM", sub: "The Human Core", desc: "Before Raptors, HR was just data. We turned it into Experience. Localized for GCC Labor Laws.", color: "#43becc", modules: ["Employee Central", "Payroll", "Talent Management"] },
  { id: "erp", title: "SAP S/4HANA", sub: "The Nerve Center", desc: "Total orchestration of your business DNA in real-time. Clean Core strategy as a standard.", color: "#bcd647", modules: ["Finance", "Logistics", "Asset Management"] },
  { id: "btp", title: "SAP BTP", sub: "The Infinite Link", desc: "Expanding the core without breaking the standard. Side-by-side extensions for MENA.", color: "#43becc", modules: ["App Dev", "Integration", "AI Core"] }
];

const SERVICES = [
  { id: "01", title: "Implementation", challenge: "Traditional projects fail because of 'Black Box' delivery.", solution: "We use Cloud ALM for 100% transparency. Every sprint is a milestone.", metric: "12-Week Avg Go-Live", icon: <Rocket /> },
  { id: "02", title: "AMS Support", challenge: "Systems die after go-live without proper 'Cyber-Care'.", solution: "24/7 proactive monitoring. We fix bugs before you feel them.", isAMS: true, stats: "99.9% SLA / 30m Response", icon: <ShieldCheck /> },
  { id: "03", title: "Health Check", challenge: "Performance degradation and compliance drift over time.", solution: "Deep-dive diagnostic of your SAP environment to identify gaps.", metric: "48-Hour Full Audit", icon: <Activity /> },
  { id: "04", title: "Cloud Development", challenge: "Standard software doesn't fit unique localized requirements.", solution: "Custom BTP development that keeps your clean core intact.", metric: "Fast-Track Coding", icon: <Terminal /> },
  { id: "05", title: "BPO Services", challenge: "Payroll overhead consumes strategic HR focus.", solution: "Let us run your operations. Secure, compliant, and zero-error.", metric: "99% Accuracy", icon: <LayoutGrid /> },
  { id: "06", title: "Enablement (Propel)", challenge: "The best tech is useless if the humans don't know how to fire it.", solution: "Elite training that turns employees into SAP warriors.", metric: "95% Adoption Rate", icon: <GraduationCap /> }
];

export default function NarrativeCyberHub() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 20 });

  return (
    <div ref={containerRef} className="bg-[#050505] text-white font-mono selection:bg-white selection:text-black relative">

      {/* --- GRID BACKGROUND --- */}
      <div className="fixed inset-0 z-0 opacity-[0.05] pointer-events-none"
        style={{ backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)`, backgroundSize: '80px 80px' }} />

      {/* --- SCENE 01: THE AWAKENING (HERO) --- */}
      <section className="h-screen flex flex-col justify-center items-center px-6 sticky top-0 z-0">
        <motion.div
          style={{ opacity: useTransform(smoothProgress, [0, 0.1], [1, 0]), scale: useTransform(smoothProgress, [0, 0.1], [1, 0.9]) }}
          className="text-center z-10 border-2 border-white/20 p-12 md:p-24 bg-black/50 backdrop-blur-xl relative"
        >
          {/* Engineering Corners */}
          <div className="absolute -top-[2px] -left-[2px] w-12 h-12 border-t-4 border-l-4 border-white" />
          <div className="absolute -bottom-[2px] -right-[2px] w-12 h-12 border-b-4 border-r-4 border-white" />

          <p className="text-[#bcd647] mb-6 tracking-[1em] text-[10px] font-black uppercase animate-pulse italic underline underline-offset-8">Initialization_Complete</p>
          <h1 className="text-6xl md:text-[10vw] font-[1000] italic uppercase leading-none tracking-tighter">
            RAPTORS<span className="text-[#43becc]">.</span>SYSTEM
          </h1>
          <p className="mt-12 text-zinc-500 max-w-xl mx-auto text-[10px] leading-loose italic uppercase tracking-widest border-t border-white/10 pt-8">
            "Engineered Digital Cores for the MENA Frontier. Scroll to deploy mission."
          </p>
        </motion.div>
      </section>

      {/* --- SCENE 02: SOLUTIONS ODYSSEY (HORIZONTAL) --- */}
      <div className="h-[400vh] relative z-10">
        <div className="sticky top-0 h-screen overflow-hidden flex items-center bg-black border-y-2 border-white/20">
          <motion.div
            style={{ x: useTransform(smoothProgress, [-0.02, 0.4], ["100%", "-250%"]) }}
            className="flex gap-20 px-20"
          >
            <div className="min-w-[80vw] flex flex-col justify-center">
              <h2 className="text-[12vw] font-[1000] italic uppercase text-white tracking-tighter">01_SOLUTIONS</h2>
              <div className="w-40 h-1 bg-white" />
            </div>
            {SOLUTIONS.map((sol) => (
              <div key={sol.id} className="min-w-[80vw] border-2 border-white/20 p-16 md:p-24 bg-zinc-950 flex flex-col justify-center space-y-10 relative">
                <span className="text-[#43becc] text-xs font-black italic tracking-[0.5em] uppercase">Phase_Build: {sol.sub}</span>
                <h3 className="text-7xl md:text-9xl font-black italic uppercase tracking-tighter leading-none">{sol.title}</h3>
                <div className="grid md:grid-cols-2 gap-10 border-t border-white/10 pt-10">
                  <p className="text-zinc-500 text-lg italic leading-relaxed border-l-4 border-[#43becc] pl-10 italic">
                    "{sol.desc}"
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {sol.modules.map(mod => (
                      <span key={mod} className="px-4 py-1 border border-white/20 text-[10px] uppercase font-bold text-white/40">{mod}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* --- SCENE 03: SERVICES SAGA (WHITE BLUEPRINT) --- */}
      <section className="relative py-40 px-6 md:px-20 z-20 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="mb-40 flex flex-col md:flex-row justify-between items-end border-b-2 border-white/20 pb-12">
            <h2 className="text-7xl md:text-9xl font-[1000] italic uppercase tracking-tighter leading-none">THE <span className="text-white/20">SAGA</span>.</h2>
            <p className="text-[#bcd647] tracking-[0.4em] uppercase text-[10px] font-black italic mb-4">How we execute the mission //</p>
          </div>

          <div className="grid gap-20">
            {SERVICES.map((ser, i) => (
              <motion.div
                key={ser.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                className="border-2 border-white/20 bg-zinc-950/50 group"
              >
                <div className="grid lg:grid-cols-2 items-stretch">
                  <div className="p-12 md:p-20 space-y-12 border-b lg:border-b-0 lg:border-r-2 border-white/20">
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-16 border-2 border-white/20 flex items-center justify-center text-[#43becc] group-hover:bg-white group-hover:text-black transition-all">
                        {ser.icon}
                      </div>
                      <span className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter">0{i + 1}. {ser.title}</span>
                    </div>

                    <div className="space-y-8">
                      <div className="space-y-4">
                        <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest italic">// Business_Challenge</p>
                        <p className="text-xl font-light italic text-zinc-400 border-l-2 border-white/10 pl-6 group-hover:border-white transition-all">"{ser.challenge}"</p>
                      </div>
                      <div className="space-y-4">
                        <p className="text-[10px] font-mono text-[#43becc] uppercase tracking-widest italic">// Raptor_Solution</p>
                        <p className="text-lg font-bold uppercase tracking-tighter leading-tight text-white">{ser.solution}</p>
                      </div>
                    </div>

                    <div className="pt-10 flex flex-col md:flex-row gap-6">
                      <div className="flex-1 p-8 border-2 border-white/10 bg-black flex justify-between items-center group-hover:border-[#bcd647] transition-all">
                        <div>
                          <p className="text-[8px] text-zinc-500 uppercase tracking-widest mb-1">Impact_Metric</p>
                          <p className="text-3xl font-[1000] italic text-[#bcd647] uppercase tracking-tighter">{ser.isAMS ? ser.stats : ser.metric}</p>
                        </div>
                        <ChevronRight className="text-zinc-800 group-hover:text-white" size={32} />
                      </div>
                    </div>
                  </div>

                  <div className="p-12 md:p-20 bg-black flex flex-col justify-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `radial-gradient(#fff 2px, transparent 2px)`, backgroundSize: '24px 24px' }} />
                    <Quote className="text-[#43becc] mb-8" size={40} />
                    <p className="text-2xl italic font-light leading-relaxed text-zinc-500 mb-10 group-hover:text-white transition-colors">
                      "The most transparent implementation we've ever witnessed. The Cloud ALM approach changed our project ROI overnight."
                    </p>
                    <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[#bcd647] italic border-t border-white/10 pt-6">Executive_Testimonial // Gov_Sector</p>

                    {/* Call to Action Button per Service */}
                    <button className="mt-12 py-6 border-2 border-white/10 text-[10px] font-black uppercase tracking-[0.5em] hover:bg-white hover:text-black transition-all">
                      Request_Briefing()
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SCENE 04: THE PLAYBOOK (METHODOLOGY) --- */}
      <section className="py-60 px-6 border-y-2 border-white/20 bg-zinc-950 relative overflow-hidden z-30">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <h2 className="text-7xl md:text-9xl font-[1000] italic uppercase tracking-tighter leading-none">THE <span className="text-[#43becc]">PLAYBOOK.</span></h2>
            <p className="text-zinc-500 italic text-xl leading-relaxed">
              "A methodology forged in the heat of MENA's complex digital shifts. Zero guesswork. Only precision."
            </p>
            <div className="grid grid-cols-2 gap-6 pt-10">
              <div className="p-8 border-2 border-white/10 bg-black space-y-4">
                <Cloud className="text-[#43becc]" size={32} />
                <h4 className="text-[10px] font-black uppercase tracking-widest">Cloud ALM Driven</h4>
                <p className="text-[8px] text-zinc-600 leading-loose uppercase">100% Tracking in SAP Cloud ALM for full transparency.</p>
              </div>
              <div className="p-8 border-2 border-white/10 bg-black space-y-4">
                <Zap className="text-[#bcd647]" size={32} />
                <h4 className="text-[10px] font-black uppercase tracking-widest">Agile Scrum</h4>
                <p className="text-[8px] text-zinc-600 leading-loose uppercase">2-Week sprints with constant stakeholder feedback.</p>
              </div>
            </div>
          </div>

          <div className="border-2 border-white/20 aspect-video relative flex items-center justify-center bg-black group">
            {/* Visual Process Simulation */}
            <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />
            <div className="text-center space-y-6">
              <Target size={100} className="text-white/10 group-hover:text-[#43becc] transition-all group-hover:scale-110" />
              <p className="text-[10px] tracking-[1em] uppercase font-black animate-pulse text-white/20">Visualizing_Process</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SCENE 05: ACCELERATORS CALLOUT (THE VAULT MODE) --- */}
      <section className="py-40 bg-[#050505] z-40 relative border-y-2 border-white/20 overflow-hidden">
        {/* تأثير ليزر خلفي نحيف جداً */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-[#43becc] to-transparent" />
          <div className="absolute top-0 left-2/4 w-[1px] h-full bg-gradient-to-b from-transparent via-white to-transparent" />
          <div className="absolute top-0 left-3/4 w-[1px] h-full bg-gradient-to-b from-transparent via-[#43becc] to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12 relative z-10">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="text-[#43becc] text-[10px] font-black uppercase tracking-[0.5em]">
                Classified_Assets
                <div className="w-12 h-[2px] bg-[#43becc]" />
              </span>
            </div>
            <h3 className="text-6xl md:text-8xl font-[1000] italic tracking-tighter uppercase leading-none text-white">
              SPEED<span className="text-white/20">_</span>UP<span className="text-[#43becc]">.</span>
            </h3>
            <p className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.3em] italic max-w-md border-l border-white/20 pl-6">
              Direct access to 25+ Pre-Built MENA Accelerators. Reduced deployment time by 40% guaranteed.
            </p>
          </div>

          <div className="relative group">
            {/* توهج خلف الزر */}
            <div className="absolute -inset-4 bg-[#43becc]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <button className="relative px-16 py-8 bg-transparent border-2 border-white text-white font-[1000] uppercase text-xs tracking-[0.5em] hover:bg-white hover:text-black transition-all duration-300">
              <span className="relative z-10">EXPLORE_THE_VAULT</span>
              {/* تفاصيل هندسية على الزر */}
              <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-[#43becc]" />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-[#43becc]" />
            </button>
          </div>
        </div>

        {/* كود برمجي خفيف في الخلفية لزيادة طابع الـ Vault */}
        <div className="absolute bottom-4 right-10 text-[8px] font-mono text-white/5 uppercase tracking-[0.2em] pointer-events-none">
          Auth_Required // Encryption_Level_Alpha // Raptors_Internal
        </div>
      </section>

      {/* --- REFINED COMPACT TERMINAL (FOOTER) --- */}
      <footer className="py-20 flex flex-col justify-center items-center px-6 bg-[#050505] z-50 relative overflow-hidden border-t border-white/10">

        {/* Subtle Backdrop Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#43becc]/5 blur-[120px] pointer-events-none" />

        <div className="space-y-16 border-2 border-white/20 p-12 md:p-20 relative max-w-6xl w-full bg-black/40 backdrop-blur-md">

          {/* Status Header - More Integrated */}
          <div className="flex justify-between items-center border-b border-white/10 pb-8 mb-4">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 bg-[#43becc] rounded-full animate-pulse" />
              <span className="text-[7px] font-black uppercase tracking-[0.4em] text-white/40 italic underline underline-offset-4">System_Status: Operational</span>
            </div>
            <div className="text-white/20 text-[8px] font-mono tracking-[0.3em] font-black uppercase">
              TR-ID: RPT-2026-X
            </div>
          </div>

          {/* Main Call to Action - Scaled Down */}
          <div className="text-center space-y-10">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-[1000] italic uppercase tracking-tighter leading-none"
            >
              END <span className="text-[#43becc]">TRANS.</span>
            </motion.h2>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <button className="group relative w-full sm:w-auto px-12 py-6 bg-white text-black font-[1000] uppercase italic text-[10px] tracking-[0.5em] transition-all duration-300 overflow-hidden">
                <span className="relative z-10">EXECUTE.DEMO()</span>
                <div className="absolute inset-0 bg-[#43becc] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>

              <button className="w-full sm:w-auto px-12 py-6 border-2 border-white/20 text-white font-[1000] uppercase italic text-[10px] tracking-[0.5em] hover:bg-white hover:text-black transition-all duration-300">
                GET.PROPOSAL()
              </button>
            </div>
          </div>

          {/* Precision Corners - Smaller */}
          <div className="absolute -top-[2px] -left-[2px] w-8 h-8 border-t-2 border-l-2 border-[#43becc]" />
          <div className="absolute -bottom-[2px] -right-[2px] w-8 h-8 border-b-2 border-r-2 border-[#43becc]" />
        </div>

      </footer>

    </div>
  );
}