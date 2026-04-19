"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowUpRight, Activity } from "lucide-react";
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

interface FeaturedProjectsProps {
  projects: Project[];
}

export default function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  const horizontalRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: horizontalRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const smoothX = useSpring(x, { stiffness: 50, damping: 20 });

  const featuredProjects = projects.filter(p => p.featured);

  return (
    <section ref={horizontalRef} className="relative h-[250vh] bg-black">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="absolute top-20 left-12 flex items-center gap-4">
          <Activity size={16} className="text-[#bcd647]" />
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600 italic">High_Priority_Impact //</span>
        </div>

        <motion.div style={{ x: smoothX }} className="flex gap-12 px-12">
          {featuredProjects.map((project) => (
            <div key={project.id} className="w-[85vw] md:w-[70vw] h-[65vh] flex-shrink-0 bg-zinc-950 border border-white/10 p-12 flex flex-col justify-between relative group overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-[0.02] pointer-events-none group-hover:opacity-[0.05] transition-opacity">
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #bcd647 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
              </div>

              <div className="flex justify-between items-start z-10">
                <h3 className="text-6xl md:text-8xl font-[1000] italic uppercase tracking-tighter leading-none group-hover:text-[#bcd647] transition-colors max-w-3xl">
                  {project.title}
                </h3>
                <div className="text-right">
                  <p className="text-[10px] font-black text-[#bcd647] tracking-widest uppercase mb-2 italic underline underline-offset-4">{project.category}</p>
                  <div className="text-2xl font-black text-zinc-800">INV_{project.id}</div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-end z-10">
                <p className="text-2xl italic text-zinc-400 font-light leading-snug">&ldquo;{project.desc}&rdquo;</p>
                <div className="space-y-6 text-right">
                  <p className="text-5xl font-[1000] italic text-white tracking-tighter border-b border-white/10 pb-4 inline-block">{project.metric}</p>
                  <br />
                  <Link 
                    href={`/case-study/${project.slug}`}
                    className="inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 hover:text-[#bcd647] transition-colors"
                  >
                    VIEW_PROJECT <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
