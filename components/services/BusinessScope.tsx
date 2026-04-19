"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const BUSINESS_SCOPE = [
  { 
    id: "em", 
    title: "E-MOBILITY", 
    sub: "Technology Localization", 
    desc: "Establishing a regional hub for EV assembly and tech-transfer, integrating European manufacturing standards into the MENA ecosystem.", 
    color: "#43becc", 
    details: "Focuses on localizing the assembly of electric vehicles and charging infrastructure, reducing carbon footprints while building local technical expertise.",
    tech: ["EV Assembly Lines", "Charging Infrastructure", "Battery Integration"],
  },
  { 
    id: "ess", 
    title: "ESS", 
    sub: "Energy Storage Systems", 
    desc: "Advanced BESS solutions designed to stabilize industrial power grids and support renewable energy transitions.", 
    color: "#bcd647", 
    details: "Developing large-scale industrial battery systems (BESS) with smart thermal management to ensure power reliability in harsh desert climates.",
    tech: ["BESS Units", "Load Balancing", "Thermal Management"],
  },
  { 
    id: "lwm", 
    title: "LWM", 
    sub: "Lightweight Materials", 
    desc: "Industrializing high-performance composites to optimize efficiency across automotive and aerospace sectors.", 
    color: "#ffffff", 
    details: "Utilizing Carbon Fiber and RTM (Resin Transfer Molding) technologies through our partnership with CFK Valley Germany to produce structures 50% lighter than steel.",
    tech: ["Carbon Fiber", "Resin Injection", "Composite Lamination"],
  }
];

export default function BusinessScope() {
  return (
    <section className="relative z-20 py-40 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-40 flex flex-col md:flex-row justify-between items-end border-b-2 border-white/10 pb-12">
          <h2 className="text-7xl md:text-9xl font-[1000] italic uppercase tracking-tighter leading-none text-white/10">
            SCOPE<span className="text-white">_01</span>
          </h2>
          <div className="text-right">
            <p className="text-[#43becc] tracking-[0.4em] uppercase text-[10px] font-black italic mb-2">// Operational_Verticals</p>
            <p className="text-zinc-600 text-[8px] uppercase tracking-widest">Document Ref: DYN-2026-B</p>
          </div>
        </div>

        <div className="grid gap-60">
          {BUSINESS_SCOPE.map((item, i) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              className="grid lg:grid-cols-2 gap-20 items-start"
            >
              {/* Visual / Media Container */}
              <div className="relative group overflow-hidden border-2 border-white/10 aspect-video lg:aspect-square bg-zinc-900">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-700 z-10" />
                
                {/* Media Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {i % 2 === 0 ? (
                    <div className="w-full h-full bg-zinc-800 flex items-center justify-center italic text-zinc-700 font-black">
                      [ TECHNICAL_VIDEO_FEED_0{i+1} ]
                    </div>
                  ) : (
                    <div className="w-full h-full bg-zinc-900 flex items-center justify-center italic text-zinc-700 font-black">
                      [ HD_INDUSTRIAL_SNAPSHOT_0{i+1} ]
                    </div>
                  )}
                </div>

                {/* Tech Specs Overlay */}
                <div className="absolute bottom-8 left-8 z-20 space-y-2">
                  {item.tech.map(t => (
                    <div key={t} className="bg-black/80 backdrop-blur-md border border-white/10 px-4 py-1 text-[8px] font-bold tracking-widest uppercase">
                      {t}
                    </div>
                  ))}
                </div>
              </div>

              {/* Content Container */}
              <div className="space-y-12">
                <div className="space-y-6">
                  <span className="text-xs font-black italic tracking-[0.5em] uppercase" style={{ color: item.color }}>
                    Module_Ref: {item.sub}
                  </span>
                  <h3 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter leading-none">
                    {item.title}
                  </h3>
                  <p className="text-2xl italic font-light leading-relaxed text-zinc-300">
                    &ldquo;{item.desc}&rdquo;
                  </p>
                </div>

                <div className="p-10 border-l-4 border-white/10 bg-zinc-950/50 space-y-6">
                  <p className="text-zinc-500 text-sm leading-loose uppercase tracking-wide">
                    {item.details}
                  </p>
                  <button className="flex items-center gap-4 text-[#bcd647] text-[10px] font-black uppercase tracking-[0.5em] group hover:gap-8 transition-all">
                    Explore_Technical_Specs <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
