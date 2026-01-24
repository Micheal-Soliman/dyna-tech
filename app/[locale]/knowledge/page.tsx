"use client";
import React from "react";
import { motion, type Variants } from "framer-motion";
import { 
  BookOpen, LayoutGrid, Globe2, Factory, 
  Newspaper, Download, Search, ArrowRight,
  FileText, ChevronRight, Activity, Cpu
} from "lucide-react";

// --- Configuration: Content Pillars Data ---
const PILLARS = [
  { 
    id: "basics", 
    title: "SAP_Basics", 
    icon: <BookOpen size={20} />, 
    desc: "Foundational knowledge for HXM evolution.",
    articles: ["What is SAP SuccessFactors?", "HCM vs HXM: The Difference", "Modules Explained", "Cost Guide for MENA"]
  },
  { 
    id: "implementation", 
    title: "Best_Practices", 
    icon: <LayoutGrid size={20} />, 
    desc: "Strategic guides for flawless deployment.",
    articles: ["Implementation Step-by-Step", "5 Common Mistakes", "Choosing the Right Partner", "SAP Cloud ALM Guide"]
  },
  { 
    id: "mena", 
    title: "MENA_Compliance", 
    icon: <Globe2 size={20} />, 
    desc: "Regional localization & labor law mastery.",
    articles: ["Qiwa Integration Guide", "Saudi Arabia HXM Guide", "Egypt Compliance Guide", "GCC Labor Law Support"]
  },
  { 
    id: "industry", 
    title: "Industry_Verticals", 
    icon: <Factory size={20} />, 
    desc: "Tailored solutions for specific sectors.",
    articles: ["Financial Services HR", "Real Estate Transformation", "Pharma HR Management", "Retail Best Practices"]
  },
  { 
    id: "news", 
    title: "System_Updates", 
    icon: <Newspaper size={20} />, 
    desc: "Latest SAP release notes & regional news.",
    articles: ["SAP Q4 2025 Release Notes", "Saudi Labor Law Changes", "Top 5 New Features", "AI in SuccessFactors"]
  },
  { 
    id: "resources", 
    title: "Expert_Tools", 
    icon: <Cpu size={20} />, 
    desc: "Templates and frameworks for managers.",
    articles: ["HR Strategy Template", "RFP Checklist", "Change Management Guide", "ROI Calculator"]
  }
];

// --- Animation Variants ---
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, skewY: 1 },
  visible: { 
    opacity: 1, 
    y: 0, 
    skewY: 0,
    transition: { duration: 0.8, ease: EASE } 
  }
};

