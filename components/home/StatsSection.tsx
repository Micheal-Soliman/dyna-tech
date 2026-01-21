"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import type { StatItem } from "@/components/home/types";

function parseStatValue(raw: string) {
  const value = String(raw ?? "").trim();

  if (value.includes("/")) {
    const [left, ...rest] = value.split("/");
    const right = rest.join("/");
    const numeric = Number.parseFloat(left);
    const safeNumeric = Number.isFinite(numeric) ? numeric : 0;
    const precision = (left.split(".")[1] ?? "").length;
    return { numericValue: safeNumeric, suffix: `/${right}`, precision };
  }

  const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/);
  if (!match) {
    return { numericValue: 0, suffix: value, precision: 0 };
  }

  const numericStr = match[1];
  const suffix = match[2] ?? "";
  const numeric = Number.parseFloat(numericStr);
  const safeNumeric = Number.isFinite(numeric) ? numeric : 0;
  const precision = (numericStr.split(".")[1] ?? "").length;
  return { numericValue: safeNumeric, suffix, precision };
}

function NexusCircle({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInViewOnce = useInView(ref, { once: true, margin: "-100px" });
  const isActive = useInView(ref, { once: false, margin: "-100px" });
  const reduceMotion = useReducedMotion();
  const { numericValue, suffix, precision } = parseStatValue(value);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInViewOnce) {
      const duration = 2500;
      const startTime = performance.now();
      let raf = 0;

      const tick = (now: number) => {
        const t = Math.min((now - startTime) / duration, 1);
        const next = numericValue * t;
        const rounded = Number(next.toFixed(precision));
        setCount(rounded);
        if (t < 1) raf = requestAnimationFrame(tick);
      };

      raf = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(raf);
    }
  }, [isInViewOnce, numericValue, precision]);

  const progress = numericValue > 0 ? Math.min(count / numericValue, 1) : 0;

  return (
    <div ref={ref} className="relative flex flex-col items-center justify-center group">
      
      <motion.div 
        animate={!reduceMotion && isActive ? { rotate: 360 } : { rotate: 0 }}
        transition={!reduceMotion && isActive ? { duration: 20, repeat: Infinity, ease: "linear" } : undefined}
        className="absolute w-64 h-64 md:w-72 md:h-72 border border-dashed border-white/5 rounded-full"
      />

      <svg className="w-56 h-56 md:w-64 md:h-64 transform -rotate-90">
        <circle
          cx="50%" cy="50%" r="45%"
          className="stroke-white/5 fill-none"
          strokeWidth="1"
        />
        <motion.circle
          cx="50%" cy="50%" r="45%"
          className="stroke-[#43becc] fill-none"
          strokeWidth="2"
          strokeDasharray="100 100"
          initial={{ strokeDashoffset: 100 }}
          animate={isInViewOnce ? { strokeDashoffset: 100 - progress * 100 } : {}}
          transition={{ duration: 2.5, ease: "circOut" }}
          style={{ filter: "drop-shadow(0 0 10px #43becc)" }}
        />

        <motion.circle
          cx="50%" cy="50%" r="45%"
          className="stroke-white fill-none"
          strokeWidth="3"
          strokeDasharray="1 99"
          initial={{ strokeDashoffset: 100 }}
          animate={!reduceMotion && isActive ? { strokeDashoffset: [100, 0] } : {}}
          transition={!reduceMotion && isActive ? { duration: 2, repeat: Infinity, ease: "linear", delay: 1 } : undefined}
        />
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInViewOnce ? { opacity: 1, scale: 1 } : {}}
          className="relative"
        >

          <span
            dir="ltr"
            style={{ unicodeBidi: "plaintext" }}
            className="text-6xl md:text-7xl font-black text-white tracking-tighter"
          >
            {count.toFixed(precision)}
            <span className="text-2xl font-bold text-[#43becc]">{suffix}</span>
          </span>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInViewOnce ? { opacity: 1 } : {}}
          className="mt-4 px-4 py-1 bg-white/5 backdrop-blur-md rounded-full border border-white/10"
        >

          <p className="text-[10px] font-black text-[#bcd647] uppercase tracking-[0.3em]">
            {label}
          </p>
        </motion.div>
      </div>

      <motion.div 
        animate={!reduceMotion && isActive ? { rotate: -360 } : { rotate: 0 }}
        transition={!reduceMotion && isActive ? { duration: 15, repeat: Infinity, ease: "linear" } : undefined}
        className="absolute w-full h-full pointer-events-none"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#8e257a] rounded-full shadow-[0_0_15px_#8e257a]" />
      </motion.div>

    </div>
  );
}

export function StatsSection({ title, kicker, stats }: { title: string; kicker: string; stats: StatItem[] }) {
  return (
    <section className="py-40 bg-[#121b43] relative overflow-hidden font-['Montserrat',sans-serif]">
      
      <div className="absolute inset-0 opacity-20" 
           style={{ backgroundImage: 'radial-gradient(circle, #43becc 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-white text-5xl md:text-7xl font-black tracking-tighter"
          >
            {title}
          </motion.h2>
          <p className="text-[#43becc] mt-4 font-bold tracking-[0.5em] uppercase text-xs">
            {kicker}
          </p>
        </div>

        <div className="grid gap-20 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <NexusCircle key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
      </div>
    </section>
  );
}