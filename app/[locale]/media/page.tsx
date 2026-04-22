"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Calendar, MapPin, ArrowUpRight, Play, 
  ChevronRight, Filter, Image as ImageIcon, 
  Video, Newspaper, ExternalLink, Camera
} from "lucide-react";

// --- DATA ---
const EVENTS = [
  {
    id: 1,
    title: "Hannover Messe 2022 — Strategic Agreement",
    location: "Hannover, Germany",
    date: "May 2022",
    desc: "Announcement of the DYNATECH & CU Strategic Agreement for LWM transfer.",
    accent: "#006db1"
  },
  {
    id: 2,
    title: "FFT Partnership Signing Ceremony",
    location: "Fulda, Germany",
    date: "November 2023",
    desc: "Official exclusive agency signing at FFT Headquarters.",
    accent: "#0087cb"
  },
  {
    id: 3,
    title: "Global Automotive Lightweight Materials Summit",
    location: "International Venue",
    date: "2024",
    desc: "Showcase of industrial manufacturing systems for the automotive sector.",
    accent: "#006db1"
  }
];

const PRESS = [
  { year: "2024", title: "DYNATECH Expands Industrial Footprint in Egypt with New Alliances", category: "Corporate" },
  { year: "2023", title: "Exclusive: FFT Produktionssysteme Enters the Egyptian Market through DYNATECH", category: "Industrial" },
  { year: "2023", title: "Digital Manufacturing: The Future of Egypt's Automotive Sector", category: "Innovation" },
  { year: "2022", title: "Strategic Cooperation: Berlin & Cairo Bridge the Gap in Materials Science", category: "Research" }
];

