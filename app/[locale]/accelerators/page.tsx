"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { 
  Zap, Cpu, Link as LinkIcon, Database, ArrowDown, Box, ChevronRight, Filter, ExternalLink 
} from "lucide-react";

const ACCELERATORS = [
  { id: "01", name: "Oracle Connector", cat: "Connectivity", stat: "60% Faster Sync", desc: "The bridge between two worlds. No manual mapping, just pure data flow.", icon: <LinkIcon size={40}/> },
  { id: "02", name: "Payroll Engine", cat: "Compliance", stat: "100% MENA Ready", desc: "Pre-configured laws for GOSI & EOS. Compliance isn't a task; it's a default.", icon: <Database size={40}/> },
  { id: "03", name: "QPPS Qiwa Sync", cat: "Governance", stat: "Real-time Alignment", desc: "Direct neural link to Qiwa portals. Master data that never sleeps.", icon: <Zap size={40}/> },
  { id: "04", name: "Tamayoz", cat: "Performance", stat: "40% KPI Boost", desc: "Vision 2030 framework embedded. Engineering success into the core.", icon: <Cpu size={40}/> },
  { id: "05", name: "Time Connector", cat: "Connectivity", stat: "30% Less Errors", desc: "Seamless time-sheet synchronization across global platforms.", icon: <ClockIcon size={40}/> },
  { id: "06", name: "Tawasol", cat: "Governance", stat: "Self-Service Ready", desc: "Advanced employee communication hub localized for MENA.", icon: <LinkIcon size={40}/> }
];

const CATEGORIES = ["View All", "Compliance", "Connectivity", "Governance", "Performance"];

