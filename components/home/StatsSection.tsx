"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import type { StatItem } from "@/components/home/types";

function parseStatValue(raw: string) {
  const value = String(raw ?? "").trim();

  const match = value.match(/^([^0-9]*)(\d+(?:\.\d+)?)(.*)$/);
  if (!match) {
    return { numericValue: 0, prefix: "", suffix: value, precision: 0 };
  }

  const prefix = match[1] ?? "";
  const numericStr = match[2];
  const suffix = match[3] ?? "";
  const numeric = Number.parseFloat(numericStr);
  const safeNumeric = Number.isFinite(numeric) ? numeric : 0;
  const precision = (numericStr.split(".")[1] ?? "").length;
  return { numericValue: safeNumeric, prefix, suffix, precision };
}

function NexusCircle({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInViewOnce = useInView(ref, { once: true, margin: "-100px" });
  const reduceMotion = useReducedMotion();
  const { numericValue, prefix, suffix, precision } = parseStatValue(value);
  const displayValue = numericValue.toFixed(precision);

  return (
    <motion.div
      ref={ref}
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      animate={isInViewOnce ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.48, ease: "easeOut" }}
      className="relative mx-auto flex h-56 w-56 flex-col items-center justify-center group md:h-60 md:w-60 lg:h-64 lg:w-64"
    >
      
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
        animate={isInViewOnce ? { opacity: 1, scale: 1 } : undefined}
        transition={{ duration: 0.75, ease: "easeOut" }}
        className="absolute w-48 h-48 md:w-52 md:h-52 lg:w-56 lg:h-56 border border-dashed border-white/5 rounded-full"
      />

      <svg className="w-44 h-44 md:w-48 md:h-48 lg:w-52 lg:h-52 transform -rotate-90">
        <circle
          cx="50%" cy="50%" r="45%"
          className="stroke-white/5 fill-none"
          strokeWidth="1"
        />
        <motion.circle
          cx="50%" cy="50%" r="45%"
          className="stroke-[#0087cb] fill-none"
          strokeWidth="2"
          strokeDasharray="100 100"
          initial={{ strokeDashoffset: 100 }}
          animate={isInViewOnce ? { strokeDashoffset: 0 } : {}}
          transition={{ duration: 0.65, ease: "easeOut" }}
        />

        <motion.circle
          cx="50%" cy="50%" r="45%"
          className="stroke-white fill-none"
          strokeWidth="3"
          strokeDasharray="1 99"
          initial={{ strokeDashoffset: 100 }}
          animate={!reduceMotion && isInViewOnce ? { strokeDashoffset: 0 } : {}}
          transition={{ duration: 0.75, ease: "easeOut", delay: 0.15 }}
        />
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <motion.div 
          initial={reduceMotion ? false : { opacity: 0, scale: 0.92 }}
          animate={isInViewOnce ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.42, ease: "easeOut" }}
          className="relative"
        >

          <span
            dir="ltr"
            style={{ unicodeBidi: "plaintext" }}
            className="text-4xl md:text-5xl font-black text-white tracking-tight"
          >
            {prefix && <span className="text-[#0087cb]">{prefix}</span>}
            {displayValue}
            <span className="text-base md:text-xl font-bold text-[#0087cb]">{suffix}</span>
          </span>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInViewOnce ? { opacity: 1 } : {}}
          className="mt-4 px-4 py-1 bg-white/5 backdrop-blur-md rounded-full border border-white/10"
        >

          <p className="text-[10px] font-black text-[#006db1] uppercase tracking-[0.18em]">
            {label}
          </p>
        </motion.div>
      </div>

    </motion.div>
  );
}

export function StatsSection({
  title,
  kicker,
  stats,
  isAr = false,
  animateOnScroll = true,
}: {
  title: string;
  kicker: string;
  stats: StatItem[];
  isAr?: boolean;
  animateOnScroll?: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const shouldAnimateSection = animateOnScroll && !reduceMotion;

  return (
    <motion.section
      initial={shouldAnimateSection ? { opacity: 0, y: 80 } : false}
      whileInView={shouldAnimateSection ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true, amount: 0.18 }}
      transition={shouldAnimateSection ? { duration: 0.85, ease: "easeOut" } : undefined}
      className="flex min-h-screen items-center bg-[#121b43] py-20 md:py-24 relative overflow-hidden font-['Montserrat',sans-serif]"
      dir={isAr ? "rtl" : "ltr"}
    >
      
      <div className="absolute inset-0 opacity-10" 
           style={{ backgroundImage: 'radial-gradient(circle, #0087cb 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 md:mb-28">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-white text-4xl md:text-5xl lg:text-6xl font-black tracking-tight"
          >
            {title}
          </motion.h2>
          <p className="text-[#0087cb] mt-4 font-bold tracking-[0.3em] uppercase text-xs">
            {kicker}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-14">
          {stats.map((s) => (
            <NexusCircle key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
