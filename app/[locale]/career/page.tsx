"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Zap, Globe, Rocket, TrendingUp,
  Search, FileText, Send, CheckCircle2,
  MapPin, Briefcase, Clock, Filter,
  Battery, Cpu, Factory, ArrowRight
} from "lucide-react";

// --- DATA: OPEN POSITIONS ---
const POSITIONS = [
  {
    id: 1,
    title: "EV Powertrain Engineer",
    department: "Automotive_Engineering",
    location: "Automotive Hub, New Cairo",
    type: "Full-Time",
    level: "Senior",
    description: "Design and optimize electric vehicle powertrain systems for next-generation BEV platforms.",
    accent: "#43becc"
  },
  {
    id: 2,
    title: "Battery Systems Specialist",
    department: "Energy_Storage",
    location: "Main Office, CFC",
    type: "Full-Time",
    level: "Mid-Senior",
    description: "Develop ESS solutions and battery management systems for industrial applications.",
    accent: "#bcd647"
  },
  {
    id: 3,
    title: "Manufacturing Process Engineer",
    department: "Production_Systems",
    location: "Automotive Hub, New Cairo",
    type: "Full-Time",
    level: "Mid",
    description: "Implement advanced manufacturing processes leveraging FFT turnkey systems.",
    accent: "#43becc"
  },
  {
    id: 4,
    title: "Lightweight Materials Engineer",
    department: "R&D_Innovation",
    location: "Main Office, CFC",
    type: "Full-Time",
    level: "Senior",
    description: "Lead fiber-based multi-material research in partnership with Composites United.",
    accent: "#bcd647"
  }
];

const FILTERS = {
  department: ["All", "Automotive_Engineering", "Energy_Storage", "Production_Systems", "R&D_Innovation"],
  level: ["All", "Mid", "Mid-Senior", "Senior"],
  type: ["All", "Full-Time", "Contract"]
};

