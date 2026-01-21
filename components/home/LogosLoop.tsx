"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { CSSProperties } from "react";

type LogosLoopProps = {
  title: string;
  logos: string[];
};

export function LogosLoop({ title, logos }: LogosLoopProps) {
  const reduceMotion = useReducedMotion();
  const items = Array.isArray(logos) ? logos.filter(Boolean) : [];
  const minItems = 40;
  const base: string[] = [];
  if (items.length > 0) {
    while (base.length < minItems) base.push(...items);
  }
  const duplicated = [...base, ...base];
  const durationSeconds = Math.max(22, Math.min(70, base.length * 1.35));

  return (
    <section className="bg-[#121b43] py-20 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 mb-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[#43becc] font-bold tracking-[0.3em] text-5xl uppercase"
        >
          {title}
        </motion.p>
      </div>

      <div className="relative flex overflow-hidden group">
        <div className="absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-[#121b43] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-[#121b43] to-transparent z-10 pointer-events-none" />

        <div
          className={`logos-marquee flex whitespace-nowrap${reduceMotion ? " paused" : ""}`}
          style={{ ["--marquee-duration" as never]: `${durationSeconds}s` } as CSSProperties}
        >
          {duplicated.map((name, index) => (
            <div key={`${name}-${index}`} className="flex items-center justify-center px-10 md:px-16 shrink-0">
              <span className="select-none text-white/40 font-semibold tracking-wide uppercase transition-all duration-300 grayscale hover:grayscale-0 hover:text-[#43becc] hover:scale-110 cursor-pointer">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes logos-marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .logos-marquee {
          animation: logos-marquee var(--marquee-duration, 25s) linear infinite;
          width: max-content;
          will-change: transform;
        }

        .logos-marquee.paused {
          animation-play-state: paused;
        }

        .group:hover .logos-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
