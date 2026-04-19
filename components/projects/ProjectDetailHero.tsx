"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface ProjectDetailHeroProps {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  status: string;
  investment: string;
  timeline: string;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

export default function ProjectDetailHero({ 
  id, 
  title, 
  subtitle, 
  category, 
  status, 
  investment, 
  timeline 
}: ProjectDetailHeroProps) {
  return (
    <>
      {/* Nav Back */}
      <div className="fixed top-0 left-0 w-full p-6 z-50">
        <Link 
          href="/case-study" 
          className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-500 hover:text-[#bcd647] transition-colors"
        >
          <ArrowLeft size={14} />
          Back to Projects
        </Link>
      </div>

      {/* Hero Header */}
      <section className="pt-32 pb-24 px-6 md:px-16 border-b border-white/5 relative overflow-hidden">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          {/* Status Bar */}
          <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-8">
            <span className="px-3 py-1 bg-[#bcd647]/20 text-[#bcd647] text-[9px] font-black uppercase tracking-widest border border-[#bcd647]/30">
              {status}
            </span>
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-zinc-500 italic">
              {category} // {id}
            </span>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <motion.div variants={fadeInUp} className="lg:col-span-8">
              <h1 className="text-5xl md:text-8xl font-[1000] italic uppercase tracking-tighter text-white leading-[0.85] mb-6">
                {title}
              </h1>
              <p className="text-2xl md:text-3xl text-zinc-500 italic font-light">
                {subtitle}
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="lg:col-span-4 space-y-4">
              <div className="p-6 bg-zinc-950 border border-white/10">
                <p className="text-[9px] font-black uppercase tracking-widest text-zinc-600 mb-2">Investment Range</p>
                <p className="text-2xl font-black italic text-[#bcd647]">{investment}</p>
              </div>
              <div className="p-6 bg-zinc-950 border border-white/10">
                <p className="text-[9px] font-black uppercase tracking-widest text-zinc-600 mb-2">Timeline</p>
                <p className="text-xl font-black italic text-white">{timeline}</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
