"use client";

import React from "react";
import { motion } from "framer-motion";

interface Spec {
  label: string;
  value: string;
}

interface ProjectContentProps {
  description: string;
  challenge: string;
  solution: string;
  specs: Spec[];
}

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
};

export default function ProjectContent({ description, challenge, solution, specs }: ProjectContentProps) {
  return (
    <div className="lg:col-span-8 space-y-24">
      {/* Description */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInUp}
        className="space-y-6"
      >
        <p className="text-xl leading-relaxed text-zinc-400">
          {description}
        </p>
      </motion.div>

      {/* The Challenge */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInUp}
        className="space-y-6"
      >
        <h2 className="text-xl font-black italic uppercase tracking-widest flex items-center gap-6 text-white">
          <span className="w-12 h-[1px] bg-[#006db1]" /> 01_The_Challenge
        </h2>
        <p className="text-lg font-light leading-relaxed italic text-zinc-400 pl-18">
          {challenge}
        </p>
      </motion.div>

      {/* The Solution */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInUp}
        className="space-y-6"
      >
        <h2 className="text-xl font-black italic uppercase tracking-widest flex items-center gap-6 text-[#006db1]">
          <span className="w-12 h-[1px] bg-[#006db1]" /> 02_The_Solution
        </h2>
        <p className="text-lg font-light leading-relaxed italic text-zinc-400 pl-18">
          {solution}
        </p>
      </motion.div>

      {/* Technical Specs */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInUp}
        className="space-y-6"
      >
        <h2 className="text-xl font-black italic uppercase tracking-widest flex items-center gap-6 text-white">
          <span className="w-12 h-[1px] bg-zinc-600" /> 03_Technical_Specs
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {specs.map((spec, idx) => (
            <motion.div
              key={spec.label}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="flex justify-between items-center p-5 bg-zinc-950 border border-white/5"
            >
              <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">{spec.label}</span>
              <span className="text-[10px] font-black uppercase tracking-widest text-white">{spec.value}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
