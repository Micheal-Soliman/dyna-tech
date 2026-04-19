"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Mail, Phone, MapPin, ArrowRight, Activity } from "lucide-react";

// مكون فرعي للأرقام المتحركة (Key Numbers)
const StatItem = ({ label, value }: { label: string; value: string }) => (
  <div className="flex flex-col">
    <span className="text-2xl md:text-3xl font-black text-white tracking-tighter">{value}</span>
    <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-[0.3em] mt-1">{label}</span>
  </div>
);

export function Footer({
  description,
  navExpertise,
  navVisuals,
  navStats,
  navAnnouncements,
}: {
  description: string;
  navExpertise: string;
  navVisuals: string;
  navStats: string;
  navAnnouncements: string;
}) {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();
  const locale = pathname?.split("/")[1] || "en";

  return (
    <footer className="relative bg-[#0a0f29] text-white pt-16 pb-6 font-['Montserrat',sans-serif] overflow-hidden border-t border-white/5">
      
      {/* --- Background Aesthetics --- */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#43becc]/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* 1. TOP BAR: Branding & Refined CTA */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#43becc] to-[#bcd647] rounded-lg flex items-center justify-center shadow-lg shadow-[#43becc]/20">
                <span className="text-[#0a0f29] font-black text-xl">D</span>
              </div>
              <h2 className="text-3xl font-black tracking-tighter italic uppercase text-white">DYNATECH</h2>
            </div>
            <p className="text-zinc-500 text-xs font-bold uppercase tracking-[0.5em] pl-1">Architecture of Industry</p>
          </div>

          <motion.a 
            href={`/${locale}/contact`}
            whileHover="hover"
            className="relative group flex items-center gap-6 border border-white/10 pl-8 pr-2 py-2 rounded-full overflow-hidden transition-all duration-500"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.2em] group-hover:text-[#0a0f29] relative z-10 transition-colors duration-500">
              Start a Project
            </span>
            <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-[#0a0f29] relative z-10 transition-all duration-500">
              <ArrowUpRight className="w-4 h-4 text-[#43becc]" />
            </div>
            <motion.div 
              variants={{ hover: { x: 0 } }}
              initial={{ x: "-101%" }}
              transition={{ duration: 0.4, ease: "circOut" }}
              className="absolute inset-0 bg-[#43becc]"
            />
          </motion.a>
        </div>


        {/* 3. MAIN CONTENT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-8">
          
          {/* Column A: 3 Locations */}
          <div className="lg:col-span-5 space-y-6">
            <h4 className="text-[#bcd647] text-[10px] font-black uppercase tracking-[0.4em]">Presence</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <span className="text-[10px] text-white font-bold uppercase tracking-widest block">CFC Main Office</span>
                <p className="text-zinc-500 text-xs leading-relaxed">Business Park, Building A3, New Cairo, Egypt.</p>
              </div>
              <div className="space-y-2">
                <span className="text-[10px] text-white font-bold uppercase tracking-widest block">Automotive Hub</span>
                <p className="text-zinc-500 text-xs leading-relaxed">Industrial Zone, 6th of October City, Giza.</p>
              </div>
              <div className="space-y-2">
                <span className="text-[10px] text-white font-bold uppercase tracking-widest block">Showroom</span>
                <p className="text-zinc-500 text-xs leading-relaxed">1st Settlement, Northern Investors, Cairo.</p>
              </div>
            </div>
          </div>

          {/* Column B: News & Events Teaser */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="text-white/30 text-[10px] font-black uppercase tracking-[0.4em]">Latest News</h4>
            <div className="group cursor-pointer">
              <span className="text-[10px] text-[#43becc] font-bold">APR 2026</span>
              <p className="text-sm font-bold mt-2 group-hover:text-[#43becc] transition-colors uppercase italic text-white">New AI-Integrated Assembly Line in October Hub.</p>
              <div className="h-[1px] w-0 group-hover:w-full bg-[#43becc] mt-4 transition-all duration-500" />
            </div>
            <div className="group cursor-pointer">
              <span className="text-[10px] text-[#43becc] font-bold">MAR 2026</span>
              <p className="text-sm font-bold mt-2 group-hover:text-[#43becc] transition-colors uppercase italic text-white">Partnership with KUKA Robotics for MENA expansion.</p>
            </div>
          </div>

          {/* Column C: Navigation & Connect */}
          <div className="lg:col-span-3 space-y-6">
            <div>
              <h4 className="text-[#bcd647] text-[10px] font-black uppercase tracking-[0.4em] mb-3">Quick Links</h4>
              <div className="space-y-2">
                <a href={`/${locale}/accelerators`} className="block text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-white hover:translate-x-1 transition-all">Our Partners</a>
                <a href={`/${locale}/updates`} className="block text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-white hover:translate-x-1 transition-all">Tech Updates</a>
                <a href={`/${locale}/knowledge`} className="block text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-white hover:translate-x-1 transition-all">Blog</a>
                <a href={`/${locale}/contact`} className="block text-xs font-bold uppercase tracking-wider text-[#43becc] hover:text-white hover:translate-x-1 transition-all">Contact Us</a>
              </div>
            </div>
            <div className="pt-4 border-t border-white/5">
              <h4 className="text-white/30 text-[10px] font-black uppercase tracking-[0.4em] mb-3">Connect</h4>
              <a href="tel:+20223456789" className="block text-lg font-bold mb-2 tracking-tighter hover:text-[#43becc] transition-colors text-white">+20 2 2345 6789</a>
              <a href="mailto:info@dynatech.com" className="text-xs text-zinc-500 hover:text-white transition-colors">info@dynatech-eg.com</a>
            </div>
            <div className="flex flex-wrap gap-2">
               {['LinkedIn', 'Instagram', 'Twitter'].map(s => (
                 <a key={s} href="#" className="text-[9px] font-black uppercase tracking-widest px-3 py-2 border border-white/5 rounded-lg hover:border-[#43becc] hover:text-[#43becc] transition-all text-zinc-500">{s}</a>
               ))}
            </div>
          </div>
        </div>

        {/* 4. PARTNERS STRIP (Minimal & Chic) */}
        <div className="py-6 border-t border-white/5 flex flex-wrap justify-between items-center gap-6 opacity-20 grayscale transition-all duration-700 hover:opacity-100 hover:grayscale-0">
          {['SIEMENS', 'ABB', 'SCHNEIDER', 'KUKA', 'FANUC'].map(p => (
            <span key={p} className="text-lg font-black italic tracking-tighter text-white">{p}</span>
          ))}
        </div>

        {/* 5. BOTTOM BAR */}
        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-zinc-700 text-[9px] font-bold uppercase tracking-[0.5em]">
            &copy; {currentYear} DYNATECH CORP — ALL RIGHTS RESERVED
          </div>
          <div className="flex items-center gap-4 text-zinc-500">
            <Activity className="w-3 h-3 text-[#bcd647]" />
            <span className="text-[9px] font-black uppercase tracking-widest">System Status: Operational</span>
          </div>
        </div>
      </div>

      {/* Ghost Background Text */}
      <div className="absolute -bottom-10 left-0 opacity-[0.015] pointer-events-none select-none">
        <h2 className="text-[16vw] font-black uppercase italic leading-none text-white">DYNATECH</h2>
      </div>
    </footer>
  );
}