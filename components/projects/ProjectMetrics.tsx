"use client";

import React from "react";
import { motion } from "framer-motion";

interface Metric {
  label: string;
  val: string;
  unit: string;
  icon: React.ReactNode;
  color: string;
}

interface ProjectMetricsProps {
  metrics: Metric[];
}

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

export default function ProjectMetrics({ metrics }: ProjectMetricsProps) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
      className="grid grid-cols-2 lg:grid-cols-4 border-b border-white/5 bg-[#050505]"
    >
      {metrics.map((stat, i) => (
        <motion.div
          key={i}
          variants={fadeInUp}
          className="relative p-10 border-r border-white/5 overflow-hidden group hover:bg-black transition-all duration-500"
        >
          <div className="relative z-10 space-y-6">
            <div className="flex items-center gap-3" style={{ color: stat.color }}>
              {stat.icon}
              <span className="text-[8px] font-mono tracking-[0.3em] uppercase text-zinc-600">
                SPEC_0{i+1}
              </span>
            </div>

            <div className="space-y-1">
              <div className="flex items-baseline gap-2">
                <h3 className="text-4xl md:text-5xl font-[1000] italic text-white tracking-tighter">
                  {stat.val}
                </h3>
                <span className="text-lg font-black italic" style={{ color: stat.color }}>{stat.unit}</span>
              </div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold">
                {stat.label}
              </p>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#bcd647] to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        </motion.div>
      ))}
    </motion.section>
  );
}
