"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";
import { ExternalLink } from "lucide-react";
import type { ReactNode } from "react";

type ServiceModuleBase = {
  id: string;
  title: string;
  desc: string;
  color: string;
  tags: string[];
};

export type ServiceModuleWithIcon = ServiceModuleBase & {
  iconNode: ReactNode;
};

type Props = {
  service: ServiceModuleWithIcon;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
};

export default function ServiceModuleCard({ service, index, total, scrollYProgress }: Props) {
  const start = 0.12 + (index / Math.max(1, total)) * 0.68;
  const end = start + 0.18;

  const power = useTransform(scrollYProgress, [start, (start + end) / 2, end], [0, 1, 0]);
  const glow = useTransform(power, [0, 1], ["rgba(67,190,204,0.0)", "rgba(67,190,204,0.35)"]); 
  const borderGlow = useTransform(power, [0, 1], ["rgba(255,255,255,0.06)", "rgba(67,190,204,0.35)"]); 

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      style={{ boxShadow: glow, borderColor: borderGlow }}
      className="group relative bg-[#070707] p-12 overflow-hidden hover:bg-[#0a0a0a] transition-colors border"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none bg-[url('https://media.giphy.com/media/oEI9uWUicGLe98p5T6/giphy.gif')] bg-cover" />

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-12">
          <span className="text-[60px] font-black text-white/5 leading-none group-hover:text-[#43becc]/10 transition-colors">
            {service.id}
          </span>
          <div
            style={{ color: service.color }}
            className="p-4 bg-white/5 rounded-full group-hover:scale-110 group-hover:rotate-12 transition-transform"
          >
            {service.iconNode}
          </div>
        </div>

        <h3 className="text-3xl font-black uppercase mb-4 group-hover:translate-x-2 transition-transform">
          {service.title}
        </h3>

        <p className="text-zinc-500 text-sm leading-relaxed max-w-sm mb-8">{service.desc}</p>

        <div className="flex gap-3 flex-wrap">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="text-[8px] font-mono border border-white/10 px-3 py-1 text-zinc-400 tracking-widest uppercase"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-12 w-0 h-[1px] bg-[#43becc] group-hover:w-full transition-all duration-700" />
      </div>

      <div className="absolute bottom-6 end-8 opacity-0 group-hover:opacity-100 transition-all">
        <ExternalLink size={14} className="text-[#bcd647]" />
      </div>

      <motion.div
        aria-hidden
        style={{ opacity: power }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#43becc]/0 via-[#43becc]/5 to-[#bcd647]/0" />
      </motion.div>
    </motion.div>
  );
}
