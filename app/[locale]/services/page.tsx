"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { 
  ArrowUpRight, TrendingUp, MapPin, Globe,
  Car, Battery, Layers, Sparkles, ArrowRight
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const PILLARS = [
  {
    id: "e-mobility",
    icon: Car,
    accent: "#bcd647",
    headline: "The Future of How Egypt Moves",
    tagline: "E-Mobility",
    whatItMeans: "Transition from traditional combustion engine vehicles to new energy vehicles (NEVs) — electric cars, EV charging, battery-powered transportation.",
    whyEgypt: "Egypt is currently leading MENA in automotive investments with 27 major projects; government targeting 100,000 vehicles/year and 7,000 EVs by 2032.",
    stat: { value: "EGP 1.5B", label: "FY2024/2025 Allocation" },
    dynatechRole: "Technology partner and exclusive representative for the companies enabling this transition.",
    cta: { text: "Explore Our Projects", href: "/case-study#automotive-hub" }
  },
  {
    id: "ess",
    icon: Battery,
    accent: "#43becc",
    headline: "Powering the Next Generation",
    tagline: "Energy Storage Systems",
    whatItMeans: "Battery technology, lithium-ion and sodium-ion solutions, EV charging infrastructure, and grid-scale energy storage.",
    whyEgypt: "The backbone of Egypt's EV transition — powering vehicles, charging networks, and smart infrastructure.",
    stat: { value: "Active", label: "RFP Pipeline" },
    dynatechRole: "Active RFPs in LIB battery enclosures, sodium-ion cell production, and smart EV parking modules.",
    cta: { text: "Explore Investment Opportunities", href: "/case-study#rfps" }
  },
  {
    id: "lwm",
    icon: Layers,
    accent: "#bcd647",
    headline: "Building Lighter, Stronger, Smarter",
    tagline: "Lightweight Materials",
    whatItMeans: "Replacing traditional heavy metals in vehicles and structures with advanced fiber-based composite materials — reducing weight, improving efficiency.",
    whyEgypt: "CU is one of the world's largest networks for fiber-based multi-material lightweight construction, based in Berlin, Germany.",
    stat: { value: "~350+", label: "CU Member Organizations" },
    dynatechRole: "Exclusive representative of Composites United in Egypt — transferring and localizing LWM innovations and manufacturing.",
    cta: { text: "Meet Our Partners", href: "/accelerators" }
  }
];

const EGYPT_STATS = [
  { value: "27", suffix: "+", label: "Major Projects", sub: "Leading MENA 2025" },
  { value: "1.5", suffix: "B EGP", label: "Govt Investment", sub: "Localization Fund" },
  { value: "100", suffix: "K", label: "Annual Target", sub: "Vehicles by 2032" }
];

// ============================================
// LAYER COMPONENTS
// ============================================

