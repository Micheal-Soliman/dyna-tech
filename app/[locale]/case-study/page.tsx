"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform, useInView } from "framer-motion";
import Link from "next/link";
import { 
  ArrowRight, CheckCircle2, Clock, 
  Zap, Battery, Sun, Factory, Sparkles
} from "lucide-react";

const AUTOMOTIVE_HUB = {
  status: "Under Construction",
  funding: "100% Funded by DYNATECH",
  location: "Industrial Area, New Cairo",
  area: "≥ 6,000 sqm",
  bays: "31",
  stockyard: "35 cars",
  capacity: "Up to 40 cars/day",
  sbus: [
    "Service Centre: ICE & BEV (Ground Floor, 13 work bays)",
    "Body Shop: Smart Repair, PPF (Basement, 22 work bays)",
    "Pre-owned Car Showroom with warranty",
    "Spare Parts Storage + Cars Stockyard",
    "Administration, Labs & Training (2 floors, 2,000 sqm)",
    "5S Facility: ICE + BEV + body shop + training + R&D"
  ]
};

const RFPS = [
  {
    id: "RFP1",
    slug: "lib-battery-enclosure",
    title: "EV Battery Enclosure",
    subtitle: "Pack Level",
    tech: "Lightweight materials — Aluminum alloy / SMC",
    partner: "FFT Produktionssysteme",
    status: "In Discussion",
    seeking: "Manufacturing partner / investor",
    icon: React.createElement(Battery, { size: 24 }),
    accent: "#43becc"
  },
  {
    id: "RFP2",
    slug: "sodium-ion-battery-cell",
    title: "Sodium-Ion Battery Cell",
    subtitle: "Cell Level",
    tech: "Emerging electrochemistry — cost-effective next gen battery",
    status: "Under Negotiation",
    why: "Lower cost, no rare earth dependency",
    icon: React.createElement(Zap, { size: 24 }),
    accent: "#bcd647"
  },
  {
    id: "RFP3",
    slug: "smart-pv-e-parking",
    title: "Smart PV E-Parking Module",
    subtitle: "Solar + Storage + Charging",
    tech: "Solar + Sodium-ion battery + EV fast charging",
    capacity: "4 cars/device",
    status: "Active development",
    icon: React.createElement(Sun, { size: 24 }),
    accent: "#43becc"
  }
];

