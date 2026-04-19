"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ArrowLeft, Share2, Printer, Clock, Calendar,
  ChevronRight, Mail, ArrowRight, Rss, Zap, Battery, Factory
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

// --- UPDATE DATA ---
const UPDATES: Record<string, {
  title: string;
  subtitle: string;
  source: string;
  sourceType: "partner" | "industry" | "internal";
  date: string;
  readTime: string;
  category: string;
  categoryColor: string;
  excerpt: string;
  content: string[];
}> = {
  "cu-fiber-breakthrough-2026": {
    title: "Breakthrough in Fiber-Based Multi-Material Construction",
    subtitle: "Composites United Announces 2026 Technology Roadmap",
    source: "Composites United",
    sourceType: "partner",
    date: "January 12, 2026",
    readTime: "5 Min Read",
    category: "Lightweight Materials",
    categoryColor: "#bcd647",
    excerpt: "New manufacturing processes enabling cost-effective carbon fiber integration for automotive applications.",
    content: [
      "Composites United has unveiled their 2026 technology roadmap, focusing on breakthrough manufacturing processes that enable cost-effective carbon fiber integration for mass-market automotive applications.",
      "The new process reduces production time by 40% while maintaining structural integrity, making lightweight materials accessible to mid-range vehicle segments for the first time.",
      "This development aligns with DYNATECH's mission to bring European lightweight construction expertise to Egyptian manufacturing.",
      "DYNATECH engineers will receive training on these new processes through our exclusive partnership agreement with CU Berlin."
    ]
  },
  "fft-ai-manufacturing-2026": {
    title: "AI-Driven Flexible Manufacturing Systems",
    subtitle: "FFT Produktionssysteme Deploys Next-Gen Assembly Lines",
    source: "FFT Produktionssysteme",
    sourceType: "partner",
    date: "January 8, 2026",
    readTime: "4 Min Read",
    category: "Automation",
    categoryColor: "#43becc",
    excerpt: "Intelligent production systems that adapt to multiple vehicle models without retooling.",
    content: [
      "FFT Produktionssysteme has successfully deployed their next-generation AI-driven flexible manufacturing systems across major European automotive facilities.",
      "The new systems utilize machine learning algorithms to optimize production flow in real-time, reducing downtime by 25% and increasing overall equipment effectiveness.",
      "These modular systems can adapt to multiple vehicle models without requiring extensive retooling, making them ideal for the diverse EV market.",
      "As FFT's exclusive representative in Egypt, DYNATECH is positioned to introduce these advanced manufacturing capabilities to the local market."
    ]
  },
  "egypt-ev-infrastructure-expansion": {
    title: "Egypt Expands EV Charging Infrastructure",
    subtitle: "Government Announces New Fast-Charging Corridor",
    source: "Industry Report",
    sourceType: "industry",
    date: "January 5, 2026",
    readTime: "6 Min Read",
    category: "E-Mobility",
    categoryColor: "#43becc",
    excerpt: "Major infrastructure investment connecting Cairo, Alexandria, and the New Administrative Capital.",
    content: [
      "The Egyptian government has announced a significant expansion of EV charging infrastructure, with plans to establish fast-charging corridors connecting major urban centers.",
      "The project includes 150 new fast-charging stations along highways between Cairo, Alexandria, and the New Administrative Capital, with completion targeted for Q3 2026.",
      "This infrastructure development is expected to accelerate EV adoption rates by addressing range anxiety concerns among potential buyers.",
      "DYNATECH's strategic positioning in the automotive sector aligns with this national infrastructure development."
    ]
  },
  "mena-battery-market-growth": {
    title: "MENA Battery Market Sees Record Growth",
    subtitle: "Regional ESS Deployments Drive Demand",
    source: "Industry Analysis",
    sourceType: "industry",
    date: "December 28, 2025",
    readTime: "7 Min Read",
    category: "Energy Storage",
    categoryColor: "#bcd647",
    excerpt: "Regional energy storage deployments exceed projections by 35% in 2025.",
    content: [
      "The MENA region's battery market has experienced unprecedented growth, with energy storage deployments exceeding projections by 35% throughout 2025.",
      "Saudi Arabia and Egypt lead the region in grid-scale ESS installations, driven by renewable energy integration requirements and grid stabilization needs.",
      "Industry analysts project continued growth trajectory through 2027, with Egypt positioned as a key manufacturing hub for battery components.",
      "DYNATECH's partnerships with European technology providers position the company to capture significant market share in this expanding sector."
    ]
  },
  "dynatech-lab-phase-2-complete": {
    title: "DYNATECH Completes Phase II Technical Lab",
    subtitle: "Advanced Testing Infrastructure Now Operational",
    source: "DYNATECH",
    sourceType: "internal",
    date: "December 20, 2025",
    readTime: "3 Min Read",
    category: "Company News",
    categoryColor: "#bcd647",
    excerpt: "New testing capabilities enable full-spectrum EV and ESS validation.",
    content: [
      "DYNATECH has successfully completed Phase II of its Technical Laboratory infrastructure, bringing advanced testing and validation capabilities online.",
      "The expanded facility includes thermal cycling chambers, vibration testing equipment, and high-voltage safety testing apparatus compliant with international standards.",
      "These capabilities enable DYNATECH to perform full-spectrum validation of EV powertrains and ESS solutions prior to field deployment.",
      "The lab infrastructure supports DYNATECH's partnerships with Composites United and FFT Produktionssysteme for technology transfer programs."
    ]
  },
  "dynatech-strategic-logistics-agreement": {
    title: "New Strategic Logistics Partnership Signed",
    subtitle: "Enhanced Supply Chain for Industrial Components",
    source: "DYNATECH",
    sourceType: "internal",
    date: "December 15, 2025",
    readTime: "4 Min Read",
    category: "Company News",
    categoryColor: "#43becc",
    excerpt: "Partnership ensures reliable supply of critical manufacturing components.",
    content: [
      "DYNATECH has entered into a strategic logistics agreement with leading regional supply chain partners to ensure reliable availability of critical manufacturing components.",
      "The partnership establishes dedicated warehousing facilities and streamlined customs clearance processes for imported European technology components.",
      "This infrastructure supports DYNATECH's growing project portfolio and positions the company to meet increasing demand for EV and ESS solutions.",
      "The agreement includes provisions for expansion as DYNATECH's manufacturing capabilities scale in 2026."
    ]
  }
};

