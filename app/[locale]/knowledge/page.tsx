"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Search, Calendar, ArrowRight, 
  Zap, Battery, Microscope, Factory,
  Mail, User, BookOpen
} from "lucide-react";
import Link from "next/link";

// --- CATEGORIES ---
const CATEGORIES = [
  { id: "all", label: "All Insights", icon: null },
  { id: "e-mobility", label: "E-Mobility", icon: <Zap size={14} />, color: "#43becc" },
  { id: "energy-storage", label: "Energy Storage", icon: <Battery size={14} />, color: "#bcd647" },
  { id: "lightweight-materials", label: "Lightweight Materials", icon: <Microscope size={14} />, color: "#43becc" },
  { id: "industry-news", label: "Industry News", icon: <Factory size={14} />, color: "#bcd647" }
];

// --- ARTICLES DATA ---
const ARTICLES = [
  {
    slug: "ev-infrastructure-egypt-2026",
    title: "The State of EV Infrastructure in Egypt: 2026 Outlook",
    category: "e-mobility",
    date: "January 15, 2026",
    excerpt: "Analyzing the rapid expansion of charging networks and government incentives driving electric vehicle adoption across major Egyptian cities.",
    author: "Eng. Ahmed Sorour"
  },
  {
    slug: "solid-state-batteries-mena",
    title: "Solid-State Batteries: The Next Frontier for MENA Energy Storage",
    category: "energy-storage",
    date: "January 10, 2026",
    excerpt: "Exploring how solid-state technology could revolutionize grid-scale storage and EV range capabilities in the region.",
    author: "DYNATECH Team"
  },
  {
    slug: "carbon-fiber-automotive",
    title: "Carbon Fiber in Automotive: From Luxury to Necessity",
    category: "lightweight-materials",
    date: "January 5, 2026",
    excerpt: "Why lightweight materials are becoming critical for EV efficiency and how local manufacturing can reduce costs.",
    author: "Eng. Ahmed Sorour"
  },
  {
    slug: "egypt-automotive-strategy",
    title: "Egypt's Automotive Strategy: Building a Regional EV Hub",
    category: "industry-news",
    date: "December 28, 2025",
    excerpt: "Understanding the government's vision for transforming Egypt into a leading automotive manufacturing destination.",
    author: "DYNATECH Team"
  },
  {
    slug: "thermal-management-ev",
    title: "Advanced Thermal Management for Egyptian EVs",
    category: "e-mobility",
    date: "December 20, 2025",
    excerpt: "Addressing the unique cooling challenges posed by desert climates and high-temperature operating conditions.",
    author: "Eng. Ahmed Sorour"
  },
  {
    slug: "sodium-ion-grid-storage",
    title: "Sodium-Ion Batteries: Affordable Grid Storage Solutions",
    category: "energy-storage",
    date: "December 15, 2025",
    excerpt: "Why sodium-ion technology is gaining traction for stationary storage applications in emerging markets.",
    author: "DYNATECH Team"
  }
];

