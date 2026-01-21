"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

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

export function AboutSection({ copy }: { copy: AboutSectionCopy }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // أنيميشن تمدد الصورة المركزية وتغير الألوان
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const textY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);

  return (
    <section ref={containerRef} className="relative h-[220vh] md:h-[250vh] bg-[#121b43] font-['Montserrat',sans-serif]">

      {/* 1. الـ Sticky Container - الجزء اللي بيفضل ثابت قدام العين */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">

        {/* خلفية نصية ضخمة جداً (Outline Text) */}
        <motion.div
          style={{ y: textY }}
          className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none opacity-20"
        >
          <h2
            dir="auto"
            style={{ unicodeBidi: "plaintext", WebkitTextStroke: "2px rgba(67, 190, 204, 0.3)" }}
            className="text-[10vw] md:text-[19vw] font-black text-transparent stroke-white stroke-2"
          >
            {copy.backdropText}
          </h2>
        </motion.div>

        {/* 2. الصورة المركزية المتمددة (The Hero Visual) */}
        <motion.div
          style={{ scale, rotate }}
          className="relative w-[90vw] sm:w-[80vw] md:w-[50vw] h-[50vh] sm:h-[60vh] rounded-[32px] md:rounded-[40px] overflow-hidden z-20 shadow-[0_0_100px_rgba(0,0,0,0.5)]"
        >
          <img
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80"
            className="w-full h-full object-cover"
            alt={copy.imageAlt}
          />
          {/* Overlay بألوان البراند */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#121b43] via-transparent to-transparent opacity-80" />
        </motion.div>

        {/* 3. العناصر الطائرة (Floating Accents) - تظهر مع السكرول */}
        <motion.div
          style={{ opacity }}
          className="absolute inset-0 z-30 pointer-events-none"
        >
          {/* كارت Plum (يمين فوق) */}
          <motion.div
            initial={{ x: 100 }}
            whileInView={{ x: 0 }}
            className="hidden md:block absolute top-[15%] right-[10%] bg-[#8e257a] p-8 rounded-3xl shadow-2xl max-w-[250px] pointer-events-auto"
          >
            <h4 dir="auto" style={{ unicodeBidi: "plaintext" }} className="text-[#bcd647] font-bold text-xl mb-2">
              {copy.cardPlumTitle}
            </h4>
            <p dir="auto" style={{ unicodeBidi: "plaintext" }} className="text-white text-xs leading-relaxed opacity-80">
              {copy.cardPlumText}
            </p>
          </motion.div>

          {/* كارت Cyan (شمال تحت) */}
          <motion.div
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            className="hidden md:block absolute bottom-[15%] left-[10%] bg-[#43becc] p-8 rounded-3xl shadow-2xl max-w-[250px] pointer-events-auto"
          >
            <h4 dir="ltr" className="text-[#121b43] font-black text-2xl mb-2">
              {copy.cardCyanTitle}
            </h4>
            <p dir="auto" style={{ unicodeBidi: "plaintext" }} className="text-[#121b43] text-xs font-medium uppercase tracking-widest">
              {copy.cardCyanText}
            </p>
          </motion.div>

          {/* العنوان الرئيسي المتداخل */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full">
            <h3
              dir="auto"
              style={{ unicodeBidi: "plaintext" }}
              className="text-white text-4xl sm:text-6xl md:text-[10rem] font-black tracking-tighter leading-none mix-blend-difference"
            >
              {copy.centerHeadingLine1}
              <br />
              <span className="text-[#43becc]">{copy.centerHeadingLine2}</span>
            </h3>
          </div>
        </motion.div>

        {/* 4. تفاصيل جانبية (Data points) */}
        <div className="absolute left-4 bottom-4 sm:left-10 sm:bottom-10 space-y-2 z-40">
          <div className="flex items-center gap-4 group cursor-pointer">
            <span dir="auto" style={{ unicodeBidi: "plaintext" }} className="text-white text-xs font-bold tracking-[0.3em] uppercase">
              {copy.edgeVision}
              <div className="w-12 h-1 bg-[#e21f4a] group-hover:w-20 transition-all duration-500" />
            </span>
          </div>

          <div className="flex items-center gap-4 group cursor-pointer">
            <span dir="auto" style={{ unicodeBidi: "plaintext" }} className="text-white text-xs font-bold tracking-[0.3em] uppercase">
              {copy.edgeStrategy}
              <div className="w-12 h-1 bg-[#bcd647] group-hover:w-20 transition-all duration-500" />
            </span>
          </div>
        </div>
      </div>

      {/* 5. Content Reveal - السكرول بيكمل هنا */}
      <div className="h-screen bg-[#121b43] flex items-center justify-center relative z-50 shadow-[0_-50px_100px_rgba(0,0,0,0.5)]">
        <div className="max-w-4xl text-center px-6">
          <p
            dir="auto"
            style={{ unicodeBidi: "plaintext" }}
            className="text-[#43becc] text-lg sm:text-2xl md:text-4xl font-light leading-relaxed"
          >
            {copy.revealPrefix}{" "}
            <span className="font-bold text-white">{copy.brandName}</span>
            {" "}
            {copy.revealMiddle}{" "}
            <span className="text-[#bcd647]">{copy.revealHighlight}</span>
            {" "}
            {copy.revealSuffix}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-10 sm:mt-12 px-8 sm:px-12 py-3 sm:py-4 rounded-full border-2 border-[#43becc] text-[#43becc] font-bold text-base sm:text-lg hover:bg-[#43becc] hover:text-white transition-all"
          >
            {copy.cta}
          </motion.button>
        </div>
      </div>

    </section>
  );
}