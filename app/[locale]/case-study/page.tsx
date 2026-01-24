"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import {
  ArrowUpRight, Filter, Terminal, Activity,
  ChevronRight, Zap, Target, Globe, Cpu
} from "lucide-react";

const INDUSTRIES = ["All", "Financial Services", "Real Estate", "Pharma", "Retail & Trading"];

const CASE_STUDIES = [
  { id: "01", title: "Al-Nahdi Medical", industry: "Pharma", metric: "40% Faster Payroll", desc: "Full HXM localization for 7,000+ employees. Automated GOSI compliance integration.", featured: true, tags: ["SuccessFactors", "GOSI"] },
  { id: "02", title: "Emaar Properties", industry: "Real Estate", metric: "99.9% Uptime", desc: "Digital transformation of global assets via SAP BTP extension suites.", featured: true, tags: ["BTP", "Clean Core"] },
  { id: "03", title: "Saudi National Bank", industry: "Financial Services", metric: "Zakat Automations", desc: "End-to-end financial orchestration and automated Zakat reporting.", featured: false, tags: ["S/4HANA", "Finance"] },
  { id: "04", title: "BinDawood Holding", industry: "Retail & Trading", metric: "30% Stock Boost", desc: "Supply chain optimization and digital procurement for retail giant.", featured: false, tags: ["Retail", "Ariba"] },
];