// --- RELATED UPDATES ---
const RELATED = [
  { title: "Solid-State Battery Research Progress", cat: "Energy Storage", slug: "mena-battery-market-growth" },
  { title: "Cairo-ALX EV Corridor Development", cat: "E-Mobility", slug: "egypt-ev-infrastructure-expansion" },
  { title: "Automotive Hub Construction Update", cat: "Company News", slug: "dynatech-lab-phase-2-complete" }
];

export default function UpdateDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const update = UPDATES[slug] || UPDATES["cu-fiber-breakthrough-2026"];

  const getSourceIcon = () => {
    switch (update.sourceType) {
      case "partner": return <Zap size={16} className="text-[#bcd647]" />;
      case "industry": return <Factory size={16} className="text-[#43becc]" />;
      case "internal": return <Rss size={16} className="text-[#bcd647]" />;
    }
  };

  return (
    <div className="bg-black text-white font-mono selection:bg-[#bcd647] selection:text-black min-h-screen pb-24">
      
      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/5 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/updates" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-500 hover:text-[#bcd647] transition-colors">
            <ArrowLeft size={14} /> Back_to_Updates
          </Link>
          <div className="flex gap-6">
            <button className="text-zinc-500 hover:text-white transition-colors"><Share2 size={16} /></button>
            <button className="text-zinc-500 hover:text-white transition-colors"><Printer size={16} /></button>
            <span className="px-3 py-1 bg-[#bcd647] text-black text-[9px] font-[1000] uppercase tracking-tighter">
              {update.sourceType === "partner" ? "Partner_Update" : update.sourceType === "industry" ? "Industry_News" : "Internal"}
            </span>
          </div>
        </div>
      </nav>

      {/* --- HERO --- */}
      <header className="pt-32 pb-16 px-6 md:px-16 border-b border-white/5">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Source & Metadata */}
          <div className="flex flex-wrap items-center gap-4">
            <span 
              className="px-3 py-1 bg-zinc-900 border border-white/10 text-[9px] font-black uppercase tracking-widest"
              style={{ color: update.categoryColor }}
            >
              {update.category}
            </span>
            <span className="text-zinc-600 text-[9px] font-bold uppercase tracking-widest flex items-center gap-2">
              <Clock size={12} /> {update.readTime}
            </span>
            <span className="text-zinc-600 text-[9px] font-bold uppercase tracking-widest flex items-center gap-2">
              <Calendar size={12} /> {update.date}
            </span>
          </div>

          {/* Source Badge */}
          <div className="flex items-center gap-3 pb-4 border-b border-white/5">
            {getSourceIcon()}
            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">
              Source: {update.source}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-[1000] italic text-white uppercase tracking-tighter leading-[0.9]">
            {update.title} <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#bcd647] to-white">
              {update.subtitle}
            </span>
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-zinc-500 italic font-light leading-relaxed max-w-2xl">
            &ldquo;{update.excerpt}&rdquo;
          </p>
        </div>
      </header>

      {/* --- MAIN CONTENT --- */}
      <main className="max-w-7xl mx-auto px-6 md:px-16 mt-16 grid lg:grid-cols-12 gap-16">
        
        {/* SIDEBAR */}
        <aside className="lg:col-span-4 space-y-8 order-2 lg:order-1">
          {/* Source Info */}
          <div className="p-6 border border-white/5 bg-zinc-950/50 space-y-6 sticky top-32">
            <h4 className="text-[10px] font-black text-[#bcd647] uppercase tracking-[0.3em] border-b border-white/5 pb-4">
              Update_Metadata
            </h4>
            <div className="space-y-4">
              {[
                { label: "Source", value: update.source, color: "text-white" },
                { label: "Type", value: update.sourceType.replace("_", " "), color: "text-[#bcd647]" },
                { label: "Published", value: update.date, color: "text-white" },
                { label: "Category", value: update.category, color: "text-[#bcd647]" },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center text-[10px]">
                  <span className="text-zinc-600 font-bold uppercase">{item.label}:</span>
                  <span className={`${item.color} font-black`}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Related Updates */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-black text-white uppercase tracking-[0.3em]">Related_Updates</h4>
            {RELATED.map((rel, i) => (
              <Link 
                key={i} 
                href={`/updates/${rel.slug}`}
                className="block p-4 bg-zinc-950/30 border border-white/5 hover:border-[#bcd647]/30 transition-all group"
              >
                <span className="text-[8px] font-black text-[#bcd647] uppercase tracking-widest">{rel.cat}</span>
                <h5 className="text-sm font-bold text-white uppercase italic mt-1 group-hover:text-[#bcd647] transition-colors">
                  {rel.title}
                </h5>
              </Link>
            ))}
          </div>
        </aside>

        {/* ARTICLE BODY */}
        <article className="lg:col-span-8 order-1 lg:order-2 space-y-8">
          {update.content.map((paragraph, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-lg leading-relaxed text-zinc-400"
            >
              {paragraph}
            </motion.p>
          ))}

          {/* Contact CTA */}
          <div className="p-8 bg-zinc-950 border-2 border-[#bcd647] mt-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="space-y-2">
                <h4 className="text-xl font-[1000] uppercase tracking-tighter italic text-white">
                  Interested in This Technology?
                </h4>
                <p className="text-sm font-bold uppercase tracking-wide text-zinc-500">
                  Connect with our team for partnership opportunities.
                </p>
              </div>
              <Link 
                href="/contact"
                className="flex items-center gap-4 bg-[#bcd647] text-black px-6 py-3 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-white transition-colors"
              >
                Contact Us <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div className="p-8 bg-zinc-900/30 border border-white/5">
            <h4 className="text-lg font-[1000] uppercase tracking-tighter mb-2 italic text-white">
              Stay Updated
            </h4>
            <p className="text-sm font-bold uppercase tracking-wide mb-4 text-zinc-500">
              Subscribe to receive the latest partner and industry updates.
            </p>
            <div className="flex gap-4">
              <input 
                type="email" 
                placeholder="Your email" 
                className="flex-1 bg-black border border-white/10 p-3 text-[10px] font-black uppercase tracking-widest focus:border-[#bcd647] outline-none"
              />
              <button className="flex items-center justify-center gap-2 bg-white text-black px-6 py-3 text-[10px] font-black uppercase tracking-widest hover:bg-[#bcd647] transition-colors">
                <Mail size={14} /> Subscribe
              </button>
            </div>
          </div>
        </article>
      </main>

      {/* --- FOOTER --- */}
      <footer className="mt-32 px-6 md:px-16 border-t border-white/5 pt-16">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h5 className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-600 italic">
            // End of Update
          </h5>
          <Link href="/updates" className="text-[9px] font-black uppercase tracking-widest text-[#bcd647] flex items-center gap-2 hover:text-white transition-colors">
            View All Updates <ChevronRight size={14}/>
          </Link>
        </div>
      </footer>
    </div>
  );
}
