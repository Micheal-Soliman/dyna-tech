"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { CSSProperties } from "react";
import { useEffect, useState } from "react";

type Partner = {
  name: string;
  oneLiner: string;
  logoUrl?: string;
};

type LogosLoopProps = {
  title: string;
  heading: string;
  partners: Partner[];
  ctaLabel?: string;
  ctaHref?: string;
  isAr?: boolean;
};

export function LogosLoop({ title, heading, partners, ctaLabel, ctaHref, isAr = false }: LogosLoopProps) {
  const reduceMotion = useReducedMotion();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    let raf1 = 0;
    let raf2 = 0;

    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        setIsAnimating(true);
      });
    });

    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
    };
  }, []);

  // Reduced from 20 to 10 for better performance
  const minItems = 10;
  const base: Partner[] = [];
  if (partners.length > 0) {
    while (base.length < minItems) base.push(...partners);
  }

  const duplicated = [...base, ...base];
  const durationSeconds = Math.max(20, Math.min(60, base.length * 3));

  return (
    <section className="bg-[#121b43] pt-24 pb-12 mt-20 md:mt-32 overflow-hidden" style={{ contain: 'layout paint' }}>
      {/* Section Header */}
      <div className="mx-auto max-w-6xl px-6 mb-16 text-center">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-[#0087cb] font-bold tracking-[0.2em] text-sm md:text-base uppercase mb-4"
        >
          {title}
        </motion.p>
        <h2 className="text-white text-3xl md:text-5xl font-bold">
          {heading}
        </h2>
      </div>

      {/* Marquee Container - GPU Optimized */}
      <div className="relative flex overflow-hidden group">
        {/* Gradient Fades - flip for RTL */}
        <div className={`absolute inset-y-0 ${isAr ? 'right-0 bg-gradient-to-l' : 'left-0 bg-gradient-to-r'} w-32 md:w-64 from-[#121b43] via-[#121b43]/80 to-transparent z-10 pointer-events-none`} />
        <div className={`absolute inset-y-0 ${isAr ? 'left-0 bg-gradient-to-r' : 'right-0 bg-gradient-to-l'} w-32 md:w-64 from-[#121b43] via-[#121b43]/80 to-transparent z-10 pointer-events-none`} />

        <div
          className={`logos-marquee pointer-events-none flex whitespace-nowrap ${isAr ? "rtl" : ""} ${reduceMotion ? "paused" : ""} ${isAnimating ? "animating" : ""}`}
          style={{ 
            ["--marquee-duration" as never]: `${durationSeconds}s`,
            willChange: 'transform',
            transform: isAr ? "translate3d(-50%, 0, 0)" : "translate3d(0, 0, 0)",
          } as CSSProperties}
        >
          {duplicated.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className={`flex flex-col justify-center px-8 md:px-12 shrink-0 ${isAr ? 'items-end border-r border-white/10' : 'items-start border-l border-white/10'} group/item`}
            >
              <span className="text-white text-xl md:text-2xl font-bold tracking-tight mb-2 group-hover/item:text-[#0087cb] transition-colors">
                {partner.name}
              </span>
              <p className="text-white/50 text-xs md:text-sm max-w-[200px] whitespace-normal leading-relaxed">
                {partner.oneLiner}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      {ctaLabel && ctaHref && (
        <div className="mt-4 text-center">
          <a
            href={ctaHref}
            className="inline-block px-8 py-3 bg-transparent border border-[#0087cb] text-[#0087cb] font-semibold uppercase tracking-widest hover:bg-[#0087cb] hover:text-[#121b43] transition-all duration-300 rounded-sm"
          >
            {ctaLabel}
          </a>
        </div>
      )}

      <style jsx>{`
        @keyframes logos-marquee {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes logos-marquee-rtl {
          0% { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        .logos-marquee {
          animation: none;
          width: max-content;
          backface-visibility: hidden;
          perspective: 1000px;
        }
        .logos-marquee.animating {
          animation: logos-marquee var(--marquee-duration, 40s) linear infinite;
        }
        .logos-marquee.rtl {
          animation-name: logos-marquee-rtl;
        }
        @media (prefers-reduced-motion: reduce) {
          .logos-marquee {
            animation: none;
          }
        }
        /* Pause animation when not in viewport */
        @media (hover: none) {
          .logos-marquee {
            animation-play-state: running;
          }
        }
      `}</style>
    </section>
  );
}