export default function CaseStudiesHub() {
  const [activeFilter, setActiveFilter] = useState("All");
  const horizontalRef = useRef<HTMLDivElement>(null);

  // التحكم في السكرول الأفقي للـ Featured
  const { scrollYProgress } = useScroll({ target: horizontalRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const smoothX = useSpring(x, { stiffness: 50, damping: 20 });

  const filteredProjects = activeFilter === "All"
    ? CASE_STUDIES
    : CASE_STUDIES.filter(p => p.industry === activeFilter);

  return (
    <div className="bg-[#020202] text-white font-mono selection:bg-[#43becc] selection:text-black">

      {/* --- 1. HERO SECTION (TERMINAL STYLE) --- */}
      <section className="h-screen flex flex-col justify-center px-6 md:px-16 relative overflow-hidden bg-[#020202]">

        {/* تأثير الـ Scanline المتحرك فوق الصفحة كلها */}
        <div className="absolute inset-0 pointer-events-none z-50 opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,118,0.06))] bg-[length:100%_2px,3px_100%]" />

        {/* استبدال الـ Badge بـ System Status Bar علوي */}
        <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center border-b border-white/5 z-20 bg-black/50 backdrop-blur-md">
          <div className="flex items-center gap-4">
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-red-500/50 animate-pulse" />
              <div className="w-2 h-2 rounded-full bg-[#43becc]/50 animate-pulse [animation-delay:0.2s]" />
              <div className="w-2 h-2 rounded-full bg-[#bcd647]/50 animate-pulse [animation-delay:0.4s]" />
            </div>
            <span className="text-[9px] font-mono tracking-[0.2em] text-zinc-500 uppercase">
              Node: <span className="text-white">MENA_SVR_01</span> // Latency: <span className="text-[#bcd647]">12ms</span>
            </span>
          </div>
          <div className="hidden md:block text-[9px] font-mono text-zinc-500 tracking-widest uppercase">
            {new Date().toLocaleDateString()} // <span className="text-[#43becc]">Secure_Connection_Active</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10 pt-20">
          <div className="grid lg:grid-cols-12 gap-12 items-center">

            {/* الجانب الأيسر: العنوان بتصميم "طبقات" */}
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                {/* خلفية نصية باهتة جداً بتتحرك خلف العنوان الرئيسي */}
                <div className="absolute -top-16 -left-8 text-[15vw] font-black text-white/[0.02] italic select-none -z-10 tracking-[ -0.1em]">
                  MENA_RECORDS
                </div>

                <h1 className="text-[12vw] md:text-[9vw] font-[1000] italic leading-[0.8] tracking-tighter uppercase">
                  <span className="block text-white">SUCCESS</span>
                  <span className="relative inline-block mt-4">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#43becc] to-[#bcd647]">
                      STORIES.
                    </span>
                    {/* خط الـ Focus تحت الكلمة */}
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ delay: 1, duration: 1.5 }}
                      className="absolute -bottom-2 left-0 h-1 bg-[#43becc]/30"
                    />
                  </span>
                </h1>
              </motion.div>
            </div>

            {/* الجانب الأيمن: Box معلومات تقني بدل الـ Paragraph العادي */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="lg:col-span-4 bg-zinc-950/80 border border-white/5 p-8 relative group"
            >
              {/* أركان الكادر (Corner Accents) */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#43becc]" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#bcd647]" />

              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <Terminal size={14} className="text-[#43becc]" />
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest italic font-mono">Mission_Manifesto</span>
                </div>
                <p className="text-zinc-400 text-lg font-light leading-relaxed italic border-l border-white/10 pl-4">
                  "Transforming <span className="text-white">MENA's industry leaders</span> through the surgical precision of SAP digital ecosystems."
                </p>
                <div className="pt-4 flex items-center justify-between">
                  <div className="text-[10px] font-black text-zinc-600">RECORDS_FOUND: [04]</div>
                  <motion.div
                    animate={{ opacity: [1, 0.4, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="text-[10px] font-black text-[#bcd647]"
                  >
                    • RUNNING_DEPLOYMENT
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* زرار الـ CTA بطريقة الـ "Slider" أو زرار ميكانيكي */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-20 flex flex-col md:flex-row items-center gap-8 px-16 max-w-7xl mx-auto w-full"
        >
          <button className="group relative px-12 py-5 overflow-hidden">
            <div className="absolute inset-0 bg-[#43becc] skew-x-[-20deg] group-hover:bg-white transition-colors duration-300" />
            <span className="relative z-10 text-black font-[1000] uppercase text-xs tracking-[0.5em] flex items-center gap-3">
              DECRYPT_CASES <ArrowUpRight size={18} />
            </span>
          </button>
          <div className="hidden md:block flex-1 h-[1px] bg-white/5 relative">
            <motion.div
              animate={{ left: ['0%', '100%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              className="absolute top-0 w-20 h-full bg-gradient-to-r from-transparent via-[#43becc]/20 to-transparent"
            />
          </div>
        </motion.div>

      </section>

      {/* --- 2. FEATURED SPOTLIGHT (Horizontal Scroll) --- */}
      <section ref={horizontalRef} className="relative h-[250vh] bg-black">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <div className="absolute top-20 left-12 flex items-center gap-4">
            <Zap size={16} className="text-[#bcd647]" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600">Featured_Spotlight //</span>
          </div>

          <motion.div style={{ x: smoothX }} className="flex gap-12 px-12">
            {CASE_STUDIES.filter(p => p.featured).map((project) => (
              <div key={project.id} className="w-[85vw] md:w-[70vw] h-[65vh] flex-shrink-0 bg-zinc-950 border border-white/10 p-12 flex flex-col justify-between relative group">
                <div className="flex justify-between items-start">
                  <h3 className="text-6xl md:text-8xl font-[1000] italic uppercase tracking-tighter leading-none group-hover:text-[#43becc] transition-colors">
                    {project.title}
                  </h3>
                  <div className="text-right">
                    <p className="text-[10px] font-black text-[#43becc] tracking-widest uppercase mb-2">{project.industry}</p>
                    <div className="text-2xl font-black text-zinc-800">/0{project.id}</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-end">
                  <p className="text-2xl italic text-zinc-400 font-light leading-snug">"{project.desc}"</p>
                  <div className="space-y-6 text-right">
                    <p className="text-6xl font-[1000] italic text-[#bcd647] tracking-tighter">{project.metric}</p>
                    <button className="inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-white hover:text-[#43becc] transition-colors">
                      View_Analysis <ArrowUpRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- 3. FILTER BY INDUSTRY (Sticky) --- */}
      <nav className="sticky top-0 z-50 bg-[#020202]/90 backdrop-blur-xl border-y border-white/10 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-6 overflow-x-auto no-scrollbar w-full md:w-auto">
            <Filter size={14} className="text-[#43becc]" />
            {INDUSTRIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`text-[10px] font-black uppercase tracking-[0.3em] px-4 py-2 transition-all
                  ${activeFilter === cat ? 'bg-white text-black' : 'text-zinc-600 hover:text-white border border-transparent hover:border-white/5'}`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-4 text-[9px] font-black text-zinc-700">
            <Terminal size={12} /> // DATABASE_READY: {filteredProjects.length} RECORDS
          </div>
        </div>
      </nav>

      {/* --- 4. CASE STUDY CARDS GRID --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto min-h-[60vh]">
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="group p-10 bg-zinc-950/50 border border-white/5 hover:border-[#43becc]/30 transition-all flex flex-col justify-between aspect-[4/5] relative"
              >
                <div className="space-y-6 relative z-10">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-black text-zinc-700 tracking-widest">ID: 0{project.id}</span>
                    <Cpu size={14} className="text-zinc-800" />
                  </div>
                  <h4 className="text-3xl font-[1000] italic uppercase tracking-tighter leading-none">{project.title}</h4>
                  <div className="flex gap-2">
                    {project.tags.map((t: string) => (
                      <span key={t} className="text-[8px] font-bold text-zinc-600 uppercase tracking-widest border border-white/5 px-2 py-1">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="space-y-6 relative z-10">
                  <p className="text-sm text-zinc-500 italic leading-relaxed">"{project.desc}"</p>
                  <div className="pt-6 border-t border-white/5 flex justify-between items-end">
                    <p className="text-2xl font-black italic text-[#bcd647]">{project.metric}</p>
                    <ArrowUpRight size={20} className="text-zinc-800 group-hover:text-white transition-all" />
                  </div>
                </div>

                {/* Background Accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#43becc]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="py-32 border-t border-white/5 text-center px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-white/[0.02] uppercase italic select-none">
          Archive
        </div>
        <div className="relative z-10 space-y-8">
          <h2 className="text-4xl md:text-6xl font-[1000] italic uppercase tracking-tighter">Your Story Starts Here.</h2>
          <button className="px-12 py-6 bg-[#43becc] text-black font-[1000] text-xs uppercase tracking-[0.4em] hover:bg-white transition-colors">
            Contact_Us.Log()
          </button>
        </div>
      </section>

    </div>
  );
}