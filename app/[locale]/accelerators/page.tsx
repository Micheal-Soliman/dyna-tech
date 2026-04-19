"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Globe, MapPin, Calendar, Users, 
  ExternalLink, Award, ShieldCheck, 
  CheckCircle2, ArrowUpRight, Landmark,
  Briefcase, FileText, Activity, ArrowRight
} from "lucide-react";

export default function InternationalAlliances() {
  return (
    <div className="bg-black text-white font-mono selection:bg-[#43becc] selection:text-black min-h-screen">
      
      {/* --- FULL HEIGHT HERO SECTION --- */}
      <header className="min-h-[calc(100vh-5rem)] flex flex-col justify-center px-6 md:px-16 lg:px-32 pt-24 pb-16 border-b-2 border-white/5 relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
        
        {/* Dual Accent Glows */}
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#bcd647]/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#43becc]/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-16">
            {/* Left: Title */}
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-[2px] bg-[#43becc]" />
                <span className="text-[11px] font-black tracking-[0.3em] uppercase text-[#43becc]">
                  Strategic Alliances
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-[5rem] xl:text-[6rem] font-[1000] tracking-tighter uppercase italic leading-[0.9]">
                Our <span className="text-[#bcd647]">Exclusive</span> <br/>
                <span className="text-zinc-600">Technology</span> <br/>
                Partners.
              </h1>
              
              <p className="max-w-xl text-[11px] font-bold text-zinc-400 uppercase tracking-[0.15em] leading-loose">
                DYNATECH holds exclusive representation agreements with two of Europe&apos;s most respected technology organizations in automotive manufacturing and lightweight materials.
              </p>
            </div>
            
            {/* Right: Partner Logos */}
            <div className="max-w-md space-y-6">
              <div className="flex items-center gap-4 p-6 bg-[#bcd647]/10 border border-[#bcd647]/30">
                <div className="w-14 h-14 bg-[#bcd647]/20 flex items-center justify-center">
                  <span className="font-[1000] text-2xl tracking-tighter uppercase italic text-[#bcd647]">CU</span>
                </div>
                <div>
                  <div className="text-[12px] font-[1000] text-white uppercase tracking-widest">Composites United</div>
                  <div className="text-[9px] font-black uppercase tracking-widest text-zinc-600">Lightweight Materials</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-6 bg-[#43becc]/10 border border-[#43becc]/30">
                <div className="w-14 h-14 bg-[#43becc]/10 flex items-center justify-center">
                  <span className="font-[1000] text-2xl tracking-tighter uppercase italic text-[#43becc]">FFT</span>
                </div>
                <div>
                  <div className="text-[12px] font-[1000] text-white uppercase tracking-widest">FFT Produktionssysteme</div>
                  <div className="text-[9px] font-black uppercase tracking-widest text-zinc-600">Manufacturing Systems</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="py-32 space-y-48 px-6 md:px-16 lg:px-32 max-w-7xl mx-auto">
        
        {/* --- 2. PARTNER CARD: COMPOSITES UNITED (Lime Accent) --- */}
        <section className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 sticky top-32 space-y-12">
             <div className="aspect-square bg-zinc-950 border-2 border-white/10 flex flex-col items-center justify-center relative group overflow-hidden shadow-[0_0_50px_rgba(0,0,0,1)]">
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white/20" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white/20" />
                <div className="text-center group-hover:scale-110 transition-transform duration-700">
                    <span className="font-[1000] text-5xl tracking-tighter uppercase italic text-white">CU</span>
                    <div className="h-px w-full bg-[#bcd647] mt-2 shadow-[0_0_10px_#bcd647]" />
                </div>
                <div className="absolute bottom-10 text-[8px] font-black uppercase tracking-[0.5em] text-zinc-600 italic">Official_Node: Berlin_DE</div>
             </div>
             
             <div className="space-y-8">
                <div className="space-y-4">
                    <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-[#bcd647]">
                        <MapPin size={14} /> BERLIN.DE_OFFICE
                    </div>
                    <h2 className="text-5xl font-[1000] uppercase tracking-tighter italic leading-none">Composites<br/>United</h2>
                </div>
                <p className="text-zinc-500 text-sm italic font-medium leading-relaxed border-l border-white/10 pl-6">
                   Global network for fiber-based multi-material lightweight construction — bridging European research with Egyptian industrial implementation.
                </p>
                <div className="grid grid-cols-2 gap-px bg-white/5 border border-white/5">
                   <div className="p-4 bg-zinc-950 space-y-2">
                      <div className="text-[18px] font-[1000] text-[#bcd647]">~350+</div>
                      <div className="text-[8px] font-black uppercase text-zinc-600">Member_Orgs</div>
                   </div>
                   <div className="p-4 bg-zinc-950 space-y-2">
                      <div className="text-[18px] font-[1000] text-[#bcd647]">GLOBAL</div>
                      <div className="text-[8px] font-black uppercase text-zinc-600">Network_Reach</div>
                   </div>
                </div>
             </div>
          </div>

          <div className="lg:col-span-7 space-y-12 bg-zinc-950/50 border-2 border-white/10 p-10 md:p-20 relative">
             <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="text-[#bcd647] text-[10px] font-black tracking-[0.5em] uppercase italic">// MOD_EXCLUSIVE_REPRESENTATIVE</span>
                  <div className="h-px flex-grow bg-white/5" />
                </div>
                <h3 className="text-3xl font-[1000] italic uppercase tracking-tight">Scope: Egypt Territory</h3>
                <p className="text-zinc-400 text-lg italic border-l-2 border-white/10 pl-8">
                   &quot;Transferring CU&apos;s LWM innovations into high-performance customer solutions in the Egyptian market.&quot;
                </p>
             </div>

             <div className="space-y-4">
                {["Training and Education", "Research and Development", "Localization of Lightweight Components"].map(item => (
                   <div key={item} className="flex items-center gap-6 p-6 border border-white/5 bg-black hover:border-[#bcd647] transition-all group">
                      <div className="w-2 h-2 bg-[#bcd647] group-hover:animate-ping" />
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-300">{item}</span>
                   </div>
                ))}
             </div>

             <div className="pt-10 space-y-6">
                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                    <Award size={16} className="text-[#bcd647]" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 italic">Strategic Milestone</span>
                </div>
                <div className="p-8 bg-black border border-white/5 space-y-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 text-[40px] opacity-10 italic font-black">2022</div>
                    <p className="text-xs font-black uppercase tracking-widest text-[#bcd647]">Hannover Messe 2022 Signing</p>
                    <div className="aspect-video bg-zinc-900 border border-white/10 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-700">
                        <span className="text-[9px] font-black uppercase text-zinc-700">[DOCUMENTATION: EVENT_PHOTO_01]</span>
                    </div>
                </div>
             </div>

             <div className="flex flex-col gap-4">
               <a href="https://composites-united.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-6 w-full py-8 bg-white text-black font-[1000] uppercase text-[11px] tracking-[0.5em] hover:bg-[#bcd647] transition-all group">
                  Official Website <ArrowUpRight size={16} className="group-hover:translate-x-1 transition-transform" />
               </a>
               <Link href="/accelerators/composites-united" className="flex items-center justify-center gap-6 w-full py-4 border border-[#bcd647]/30 text-[#bcd647] font-[1000] uppercase text-[10px] tracking-[0.5em] hover:bg-[#bcd647]/10 hover:border-[#bcd647] transition-all group">
                  View Full Profile <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
               </Link>
             </div>
          </div>
        </section>

        {/* --- 3. PARTNER CARD: FFT (Cyan Accent) --- */}
        <section className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 sticky top-32 space-y-12">
             <div className="aspect-square bg-zinc-950 border-2 border-white/10 flex flex-col items-center justify-center relative group overflow-hidden shadow-[0_0_50px_rgba(0,0,0,1)]">
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white/20" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-white/20" />
                <div className="text-center">
                    <span className="font-[1000] text-5xl tracking-tighter uppercase italic text-white">FFT</span>
                    <div className="h-px w-full bg-[#43becc] mt-2 shadow-[0_0_10px_#43becc]" />
                </div>
                <div className="absolute bottom-10 text-[8px] font-black uppercase tracking-[0.5em] text-zinc-600 italic">Official_Node: Fulda_DE</div>
             </div>
             
             <div className="space-y-8">
                <div className="space-y-4">
                    <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-[#43becc]">
                        <Activity size={14} /> FULDA.DE_HEADQUARTERS
                    </div>
                    <h2 className="text-5xl font-[1000] uppercase tracking-tighter italic leading-none">FFT Produktions- <br/> systeme</h2>
                </div>
                <p className="text-zinc-500 text-sm italic font-medium leading-relaxed border-l border-white/10 pl-6">
                   Intelligent manufacturing systems delivering complex turnkey production projects across 5 continents for 50+ years.
                </p>
                <div className="grid grid-cols-3 gap-px bg-white/5 border border-white/5">
                   <div className="p-4 bg-zinc-950 space-y-2">
                      <div className="text-[14px] font-[1000] text-[#43becc]">1974</div>
                      <div className="text-[7px] font-black uppercase text-zinc-600 italic">Established</div>
                   </div>
                   <div className="p-4 bg-zinc-950 space-y-2">
                      <div className="text-[14px] font-[1000] text-[#43becc]">5</div>
                      <div className="text-[7px] font-black uppercase text-zinc-600 italic">Continents</div>
                   </div>
                   <div className="p-4 bg-zinc-950 space-y-2">
                      <div className="text-[14px] font-[1000] text-[#43becc]">BMW</div>
                      <div className="text-[7px] font-black uppercase text-zinc-600 italic">Top_Client</div>
                   </div>
                </div>
             </div>
          </div>

          <div className="lg:col-span-7 space-y-12 bg-zinc-950/50 border-2 border-white/10 p-10 md:p-20 relative">
             <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="text-[#43becc] text-[10px] font-black tracking-[0.5em] uppercase italic">// MOD_EXCLUSIVE_AGENCY</span>
                  <div className="h-px flex-grow bg-white/5" />
                </div>
                <h3 className="text-3xl font-[1000] italic uppercase tracking-tight">Turnkey Systems</h3>
                <p className="text-zinc-400 text-lg italic border-l-2 border-white/10 pl-8">
                   &quot;Exclusive Agency for Turnkey Production Systems and Digital Innovation in the Egypt Region.&quot;
                </p>
             </div>

             <div className="grid md:grid-cols-3 gap-4">
                {["Turnkey Production", "After Sales Support", "Digital Development"].map(item => (
                   <div key={item} className="p-6 border border-white/5 bg-black flex flex-col items-center justify-center text-center gap-4 group hover:border-[#43becc] transition-all">
                      <ShieldCheck size={20} className="text-[#43becc] group-hover:scale-125 transition-transform" />
                      <span className="text-[8px] font-[1000] uppercase tracking-widest">{item}</span>
                   </div>
                ))}
             </div>

             <div className="pt-10 space-y-6">
                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                    <Award size={16} className="text-[#43becc]" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 italic">Strategic Milestone</span>
                </div>
                <div className="p-8 bg-black border border-white/5 space-y-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 text-[40px] opacity-10 italic font-black text-[#43becc]">2023</div>
                    <p className="text-xs font-black uppercase tracking-widest text-[#43becc]">Agreement signed at FFT Fulda</p>
                    <div className="aspect-video bg-zinc-900 border border-white/10 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-700">
                        <span className="text-[9px] font-black uppercase text-zinc-700">[DOCUMENTATION: FULDA_SIGNING_02]</span>
                    </div>
                </div>
             </div>

             <div className="flex flex-col gap-4">
               <a href="https://fft.de" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-6 w-full py-8 border-2 border-[#43becc]/30 text-[#43becc] font-[1000] uppercase text-[11px] tracking-[0.5em] hover:bg-[#43becc] hover:text-black hover:border-[#43becc] transition-all group">
                  Official Website <ArrowUpRight size={16} className="group-hover:translate-x-1 transition-transform" />
               </a>
               <Link href="/accelerators/fft" className="flex items-center justify-center gap-6 w-full py-4 border border-white/10 text-white font-[1000] uppercase text-[10px] tracking-[0.5em] hover:bg-white/10 hover:border-white/30 transition-all group">
                  View Full Profile <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
               </Link>
             </div>
          </div>
        </section>

        {/* --- 4. PARTNERSHIP SCOPE VISUAL --- */}
        <section className="pt-40 pb-20 border-t-2 border-white/5">
          <div className="max-w-4xl mx-auto space-y-24">
            <div className="text-center space-y-8">
               <h2 className="text-5xl md:text-7xl font-[1000] italic uppercase tracking-tighter leading-none">STRATEGIC<br/><span className="text-zinc-800">NODES.</span></h2>
               <p className="text-zinc-500 uppercase tracking-[0.4em] text-[10px] font-black max-w-xl mx-auto italic">
                  &quot;Bringing 100+ years of combined European expertise directly to the heart of Egypt&apos;s industrial sector.&quot;
               </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
               <div className="bg-zinc-950 border border-white/10 p-12 space-y-10 relative overflow-hidden group">
                  <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#bcd647]/5 rounded-full blur-3xl group-hover:bg-[#bcd647]/10 transition-all" />
                  <h3 className="text-xl font-[1000] uppercase tracking-widest italic text-[#bcd647]">CU_EGYPT_SCOPE</h3>
                  <ul className="space-y-5">
                     {["Material Transfer", "Localization", "R&D Programs", "LWM Training"].map(s => (
                        <li key={s} className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-zinc-400 pb-2 border-b border-white/5 italic">
                           {s} <CheckCircle2 size={12} className="text-[#bcd647]" />
                        </li>
                     ))}
                  </ul>
               </div>
               <div className="bg-zinc-950 border border-white/10 p-12 space-y-10 relative overflow-hidden group">
                  <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#43becc]/5 rounded-full blur-3xl group-hover:bg-[#43becc]/10 transition-all" />
                  <h3 className="text-xl font-[1000] uppercase tracking-widest italic text-[#43becc]">FFT_EGYPT_SCOPE</h3>
                  <ul className="space-y-5">
                     {["Turnkey Production", "After Sales Service", "Digital Innovation", "Engineering Support"].map(s => (
                        <li key={s} className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-zinc-400 pb-2 border-b border-white/5 italic">
                           {s} <CheckCircle2 size={12} className="text-[#43becc]" />
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}