"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  ArrowLeft, Share2, Printer, 
  Clock, User, Calendar,
  ChevronRight, Download, Mail, ArrowRight
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

// Article data map with full content
const ARTICLES: Record<string, { 
  title: string; 
  subtitle: string; 
  date: string;
  author: string;
  category: string;
  categoryColor: string;
  reportId: string; 
  readTime: string;
  excerpt: string;
} > = {
  "ev-infrastructure-egypt-2026": {
    title: "The State of EV Infrastructure in Egypt:",
    subtitle: "2026 Outlook and Growth Trajectory",
    date: "January 15, 2026",
    author: "Eng. Ahmed Sorour",
    category: "E-Mobility",
    categoryColor: "#0087cb",
    reportId: "061",
    readTime: "8_Min_Read",
    excerpt: "Analyzing the rapid expansion of charging networks and government incentives driving electric vehicle adoption across major Egyptian cities."
  },
  "solid-state-batteries-mena": {
    title: "Solid-State Batteries:",
    subtitle: "The Next Frontier for MENA Energy Storage",
    date: "January 10, 2026",
    author: "DYNATECH Team",
    category: "Energy Storage",
    categoryColor: "#006db1",
    reportId: "058",
    readTime: "10_Min_Read",
    excerpt: "Exploring how solid-state technology could revolutionize grid-scale storage and EV range capabilities in the region."
  },
  "carbon-fiber-automotive": {
    title: "Carbon Fiber in Automotive:",
    subtitle: "From Luxury to Necessity",
    date: "January 5, 2026",
    author: "Eng. Ahmed Sorour",
    category: "Lightweight Materials",
    categoryColor: "#0087cb",
    reportId: "055",
    readTime: "6_Min_Read",
    excerpt: "Why lightweight materials are becoming critical for EV efficiency and how local manufacturing can reduce costs."
  },
  "egypt-automotive-strategy": {
    title: "Egypt's Automotive Strategy:",
    subtitle: "Building a Regional EV Hub",
    date: "December 28, 2025",
    author: "DYNATECH Team",
    category: "Industry News",
    categoryColor: "#006db1",
    reportId: "052",
    readTime: "12_Min_Read",
    excerpt: "Understanding the government's vision for transforming Egypt into a leading automotive manufacturing destination."
  },
  "thermal-management-ev": {
    title: "Advanced Thermal Management:",
    subtitle: "Engineering for Egyptian Climate Conditions",
    date: "December 20, 2025",
    author: "Eng. Ahmed Sorour",
    category: "E-Mobility",
    categoryColor: "#0087cb",
    reportId: "049",
    readTime: "9_Min_Read",
    excerpt: "Addressing the unique cooling challenges posed by desert climates and high-temperature operating conditions."
  },
  "sodium-ion-grid-storage": {
    title: "Sodium-Ion Batteries:",
    subtitle: "Affordable Grid Storage Solutions",
    date: "December 15, 2025",
    author: "DYNATECH Team",
    category: "Energy Storage",
    categoryColor: "#006db1",
    reportId: "046",
    readTime: "7_Min_Read",
    excerpt: "Why sodium-ion technology is gaining traction for stationary storage applications in emerging markets."
  },
  "modular-ev-platforms": {
    title: "Modular EV Platforms:",
    subtitle: "The Future of Scalable Mobility.",
    date: "December 10, 2025",
    author: "Eng. Ahmed Sorour",
    category: "E-Mobility",
    categoryColor: "#0087cb",
    reportId: "042",
    readTime: "8_Min_Read",
    excerpt: "Analyzing the shift from fixed-chassis engineering to modular 'Skateboard' architectures in the 2026 European market."
  },
  "thermal-management-systems": {
    title: "Thermal Management Systems:",
    subtitle: "Keeping EV Batteries at Optimal Temperature.",
    date: "December 5, 2025",
    author: "DYNATECH Team",
    category: "E-Mobility",
    categoryColor: "#0087cb",
    reportId: "038",
    readTime: "6_Min_Read",
    excerpt: "Best practices for maintaining battery health through advanced cooling systems in extreme climates."
  }
};

