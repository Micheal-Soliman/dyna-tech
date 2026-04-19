"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Box } from "lucide-react";
import Link from "next/link";

interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  metric: string;
  desc: string;
  featured: boolean;
  tags: string[];
}

interface ProjectGridProps {
  projects: Project[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto min-h-[60vh]">
      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {projects.map((project) => (
            <Link key={project.id} href={`/case-study/${project.slug}`} className="block">
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="group p-10 bg-zinc-950/50 border border-white/5 hover:border-[#bcd647]/30 transition-all flex flex-col justify-between aspect-[4/5] relative overflow-hidden cursor-pointer h-full"
              >
                <div className="space-y-6 relative z-10">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-black text-zinc-700 tracking-widest uppercase">Type: {project.id}</span>
                    <Box size={14} className="text-zinc-800" />
                  </div>
                  <h4 className="text-3xl font-[1000] italic uppercase tracking-tighter leading-none group-hover:text-white">{project.title}</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((t: string) => (
                      <span key={t} className="text-[8px] font-bold text-zinc-600 uppercase tracking-widest border border-white/5 px-2 py-1">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="space-y-6 relative z-10">
                  <p className="text-sm text-zinc-500 italic leading-relaxed">&ldquo;{project.desc}&rdquo;</p>
                  <div className="pt-6 border-t border-white/5 flex justify-between items-end">
                    <p className="text-lg font-black italic text-[#bcd647] tracking-tighter">{project.metric}</p>
                    <ArrowUpRight size={20} className="text-zinc-800 group-hover:text-white transition-all" />
                  </div>
                </div>

                {/* Vertical Text Accent */}
                <div className="absolute bottom-0 right-0 p-4 opacity-[0.05] pointer-events-none group-hover:opacity-20 transition-opacity">
                  <p className="text-[120px] font-black leading-none text-white italic rotate-90 origin-bottom-right uppercase -mb-10 -mr-4">{project.id}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
