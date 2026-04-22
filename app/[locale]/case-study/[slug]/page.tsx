"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { 
  CheckCircle2, Target, Globe, Thermometer, 
  ArrowLeft, Layers, FileText, ArrowRight, Download, Mail
} from "lucide-react";
import Link from "next/link";

// --- UNIQUE SCROLL PATTERN: Cascading 3D Cards with Rotation ---

const PROJECT_DATA = {
  id: "RFP1",
  title: "LIB Battery Enclosure",
  subtitle: "Pack Level Engineering",
  category: "Energy Storage",
  status: "Open for Proposals",
  location: "New Cairo, EG",
  investment: "EGP 5M - 8M",
  timeline: "Q3 2026 - Q2 2027",
  description: "Request for Proposal for Lithium-Ion Battery enclosures focusing on structural safety and thermal regulation for industrial ESS applications.",
  challenge: "Current battery enclosures lack sufficient thermal management for harsh desert climates, leading to 15% efficiency loss during peak summer operations.",
  solution: "Engineering high-performance aluminum-steel composite enclosures with integrated liquid cooling channels and IP67 sealing.",
  specs: [
    { label: "Dimensions", value: "1200x800x600 mm" },
    { label: "Weight", value: "45-60 kg" },
    { label: "IP Rating", value: "IP67" },
    { label: "Cooling", value: "Liquid/Passive Hybrid" },
  ],
  metrics: [
    { label: "Thermal Efficiency", val: "95", unit: "%", color: "#006db1" },
    { label: "Safety Rating", val: "IP67", unit: "", color: "#0087cb" },
    { label: "Design Life", val: "15", unit: "Years", color: "#006db1" },
    { label: "Temp Range", val: "-20", unit: "°C to +60", color: "#0087cb" },
  ],
  techStack: ["CFD Thermal Analysis", "FEA Structural", "Aluminum 6061-T6", "Ceramic Coating"],
  deliverables: ["CAD Drawings", "Thermal Simulations", "Prototype Units", "Test Reports"],
  partner: "CFK Valley Germany",
  contact: "procurement@dynatech-eg.com"
};