export default function AcceleratorsStoryPage() {
  const containerRef = useRef(null);
  const [activeCat, setActiveCat] = useState("View All");

  const filteredData = activeCat === "View All" 
    ? ACCELERATORS 
    : ACCELERATORS.filter(item => item.cat === activeCat);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 20 });

  return (
    <div ref={containerRef} className="bg-black text-white font-mono relative">
      
      {/* 1. HERO SCENE + SAP BADGE */}
      <section className="h-screen flex flex-col justify-center items-center sticky top-0 z-0">
        <div className="absolute top-10 right-10 flex flex-col items-end gap-2">
           <div className="px-4 py-2 border-2 border-white/20 bg-white/5 flex items-center gap-3">
              <div className="w-2 h-2 bg-[#43becc] rounded-full animate-ping" />
              <span className="text-[10px] font-black tracking-widest uppercase">SAP_Store_Badge_Verified</span>
           </div>
        </div>

        <motion.div 
          style={{ 
            opacity: useTransform(smoothProgress, [0, 0.1], [1, 0]),
            scale: useTransform(smoothProgress, [0, 0.1], [1, 0.8])
          }}
          className="text-center px-6"
        >
          <div className="inline-block px-4 py-1 border-2 border-[#43becc] text-[#43becc] text-[10px] mb-8 animate-pulse">
            ACCESSING_RAPTORS_VAULT_
          </div>
          <h1 className="text-[8vw] font-[1000] italic leading-none tracking-tighter uppercase">
            25+ PRE-BUILT<br/><span className="text-zinc-800">MENA.</span>ACCELERATORS
          </h1>
          <p className="text-zinc-500 text-xs tracking-[0.4em] mt-8 uppercase italic max-w-2xl mx-auto">
             Implement Faster. Go-Live Quicker. Reduce Total Cost of Ownership.
          </p>
          <ArrowDown className="mx-auto mt-10 text-zinc-800 animate-bounce" size={24} />
        </motion.div>
      </section>

      {/* 2. SIDEBAR FILTER (Sticky) */}
      <div className="sticky top-20 left-10 z-[100] hidden lg:block w-fit ml-10">
        <div className="border-2 border-white/20 p-6 bg-black/80 backdrop-blur-md space-y-4">
           <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-4">
              <Filter size={14} className="text-[#43becc]" />
              <span className="text-[10px] font-black uppercase tracking-widest">Category_Filter</span>
           </div>
           {CATEGORIES.map(cat => (
             <button 
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={`block w-full text-left text-[10px] font-black uppercase tracking-widest py-2 transition-all 
                ${activeCat === cat ? 'text-[#43becc] pl-4 border-l-2 border-[#43becc]' : 'text-zinc-600 hover:text-white'}`}
             >
               {cat}
             </button>
           ))}
        </div>
      </div>

      {/* 3. THE STORY CONTENT (Filtered Cards) */}
      <div className="relative z-10 -mt-[200px] lg:-mt-[300px]">
        <AnimatePresence mode="wait">
          {filteredData.map((item, i) => (
            <AcceleratorCard 
              key={item.id + activeCat} // Key change forces re-animation on filter
              item={item} 
              index={i} 
              total={filteredData.length}
              scrollYProgress={smoothProgress}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* 4. FINAL CALL TO ACTION */}
      <section className="h-screen flex flex-col justify-center items-center bg-[#050505] relative z-20 border-t-2 border-white/20">
        <motion.div 
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           className="text-center space-y-12"
        >
           <Box size={100} className="text-[#43becc] mx-auto animate-pulse border-2 border-white/10 p-4" />
           <h2 className="text-7xl font-black italic tracking-tighter uppercase">Vault<span className="text-[#43becc]">_Deployed.</span></h2>
           <p className="text-zinc-500 uppercase tracking-[0.5em] text-[10px]">Contact Raptors for full technical quote</p>
           <button className="px-16 py-8 bg-white text-black font-black uppercase text-xs tracking-widest hover:bg-[#43becc] transition-colors border-2 border-white">
             Request Executive Briefing
           </button>
        </motion.div>
      </section>
    </div>
  );
}

function AcceleratorCard({ item, index, total, scrollYProgress }: any) {
  const start = 0.15 + (index * (0.7 / total));
  const end = start + (0.7 / total);

  const y = useTransform(scrollYProgress, [start - 0.05, start, end, end + 0.05], [400, 0, 0, -400]);
  const opacity = useTransform(scrollYProgress, [start - 0.05, start, end, end + 0.05], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [start - 0.05, start, end, end + 0.05], [0.9, 1, 1, 0.9]);

  return (
    <motion.section 
      style={{ y, opacity, scale }}
      className="h-screen w-full flex items-center justify-center sticky top-0"
    >
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-0 items-stretch bg-zinc-950 border-2 border-white/20 overflow-hidden mx-6">
        
        {/* Visual / Icon Side */}
        <div className="aspect-square bg-black flex flex-col items-center justify-center relative group border-b-2 lg:border-b-0 lg:border-r-2 border-white/20">
            <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity" />
            
            {/* Corner Lines */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white/20" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white/20" />

            <div className="relative z-10 text-[#43becc]">
              {item.icon}
            </div>
            
            <div className="absolute bottom-10 flex flex-col items-center">
               <div className="text-[#bcd647] text-4xl font-black italic tracking-tighter">{item.stat}</div>
               <div className="text-[8px] text-zinc-600 font-black uppercase tracking-[0.4em]">Verified_ROI_Metric</div>
            </div>
        </div>

        {/* Text Content Side */}
        <div className="p-12 md:p-20 flex flex-col justify-center space-y-10 bg-zinc-900/30">
            <div className="space-y-4">
               <div className="flex items-center gap-4">
                  <span className="text-[#43becc] text-[10px] font-black tracking-[0.5em] uppercase italic">// MOD_{item.id}</span>
                  <div className="h-[1px] flex-grow bg-white/10" />
               </div>
               <h3 className="text-5xl md:text-6xl font-[1000] italic tracking-tighter uppercase leading-none">{item.name}</h3>
               <p className="text-[#43becc] text-[10px] font-black uppercase tracking-[0.5em]">{item.cat}</p>
            </div>

            <p className="text-zinc-400 text-lg italic font-light leading-relaxed border-l-2 border-white/20 pl-8">
               "{item.desc}"
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
               <button className="flex items-center justify-center gap-4 px-8 py-4 bg-white text-black text-[10px] font-black uppercase tracking-widest hover:bg-[#43becc] transition-all">
                 Learn More <ChevronRight size={14} />
               </button>
               <button className="flex items-center justify-center gap-4 px-8 py-4 border-2 border-white/10 text-white text-[10px] font-black uppercase tracking-widest hover:bg-white/5 transition-all">
                 Technical Specs
               </button>
            </div>
        </div>

      </div>
    </motion.section>
  );
}

function ClockIcon({ size }: { size: number }) {
  return <div className="p-2 border-2 border-current rounded-full"><div className="w-1 h-4 bg-current mx-auto" /><div className="w-4 h-1 bg-current -mt-1" /></div>;
}