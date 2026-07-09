"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Activity } from "lucide-react";

// مكون فرعي للأرقام المتحركة (Key Numbers)
const _StatItem = ({ label, value }: { label: string; value: string }) => (
  <div className="flex flex-col">
    <span className="text-2xl md:text-3xl font-black text-white tracking-tighter">{value}</span>
    <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-[0.3em] mt-1">{label}</span>
  </div>
);
void _StatItem;

export function Footer({
  description: _description,
  navExpertise: _navExpertise,
  navVisuals: _navVisuals,
  navStats: _navStats,
  navAnnouncements: _navAnnouncements,
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
  void _description;
  void _navExpertise;
  void _navVisuals;
  void _navStats;
  void _navAnnouncements;

  return (
    <footer className="relative bg-[#0a0f29] text-white pt-16 pb-6 font-['Montserrat',sans-serif] overflow-hidden border-t border-white/5">
      
      {/* --- Background Aesthetics --- */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0087cb]/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* 1. TOP BAR: Branding & Refined CTA */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12">
          <div className="space-y-4">
            <Link href={`/${locale}`} className="block">
              <div className="h-16 md:h-[84px] w-[80px] md:w-[300px]">
                <Image
                  src="/logo-cropped.png"
                  alt="DYNATECH"
                  width={430}
                  height={108}
                  className="h-full w-full object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-zinc-500 text-xs font-bold uppercase tracking-[0.5em] pl-1">Architecture of Industry</p>
          </div>

          <motion.a 
            href={`/${locale}/services`}
            whileHover="hover"
            className="relative group flex cursor-pointer items-center gap-6 border border-white/10 pl-8 pr-2 py-2 rounded-full overflow-hidden transition-all duration-500"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.2em] group-hover:text-[#0a0f29] relative z-10 transition-colors duration-500">
              Explore Partners
            </span>
            <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-[#0a0f29] relative z-10 transition-all duration-500">
              <ArrowUpRight className="w-4 h-4 text-[#0087cb]" />
            </div>
            <motion.div 
              variants={{ hover: { x: 0 } }}
              initial={{ x: "-101%" }}
              transition={{ duration: 0.4, ease: "circOut" }}
              className="absolute inset-0 bg-[#0087cb]"
            />
          </motion.a>
        </div>


        {/* 3. MAIN CONTENT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-8">
          
          {/* Column A: 3 Locations */}
          <div className="lg:col-span-5 space-y-6">
            <h4 className="text-[#006db1] text-[10px] font-black uppercase tracking-[0.4em]">Presence</h4>
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

          {/* Column B: Featured Pages */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="text-white/30 text-[10px] font-black uppercase tracking-[0.4em]">Featured Pages</h4>
            {[
              { label: "Partners", meta: "FFT & CU", href: `/${locale}/services` },
              { label: "Auto Hub", meta: "Key Project Figures", href: `/${locale}/case-study` },
              { label: "Knowledge", meta: "Tech Info", href: `/${locale}/knowledge` },
            ].map((item) => (
              <Link key={item.label} href={item.href} className="group block">
                <span className="text-[10px] text-[#0087cb] font-bold uppercase">{item.meta}</span>
                <p className="text-sm font-bold mt-2 group-hover:text-[#0087cb] transition-colors uppercase italic text-white">{item.label}</p>
                <div className="h-[1px] w-0 group-hover:w-full bg-[#0087cb] mt-4 transition-all duration-500" />
              </Link>
            ))}
          </div>

          {/* Column C: Navigation & Connect */}
          <div className="lg:col-span-3 space-y-6">
            <div>
              <h4 className="text-[#006db1] text-[10px] font-black uppercase tracking-[0.4em] mb-3">Quick Links</h4>
              <div className="space-y-2">
                <Link href={`/${locale}`} className="block text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-white hover:translate-x-1 transition-all">Home</Link>
                <Link href={`/${locale}/about`} className="block text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-white hover:translate-x-1 transition-all">About</Link>
                <Link href={`/${locale}/services`} className="block text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-white hover:translate-x-1 transition-all">Partners</Link>
                <Link href={`/${locale}/case-study`} className="block text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-white hover:translate-x-1 transition-all">Auto Hub</Link>
                <Link href={`/${locale}/knowledge`} className="block text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-white hover:translate-x-1 transition-all">Knowledge</Link>
                <Link href={`/${locale}/career`} className="block text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-white hover:translate-x-1 transition-all">Careers</Link>
              </div>
            </div>
            <div className="pt-4 border-t border-white/5">
              <h4 className="text-white/30 text-[10px] font-black uppercase tracking-[0.4em] mb-3">Connect</h4>
              <a href="tel:+20223456789" className="block text-lg font-bold mb-2 tracking-tighter hover:text-[#0087cb] transition-colors text-white">+20 2 2345 6789</a>
              <a href="mailto:info@dynatech-eg.com" className="text-xs text-zinc-500 hover:text-white transition-colors">info@dynatech-eg.com</a>
            </div>
          </div>
        </div>

        {/* 4. PARTNERS STRIP (Minimal & Chic) */}
        <div className="py-6 border-t border-white/5 flex flex-wrap justify-between items-center gap-6 opacity-20 grayscale transition-all duration-700 hover:opacity-100 hover:grayscale-0">
          {['Home', 'About', 'Partners', 'Auto Hub', 'Knowledge', 'Careers'].map(p => (
            <span key={p} className="text-lg font-black italic tracking-tighter text-white">{p}</span>
          ))}
        </div>

        {/* 5. BOTTOM BAR */}
        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-zinc-700 text-[9px] font-bold uppercase tracking-[0.5em]">
            &copy; {currentYear} DYNATECH CORP — ALL RIGHTS RESERVED
          </div>
          <div className="flex items-center gap-4 text-zinc-500">
            <Activity className="w-3 h-3 text-[#006db1]" />
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