// 3D Card Flip Reveal
function Card3D({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, rotateX: 25, y: 60, scale: 0.95 }}
      animate={isInView ? { opacity: 1, rotateX: 0, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      style={{ transformPerspective: 1200, transformStyle: "preserve-3d" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Slide from Side with Skew
function SkewSlide({ children, direction = "left", delay = 0, className = "" }: { 
  children: React.ReactNode; 
  direction?: "left" | "right"; 
  delay?: number; 
  className?: string 
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const xOffset = direction === "left" ? -80 : 80;
  const skewValue = direction === "left" ? 5 : -5;
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: xOffset, skewX: skewValue }}
      animate={isInView ? { opacity: 1, x: 0, skewX: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Scale Pop Reveal
function ScalePop({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.7 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay, type: "spring", stiffness: 100 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Stagger Container
function StaggerContainer({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.12 } }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const }
  }
};

export default function IndustrialProjectDetail() {
  const project = PROJECT_DATA;
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
  return (
    <div className="bg-[#020202] text-zinc-300 font-mono selection:bg-[#006db1] selection:text-black overflow-x-hidden">
      
      {/* Floating Back Link */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className="fixed top-24 left-6 z-50"
      >
        <Link 
          href="/case-study" 
          className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900/80 backdrop-blur border border-white/10 text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-[#006db1] hover:border-[#006db1]/30 transition-all group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>
      </motion.div>
      
      {/* HERO: Parallax Fade */}
      <motion.section 
        ref={heroRef}
        style={{ y: heroY, opacity: heroOpacity }}
        className="min-h-screen pt-32 pb-24 px-6 md:px-16 border-b border-white/5 relative"
      >
        <div className="max-w-7xl mx-auto">
          {/* Status */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="px-3 py-1 bg-[#006db1]/20 text-[#006db1] text-[9px] font-black uppercase tracking-widest border border-[#006db1]/30">
              {project.status}
            </span>
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-zinc-500 italic">
              {project.category} // {project.id}
            </span>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <motion.h1 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.8 }}
                className="text-5xl md:text-8xl font-[1000] italic uppercase tracking-tighter text-white leading-[0.85] mb-6"
              >
                {project.title}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-2xl md:text-3xl text-zinc-500 italic font-light"
              >
                {project.subtitle}
              </motion.p>
            </div>

            <div className="lg:col-span-4 space-y-4">
              <Card3D delay={0.3}>
                <div className="p-6 bg-zinc-950 border border-white/10">
                  <p className="text-[9px] font-black uppercase tracking-widest text-zinc-600 mb-2">Investment Range</p>
                  <p className="text-2xl font-black italic text-[#006db1]">{project.investment}</p>
                </div>
              </Card3D>
              <Card3D delay={0.4}>
                <div className="p-6 bg-zinc-950 border border-white/10">
                  <p className="text-[9px] font-black uppercase tracking-widest text-zinc-600 mb-2">Timeline</p>
                  <p className="text-xl font-black italic text-white">{project.timeline}</p>
                </div>
              </Card3D>
            </div>
          </div>
        </div>
      </motion.section>

      {/* METRICS: Stagger Grid */}
      <section className="border-b border-white/5 bg-[#050505]">
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4">
          {project.metrics.map((stat, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="relative p-10 border-r border-white/5 overflow-hidden group hover:bg-black transition-all duration-500"
            >
              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-3" style={{ color: stat.color }}>
                  <span className="text-[8px] font-mono tracking-[0.3em] uppercase text-zinc-600">SPEC_0{i+1}</span>
                </div>
                <div className="space-y-1">
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-4xl md:text-5xl font-[1000] italic text-white tracking-tighter">{stat.val}</h3>
                    <span className="text-lg font-black italic" style={{ color: stat.color }}>{stat.unit}</span>
                  </div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold">{stat.label}</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#006db1] to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </motion.div>
          ))}
        </StaggerContainer>
      </section>

      {/* MAIN CONTENT: 3D Cards */}
      <section className="py-32 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-24">
          
          {/* Left Content */}
          <div className="lg:col-span-8 space-y-20">
            
            {/* Description */}
            <SkewSlide direction="left">
              <div className="p-8 bg-zinc-950/50 border border-white/5">
                <p className="text-xl leading-relaxed text-zinc-400">{project.description}</p>
              </div>
            </SkewSlide>

            {/* Challenge */}
            <Card3D delay={0.1}>
              <div className="space-y-6 p-8 bg-gradient-to-br from-zinc-950 to-zinc-900/50 border border-white/5">
                <h2 className="text-xl font-black italic uppercase tracking-widest flex items-center gap-6 text-white">
                  <span className="w-12 h-[1px] bg-[#006db1]" /> 01_The_Challenge
                </h2>
                <p className="text-lg font-light leading-relaxed italic text-zinc-400">{project.challenge}</p>
              </div>
            </Card3D>

            {/* Solution */}
            <Card3D delay={0.15}>
              <div className="space-y-6 p-8 bg-gradient-to-br from-zinc-900/50 to-zinc-950 border-l-2 border-[#006db1]">
                <h2 className="text-xl font-black italic uppercase tracking-widest flex items-center gap-6 text-[#006db1]">
                  <span className="w-12 h-[1px] bg-[#006db1]" /> 02_The_Solution
                </h2>
                <p className="text-lg font-light leading-relaxed italic text-zinc-400">{project.solution}</p>
              </div>
            </Card3D>

            {/* Specs Grid */}
            <div className="space-y-6">
              <SkewSlide direction="left">
                <h2 className="text-xl font-black italic uppercase tracking-widest flex items-center gap-6 text-white">
                  <span className="w-12 h-[1px] bg-zinc-600" /> 03_Technical_Specs
                </h2>
              </SkewSlide>
              <div className="grid md:grid-cols-2 gap-4">
                {project.specs.map((spec, idx) => (
                  <ScalePop key={spec.label} delay={idx * 0.1}>
                    <div className="flex justify-between items-center p-5 bg-zinc-950 border border-white/5 hover:border-[#006db1]/30 transition-colors">
                      <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">{spec.label}</span>
                      <span className="text-[10px] font-black uppercase tracking-widest text-white">{spec.value}</span>
                    </div>
                  </ScalePop>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <aside className="lg:col-span-4">
            <Card3D delay={0.2}>
              <div className="sticky top-32 p-10 bg-zinc-900/50 border border-white/10 space-y-12">
                
                {/* Tech Stack */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2">
                    <Layers className="text-[#006db1]" size={18} />
                    <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500">Tech_Stack</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((s, i) => (
                      <motion.span 
                        key={s} 
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                        className="px-3 py-2 bg-[#006db1]/10 border border-[#006db1]/20 text-[9px] font-bold text-[#006db1]"
                      >
                        {s}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Deliverables */}
                <div className="pt-10 border-t border-white/5 space-y-6">
                  <div className="flex items-center gap-2">
                    <FileText className="text-[#0087cb]" size={18} />
                    <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500">Deliverables</h4>
                  </div>
                  <div className="space-y-3">
                    {project.deliverables.map((d, i) => (
                      <motion.div 
                        key={d} 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-3 text-[10px] text-zinc-400"
                      >
                        <div className="w-1 h-1 bg-[#0087cb]" />
                        {d}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Contact */}
                <div className="pt-10 border-t border-white/5 space-y-4">
                  <p className="text-[9px] font-black uppercase tracking-widest text-zinc-600">Partner: {project.partner}</p>
                  <p className="text-[9px] font-mono text-[#006db1]">{project.contact}</p>
                </div>
              </div>
            </Card3D>
          </aside>
        </div>
      </section>

      {/* CTA: Scale Pop */}
      <section className="py-32 px-6 text-center relative border-t border-white/5">
        <ScalePop>
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-[1000] italic uppercase tracking-tighter mb-8">
              Submit <span className="text-[#006db1]">Proposal.</span>
            </h2>
            <p className="text-zinc-500 max-w-xl mx-auto mb-12 text-xs uppercase tracking-widest">
              Technical proposals accepted until Q2 2026. Direct all inquiries to procurement.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-12 py-6 bg-[#006db1] text-black font-black uppercase text-[10px] tracking-[0.4em] flex items-center justify-center gap-3"
              >
                <Download size={16} />
                DOWNLOAD_RFP_DOC
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-12 py-6 border-2 border-white/10 text-white font-black uppercase text-[10px] tracking-[0.4em] hover:bg-white hover:text-black transition-all flex items-center justify-center gap-3"
              >
                <Mail size={16} />
                CONTACT_TEAM
              </motion.button>
            </div>
          </div>
        </ScalePop>
      </section>

      {/* Next Project Link */}
      <section className="py-20 px-6 border-t border-white/5">
        <SkewSlide direction="right">
          <Link 
            href="/case-study" 
            className="max-w-7xl mx-auto flex items-center justify-between p-8 bg-zinc-950/30 border border-white/5 hover:border-[#006db1]/30 transition-all group"
          >
            <div>
              <span className="text-[9px] font-black uppercase tracking-widest text-zinc-600 block mb-2">Back to</span>
              <span className="text-2xl font-[1000] uppercase italic text-white group-hover:text-[#006db1] transition-colors">All Projects</span>
            </div>
            <ArrowRight size={32} className="text-zinc-600 group-hover:text-[#006db1] group-hover:translate-x-2 transition-all" />
          </Link>
        </SkewSlide>
      </section>
    </div>
  );
}