export default function KnowledgeHub() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = ARTICLES.filter(article => {
    const matchesCategory = activeCategory === "all" || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-black text-white font-mono selection:bg-[#bcd647] selection:text-black min-h-screen">
      
      {/* --- KNOWLEDGE HERO - Centered Layout --- */}
      <header className="pt-32 pb-24 px-6 md:px-16 lg:px-32 border-b-2 border-white/5 relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
        
        {/* Single Accent Glow - Top Left */}
        <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-[#43becc]/15 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-5xl mx-auto relative z-10 text-center space-y-12">
          {/* Kicker */}
          <div className="flex flex-col items-center justify-center gap-2">
            <BookOpen size={18} className="text-[#bcd647]" />
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-[#bcd647]">
              KNOWLEDGE HUB
            </span>
            <div className="w-16 h-px bg-[#bcd647]/50" />
          </div>
          
          {/* Title - Centered */}
          <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-[1000] tracking-tighter uppercase italic leading-[0.9]">
            <span className="text-white">Technical</span> <br/>
            <span className="text-[#43becc]">Insights.</span>
          </h1>
          
          {/* Subtitle */}
          <p className="max-w-2xl mx-auto text-[11px] font-bold text-zinc-500 uppercase tracking-[0.2em] leading-loose">
            Engineering perspectives on E-Mobility, Energy Storage, and Lightweight Materials from DYNATECH&apos;s R&D team.
          </p>
          
          {/* Quick Stats Row */}
          <div className="flex justify-center gap-12 pt-8">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-[1000] text-[#bcd647]">6</span>
              <span className="text-[9px] font-black uppercase tracking-widest text-zinc-600">Articles</span>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="flex items-center gap-3">
              <span className="text-2xl font-[1000] text-[#43becc]">4</span>
              <span className="text-[9px] font-black uppercase tracking-widest text-zinc-600">Categories</span>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="flex items-center gap-3">
              <span className="text-2xl font-[1000] text-white">2</span>
              <span className="text-[9px] font-black uppercase tracking-widest text-zinc-600">Authors</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 md:px-16 lg:px-32">
        
        {/* --- SEARCH & FILTERS --- */}
        <section className="py-16 space-y-8">
          {/* Search */}
          <div className="relative max-w-xl">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" />
            <input 
              type="text" 
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-950 border border-white/10 p-4 pl-12 text-[10px] font-black uppercase tracking-widest focus:border-[#bcd647] outline-none transition-all"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-3 border text-[9px] font-black uppercase tracking-widest transition-all ${
                  activeCategory === cat.id 
                    ? 'bg-[#bcd647] text-black border-[#bcd647]' 
                    : 'bg-transparent text-zinc-500 border-white/10 hover:border-[#bcd647] hover:text-white'
                }`}
              >
                {cat.icon && <span style={{ color: activeCategory === cat.id ? 'black' : cat.color }}>{cat.icon}</span>}
                {cat.label}
              </button>
            ))}
          </div>
        </section>

        {/* --- ARTICLES GRID --- */}
        <section className="pb-24">
          <div className="flex items-center gap-4 mb-12">
            <span className="text-[10px] font-black tracking-[0.5em] uppercase text-[#43becc] italic">
              // {filteredArticles.length} ARTICLES_FOUND
            </span>
            <div className="h-px flex-grow bg-white/5" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {filteredArticles.map((article, i) => {
              const category = CATEGORIES.find(c => c.id === article.category);
              return (
                <motion.div
                  key={article.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-black p-8 space-y-6 group hover:bg-zinc-950/50 transition-all"
                >
                  {/* Category & Date */}
                  <div className="flex items-center justify-between">
                    <span 
                      className="text-[9px] font-black uppercase tracking-widest"
                      style={{ color: category?.color || '#bcd647' }}
                    >
                      {category?.label}
                    </span>
                    <div className="flex items-center gap-2 text-zinc-600">
                      <Calendar size={12} />
                      <span className="text-[8px] font-black uppercase tracking-widest">{article.date}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-[1000] uppercase italic tracking-tighter leading-tight group-hover:text-[#43becc] transition-colors">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wide leading-relaxed line-clamp-2">
                    {article.excerpt}
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-2 text-zinc-600 pt-2">
                    <User size={12} />
                    <span className="text-[8px] font-black uppercase tracking-widest">{article.author}</span>
                  </div>

                  {/* Read More */}
                  <Link 
                    href={`/knowledge/${article.slug}`}
                    className="flex items-center gap-3 text-[9px] font-black uppercase tracking-widest pt-4 border-t border-white/5 group/link"
                  >
                    <span className="text-zinc-500 group-hover/link:text-[#bcd647] transition-colors">Read More</span>
                    <ArrowRight size={14} className="text-zinc-600 group-hover/link:text-[#bcd647] group-hover/link:translate-x-1 transition-all" />
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {filteredArticles.length === 0 && (
            <div className="p-16 text-center border border-white/5 bg-zinc-950/30">
              <p className="text-[10px] font-black uppercase tracking-widest text-zinc-600">
                No articles found matching your criteria.
              </p>
            </div>
          )}
        </section>

        {/* --- NEWSLETTER CTA --- */}
        <section className="py-24 border-t-2 border-white/5">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <span className="text-[10px] font-black tracking-[0.5em] uppercase text-[#bcd647] italic">
                // STAY_INFORMED
              </span>
              <h2 className="text-4xl md:text-5xl font-[1000] uppercase italic tracking-tighter">
                Subscribe to Our <span className="text-[#43becc]">Insights.</span>
              </h2>
            </div>
            <p className="text-sm text-zinc-500 font-bold uppercase tracking-widest leading-loose italic">
              Receive the latest technical articles and industry analysis directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 bg-zinc-950 border border-white/10 p-4 text-[10px] font-black uppercase tracking-widest focus:border-[#bcd647] outline-none transition-all"
              />
              <button className="px-8 py-4 bg-[#bcd647] text-black text-[10px] font-[1000] uppercase tracking-[0.4em] hover:bg-white transition-all flex items-center justify-center gap-3">
                Subscribe <Mail size={16} />
              </button>
            </div>
          </div>
        </section>

      </main>

      {/* --- FOOTER --- */}
      <footer className="py-20 border-t-2 border-white/5 text-center">
        <p className="text-zinc-700 text-[10px] font-black uppercase tracking-[0.5em] italic">
          Dynatech Industrial Systems // Technical Knowledge Hub
        </p>
      </footer>
    </div>
  );
}