function RevealCard({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}

function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
  return (
    <motion.section 
      ref={ref}
      style={{ y, opacity }}
      className="min-h-screen flex items-center px-6 md:px-16 lg:px-24 pt-24 pb-16 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#bcd647]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#43becc]/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-16">
          <div className="space-y-8">
            <motion.span 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[11px] font-black tracking-[0.3em] uppercase text-[#bcd647] block"
            >
              Active Project Pipeline
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-[5rem] xl:text-[6rem] font-[1000] tracking-tighter uppercase italic leading-[0.9]"
            >
              Turning <br/>
              <span className="text-[#bcd647]">Innovation</span> <br/>
              <span className="text-zinc-600">Into Reality.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-xl text-[11px] font-bold text-zinc-400 uppercase tracking-[0.15em] leading-loose"
            >
              DYNATECH&apos;s project pipeline spans automotive services, EV battery manufacturing, and smart energy.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <div className="px-8 py-4 bg-[#bcd647] text-black text-[10px] font-[1000] uppercase tracking-[0.4em] flex items-center gap-3">
                View Flagship Project <ArrowRight size={16} />
              </div>
              <div className="px-8 py-4 border border-white/20 text-white text-[10px] font-[1000] uppercase tracking-[0.4em]">
                Investment Opportunities
              </div>
            </motion.div>
          </div>
          
          <div className="max-w-md space-y-4">
            <RevealCard delay={0.2}>
              <div className="flex items-center gap-4 p-6 bg-[#bcd647]/10 border border-[#bcd647]/30">
                <div className="w-12 h-12 bg-[#bcd647]/20 flex items-center justify-center">
                  <CheckCircle2 size={24} className="text-[#bcd647]" />
                </div>
                <div>
                  <div className="text-2xl font-[1000] text-white">100%</div>
                  <div className="text-[9px] font-black uppercase tracking-widest text-zinc-600">Self-Funded</div>
                </div>
              </div>
            </RevealCard>
            <RevealCard delay={0.3}>
              <div className="flex items-center gap-4 p-6 bg-zinc-950/50 border border-white/10">
                <div className="w-12 h-12 bg-[#43becc]/10 flex items-center justify-center">
                  <Clock size={24} className="text-[#43becc]" />
                </div>
                <div>
                  <div className="text-2xl font-[1000] text-white">Active</div>
                  <div className="text-[9px] font-black uppercase tracking-widest text-zinc-600">Under Construction</div>
                </div>
              </div>
            </RevealCard>
            <RevealCard delay={0.4}>
              <div className="flex items-center gap-4 p-6 bg-zinc-950/50 border border-white/10">
                <div className="w-12 h-12 bg-zinc-900 flex items-center justify-center">
                  <Factory size={24} className="text-zinc-400" />
                </div>
                <div>
                  <div className="text-2xl font-[1000] text-white">3+</div>
                  <div className="text-[9px] font-black uppercase tracking-widest text-zinc-600">Projects</div>
                </div>
              </div>
            </RevealCard>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function HubSection() {
  return (
    <section className="py-32 px-6 md:px-16 lg:px-24 relative">
      <div className="max-w-7xl mx-auto">
        <RevealCard>
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px w-20 bg-gradient-to-r from-[#bcd647] to-transparent" />
            <span className="text-[10px] font-black tracking-[0.5em] uppercase text-[#bcd647] italic">// Flagship_Project</span>
          </div>
        </RevealCard>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <RevealCard delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-[1000] uppercase italic tracking-tighter leading-none">
                DYNATECH <br/>
                <span className="text-[#bcd647]">Automotive Hub.</span>
              </h2>
            </RevealCard>
            
            <RevealCard delay={0.2}>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-[#bcd647] text-black text-[10px] font-[1000] uppercase tracking-widest">
                  {AUTOMOTIVE_HUB.status}
                </span>
                <span className="px-4 py-2 bg-zinc-950 border border-white/10 text-[10px] font-black uppercase tracking-widest text-white">
                  {AUTOMOTIVE_HUB.funding}
                </span>
              </div>
            </RevealCard>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Area", value: AUTOMOTIVE_HUB.area, color: "text-white" },
                { label: "Bays", value: AUTOMOTIVE_HUB.bays, color: "text-[#43becc]" },
                { label: "Stockyard", value: AUTOMOTIVE_HUB.stockyard, color: "text-[#bcd647]" },
                { label: "Capacity", value: AUTOMOTIVE_HUB.capacity, color: "text-white" }
              ].map((stat, i) => (
                <RevealCard key={stat.label} delay={0.25 + i * 0.1}>
                  <div className="p-5 bg-zinc-950 border border-white/5 space-y-2 hover:border-[#bcd647]/30 transition-colors">
                    <span className="text-[9px] font-black uppercase tracking-widest text-zinc-600">{stat.label}</span>
                    <div className={`text-xl font-[1000] ${stat.color}`}>{stat.value}</div>
                  </div>
                </RevealCard>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <RevealCard delay={0.3}>
              <h3 className="text-lg font-[1000] uppercase italic tracking-tight text-[#43becc]">Key SBUs</h3>
            </RevealCard>
            <div className="space-y-4">
              {AUTOMOTIVE_HUB.sbus.map((sbu, i) => (
                <RevealCard key={i} delay={0.35 + i * 0.08}>
                  <div className="flex items-start gap-4 p-4 bg-zinc-950/30 border-l-2 border-[#bcd647] hover:bg-zinc-950/50 transition-all group">
                    <CheckCircle2 size={16} className="text-[#bcd647] mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-[11px] font-bold text-zinc-300 uppercase tracking-wide leading-relaxed">{sbu}</span>
                  </div>
                </RevealCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RFPSection() {
  return (
    <section className="py-32 px-6 md:px-16 lg:px-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{ 
        background: `radial-gradient(circle at 50% 50%, #43becc10 0%, transparent 50%)` 
      }} />
      
      <div className="max-w-7xl mx-auto relative">
        <RevealCard>
          <div className="flex items-center gap-4 mb-16">
            <div className="h-px w-20 bg-gradient-to-r from-[#43becc] to-transparent" />
            <span className="text-[10px] font-black tracking-[0.5em] uppercase text-[#43becc] italic">// Investment_Opportunities</span>
          </div>
        </RevealCard>
        
        <div className="grid lg:grid-cols-3 gap-6">
          {RFPS.map((rfp, i) => (
            <RevealCard key={rfp.id} delay={i * 0.15}>
              <Link href={`/case-study/${rfp.slug}`} className="block h-full">
                <motion.div 
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="p-8 bg-zinc-950 border border-white/5 hover:border-[#43becc]/50 transition-all space-y-6 h-full"
                >
                  <div className="flex items-start justify-between">
                    <div className="w-14 h-14 flex items-center justify-center" style={{ backgroundColor: `${rfp.accent}15` }}>
                      <span style={{ color: rfp.accent }}>{rfp.icon}</span>
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-widest text-zinc-600">{rfp.id}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-[1000] uppercase italic tracking-tight" style={{ color: rfp.accent }}>{rfp.title}</h3>
                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">{rfp.subtitle}</span>
                  </div>
                  <div className="space-y-3 text-[10px] font-bold text-zinc-500 uppercase tracking-wide leading-relaxed">
                    <p>{rfp.tech}</p>
                    {rfp.why && <p className="text-[#bcd647]">Why: {rfp.why}</p>}
                  </div>
                  <div className="pt-4 border-t border-white/5">
                    <div className="flex items-center gap-2 mb-2">
                      <motion.div 
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-2 h-2 rounded-full" 
                        style={{ backgroundColor: rfp.accent }} 
                      />
                      <span className="text-[9px] font-black uppercase tracking-widest" style={{ color: rfp.accent }}>{rfp.status}</span>
                    </div>
                    {rfp.seeking && <p className="text-[9px] font-black uppercase tracking-widest text-zinc-600">Seeking: {rfp.seeking}</p>}
                  </div>
                </motion.div>
              </Link>
            </RevealCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-32 px-6 md:px-16 lg:px-24 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#bcd647]/10 blur-[150px]" />
      <div className="max-w-4xl mx-auto text-center relative">
        <RevealCard>
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-[#bcd647]" />
            <div className="w-12 h-12 border border-[#bcd647]/30 flex items-center justify-center">
              <Sparkles size={20} className="text-[#bcd647]" />
            </div>
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-[#bcd647]" />
          </div>
        </RevealCard>
        
        <RevealCard delay={0.1}>
          <span className="text-[10px] font-black tracking-[0.5em] uppercase text-[#bcd647] italic block mb-6">// Strategic Partnership</span>
        </RevealCard>
        
        <RevealCard delay={0.2}>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-[1000] uppercase italic tracking-tighter mb-8">
            Partner with <span className="text-[#43becc]">DYNATECH.</span>
          </h2>
        </RevealCard>
        
        <RevealCard delay={0.3}>
          <p className="max-w-2xl mx-auto text-[12px] font-bold text-zinc-400 uppercase tracking-[0.15em] leading-loose mb-10">
            We are actively seeking strategic investment partners for our project pipeline.
          </p>
        </RevealCard>
        
        <RevealCard delay={0.4}>
          <Link href="/contact" className="inline-flex items-center gap-4 px-12 py-6 bg-[#bcd647] text-black text-[12px] font-[1000] uppercase tracking-[0.4em] hover:bg-white transition-all">
            Submit Partnership Inquiry <ArrowRight size={20} />
          </Link>
        </RevealCard>
      </div>
    </section>
  );
}

export default function CaseStudyPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  
  return (
    <div className="bg-black text-white font-mono selection:bg-[#43becc] selection:text-black min-h-screen overflow-x-hidden">
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] z-[100] origin-left" style={{ scaleX, background: "linear-gradient(90deg, #bcd647, #43becc)" }} />
      
      {/* Ambient Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] rounded-full opacity-10 blur-[150px]" style={{ background: "radial-gradient(circle, #bcd64720 0%, transparent 70%)" }} />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full opacity-10 blur-[120px]" style={{ background: "radial-gradient(circle, #43becc20 0%, transparent 70%)" }} />
      </div>
      
      {/* Normal Scroll Content with Parallax */}
      <main className="relative z-10">
        <HeroSection />
        <HubSection />
        <RFPSection />
        <CTASection />
      </main>
    </div>
  );
}
