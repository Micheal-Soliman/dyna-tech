"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export function HeroSection({
  slogan,
  subheading,
  requestDemoLabel,
  requestDemoHref,
  brandLeft,
  brandRight,
  followLine1,
  followLine2,
}: {
  slogan: string;
  subheading: string;
  requestDemoLabel: string;
  requestDemoHref: string;
  brandLeft: string;
  brandRight: string;
  followLine1: string;
  followLine2: string;
}) {
  const containerRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const inView = useInView(containerRef, { margin: "0px 0px -30% 0px" });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    if (!inView) {
      el.pause();
      return;
    }

    const p = el.play();
    if (p && typeof (p as Promise<void>).catch === "function") {
      (p as Promise<void>).catch(() => { });
    }
  }, [inView]);

  const videoScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.65]);
  const videoRadius = useTransform(scrollYProgress, [0, 0.5], ["0px", "100px"]);
  const videoOpacity = useTransform(scrollYProgress, [0, 0.4], [0.5, 1]);

  const textY = useTransform(scrollYProgress, [0, 0.4], [0, -200]);
  const mainOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const brandY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section
      ref={containerRef}
      className="relative h-[240vh] md:h-[300vh] bg-[#0a0f29] font-['Montserrat',sans-serif]"
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {/* 1. الفيديو المركزي (The Living Core) */}
        <motion.div
          style={{
            scale: videoScale,
            borderRadius: videoRadius,
            opacity: videoOpacity,
            willChange: "transform, border-radius, opacity",
          }}
          className="relative w-full h-full z-10 overflow-hidden shadow-[0_0_120px_rgba(0,0,0,0.8)] border border-[#43becc]/10"
        >
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover scale-110"
          >
            <source src="/MindVideo_20260118110202_843.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f29]/40 via-transparent to-[#0a0f29]/60" />
        </motion.div>

        {/* 2. المحتوى النصي الرئيسي (يختفي تدريجياً مع السكرول) */}
        <motion.div
          style={{ y: textY, opacity: mainOpacity }}
          className="absolute z-20 inset-0 flex flex-col items-center justify-center text-center px-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1
              dir="auto"
              style={{ unicodeBidi: "plaintext" }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[7vw] font-black text-white leading-[0.95] uppercase tracking-tighter italic"
            >
              {slogan.split(" ").map((word, i) => (
                <span
                  key={i}
                  className={
                    i === 1
                      ? "text-[#43becc] drop-shadow-[0_0_30px_rgba(67,190,204,0.4)]"
                      : ""
                  }
                >
                  {word}{" "}
                </span>
              ))}
            </h1>
            <p
              dir="auto"
              style={{ unicodeBidi: "plaintext" }}
              className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto font-medium uppercase tracking-widest opacity-80"
            >
              {subheading}
            </p>

            <motion.a
              href={requestDemoHref}
              whileHover={{ scale: 1.05, boxShadow: "0_0_30px_rgba(67,190,204,0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="mt-10 sm:mt-12 inline-block px-8 sm:px-10 md:px-12 py-4 sm:py-5 bg-white text-[#0a0f29] font-black text-xs sm:text-sm uppercase tracking-[0.2em] rounded-full transition-all"
            >
              {requestDemoLabel}
            </motion.a>
          </motion.div>
        </motion.div>

        {/* 3. عناصر البراند اللي بتظهر "خلف" الفيديو لما يصغر */}
        <motion.div
          style={{ y: brandY }}
          className="absolute inset-0 z-0 grid grid-cols-2 p-6 sm:p-10 md:p-12 opacity-10 pointer-events-none"
        >
          <div className="flex flex-col justify-end">
            <h3 className="text-[#43becc] text-[28vw] sm:hii lg:text-[6vw] font-black uppercase leading-none">
              {brandLeft}
            </h3>
          </div>
          <div className="flex flex-col justify-start items-end">
            <h3 className="text-[#bcd647] text-[28vw] sm:text-[12vw] lg:text-[6vw] font-black uppercase leading-none">
              {brandRight}
            </h3>
          </div>
        </motion.div>

        <div className="absolute bottom-12 w-full flex justify-center z-40">
          <div className="flex flex-col items-center gap-2">
            {/* كلمة Scroll */}
            <span className="text-[10px] text-white/30 uppercase tracking-[0.5em] font-bold mb-1">
              Scroll
            </span>

            {/* حاوية السهم المتحرك */}
            <div className="relative flex flex-col items-center">
              {/* الخط العمودي */}
              <motion.div
                animate={{
                  height: [20, 40, 20],
                  opacity: [0.3, 1, 0.3]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut"
                }}
                className="w-[2px] bg-gradient-to-b from-[#43becc] to-[#bcd647]"
              />

              {/* رأس السهم (الـ Chevron) */}
              <motion.div
                animate={{
                  y: [0, 5, 0],
                  opacity: [0.3, 1, 0.3]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut"
                }}
                className="flex flex-col items-center -mt-1" // تداخل بسيط مع الخط
              >
                {/* رسم السهم باستخدام CSS border */}
                <div className="w-3 h-3 border-b-2 border-r-2 border-[#bcd647] rotate-45 transform" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* سكشن تكميلي يظهر تحت الـ Hero مباشرة */}
      <div className="h-screen bg-[#0a0f29] relative z-20 flex flex-col items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2
            dir="auto"
            style={{ unicodeBidi: "plaintext" }}
            className="text-white text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.95]"
          >
            {followLine1}
            <br />
            <span className="text-[#43becc] italic">{followLine2}</span>
          </h2>
          <div className="mt-10 h-1 w-40 bg-[#bcd647] mx-auto rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}