export default function ArticleDetail() {
  const params = useParams();
  const slug = params.slug as string;
  const article = ARTICLES[slug] || ARTICLES["modular-ev-platforms"];
  return (
    <div className="bg-[#020202] text-zinc-300 font-mono selection:bg-[#006db1] selection:text-black min-h-screen pb-24">
      
      {/* --- 1. TOP NAVIGATION --- */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/5 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/knowledge" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-500 hover:text-[#006db1] transition-colors">
            <ArrowLeft size={14} /> Back_to_Archives
          </Link>
          <div className="flex gap-6">
            <button className="text-zinc-500 hover:text-white transition-colors"><Share2 size={16} /></button>
            <button className="text-zinc-500 hover:text-white transition-colors"><Printer size={16} /></button>
            <button className="px-4 py-1 bg-[#006db1] text-black text-[9px] font-[1000] uppercase tracking-tighter">Download_PDF</button>
          </div>
        </div>
      </nav>

      {/* --- ARTICLE HERO - Editorial Style --- */}
      <header className="pt-28 pb-20 px-6 md:px-16 lg:px-32 border-b-2 border-white/5 relative overflow-hidden">
        {/* Subtle Background Accent */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#006db1]/5 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          {/* Top Meta Bar */}
          <div className="flex flex-wrap items-center gap-6 mb-8 pb-6 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span 
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: article.categoryColor }}
              />
              <span 
                className="text-[10px] font-black uppercase tracking-widest"
                style={{ color: article.categoryColor }}
              >
                {article.category}
              </span>
            </div>
            
            <div className="h-4 w-px bg-white/10" />
            
            <span className="text-[9px] font-black uppercase tracking-widest text-zinc-500">
              {article.date}
            </span>
            
            <div className="h-4 w-px bg-white/10" />
            
            <span className="text-[9px] font-black uppercase tracking-widest text-zinc-500 flex items-center gap-2">
              <Clock size={11} /> {article.readTime}
            </span>
            
            <div className="h-4 w-px bg-white/10" />
            
            <span className="text-[9px] font-black uppercase tracking-widest text-zinc-600">
              Report #{article.reportId}
            </span>
          </div>

          {/* Title Stack */}
          <div className="space-y-4 mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-[1000] italic text-white uppercase tracking-tighter leading-[0.95]">
              {article.title}
            </h1>
            <p className="text-xl md:text-2xl font-light italic text-[#006db1] tracking-tight">
              {article.subtitle}
            </p>
          </div>

          {/* Author & Excerpt Row */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            {/* Author Card */}
            <div className="flex items-center gap-4 p-4 bg-zinc-950/30 border border-white/5 min-w-fit">
              <div className="w-12 h-12 bg-[#006db1] rounded-full flex items-center justify-center">
                <User size={20} className="text-black" />
              </div>
              <div>
                <p className="text-[10px] font-black text-white uppercase tracking-widest">{article.author}</p>
                <p className="text-[9px] text-zinc-500 font-black uppercase tracking-widest mt-1">
                  {article.author === "Eng. Ahmed Sorour" ? "Chief Technology Officer" : "DYNATECH Research"}
                </p>
              </div>
            </div>
            
            {/* Excerpt */}
            <p className="text-lg text-zinc-400 italic font-light leading-relaxed border-l-2 border-[#006db1]/30 pl-6">
              {article.excerpt}
            </p>
          </div>
        </div>
      </header>

      {/* --- 3. MAIN CONTENT AREA --- */}
      <main className="max-w-7xl mx-auto px-6 md:px-16 mt-16 grid lg:grid-cols-12 gap-16">
        
        {/* LEFT SIDEBAR: TECH SPECS */}
        <aside className="lg:col-span-3 space-y-12 order-2 lg:order-1">
          <div className="p-6 border border-white/5 bg-zinc-950/50 space-y-6">
            <h4 className="text-[10px] font-black text-[#006db1] uppercase tracking-[0.3em] border-b border-white/5 pb-4">Document_Metadata</h4>
            
            <div className="space-y-4">
              {[
                { label: "Status", value: "Verified", color: "text-green-500" },
                { label: "Published", value: article.date, color: "text-white" },
                { label: "Author", value: article.author, color: "text-white" },
                { label: "Category", value: article.category, color: "text-[#006db1]" },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center text-[10px]">
                  <span className="text-zinc-600 font-bold uppercase">{item.label}:</span>
                  <span className={`${item.color} font-black`}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-[10px] font-black text-white uppercase tracking-[0.3em]">Related_Tags</h4>
            <div className="flex flex-wrap gap-2">
              {["Chassis", "EV_Safety", "Modular", "R&D"].map(tag => (
                <span key={tag} className="px-2 py-1 bg-zinc-900 text-zinc-500 text-[8px] font-black uppercase hover:text-[#006db1] cursor-pointer transition-colors">#{tag}</span>
              ))}
            </div>
          </div>
        </aside>

        {/* CENTER: ARTICLE BODY */}
        <article className="lg:col-span-9 order-1 lg:order-2 space-y-12">
          
          <section className="prose prose-invert max-w-none">
            <p className="text-lg leading-relaxed text-zinc-400">
              The evolution of electric vehicles has reached a critical inflection point. Traditional automotive manufacturing, long beholden to fixed internal combustion engine (ICE) footprints, is being replaced by 
              <b className="text-white"> Modular Skateboard Architectures</b>. This paradigm shift allows manufacturers to decouple the body-shell from the propulsion system.
            </p>

            <h3 className="text-3xl font-black italic text-white uppercase tracking-tighter mt-12 mb-6">01. Structural Integrity & Flexibility</h3>
            <p className="leading-loose text-zinc-400">
              Unlike traditional unibody designs, a modular platform integrates the battery pack, motors, and suspension into a single, low-profile unit. This not only lowers the center of gravity by <span className="text-[#006db1]">15-20%</span> but also provides a standardized interface for various body styles&mdash;from compact city cars to heavy-duty logistics vans.
            </p>

            {/* DATA BLOCK INSET */}
            <div className="my-12 p-8 bg-zinc-950 border-l-4 border-[#006db1] grid md:grid-cols-3 gap-8">
              <div>
                <p className="text-[9px] font-black text-zinc-600 uppercase mb-2">Weight_Reduction</p>
                <p className="text-3xl font-black text-white italic">-120kg</p>
              </div>
              <div>
                <p className="text-[9px] font-black text-zinc-600 uppercase mb-2">Assembly_Efficiency</p>
                <p className="text-3xl font-black text-white italic">+40%</p>
              </div>
              <div>
                <p className="text-[9px] font-black text-zinc-600 uppercase mb-2">Thermal_Stability</p>
                <p className="text-3xl font-black text-white italic">Active</p>
              </div>
            </div>

            <h3 className="text-3xl font-black italic text-white uppercase tracking-tighter mt-12 mb-6">02. Thermal Management at Scale</h3>
            <p className="leading-loose text-zinc-400">
              One of the primary challenges in modularity is consistent thermal regulation across different battery configurations. Dynatech&apos;s latest research indicates that a 
              <b className="text-white"> Decentralized Cooling Loop</b> is essential for maintaining cell health in varying environmental conditions, particularly in the MENA region&apos;s high-ambient temperatures.
            </p>
          </section>

          {/* QUOTE BLOCK */}
          <blockquote className="border-y border-white/5 py-12">
            <p className="text-3xl font-light italic text-white leading-snug">
              &ldquo;Modularity is not just about cost-cutting; it&apos;s about the democratization of high-performance EV technology.&rdquo;
            </p>
            <footer className="mt-6 text-[10px] font-black text-[#006db1] uppercase tracking-widest">&mdash; Head of R&D, DYNATECH</footer>
          </blockquote>

          {/* CTA / CONTACT */}
          <div className="p-12 bg-zinc-950 border-2 border-[#006db1]">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
              <div className="space-y-2">
                <h4 className="text-2xl font-[1000] uppercase tracking-tighter italic text-white">Discuss This Topic?</h4>
                <p className="text-sm font-bold uppercase tracking-wide text-zinc-500">
                  Connect with our engineering team for deeper insights or partnership inquiries.
                </p>
              </div>
              <Link 
                href="/contact"
                className="flex items-center gap-4 bg-[#006db1] text-black px-8 py-4 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-white transition-colors"
              >
                Contact Us <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* NEWSLETTER MINI */}
          <div className="p-12 bg-zinc-900/50 border border-white/5">
            <h4 className="text-xl font-[1000] uppercase tracking-tighter mb-4 italic text-white">Want More Technical Insights?</h4>
            <p className="text-sm font-bold uppercase tracking-wide mb-8 text-zinc-500">Subscribe to receive the latest articles and research papers.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 bg-black border border-white/10 p-4 text-[10px] font-black uppercase tracking-widest focus:border-[#006db1] outline-none"
              />
              <button className="flex items-center justify-center gap-4 bg-white text-black px-8 py-4 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-[#006db1] transition-colors">
                Subscribe <Mail size={16} />
              </button>
            </div>
          </div>
        </article>
      </main>

      {/* --- 4. FOOTER: RELATED ARTICLES --- */}
      <footer className="mt-32 px-6 md:px-16 border-t border-white/5 pt-24">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex justify-between items-end">
            <h5 className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-600 italic">Continue_Reading //</h5>
            <button className="text-[9px] font-black uppercase tracking-widest text-[#006db1] flex items-center gap-2">View_All <ChevronRight size={14}/></button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-1">
            {[
              { title: "Solid-State Battery Breakthroughs", cat: "Energy" },
              { title: "Grid Readiness in MENA 2026", cat: "Infrastructure" },
              { title: "The Impact of Recycled Aluminum", cat: "Materials" },
            ].map((rel, i) => (
              <div key={i} className="p-8 bg-zinc-950/50 border border-white/5 hover:bg-zinc-900 transition-all cursor-pointer group">
                <span className="text-[8px] font-black text-[#006db1] uppercase tracking-widest">{rel.cat}</span>
                <h6 className="text-lg font-black text-white uppercase italic tracking-tighter mt-2 group-hover:underline">{rel.title}</h6>
              </div>
            ))}
          </div>
        </div>
      </footer>

    </div>
  );
}