function HeroLayer({ opacity, scale, y }: { opacity: any; scale: any; y: any }) {
  return (
    <motion.div 
      style={{ opacity, scale, y }}
      className="absolute inset-0 flex items-center z-10 px-6 md:px-16 lg:px-24"
    >
      {/* Background decorative elements */}
      <div className="absolute top-1/4 right-20 w-64 h-64 rounded-full bg-[#bcd647]/5 blur-[100px]" />
      <div className="absolute bottom-1/4 left-20 w-48 h-48 rounded-full bg-[#43becc]/5 blur-[80px]" />
      
      <div className="max-w-7xl mx-auto w-full relative">
        {/* Top badge */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px w-16 bg-gradient-to-r from-[#bcd647] to-transparent" />
          <span className="text-[11px] tracking-[0.4em] uppercase text-[#bcd647] font-medium">What We Do</span>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Main Title */}
          <div className="space-y-8">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.85]">
              <span className="text-white block">DYNA</span>
              <span className="text-[#43becc] italic block">TECH</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-zinc-400 max-w-lg leading-relaxed font-light">
              Egypt&apos;s gateway to <span className="text-white">future mobility</span>, energy storage, and lightweight materials.
            </p>
            
            {/* Pillar pills */}
            <div className="flex flex-wrap gap-3 pt-4">
              {PILLARS.map((pillar, i) => (
                <div
                  key={pillar.id}
                  className="group flex items-center gap-3 px-5 py-3 border border-white/10 bg-white/[0.02] hover:border-[#bcd647]/30 hover:bg-white/[0.04] transition-all cursor-pointer"
                >
                  <div 
                    className="w-8 h-8 flex items-center justify-center border border-white/20 group-hover:border-[#bcd647]/50 transition-colors"
                    style={{ color: pillar.accent }}
                  >
                    <pillar.icon size={16} strokeWidth={1.5} />
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-300 group-hover:text-white transition-colors">{pillar.tagline}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right: Stats Card */}
          <div className="lg:pl-12">
            <div className="relative">
              {/* Corner accents */}
              <div className="absolute -top-px -left-px w-20 h-px bg-gradient-to-r from-[#43becc] to-transparent" />
              <div className="absolute -top-px -left-px w-px h-20 bg-gradient-to-b from-[#43becc] to-transparent" />
              <div className="absolute -bottom-px -right-px w-20 h-px bg-gradient-to-l from-[#43becc] to-transparent" />
              <div className="absolute -bottom-px -right-px w-px h-20 bg-gradient-to-t from-[#43becc] to-transparent" />
              
              <div className="backdrop-blur-md bg-white/[0.02] border border-white/10 p-10">
                <div className="flex items-center gap-3 pb-6 border-b border-white/10 mb-8">
                  <Sparkles size={16} className="text-[#43becc]" />
                  <span className="text-[11px] tracking-[0.25em] uppercase text-[#43becc] font-medium">Market Overview 2025</span>
                </div>
                
                <div className="grid grid-cols-3 gap-6">
                  {EGYPT_STATS.map((stat, i) => (
                    <div key={i} className="text-center group">
                      <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-[#bcd647] transition-colors">{stat.value}{stat.suffix}</div>
                      <div className="text-[10px] uppercase tracking-wider text-zinc-500 leading-tight">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function PillarLayer({ 
  pillar, 
  index, 
  opacity, 
  scale, 
  x 
}: { 
  pillar: typeof PILLARS[0]; 
  index: number; 
  opacity: any; 
  scale: any; 
  x: any;
}) {
  const Icon = pillar.icon;
  
  return (
    <motion.div 
      style={{ opacity, scale, x }}
      className="absolute inset-0 flex items-center z-20 px-6 md:px-16 lg:px-24"
    >
      {/* Gradient background for this section */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{ 
          background: `radial-gradient(circle at ${index % 2 === 0 ? 'right' : 'left'} 30%, ${pillar.accent}15 0%, transparent 50%)` 
        }}
      />
      
      <div className="max-w-7xl mx-auto w-full relative">
        {/* Section Header Line */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px w-20" style={{ background: `linear-gradient(90deg, ${pillar.accent}, transparent)` }} />
          <span className="text-[11px] tracking-[0.4em] uppercase font-medium" style={{ color: pillar.accent }}>
            Pillar 0{index + 1}
          </span>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Title & Stats */}
          <div className="space-y-8">
            <div className="flex items-start gap-5">
              <div 
                className="w-16 h-16 flex items-center justify-center border-2 shrink-0"
                style={{ borderColor: `${pillar.accent}40`, color: pillar.accent }}
              >
                <Icon size={32} strokeWidth={1.5} />
              </div>
              <div className="pt-1">
                <span className="text-xs tracking-wider uppercase mb-1 block" style={{ color: pillar.accent }}>{pillar.tagline}</span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[0.95]">
                  {pillar.headline}
                </h2>
              </div>
            </div>
            
            {/* Stat Card */}
            <div className="relative pt-6 mt-8">
              <div className="h-px w-full bg-gradient-to-r from-white/20 to-transparent mb-8" />
              <div 
                className="inline-block px-8 py-6 border"
                style={{ borderColor: `${pillar.accent}30` }}
              >
                <div className="text-5xl font-bold mb-2" style={{ color: pillar.accent }}>
                  {pillar.stat.value}
                </div>
                <div className="text-[11px] tracking-wider uppercase text-zinc-500">{pillar.stat.label}</div>
              </div>
            </div>
          </div>
          
          {/* Right: Content Cards */}
          <div className="space-y-6">
            {/* What It Means */}
            <div className="relative backdrop-blur-sm bg-white/[0.02] border border-white/10 p-8 group hover:bg-white/[0.03] transition-colors">
              <div className="absolute top-0 left-0 w-full h-px" style={{ background: `linear-gradient(90deg, ${pillar.accent}50, transparent)` }} />
              <h3 className="text-[11px] tracking-[0.3em] uppercase text-zinc-500 mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: pillar.accent }} />
                What This Means
              </h3>
              <p className="text-lg text-zinc-300 leading-relaxed">{pillar.whatItMeans}</p>
            </div>
            
            {/* Why Egypt */}
            <div className="relative backdrop-blur-sm bg-white/[0.02] border border-white/10 p-8 group hover:bg-white/[0.03] transition-colors">
              <div className="absolute top-0 left-0 w-full h-px" style={{ background: `linear-gradient(90deg, ${pillar.accent}30, transparent)` }} />
              <h3 className="text-[11px] tracking-[0.3em] uppercase text-zinc-500 mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: pillar.accent }} />
                Why Egypt, Why Now
              </h3>
              <p className="text-zinc-400 leading-relaxed">{pillar.whyEgypt}</p>
            </div>
            
            {/* Dynatech Role */}
            <div 
              className="relative p-8 border"
              style={{ borderColor: `${pillar.accent}20` }}
            >
              <div className="absolute top-0 left-0 w-16 h-px" style={{ background: `linear-gradient(90deg, ${pillar.accent}, transparent)` }} />
              <h3 className="text-[11px] tracking-[0.3em] uppercase mb-4 font-medium" style={{ color: pillar.accent }}>DYNATECH&apos;s Role</h3>
              <p className="text-zinc-300 leading-relaxed mb-5">{pillar.dynatechRole}</p>
              <Link 
                href={pillar.cta.href}
                className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-wider uppercase group/link"
                style={{ color: pillar.accent }}
              >
                {pillar.cta.text}
                <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function CTALayer({ opacity }: { opacity: any }) {
  return (
    <motion.div 
      style={{ opacity }}
      className="absolute inset-0 flex items-center justify-center z-30 px-6"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#bcd647]/10 blur-[150px]" />
      
      <div className="text-center max-w-4xl relative">
        {/* Top decoration */}
        <div className="flex items-center justify-center gap-6 mb-10">
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-[#bcd647]" />
          <div className="w-12 h-12 border border-[#bcd647]/30 flex items-center justify-center">
            <Sparkles size={20} className="text-[#bcd647]" />
          </div>
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-[#bcd647]" />
        </div>
        
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[0.9]">
          Ready to Drive<br />
          <span className="text-[#bcd647] italic">The Future?</span>
        </h2>
        
        <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Partner with DYNATECH to bring world-class technology to Egypt&apos;s growing automotive and energy sectors.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            href="/contact"
            className="group px-10 py-5 bg-[#bcd647] text-black font-bold text-sm uppercase tracking-wider hover:bg-[#d4e86c] transition-all flex items-center gap-3"
          >
            Start a Conversation
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link 
            href="/case-study"
            className="px-10 py-5 border border-white/20 text-white font-bold text-sm uppercase tracking-wider hover:bg-white/5 hover:border-white/40 transition-all"
          >
            View Case Studies
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Hero: 0-18%
  const heroOpacity = useTransform(smoothProgress, [0, 0.12, 0.18], [1, 1, 0]);
  const heroScale = useTransform(smoothProgress, [0, 0.12], [1, 1.1]);
  const heroY = useTransform(smoothProgress, [0, 0.18], [0, -100]);
  
  // Pillar 1 (E-Mobility): 18-40%
  const p1Opacity = useTransform(smoothProgress, [0.18, 0.26, 0.35, 0.40], [0, 1, 1, 0]);
  const p1Scale = useTransform(smoothProgress, [0.18, 0.26, 0.35, 0.40], [0.9, 1, 1, 0.9]);
  const p1X = useTransform(smoothProgress, [0.18, 0.40], [100, -100]);
  
  // Pillar 2 (ESS): 40-62%
  const p2Opacity = useTransform(smoothProgress, [0.40, 0.48, 0.57, 0.62], [0, 1, 1, 0]);
  const p2Scale = useTransform(smoothProgress, [0.40, 0.48, 0.57, 0.62], [0.9, 1, 1, 0.9]);
  const p2X = useTransform(smoothProgress, [0.40, 0.62], [100, -100]);
  
  // Pillar 3 (LWM): 62-82%
  const p3Opacity = useTransform(smoothProgress, [0.62, 0.70, 0.77, 0.82], [0, 1, 1, 0]);
  const p3Scale = useTransform(smoothProgress, [0.62, 0.70, 0.77, 0.82], [0.9, 1, 1, 0.9]);
  const p3X = useTransform(smoothProgress, [0.62, 0.82], [100, -100]);
  
  // CTA: 82-100% (extends to end since footer removed)
  const ctaOpacity = useTransform(smoothProgress, [0.82, 0.88, 0.95, 1], [0, 1, 1, 1]);

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div ref={containerRef} className="bg-[#0a0a0a] text-white min-h-screen selection:bg-[#bcd647] selection:text-black">
      <Header />
      
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] z-[100] origin-left" 
        style={{ scaleX, background: "linear-gradient(90deg, #bcd647, #43becc)" }} 
      />

      {/* Ambient Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] rounded-full opacity-20 blur-[150px]" 
          style={{ background: "radial-gradient(circle, #bcd64720 0%, transparent 70%)" }} />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full opacity-15 blur-[120px]" 
          style={{ background: "radial-gradient(circle, #43becc20 0%, transparent 70%)" }} />
        <div className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }} 
        />
      </div>

      {/* Sticky Container */}
      <section 
        ref={containerRef}
        className="relative w-full"
        style={{ height: "600vh" }}
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
          
          {/* Hero Layer */}
          <HeroLayer 
            opacity={heroOpacity} 
            scale={heroScale} 
            y={heroY} 
          />
          
          {/* Pillar 1 - E-Mobility */}
          <PillarLayer 
            pillar={PILLARS[0]} 
            index={0} 
            opacity={p1Opacity} 
            scale={p1Scale} 
            x={p1X} 
          />
          
          {/* Pillar 2 - ESS */}
          <PillarLayer 
            pillar={PILLARS[1]} 
            index={1} 
            opacity={p2Opacity} 
            scale={p2Scale} 
            x={p2X} 
          />
          
          {/* Pillar 3 - LWM */}
          <PillarLayer 
            pillar={PILLARS[2]} 
            index={2} 
            opacity={p3Opacity} 
            scale={p3Scale} 
            x={p3X} 
          />
          
          {/* CTA Layer */}
          <CTALayer opacity={ctaOpacity} />
          
        </div>
      </section>

    </div>
  );
}