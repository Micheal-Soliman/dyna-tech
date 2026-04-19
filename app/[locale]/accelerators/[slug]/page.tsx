"use client";

import React, { use } from "react";
import { 
  Globe, MapPin, ArrowUpRight, 
  Award, CheckCircle2, ArrowLeft,
  Landmark, Building2, Users, Calendar,
  Briefcase, Factory, Zap, FileText
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Partner Data Configuration - Enhanced for B2G Credibility
const PARTNERS: Record<string, PartnerData> = {
  "composites-united": {
    id: "cu",
    name: "Composites United",
    shortName: "CU",
    location: "Berlin, Germany",
    node: "BERLIN.DE_OFFICE",
    color: "#bcd647",
    accent: "lime",
    role: "EXCLUSIVE_REPRESENTATIVE",
    founded: "Global Network",
    foundedYear: "N/A",
    reach: "~350+ Member Organizations",
    reachShort: "350+",
    description: "One of the world's largest networks for fiber-based multi-material lightweight construction — connecting manufacturers, research institutes, and technology companies across Europe and globally.",
    shortDesc: "Global lightweight materials network",
    scope: [
      "Training and Education",
      "Research and Development", 
      "Transfer, localization, and manufacturing of lightweight material components"
    ],
    milestones: [
      { 
        year: "2018", 
        event: "CU Membership + LOI Signed",
        location: "Berlin, Germany"
      },
      { 
        year: "2021", 
        event: "Exclusive Representative Appointment",
        location: "DYNATECH HQ"
      },
      { 
        year: "2022", 
        event: "Strategic Agreement Announced",
        location: "Hannover Messe"
      }
    ],
    stats: [
      { label: "Member Organizations", value: "~350+", icon: "users" },
      { label: "Network Reach", value: "Global", icon: "globe" }
    ],
    scopeItems: ["Material Transfer", "Localization", "R&D Programs", "LWM Training"],
    ctaLink: "https://composites-united.com",
    ctaText: "Learn About CU",
    dynatechRole: "Exclusive Representative in Egypt — appointed to transfer CU's LWM innovations into customer-oriented solutions in the Egyptian market",
    industries: ["Lightweight Materials", "Composite Manufacturing", "Automotive", "Aviation"]
  },
  "fft": {
    id: "fft",
    name: "FFT Produktionssysteme GmbH",
    shortName: "FFT",
    location: "Fulda, Germany",
    node: "FULDA.DE_HEADQUARTERS", 
    color: "#43becc",
    accent: "cyan",
    role: "EXCLUSIVE_AGENCY",
    founded: "1974",
    foundedYear: "1974",
    reach: "5 Continents — 50+ Years",
    reachShort: "5 Continents",
    description: "One of the world's leading providers of intelligent, flexible manufacturing systems — delivering complex turnkey production projects across five continents for 50+ years.",
    shortDesc: "Intelligent manufacturing systems",
    scope: [
      "Turnkey Production Systems",
      "After Sales and Services",
      "Digital Innovation and Development"
    ],
    milestones: [
      { 
        year: "1974", 
        event: "Company Founded",
        location: "Germany"
      },
      { 
        year: "2023", 
        event: "Exclusive Agency Agreement Signed",
        location: "FFT Headquarters, Fulda"
      }
    ],
    stats: [
      { label: "Years of Operation", value: "50+", icon: "calendar" },
      { label: "Continents", value: "5", icon: "globe" },
      { label: "Top Client", value: "BMW", icon: "briefcase" }
    ],
    clients: ["BMW", "Volkswagen", "Xiaomi Auto"],
    industries: ["Automotive", "Aviation", "White Goods"],
    scopeItems: ["Turnkey Production", "After Sales Service", "Digital Innovation", "Engineering Support"],
    ctaLink: "https://fft.de",
    ctaText: "Learn About FFT",
    dynatechRole: "Exclusive Agency in Egypt for Turnkey Production Systems and Digital Innovation",
    yearsExperience: "50+"
  }
};

interface PartnerData {
  id: string;
  name: string;
  shortName: string;
  location: string;
  node: string;
  color: string;
  accent: "lime" | "cyan";
  role: string;
  founded: string;
  foundedYear: string;
  reach: string;
  reachShort: string;
  description: string;
  shortDesc: string;
  scope: string[];
  milestones: { year: string; event: string; location: string }[];
  stats: { label: string; value: string; icon: string }[];
  clients?: string[];
  industries: string[];
  scopeItems: string[];
  ctaLink: string;
  ctaText: string;
  dynatechRole: string;
  yearsExperience?: string;
}

const iconMap: Record<string, React.ReactNode> = {
  users: <Users size={20} />,
  globe: <Globe size={20} />,
  calendar: <Calendar size={20} />,
  briefcase: <Briefcase size={20} />,
  factory: <Factory size={20} />,
  zap: <Zap size={20} />
};

export default function PartnerDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const partner = PARTNERS[slug];
  
  if (!partner) {
    return (
      <div className="bg-black text-white font-mono min-h-screen flex items-center justify-center">
        <div className="text-center space-y-8">
          <h1 className="text-6xl font-[1000] italic">404</h1>
          <p className="text-zinc-500">Partner not found</p>
          <Link href="/accelerators" className="inline-flex items-center gap-4 text-[#43becc] hover:text-white transition-colors">
            <ArrowLeft size={16} /> Back to Partners
          </Link>
        </div>
      </div>
    );
  }

  const isLime = partner.accent === "lime";
  const accentColor = isLime ? "#bcd647" : "#43becc";
  const otherPartner = partner.id === 'cu' ? PARTNERS['fft'] : PARTNERS['composites-united'];

  return (
    <div className="bg-black text-white font-mono min-h-screen" style={{ ['--accent-color' as string]: accentColor }}>
      
      {/* --- BACKGROUND --- */}
      <div className="fixed inset-0 z-0 opacity-[0.02] pointer-events-none"
           style={{ backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />

      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-16 py-6 flex justify-between items-center border-b border-white/5 bg-black/80 backdrop-blur-md">
        <Link href="/accelerators" className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-white transition-colors">
          <ArrowLeft size={14} /> Strategic Alliances
        </Link>
        <div className="flex items-center gap-6">
          <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: accentColor }}>
            // {partner.node}
          </span>
        </div>
      </nav>

      {/* --- CHIC ORGANIZED HERO --- */}
      <header className="min-h-[calc(100vh-5rem)] flex flex-col px-6 md:px-16 lg:px-32 pt-32 pb-20 border-b border-white/5 relative overflow-hidden">
        {/* Subtle Accent Glow */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] blur-[180px] rounded-full pointer-events-none opacity-10" style={{ backgroundColor: accentColor }} />
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-white/3 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative z-10 w-full flex-1 flex flex-col justify-center">
          
          {/* Top Row: Badge + Role */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-20">
            {/* Left: Elite Badge */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center border" style={{ borderColor: `${accentColor}50` }}>
                <Award size={18} style={{ color: accentColor }} />
              </div>
              <div>
                <div className="text-[9px] font-black uppercase tracking-[0.4em]" style={{ color: accentColor }}>
                  Europe&apos;s Technology Elite
                </div>
                <div className="text-[9px] font-bold uppercase tracking-widest text-zinc-600 mt-0.5">
                  Official Partnership
                </div>
              </div>
            </div>

            {/* Right: Role Tag */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-px" style={{ backgroundColor: accentColor }} />
              <span className="text-[10px] font-black tracking-[0.3em] uppercase" style={{ color: accentColor }}>
                {partner.role}
              </span>
            </div>
          </div>

          {/* Main Content: Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            
            {/* Left Column: Partner Identity */}
            <div className="space-y-10">
              {/* Partner Name */}
              <div className="space-y-4">
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-[1000] tracking-tighter uppercase italic leading-[0.9]">
                  {partner.shortName}
                </h1>
                <p className="text-xl md:text-2xl font-light italic text-zinc-500 tracking-tight">
                  {partner.shortDesc}
                </p>
              </div>

              {/* Location & Year - Clean Row */}
              <div className="flex items-center gap-6 text-zinc-400 pt-4">
                <div className="flex items-center gap-2">
                  <MapPin size={14} style={{ color: accentColor }} />
                  <span className="text-[11px] font-black uppercase tracking-[0.2em]">
                    {partner.location}
                  </span>
                </div>
                <div className="w-px h-4 bg-zinc-800" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                  {partner.founded}
                </span>
              </div>

              {/* Description */}
              <p className="text-base text-zinc-400 leading-relaxed max-w-lg pt-6 border-t border-zinc-900">
                {partner.description}
              </p>
            </div>

            {/* Right Column: Stats Grid */}
            <div className="space-y-6 lg:pt-8">
              {/* Stats Cards - Compact Grid */}
              <div className="grid grid-cols-1 gap-3">
                {partner.stats.map((stat, i) => (
                  <div key={i} className="flex items-center justify-between p-5 bg-zinc-950/50 border border-white/5 hover:border-white/10 transition-all">
                    <div className="flex items-center gap-4">
                      <span style={{ color: accentColor }}>{iconMap[stat.icon]}</span>
                      <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">
                        {stat.label}
                      </span>
                    </div>
                    <span className="text-2xl font-[1000]" style={{ color: accentColor }}>
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Industries - Horizontal Pills */}
              <div className="pt-4">
                <div className="text-[9px] font-black uppercase tracking-widest text-zinc-600 mb-3">
                  Industries
                </div>
                <div className="flex flex-wrap gap-2">
                  {partner.industries.map((ind, i) => (
                    <span 
                      key={i} 
                      className="px-4 py-2 bg-transparent border border-zinc-800 text-[9px] font-black uppercase tracking-widest text-zinc-400 hover:border-zinc-700 transition-colors"
                    >
                      {ind}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom: Accent Line */}
          <div className="mt-auto pt-20">
            <div className="flex items-center gap-4">
              <div className="h-px flex-grow max-w-xs" style={{ backgroundColor: accentColor }} />
              <span className="text-[9px] font-black uppercase tracking-[0.5em] text-zinc-700">
                {partner.node}
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto">

        {/* --- DYNATECH ROLE SECTION --- */}
        <section className="py-24 px-6 md:px-16 lg:px-32 border-b-2 border-white/5">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Building2 size={20} style={{ color: accentColor }} />
                <span className="text-[10px] font-black uppercase tracking-[0.5em] italic" style={{ color: accentColor }}>
                  // DYNATECH_PARTNERSHIP
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-[1000] italic uppercase tracking-tighter leading-none">
                Our Role in <br/>
                <span style={{ color: accentColor }}>Egypt.</span>
              </h2>
            </div>
            <div className="bg-zinc-950 border border-white/10 p-10 relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full blur-[100px] opacity-30" style={{ backgroundColor: accentColor }} />
              <p className="relative z-10 text-lg text-zinc-300 leading-relaxed">
                {partner.dynatechRole}
              </p>
            </div>
          </div>
        </section>

        {/* --- SCOPE OF AGREEMENT --- */}
        <section className="py-24 px-6 md:px-16 lg:px-32 border-b-2 border-white/5">
          <div className="space-y-12">
            <div className="flex items-center justify-between">
              <div className="space-y-4">
                <span className="text-[10px] font-black uppercase tracking-[0.5em] italic" style={{ color: accentColor }}>
                  // SCOPE_OF_AGREEMENT
                </span>
                <h2 className="text-4xl md:text-5xl font-[1000] italic uppercase tracking-tighter">
                  What We Cover.
                </h2>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {partner.scope.map((item, i) => (
                <div key={i} className="group p-8 bg-zinc-950 border border-white/10 hover:border-white/20 transition-all">
                  <div className="w-12 h-12 flex items-center justify-center mb-6" style={{ backgroundColor: `${accentColor}15` }}>
                    <span className="text-xl font-[1000]" style={{ color: accentColor }}>0{i + 1}</span>
                  </div>
                  <h3 className="text-[12px] font-black uppercase tracking-[0.2em] text-white leading-relaxed">
                    {item}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- MILESTONES WITH VISUALS --- */}
        <section className="py-24 px-6 md:px-16 lg:px-32 border-b-2 border-white/5">
          <div className="space-y-12">
            <div className="flex items-center gap-4">
              <Award size={24} style={{ color: accentColor }} />
              <span className="text-[12px] font-black uppercase tracking-widest italic">Partnership Milestones</span>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {partner.milestones.map((milestone, i) => (
                <div key={i} className="group relative">
                  {/* Photo Placeholder */}
                  <div className="aspect-[4/3] bg-zinc-950 border border-white/10 mb-4 overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[10px] font-black uppercase tracking-widest text-zinc-700">[EVENT_PHOTO_{i + 1}]</span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6">
                      <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: accentColor }}>
                        {milestone.location}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl font-[1000] italic" style={{ color: accentColor }}>{milestone.year}</span>
                      <div className="h-px flex-grow" />
                    </div>
                    <p className="text-sm font-bold text-zinc-300">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- CLIENTS (FFT ONLY) --- */}
        {partner.clients && (
          <section className="py-24 px-6 md:px-16 lg:px-32 border-b-2 border-white/5">
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-500">Global Trust</span>
                <h2 className="text-4xl font-[1000] italic uppercase tracking-tighter">
                  Clients Include.
                </h2>
              </div>
              
              <div className="flex flex-wrap justify-center gap-6">
                {partner.clients.map((client, i) => (
                  <div key={i} className="px-8 py-6 bg-zinc-950 border border-white/10">
                    <span className="text-2xl font-[1000] uppercase tracking-tighter text-white">{client}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* --- SIDE-BY-SIDE COMPARISON --- */}
        <section className="py-24 px-6 md:px-16 lg:px-32 border-b-2 border-white/5">
          <div className="space-y-16">
            <div className="text-center space-y-4">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] italic text-zinc-500">
                // STRATEGIC_VALUE
              </span>
              <h2 className="text-4xl md:text-5xl font-[1000] italic uppercase tracking-tighter">
                Through These Agreements.
              </h2>
              <p className="text-zinc-500 uppercase tracking-[0.3em] text-[11px] font-black max-w-2xl mx-auto">
                DYNATECH brings 100+ years of combined European expertise directly to Egypt
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Current Partner */}
              <div className="p-10 border-2 relative overflow-hidden" style={{ borderColor: `${accentColor}40` }}>
                <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full blur-[100px] opacity-30" style={{ backgroundColor: accentColor }} />
                <div className="relative z-10 space-y-8">
                  <div className="flex items-center gap-4">
                    <span className="font-[1000] text-4xl tracking-tighter uppercase italic">{partner.shortName}</span>
                    <div className="h-px flex-grow" style={{ backgroundColor: accentColor }} />
                  </div>
                  <ul className="space-y-4">
                    {partner.scopeItems.map((item, i) => (
                      <li key={i} className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-widest text-zinc-300">
                        <CheckCircle2 size={14} style={{ color: accentColor }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Other Partner */}
              <div className="p-10 bg-zinc-950 border border-white/10 relative overflow-hidden opacity-60 hover:opacity-100 transition-opacity">
                <Link href={`/accelerators/${otherPartner.id}`} className="absolute inset-0 z-20" />
                <div className="relative z-10 space-y-8">
                  <div className="flex items-center gap-4">
                    <span className="font-[1000] text-4xl tracking-tighter uppercase italic text-zinc-600">{otherPartner.shortName}</span>
                    <div className="h-px flex-grow bg-zinc-800" />
                  </div>
                  <ul className="space-y-4">
                    {otherPartner.scopeItems.slice(0, 4).map((item, i) => (
                      <li key={i} className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-widest text-zinc-600">
                        <CheckCircle2 size={14} className="text-zinc-700" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-600">
                    View Partner <ArrowUpRight size={14} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- CTA SECTION --- */}
        <section className="py-24 px-6 md:px-16 lg:px-32">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <div className="space-y-4">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] italic" style={{ color: accentColor }}>
                // OFFICIAL_PARTNER
              </span>
              <h2 className="text-4xl md:text-5xl font-[1000] uppercase italic tracking-tighter">
                Explore {partner.shortName}.
              </h2>
            </div>
            
            <a 
              href={partner.ctaLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-6 px-16 py-8 font-[1000] uppercase text-[14px] tracking-[0.4em] transition-all group"
              style={{ 
                backgroundColor: accentColor,
                color: 'black'
              }}
            >
              {partner.ctaText} <ArrowUpRight size={24} className="group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </section>

      </main>

      {/* --- FOOTER --- */}
      <footer className="border-t-2 border-white/5 py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <Link 
            href="/accelerators"
            className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-zinc-500 hover:text-white transition-colors"
          >
            <ArrowLeft size={14} /> Back to All Partners
          </Link>
          
          <Link 
            href={`/accelerators/${otherPartner.id}`}
            className="group flex items-center gap-6"
          >
            <span className="text-zinc-500 text-[10px] font-black uppercase tracking-widest">Next Partner</span>
            <span className="text-2xl font-[1000] italic uppercase tracking-tighter group-hover:text-white/50 transition-colors">
              {otherPartner.shortName} &rarr;
            </span>
          </Link>
        </div>
      </footer>

    </div>
  );
}