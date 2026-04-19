"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layers, FileText } from "lucide-react";

interface ProjectSidebarProps {
  techStack: string[];
  deliverables: string[];
  partner: string;
  contact: string;
}

export default function ProjectSidebar({ techStack, deliverables, partner, contact }: ProjectSidebarProps) {
  return (
    <aside className="lg:col-span-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="sticky top-32 p-10 bg-zinc-900/50 border border-white/10 space-y-12"
      >
        {/* Tech Stack */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Layers className="text-[#bcd647]" size={18} />
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500">Tech_Stack</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {techStack.map(s => (
              <span key={s} className="px-3 py-2 bg-[#bcd647]/10 border border-[#bcd647]/20 text-[9px] font-bold text-[#bcd647]">{s}</span>
            ))}
          </div>
        </div>

        {/* Deliverables */}
        <div className="pt-10 border-t border-white/5 space-y-6">
          <div className="flex items-center gap-2">
            <FileText className="text-[#43becc]" size={18} />
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500">Deliverables</h4>
          </div>
          <div className="space-y-3">
            {deliverables.map(d => (
              <div key={d} className="flex items-center gap-3 text-[10px] text-zinc-400">
                <div className="w-1 h-1 bg-[#43becc]" />
                {d}
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="pt-10 border-t border-white/5 space-y-4">
          <p className="text-[9px] font-black uppercase tracking-widest text-zinc-600">Partner: {partner}</p>
          <p className="text-[9px] font-mono text-[#bcd647]">{contact}</p>
        </div>
      </motion.div>
    </aside>
  );
}