export default function EventsMediaPage() {
  const [activeYear, setActiveYear] = useState("All");

  return (
    <div className="bg-black text-white font-mono selection:bg-[#0087cb] selection:text-black min-h-screen">
      
      {/* --- MEDIA HERO - Cinematic Wide Style --- */}
      <header className="pt-28 pb-20 px-6 md:px-16 lg:px-32 border-b-2 border-white/5 relative overflow-hidden">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0087cb]/5 via-transparent to-[#006db1]/5 pointer-events-none" />
        
        {/* Diagonal Lines Accent */}
        <div className="absolute top-0 right-0 w-64 h-64 opacity-10" style={{
          backgroundImage: `repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)`,
          backgroundSize: '20px 20px'
        }} />
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Top Bar */}
          <div className="flex items-center justify-between mb-16 pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <Camera size={16} className="text-[#0087cb]" />
              <span className="text-[10px] font-black uppercase tracking-widest text-[#0087cb]">Media Center</span>
            </div>
            <span className="text-[9px] font-black uppercase tracking-widest text-zinc-600">Authorized Access</span>
          </div>
          
          {/* Main Content */}
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            {/* Left: Title */}
            <div className="lg:col-span-8 space-y-8">
              <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-[1000] tracking-tighter uppercase italic leading-[0.85]">
                <span className="text-white">Global</span>
                <span className="text-[#0087cb]">_</span>
                <span className="text-zinc-600">Presence.</span>
              </h1>
              
              <div className="flex flex-wrap gap-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#006db1]/10 border border-[#006db1]/20 flex items-center justify-center">
                    <MapPin size={20} className="text-[#006db1]" />
                  </div>
                  <div>
                    <div className="text-xl font-[1000] text-white">3</div>
                    <div className="text-[8px] font-black uppercase tracking-widest text-zinc-600">Countries</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#0087cb]/10 border border-[#0087cb]/20 flex items-center justify-center">
                    <Calendar size={20} className="text-[#0087cb]" />
                  </div>
                  <div>
                    <div className="text-xl font-[1000] text-white">5+</div>
                    <div className="text-[8px] font-black uppercase tracking-widest text-zinc-600">Major Events</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-zinc-900 border border-white/10 flex items-center justify-center">
                    <Newspaper size={20} className="text-zinc-400" />
                  </div>
                  <div>
                    <div className="text-xl font-[1000] text-white">12</div>
                    <div className="text-[8px] font-black uppercase tracking-widest text-zinc-600">Press Releases</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right: Description */}
            <div className="lg:col-span-4 space-y-6">
              <p className="text-[11px] font-bold text-zinc-400 uppercase tracking-[0.15em] leading-loose">
                Documenting DYNATECH&apos;s international partnerships, strategic agreements, and industry presence.
              </p>
              <div className="h-px w-full bg-gradient-to-r from-[#0087cb] to-[#006db1]" />
              <p className="text-[10px] font-black uppercase tracking-widest text-zinc-600">
                B2G Credibility Archive
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* --- 2. FEATURED EVENTS (Horizontal Scroll or Grid) --- */}
      <section className="py-24 px-6 md:px-16 lg:px-32 max-w-7xl mx-auto space-y-16">
        <div className="flex justify-between items-center border-b border-white/5 pb-8">
           <h2 className="text-2xl font-[1000] italic uppercase tracking-tighter text-[#006db1]">Featured_Events</h2>
           <button className="flex items-center gap-4 text-[9px] font-black uppercase tracking-widest text-zinc-500 hover:text-white transition-colors">
              View_All_Archive <ChevronRight size={14} />
           </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {EVENTS.map((event) => (
            <div key={event.id} className="group cursor-crosshair">
              <div className="aspect-[4/5] bg-zinc-950 border-2 border-white/10 relative overflow-hidden mb-6">
                <div className="absolute inset-0 bg-zinc-900 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-700">
                  <ImageIcon size={40} className="text-zinc-800 group-hover:text-white opacity-20" />
                </div>
                {/* Event Tag */}
                <div className="absolute top-0 right-0 p-6">
                   <div className="px-3 py-1 bg-black/80 backdrop-blur-md border border-white/10 text-[8px] font-black uppercase tracking-widest">
                      {event.date}
                   </div>
                </div>
                {/* Overlay Accent */}
                <div className="absolute bottom-0 left-0 w-full h-1" style={{ backgroundColor: event.accent }} />
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-[9px] font-black uppercase text-zinc-500 tracking-widest">
                   <MapPin size={12} className="text-[#0087cb]" /> {event.location}
                </div>
                <h3 className="text-xl font-[1000] uppercase italic tracking-tighter leading-tight group-hover:text-[#0087cb] transition-colors">
                  {event.title}
                </h3>
                <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-wide leading-relaxed">
                  {event.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- 3. PRESS & ANNOUNCEMENTS (CMS GRID) --- */}
      <section className="py-24 bg-[#050505] border-y-2 border-white/5 px-6 md:px-16 lg:px-32">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4 space-y-10">
            <h2 className="text-4xl font-[1000] italic uppercase tracking-tighter leading-none">Press & <br/><span className="text-[#0087cb]">Releases.</span></h2>
            <div className="flex flex-col gap-4">
               {["All", "2024", "2023", "2022"].map(year => (
                 <button 
                  key={year}
                  onClick={() => setActiveYear(year)}
                  className={`text-left text-[10px] font-black uppercase tracking-[0.4em] py-3 border-b border-white/5 transition-all
                  ${activeYear === year ? 'text-[#0087cb] border-[#0087cb] pl-4' : 'text-zinc-700 hover:text-white'}`}
                 >
                   {year}
                 </button>
               ))}
            </div>
          </div>

          <div className="lg:col-span-8 space-y-1">
            {PRESS.filter(p => activeYear === "All" || p.year === activeYear).map((item, i) => (
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                key={i}
                className="group p-8 border-b border-white/5 hover:bg-white/[0.02] flex items-center justify-between transition-all"
              >
                <div className="space-y-2">
                   <div className="flex gap-4 items-center">
                      <span className="text-[10px] font-black text-[#006db1]">{item.year}</span>
                      <span className="text-[8px] font-black uppercase tracking-widest text-zinc-600 px-2 py-1 bg-zinc-950 border border-white/5">{item.category}</span>
                   </div>
                   <h4 className="text-lg md:text-xl font-[1000] uppercase italic tracking-tight group-hover:translate-x-2 transition-transform">{item.title}</h4>
                </div>
                <ExternalLink size={20} className="text-zinc-800 group-hover:text-[#0087cb] transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. MEDIA GALLERY (PHOTOS & VIDEOS) --- */}
      <section className="py-32 px-6 md:px-16 lg:px-32 max-w-7xl mx-auto space-y-20">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
           <div className="space-y-4">
              <h2 className="text-4xl font-[1000] italic uppercase tracking-tighter">Visual_Records</h2>
              <div className="flex gap-6">
                 <div className="flex items-center gap-2 text-zinc-500">
                    <Camera size={16} /> <span className="text-[9px] font-black uppercase">Facilities</span>
                 </div>
                 <div className="flex items-center gap-2 text-zinc-500">
                    <Video size={16} /> <span className="text-[9px] font-black uppercase">Live_Footage</span>
                 </div>
              </div>
           </div>
        </div>

        {/* BENTO GRID GALLERY */}
        <div className="grid md:grid-cols-4 grid-rows-2 gap-4 h-[800px]">
           <div className="md:col-span-2 md:row-span-2 bg-zinc-950 border border-white/10 relative group overflow-hidden">
              <div className="absolute inset-0 bg-zinc-900/50 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all">
                  <Play size={48} className="text-[#0087cb] drop-shadow-[0_0_20px_#0087cb]" />
              </div>
              <div className="absolute bottom-0 left-0 p-8 z-10">
                 <span className="text-[10px] font-black uppercase tracking-widest bg-black/50 px-3 py-1">Industrial_Capabilities_vlog</span>
              </div>
           </div>
           <div className="md:col-span-2 bg-zinc-950 border border-white/10 grayscale hover:grayscale-0 transition-all cursor-zoom-in">
              {/* Image Placeholder */}
           </div>
           <div className="bg-zinc-950 border border-white/10 grayscale hover:grayscale-0 transition-all">
              {/* Image Placeholder */}
           </div>
           <div className="bg-zinc-950 border border-white/10 grayscale hover:grayscale-0 transition-all">
              {/* Image Placeholder */}
           </div>
        </div>
      </section>

      {/* --- 5. MINIMAL FOOTER FOR MEDIA --- */}
      <footer className="py-20 border-t-2 border-white/5 text-center">
         <p className="text-zinc-700 text-[10px] font-black uppercase tracking-[0.5em] italic">
            Authorized Media Access Only // Dynatech Industrial Systems
         </p>
      </footer>
    </div>
  );
}
