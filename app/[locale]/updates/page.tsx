"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Rss, Zap, Cpu, Battery, 
  TrendingUp, Mail, ArrowRight, 
  Layers, Share2, Bell, Bookmark
} from "lucide-react";

const UPDATES = [
  {
    id: "01",
    slug: "cu-fiber-breakthrough-2026",
    source: "Composites United",
    title: "Breakthrough in Fiber-Based Multi-Material Construction for 2026",
    tag: "LWM_TECH",
    accent: "#bcd647",
    excerpt: "New manufacturing processes enabling cost-effective carbon fiber integration for automotive applications."
  },
  {
    id: "02",
    slug: "fft-ai-manufacturing-2026",
    source: "FFT Produktionssysteme",
    title: "AI-Driven Flexible Manufacturing: The New Standard in Automotive Assembly",
    tag: "AUTOMATION",
    accent: "#43becc",
    excerpt: "Intelligent production systems that adapt to multiple vehicle models without retooling."
  }
];

export default function TechnologyUpdates() {
  return (
    <div className="bg-black text-white font-mono selection:bg-[#43becc] selection:text-black min-h-screen">
      
      {/* --- UPDATES HERO - Terminal Dashboard Style --- */}
      <header className="pt-28 pb-16 px-6 md:px-16 lg:px-32 border-b-2 border-white/5 relative overflow-hidden">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(to right, #43becc 1px, transparent 1px), linear-gradient(to bottom, #43becc 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
        
        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-[#43becc]/30" />
        <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-[#bcd647]/30" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Top Status Bar */}
          <div className="flex items-center justify-between mb-12 pb-4 border-b border-white/10">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#bcd647] rounded-full animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-widest text-[#bcd647]">LIVE FEED</span>
              </div>
              <div className="h-3 w-px bg-white/20" />
              <span className="text-[9px] font-black uppercase tracking-widest text-zinc-600">Updates synchronized</span>
            </div>
            <span className="text-[9px] font-black uppercase tracking-widest text-zinc-600">v2.4.1</span>
          </div>
          
          {/* Main Title Area */}
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            {/* Left: Title */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <Rss size={16} className="text-[#43becc]" />
                <span className="text-[11px] font-black tracking-[0.3em] uppercase text-[#43becc]">
                  TECH INTELLIGENCE
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-[1000] tracking-tighter uppercase italic leading-[0.9]">
                <span className="text-white">Sector</span>
                <span className="text-[#43becc]">_</span>
                <span className="text-zinc-600">Updates.</span>
              </h1>
              
              <p className="max-w-xl text-[11px] font-bold text-zinc-500 uppercase tracking-[0.15em] leading-loose">
                Real-time intelligence from DYNATECH partners, industry developments, and corporate announcements.
              </p>
            </div>
            
            {/* Right: Stats Grid */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-px bg-white/10 border border-white/10">
              <div className="bg-black p-6 space-y-2">
                <div className="flex items-center gap-2 text-[#bcd647]">
                  <Zap size={14} />
                  <span className="text-[9px] font-black uppercase tracking-widest">Partners</span>
                </div>
                <div className="text-3xl font-[1000] text-white">2</div>
                <div className="text-[8px] font-black uppercase tracking-widest text-zinc-600">Active Feeds</div>
              </div>
              <div className="bg-black p-6 space-y-2">
                <div className="flex items-center gap-2 text-[#43becc]">
                  <TrendingUp size={14} />
                  <span className="text-[9px] font-black uppercase tracking-widest">Insights</span>
                </div>
                <div className="text-3xl font-[1000] text-white">3</div>
                <div className="text-[8px] font-black uppercase tracking-widest text-zinc-600">MENA Reports</div>
              </div>
              <div className="bg-black p-6 space-y-2">
                <div className="flex items-center gap-2 text-white">
                  <Bell size={14} />
                  <span className="text-[9px] font-black uppercase tracking-widest">Bulletins</span>
                </div>
                <div className="text-3xl font-[1000] text-[#bcd647]">4</div>
                <div className="text-[8px] font-black uppercase tracking-widest text-zinc-600">Announcements</div>
              </div>
              <div className="bg-black p-6 space-y-2">
                <div className="flex items-center gap-2 text-zinc-500">
                  <Share2 size={14} />
                  <span className="text-[9px] font-black uppercase tracking-widest">Sources</span>
                </div>
                <div className="text-3xl font-[1000] text-[#43becc]">6+</div>
                <div className="text-[8px] font-black uppercase tracking-widest text-zinc-600">Curated</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="py-24 px-6 md:px-16 lg:px-32 max-w-7xl mx-auto space-y-40">
        
        {/* --- 2. PARTNER TECHNOLOGY UPDATES --- */}
        <section className="space-y-16">
          <div className="space-y-2">
            <span className="text-[10px] font-black tracking-[0.5em] uppercase text-zinc-600 italic">// Partner Technology Updates</span>
            <div className="flex items-center gap-4">
               <h2 className="text-3xl font-[1000] italic uppercase tracking-tighter">Latest from <span className="text-[#bcd647]">Partners.</span></h2>
               <div className="h-px flex-grow bg-white/5" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10">
            {UPDATES.map((item) => (
              <Link 
                key={item.id} 
                href={`/updates/${item.slug}`}
                className="bg-black p-12 space-y-6 group hover:bg-zinc-950/50 transition-all block"
              >
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <span className="text-[9px] font-black uppercase tracking-[0.4em] text-zinc-600 italic">Source_Node</span>
                    <h4 className="text-[12px] font-black uppercase tracking-widest" style={{ color: item.accent }}>{item.source}</h4>
                  </div>
                  <div className="px-3 py-1 border border-white/10 text-[8px] font-black opacity-40 uppercase tracking-widest italic">Latest_Sync</div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-[1000] uppercase italic tracking-tighter leading-tight group-hover:translate-x-2 transition-transform">
                   {item.title}
                </h3>
                
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wide leading-relaxed">
                  {item.excerpt}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                   <div className="flex items-center gap-4">
                      <Layers size={14} className="text-zinc-700" />
                      <span className="text-[9px] font-black uppercase tracking-widest text-zinc-500">{item.tag}</span>
                   </div>
                   <span className="p-4 border border-white/10 group-hover:bg-white group-hover:text-black transition-all">
                      <ArrowRight size={16} />
                   </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* --- 3. INDUSTRY INSIGHTS --- */}
        <section className="grid lg:grid-cols-12 gap-16 items-start">
           <div className="lg:col-span-4 space-y-8 sticky top-32">
              <div className="space-y-2">
                <span className="text-[10px] font-black tracking-[0.5em] uppercase text-zinc-600 italic">// Industry Insights</span>
                <h2 className="text-4xl font-[1000] italic uppercase tracking-tighter leading-[0.8]">MENA <br/><span className="text-[#43becc]">INSIGHTS.</span></h2>
              </div>
              <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest leading-relaxed italic">
                 Egypt automotive sector news and MENA EV/battery industry updates. Sourced + curated by DYNATECH team.
              </p>
              <div className="flex gap-4">
                 <div className="p-4 bg-zinc-950 border border-[#43becc]/20">
                    <TrendingUp className="text-[#43becc]" size={20} />
                 </div>
                 <div className="p-4 bg-zinc-950 border border-[#bcd647]/20">
                    <Battery className="text-[#bcd647]" size={20} />
                 </div>
              </div>
           </div>

           <div className="lg:col-span-8 space-y-4">
              {[
                { title: "Egypt Automotive Sector: Localizing the EV Supply Chain", date: "Q1 2026", cat: "Local_Policy", slug: "egypt-ev-infrastructure-expansion" },
                { title: "The MENA Battery Boom: Strategic Storage Capacity in KSA & Egypt", date: "MAR 2026", cat: "ESS_Market", slug: "mena-battery-market-growth" },
                { title: "Lightweight Materials in Public Transport: The Cairo Monorail Case Study", date: "FEB 2026", cat: "Infrastructure", slug: "cu-fiber-breakthrough-2026" }
              ].map((insight, idx) => (
                <Link 
                  key={idx} 
                  href={`/updates/${insight.slug}`}
                  className="block p-10 border-2 border-white/5 bg-zinc-950/20 group hover:border-[#43becc] transition-all relative overflow-hidden"
                >
                   <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                      <Bookmark size={14} />
                   </div>
                   <div className="flex gap-6 items-center mb-4">
                      <span className="text-[8px] font-black text-zinc-600 uppercase tracking-[0.4em] italic">{insight.date}</span>
                      <span className="h-px w-8 bg-zinc-800" />
                      <span className="text-[8px] font-black text-[#43becc] uppercase tracking-[0.4em] italic">{insight.cat}</span>
                   </div>
                   <h4 className="text-xl font-[1000] uppercase italic tracking-tighter leading-tight">{insight.title}</h4>
                </Link>
              ))}
           </div>
        </section>

        {/* --- 4. DYNATECH ANNOUNCEMENTS --- */}
        <section className="bg-zinc-950 border-y border-white/10 -mx-6 md:-mx-16 lg:-mx-32 px-6 md:px-16 lg:px-32 py-32">
           <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-10">
                 <div className="space-y-2">
                   <span className="text-[10px] font-black tracking-[0.5em] uppercase text-zinc-600 italic">// DYNATECH Announcements</span>
                   <div className="inline-block px-4 py-1 border border-[#bcd647] text-[#bcd647] text-[10px] font-black uppercase tracking-widest animate-pulse">
                      INTERNAL_MILESTONES
                   </div>
                 </div>
                 <h2 className="text-5xl font-[1000] italic uppercase tracking-tighter leading-none">Corporate <br/> Bulletins.</h2>
                 <p className="text-zinc-500 text-sm font-bold uppercase tracking-widest leading-loose italic">
                    Internal milestones, project updates, new agreements, and strategic developments from DYNATECH headquarters.
                 </p>
                 <div className="space-y-4 border-l border-white/10 pl-8">
                    <Link href="/updates/dynatech-lab-phase-2-complete" className="flex gap-4 items-center group">
                       <span className="text-[10px] font-black italic text-[#bcd647]">APR_2026:</span>
                       <span className="text-[10px] font-medium text-zinc-300 group-hover:text-white transition-colors">Phase II Technical Lab Infrastructure Completion.</span>
                    </Link>
                    <Link href="/updates/dynatech-strategic-logistics-agreement" className="flex gap-4 items-center opacity-50 group hover:opacity-100 transition-opacity">
                       <span className="text-[10px] font-black italic">JAN_2026:</span>
                       <span className="text-[10px] font-medium text-zinc-300 group-hover:text-white transition-colors">New Strategic Logistics Agreement Signed.</span>
                    </Link>
                 </div>
              </div>

              {/* NEWSLETTER CAPTURE */}
              <div className="p-12 bg-black border-2 border-white/10 relative overflow-hidden group shadow-2xl">
                 <div className="absolute top-0 right-0 p-8 opacity-5 text-[#bcd647]">
                    <Bell size={120} />
                 </div>
                 <div className="space-y-8 relative z-10">
                    <h3 className="text-2xl font-[1000] uppercase italic tracking-tight">Executive Briefing</h3>
                    <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Subscribe to the DYNATECH Technical Intelligence Newsletter.</p>
                    <div className="space-y-4">
                       <input 
                        type="email" 
                        placeholder="OFFICIAL_EMAIL_ADDRESS" 
                        className="w-full bg-zinc-900 border border-white/10 p-5 text-[10px] font-black tracking-widest focus:outline-none focus:border-[#bcd647] transition-all"
                       />
                       <button className="w-full bg-[#bcd647] text-black p-5 text-[10px] font-[1000] uppercase tracking-[0.4em] hover:bg-white transition-all flex items-center justify-center gap-4">
                          SECURE_SUBSCRIPTION <Mail size={16} />
                       </button>
                    </div>
                    <p className="text-[8px] text-zinc-700 font-black uppercase text-center tracking-widest italic">
                       // Institutional access only. Unsubscribe at any time.
                    </p>
                 </div>
              </div>
           </div>
        </section>

      </main>

      {/* --- FOOTER FEED --- */}
      <footer className="py-20 text-center space-y-4 opacity-20">
         <Share2 size={24} className="mx-auto text-zinc-500" />
         <p className="text-[8px] font-black uppercase tracking-[1em]">END_OF_FEED_v.2.0.26</p>
      </footer>
    </div>
  );
}