export default function CareerPage() {
  const [activeFilters, setActiveFilters] = useState({
    department: "All",
    level: "All",
    type: "All"
  });
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPositions = POSITIONS.filter(pos => {
    const matchesSearch = pos.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         pos.department.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDept = activeFilters.department === "All" || pos.department === activeFilters.department;
    const matchesLevel = activeFilters.level === "All" || pos.level === activeFilters.level;
    const matchesType = activeFilters.type === "All" || pos.type === activeFilters.type;
    return matchesSearch && matchesDept && matchesLevel && matchesType;
  });

  return (
    <div className="bg-black text-white font-mono selection:bg-[#bcd647] selection:text-black min-h-screen">
      
      {/* --- FULL HEIGHT HERO SECTION --- */}
      <header className="min-h-[calc(100vh-5rem)] flex flex-col px-6 md:px-16 lg:px-32 pt-24 pb-16 border-b-2 border-white/5 relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
        
        {/* Accent Glow */}
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#bcd647]/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#43becc]/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-16">
            {/* Left: Title */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-black tracking-[0.3em] uppercase text-[#bcd647]">
                  CAREER_PORTAL
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-[5rem] xl:text-[6rem] font-[1000] tracking-tighter uppercase italic leading-[0.9]">
                Build <br/>
                <span className="text-[#43becc]">Egypt&apos;s</span> <br/>
                <span className="text-zinc-800">Automotive</span> <br/>
                <span className="text-[#bcd647]">Future.</span>
              </h1>
              
              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a 
                  href="#positions"
                  className="px-8 py-4 bg-[#bcd647] text-black text-[10px] font-[1000] uppercase tracking-[0.4em] hover:bg-white transition-all flex items-center gap-3"
                >
                  View Open Positions <ArrowRight size={16} />
                </a>
                <a 
                  href="#apply"
                  className="px-8 py-4 border border-white/20 text-white text-[10px] font-[1000] uppercase tracking-[0.4em] hover:border-[#43becc] hover:text-[#43becc] transition-all"
                >
                  Submit Application
                </a>
              </div>
            </div>
            
            {/* Right: Info Card */}
            <div className="max-w-md space-y-5 p-6 bg-zinc-950/50 border border-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-4 text-[#43becc] pb-4 border-b border-white/10">
                <Factory size={20} />
                <span className="text-[10px] font-black uppercase tracking-widest">Automotive Hub Operations</span>
              </div>
              
              <p className="text-[11px] font-bold text-zinc-400 uppercase tracking-[0.15em] leading-loose">
                Join DYNATECH and work alongside Europe&apos;s leading automotive technology partners on Egypt&apos;s first localized EV manufacturing programs.
              </p>
              
              <div className="flex gap-4 pt-2">
                <div className="text-center">
                  <div className="text-2xl font-[1000] text-[#bcd647]">4</div>
                  <div className="text-[8px] font-black uppercase tracking-widest text-zinc-600">Open Roles</div>
                </div>
                <div className="w-px bg-white/10" />
                <div className="text-center">
                  <div className="text-2xl font-[1000] text-[#43becc]">2</div>
                  <div className="text-[8px] font-black uppercase tracking-widest text-zinc-600">Locations</div>
                </div>
                <div className="w-px bg-white/10" />
                <div className="text-center">
                  <div className="text-2xl font-[1000] text-white">EU</div>
                  <div className="text-[8px] font-black uppercase tracking-widest text-zinc-600">Partners</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </header>

      <main className="max-w-7xl mx-auto px-6 md:px-16 lg:px-32">
        
        {/* --- WHY DYNATECH --- */}
        <section className="py-24 space-y-16">
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-black tracking-[0.5em] uppercase text-[#bcd647] italic">// WHY_DYNATECH</span>
            <div className="h-px flex-grow bg-white/5" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {[
              { 
                icon: <Globe size={24} />, 
                title: "International Exposure",
                desc: "Direct collaboration with CU (Germany) and FFT (Germany) on cutting-edge projects."
              },
              { 
                icon: <Rocket size={24} />, 
                title: "Industry-First Projects",
                desc: "Be part of Egypt's first localized EV manufacturing and ESS deployment programs."
              },
              { 
                icon: <TrendingUp size={24} />, 
                title: "Technical Growth",
                desc: "Structured career paths with access to European training and certification programs."
              },
              { 
                icon: <Battery size={24} />, 
                title: "Direct NEV Impact",
                desc: "Shape Egypt's New Energy Vehicle transition through hands-on implementation."
              }
            ].map((item, i) => (
              <div key={i} className="bg-black p-10 space-y-6 group hover:bg-zinc-950/50 transition-all">
                <div className="text-[#bcd647] group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-lg font-[1000] uppercase italic tracking-tight">{item.title}</h3>
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wide leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* --- OPEN POSITIONS --- */}
        <section className="py-24 space-y-12" id="positions">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
            <div className="space-y-4">
              <span className="text-[10px] font-black tracking-[0.5em] uppercase text-[#43becc] italic">// OPEN_POSITIONS</span>
              <h2 className="text-4xl md:text-5xl font-[1000] uppercase italic tracking-tighter">
                Join The <span className="text-[#bcd647]">Force.</span>
              </h2>
            </div>
            
            {/* Search */}
            <div className="relative w-full lg:w-80">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" />
              <input 
                type="text" 
                placeholder="Search roles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-zinc-950 border border-white/10 p-4 pl-12 text-[10px] font-black uppercase tracking-widest focus:border-[#43becc] outline-none transition-all"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 p-6 bg-zinc-950/50 border border-white/5">
            {Object.entries(FILTERS).map(([key, options]) => (
              <div key={key} className="flex items-center gap-2">
                <Filter size={12} className="text-zinc-600" />
                <select 
                  value={activeFilters[key as keyof typeof activeFilters]}
                  onChange={(e) => setActiveFilters(prev => ({ ...prev, [key]: e.target.value }))}
                  className="bg-black border border-white/10 px-4 py-2 text-[9px] font-black uppercase tracking-widest focus:border-[#43becc] outline-none cursor-pointer"
                >
                  {options.map(opt => (
                    <option key={opt} value={opt}>{opt.replace(/_/g, ' ')}</option>
                  ))}
                </select>
              </div>
            ))}
          </div>

          {/* Position Cards */}
          <div className="space-y-4">
            {filteredPositions.length === 0 ? (
              <div className="p-12 text-center border border-white/5 bg-zinc-950/30">
                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-600">No matching positions found.</p>
              </div>
            ) : (
              filteredPositions.map((pos) => (
                <motion.div 
                  key={pos.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group p-8 border border-white/5 bg-zinc-950/30 hover:border-[#43becc]/50 transition-all cursor-pointer"
                >
                  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-4 flex-wrap">
                        <span className="text-[9px] font-black uppercase tracking-widest" style={{ color: pos.accent }}>
                          {pos.department.replace(/_/g, ' ')}
                        </span>
                        <span className="h-px w-8 bg-white/10" />
                        <span className="text-[9px] font-black uppercase tracking-widest text-zinc-600">{pos.level}</span>
                        <span className="px-2 py-1 bg-zinc-900 text-[8px] font-black uppercase tracking-widest text-zinc-500">{pos.type}</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-[1000] uppercase italic tracking-tighter group-hover:text-[#43becc] transition-colors">
                        {pos.title}
                      </h3>
                      <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wide max-w-2xl">
                        {pos.description}
                      </p>
                      <div className="flex items-center gap-2 text-zinc-600">
                        <MapPin size={12} />
                        <span className="text-[9px] font-black uppercase tracking-widest">{pos.location}</span>
                      </div>
                    </div>
                    <button className="px-8 py-4 bg-white text-black text-[10px] font-[1000] uppercase tracking-widest hover:bg-[#bcd647] transition-all flex items-center gap-3">
                      Apply Now <ArrowRight size={14} />
                    </button>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </section>

        {/* --- APPLICATION FORM --- */}
        <section className="py-24 border-t-2 border-white/5" id="apply">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-[10px] font-black tracking-[0.5em] uppercase text-zinc-500 italic">// APPLICATION</span>
                <h2 className="text-4xl md:text-5xl font-[1000] uppercase italic tracking-tighter">
                  Start Your <br/><span className="text-[#bcd647]">Journey.</span>
                </h2>
              </div>
              <p className="text-sm text-zinc-500 font-bold uppercase tracking-widest leading-loose italic">
                Join the team building Egypt&apos;s automotive future. Submit your application and our talent acquisition team will review your credentials.
              </p>
              <div className="space-y-4 pt-4">
                {[
                  "Technical assessment for engineering roles",
                  "Interview with department leads",
                  "Final evaluation with HR and executives"
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-4 text-[10px] font-black uppercase text-zinc-600">
                    <CheckCircle2 size={14} className="text-[#bcd647]" />
                    {step}
                  </div>
                ))}
              </div>
            </div>

            <form className="p-10 bg-zinc-950 border-2 border-white/5 space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[9px] font-black text-zinc-600 uppercase tracking-widest">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-black border border-white/10 p-4 text-xs font-mono focus:border-[#bcd647] outline-none transition-all"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] font-black text-zinc-600 uppercase tracking-widest">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-black border border-white/10 p-4 text-xs font-mono focus:border-[#bcd647] outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[9px] font-black text-zinc-600 uppercase tracking-widest">Phone</label>
                  <input 
                    type="tel" 
                    className="w-full bg-black border border-white/10 p-4 text-xs font-mono focus:border-[#bcd647] outline-none transition-all"
                    placeholder="+20 XXX XXX XXXX"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] font-black text-zinc-600 uppercase tracking-widest">Position Applying For</label>
                  <select className="w-full bg-black border border-white/10 p-4 text-xs font-mono focus:border-[#bcd647] outline-none transition-all text-zinc-400">
                    <option value="">Select position</option>
                    {POSITIONS.map(pos => (
                      <option key={pos.id} value={pos.title}>{pos.title}</option>
                    ))}
                    <option value="other">Other / General Application</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[9px] font-black text-zinc-600 uppercase tracking-widest">Upload CV (PDF)</label>
                <div className="h-32 border-2 border-dashed border-white/10 flex flex-col items-center justify-center gap-3 hover:border-[#bcd647]/40 cursor-pointer transition-all bg-black">
                  <FileText size={28} className="text-zinc-700" />
                  <span className="text-[9px] font-black text-zinc-600 uppercase tracking-widest">Drop your CV here or click to browse</span>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[9px] font-black text-zinc-600 uppercase tracking-widest">Message (Optional)</label>
                <textarea 
                  className="w-full bg-black border border-white/10 p-4 text-xs font-mono focus:border-[#bcd647] outline-none transition-all h-28 resize-none"
                  placeholder="Tell us why you want to join DYNATECH..."
                />
              </div>

              <button className="w-full py-6 bg-[#bcd647] text-black text-[11px] font-[1000] uppercase tracking-[0.4em] hover:bg-white transition-all flex items-center justify-center gap-4">
                Submit Application <Send size={16} />
              </button>
            </form>
          </div>
        </section>

      </main>

      {/* --- FOOTER --- */}
      <footer className="py-20 border-t-2 border-white/5 text-center">
        <p className="text-zinc-700 text-[10px] font-black uppercase tracking-[0.5em] italic">
          Dynatech Industrial Systems // Automotive Hub Operations
        </p>
      </footer>
    </div>
  );
}