export default function KnowledgeCenterHub() {
  return (
    <div className="bg-[#020202] text-zinc-300 font-mono selection:bg-[#43becc] selection:text-black min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="pt-44 pb-24 px-6 md:px-16 relative border-b border-white/5 overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-0 right-0 w-[50%] h-full bg-[#43becc]/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[30%] h-1/2 bg-[#bcd647]/5 blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 text-[#43becc] mb-8">
              <Activity size={18} className="animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em]">Intel_Repository_Initialized</span>
            </div>
            
            <h1 className="text-7xl md:text-[9vw] font-[1000] italic text-white uppercase tracking-tighter leading-[0.8] mb-12">
              KNOWLEDGE<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#43becc] via-[#43becc] to-[#bcd647]">
                CENTER.
              </span>
            </h1>

            <div className="grid md:grid-cols-12 gap-12 items-end">
              <div className="md:col-span-7">
                <p className="text-xl md:text-2xl font-light italic text-zinc-500 border-l-2 border-[#43becc] pl-8 leading-relaxed">
                  "Learn from MENA's leading SAP partner. Access deep technical insights, compliance frameworks, and industry-specific HR strategies."
                </p>
              </div>
              <div className="md:col-span-5 relative group">
                <div className="flex items-center bg-zinc-950 border border-white/10 p-4 focus-within:border-[#43becc] transition-all">
                  <Search size={18} className="text-zinc-700 mr-4" />
                  <input 
                    type="text" 
                    placeholder="Search_Database..." 
                    className="bg-transparent w-full text-[10px] font-bold uppercase tracking-widest focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. CONTENT PILLARS GRID */}
      <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-1 bg-white/5 border border-white/5"
        >
          {PILLARS.map((pillar) => (
            <motion.div
              key={pillar.id}
              variants={itemVariants}
              className="group p-12 bg-black hover:bg-[#050505] transition-all flex flex-col h-[520px] justify-between relative overflow-hidden"
            >
              {/* Pillar Header */}
              <div className="space-y-8 relative z-10">
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-zinc-900 border border-white/10 text-[#43becc] group-hover:bg-[#43becc] group-hover:text-black transition-all">
                    {pillar.icon}
                  </div>
                  <span className="text-[10px] font-mono text-zinc-800 font-bold tracking-tighter italic">REF_LOG_{pillar.id.toUpperCase()}</span>
                </div>
                
                <div>
                  <h3 className="text-3xl font-black italic uppercase tracking-tighter text-white mb-2">{pillar.title}</h3>
                  <p className="text-[10px] text-zinc-600 font-bold tracking-[0.2em] uppercase leading-relaxed">{pillar.desc}</p>
                </div>

                {/* Article List Reveal */}
                <div className="space-y-4 pt-6">
                  {pillar.articles.map((art, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ x: 6 }}
                      className="flex items-center gap-3 cursor-pointer group/item"
                    >
                      <ChevronRight size={12} className="text-zinc-800 group-hover/item:text-[#bcd647]" />
                      <span className="text-[11px] font-bold text-zinc-500 group-hover/item:text-white uppercase italic transition-colors">
                        {art}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Pillar Footer */}
              <div className="relative z-10">
                <div className="h-[1px] w-full bg-white/5 mb-8" />
                <button className="flex items-center gap-4 text-[9px] font-black uppercase tracking-[0.5em] text-white hover:text-[#43becc] transition-colors">
                  Full_Pillar_Access <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </div>

              {/* Decorative Glow */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#43becc]/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 3. DOWNLOADABLE RESOURCES (LEAD GATE PREVIEW) */}
      <section className="py-24 px-6 md:px-16 border-t border-white/5 bg-zinc-950/40">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-5 space-y-8">
            <h2 className="text-5xl font-[1000] italic uppercase tracking-tighter text-white leading-none">
              READY_TO<br/><span className="text-[#bcd647]">DOWNLOAD.</span>
            </h2>
            <p className="text-zinc-500 italic text-lg leading-relaxed">
              Unlock our exclusive library of implementation templates and whitepapers designed for the GCC market.
            </p>
          </div>

          <div className="lg:col-span-7 grid md:grid-cols-2 gap-4">
            {[
              { name: "Strategy_Whitepaper_2026", size: "4.8MB" },
              { name: "HCM_Migration_Checklist", size: "1.2MB" },
              { name: "Zakat_Compliance_Guide", size: "3.5MB" },
              { name: "Qiwa_Integration_Flow", size: "0.8MB" },
            ].map((file, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 bg-black border border-white/5 flex flex-col justify-between h-48 group hover:border-[#43becc] transition-all cursor-pointer"
              >
                <div className="flex justify-between items-start">
                  <FileText className="text-zinc-700 group-hover:text-[#43becc]" size={24} />
                  <span className="text-[8px] font-mono text-zinc-800 uppercase">{file.size}</span>
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-white group-hover:text-[#43becc]">{file.name}</h4>
                  <div className="flex items-center gap-2 mt-4 text-[8px] font-bold text-zinc-600 uppercase tracking-tighter">
                    <Download size={10} /> Secure_Download_Active
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TERMINAL NEWSLETTER (Lead Gen) */}
      <section className="py-40 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="p-12 md:p-24 border border-white/10 bg-zinc-950 relative overflow-hidden text-center"
          >
            {/* Terminal Decorations */}
            <div className="absolute top-0 left-0 w-full h-8 bg-white/5 flex items-center px-4 gap-2">
              <div className="w-2 h-2 rounded-full bg-red-500/30" />
              <div className="w-2 h-2 rounded-full bg-yellow-500/30" />
              <div className="w-2 h-2 rounded-full bg-green-500/30" />
              <span className="text-[8px] text-zinc-600 ml-4 tracking-[0.4em] uppercase font-mono italic">Sub_Routine: Newsletter_Subscribe</span>
            </div>

            <div className="pt-8 space-y-8">
              <h2 className="text-4xl md:text-6xl font-[1000] italic uppercase tracking-tighter text-white">
                STAY_IN_THE_LOOP.
              </h2>
              <p className="text-zinc-500 text-sm italic tracking-widest uppercase">Get the latest SAP MENA updates delivered to your terminal.</p>
              
              <div className="flex flex-col md:flex-row gap-0 max-w-lg mx-auto border border-white/10 group focus-within:border-[#43becc] transition-all">
                <input 
                  type="email" 
                  placeholder="Corporate_Email" 
                  className="bg-black/50 p-6 flex-1 text-[10px] font-bold uppercase tracking-widest focus:outline-none text-white"
                />
                <button className="bg-white text-black px-10 py-6 font-black uppercase text-[10px] tracking-[0.4em] hover:bg-[#43becc] transition-colors">
                  Execute.Submit()
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}