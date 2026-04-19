"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

type AboutSectionCopy = {
  backdropText: string;
  imageAlt: string;
  cardPlumTitle: string;
  cardPlumText: string;
  cardCyanTitle: string;
  cardCyanText: string;
  centerHeadingLine1: string;
  centerHeadingLine2: string;
  edgeVision: string;
  edgeStrategy: string;
  revealPrefix: string;
  brandName: string;
  revealMiddle: string;
  revealHighlight: string;
  revealSuffix: string;
  cta: string;
};

export function AboutSection({ copy, isAr = false, locale = "en" }: { copy: AboutSectionCopy; isAr?: boolean; locale?: string }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.4], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const textY = useTransform(scrollYProgress, [0, 0.8], [100, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 2]);

  return (
    <section ref={containerRef} className="relative h-[200vh] bg-[#121b43] font-['Montserrat',sans-serif]">
      {/* 0. Section Title Overlay (Filling the gap) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="absolute top-4 left-0 w-full text-center z-50 pointer-events-none"
      >
        <span className="text-[#43becc] font-black tracking-[0.5em] text-[10px] uppercase block mb-2">Discovery</span>
        <h2 className="text-white text-4xl md:text-6xl font-black uppercase tracking-tighter mb-12">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#43becc] to-[#bcd647]">DYNATECH</span>
        </h2>
      </motion.div>

      {/* 1. Sticky Container */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">

        {/* Backdrop Outline Text */}
        <motion.div
          style={{ y: textY }}
          className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none opacity-10"
        >
          <h2
            className="text-[18vw] font-black text-transparent"
            style={{ WebkitTextStroke: "2px rgba(67, 190, 204, 0.5)" }}
          >
            {copy.backdropText}
          </h2>
        </motion.div>

        {/* 2. Hero Visual */}
        <motion.div
          style={{ scale, rotate }}
          className="relative w-[85vw] md:w-[55vw] h-[50vh] md:h-[65vh] rounded-[40px] overflow-hidden z-20 shadow-2xl"
        >
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            alt={copy.imageAlt}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121b43] via-transparent to-transparent opacity-60" />
        </motion.div>

        {/* 3. Floating Accents (Sectors & Foundation) */}
        <motion.div style={{ opacity }} className="absolute inset-0 z-30 pointer-events-none">
          {/* Foundation Card - flip position for RTL */}
          <motion.div
            initial={{ x: isAr ? -50 : 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className={`hidden lg:block absolute top-[20%] ${isAr ? 'left-[12%] border-r-4' : 'right-[12%] border-l-4'} bg-[#8e257a]/90 backdrop-blur-md p-6 rounded-2xl border-[#bcd647] max-w-[280px] pointer-events-auto ${isAr ? 'text-right' : 'text-left'}`}
          >
            <h4 dir="auto" style={{ unicodeBidi: "plaintext" }} className="text-[#bcd647] font-bold text-lg mb-1">{copy.cardPlumTitle}</h4>
            <p dir="auto" style={{ unicodeBidi: "plaintext" }} className="text-white text-sm leading-relaxed">{copy.cardPlumText}</p>
          </motion.div>

          {/* Sectors Card - flip position for RTL */}
          <motion.div
            initial={{ x: isAr ? 50 : -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className={`hidden lg:block absolute bottom-[20%] ${isAr ? 'right-[12%]' : 'left-[12%]'} bg-[#43becc]/90 backdrop-blur-md p-6 rounded-2xl max-w-[280px] pointer-events-auto shadow-xl ${isAr ? 'text-right' : 'text-left'}`}
          >
            <h4 dir="auto" style={{ unicodeBidi: "plaintext" }} className="text-[#121b43] font-black text-xl mb-1">{copy.cardCyanTitle}</h4>
            <p dir="auto" style={{ unicodeBidi: "plaintext" }} className="text-[#121b43] text-xs font-bold uppercase tracking-wider">{copy.cardCyanText}</p>
          </motion.div>

          {/* Main Heading Overlay */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full">
            <h3 className="text-white text-5xl md:text-[8rem] font-black tracking-tighter leading-none mix-blend-difference">
              {copy.centerHeadingLine1}<br />
              <span className="text-[#43becc]">{copy.centerHeadingLine2}</span>
            </h3>
          </div>
        </motion.div>

        {/* 4. تفاصيل جانبية (Data points) - flip position for RTL */}
        <div className={`absolute bottom-4 sm:bottom-10 space-y-2 z-40 ${isAr ? 'right-4 sm:right-10' : 'left-4 sm:left-10'}`}>
          <div className={`flex items-center gap-4 group cursor-pointer ${isAr ? 'flex-row-reverse' : ''}`}>
            <span dir="auto" style={{ unicodeBidi: "plaintext" }} className={`text-white text-xs font-bold tracking-[0.3em] uppercase ${isAr ? 'text-right' : 'text-left'}`}>
              {copy.edgeVision}
              <div className="w-12 h-1 bg-[#e21f4a] group-hover:w-20 transition-all duration-500" />
            </span>
          </div>

          <div className={`flex items-center gap-4 group cursor-pointer ${isAr ? 'flex-row-reverse' : ''}`}>
            <span dir="auto" style={{ unicodeBidi: "plaintext" }} className={`text-white text-xs font-bold tracking-[0.3em] uppercase ${isAr ? 'text-right' : 'text-left'}`}>
              {copy.edgeStrategy}
              <div className="w-12 h-1 bg-[#bcd647] group-hover:w-20 transition-all duration-500" />
            </span>
          </div>
        </div>
      </div>

      {/* 4. The Final Reveal (Partnership Focus) */}
      <div className="h-screen bg-[#121b43] flex items-center justify-center relative z-50">
        <div className="max-w-5xl text-center px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-white/80 text-xl md:text-4xl font-light leading-tight">
              {copy.revealPrefix}{" "}
              <span className="font-extrabold text-white">{copy.brandName}</span>{" "}
              {copy.revealMiddle}{" "}
              <span className="text-[#bcd647] font-semibold underline decoration-[#43becc] underline-offset-8">
                {copy.revealHighlight}
              </span>{" "}
              {copy.revealSuffix}
            </p>

            <Link href={`/${locale}/about`}>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#43becc", color: "#121b43" }}
                className="mt-16 px-10 py-4 rounded-full border-2 border-[#43becc] text-[#43becc] font-bold text-lg transition-all cursor-pointer"
              >
                {copy.cta}
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>

    </section>
  );
}