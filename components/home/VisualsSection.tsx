"use client";

import {
  motion,
  AnimatePresence,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import type { MouseEvent } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { VisualSlideItem } from "@/components/home/types";

// بيانات المشاريع والمرافق الخاصة بـ DYNATECH
const PROJECTS = [
  {
    url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    title: "Automotive Hub",
    status: "Operational",
    details: "6,000 sqm • 40+ Work Bays",
  },
  {
    url: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2072&auto=format&fit=crop",
    title: "E-Mobility RFP",
    status: "Open for RFP",
    details: "Electric Bus Assembly Line",
  },
  {
    url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    title: "Lightweight Materials",
    status: "In Development",
    details: "Carbon Fiber Parts Plant",
  },
  {
    url: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?q=80&w=2070&auto=format&fit=crop",
    title: "Energy Storage",
    status: "Strategic RFP",
    details: "Battery Management Systems",
  },
];

export default function VisualsSection({
  badge,
  titlePrefix,
  titleHighlight,
  slides: providedSlides,
  ctaLabel,
  locale = "en",
  isAr = false,
}: {
  badge: string;
  titlePrefix: string;
  titleHighlight: string;
  slides: VisualSlideItem[];
  ctaLabel: string;
  locale?: string;
  isAr?: boolean;
}) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const inView = useInView(sectionRef, { margin: "-20% 0px -20% 0px" });
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");

    const apply = () => setIsMobile(media.matches);
    apply();

    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", apply);
      return () => media.removeEventListener("change", apply);
    }

    media.addListener(apply);
    return () => media.removeListener(apply);
  }, []);

  const slides = useMemo(
    () => {
      const fallbackSlides = PROJECTS.map((project) => ({
        url: project.url,
        title: project.title,
        status: project.status,
        details: project.details,
      }));

      if (!providedSlides.length) return fallbackSlides;

      return providedSlides.map((slide, i) => ({
        ...slide,
        url: slide.url || fallbackSlides[i % fallbackSlides.length].url,
      }));
    },
    [providedSlides]
  );

  const particles = useMemo(() => {
    const rand = (n: number) => {
      const x = Math.sin(n) * 10000;
      return x - Math.floor(x);
    };

    return Array.from({ length: 20 }, (_, i) => {
      const r1 = rand(1337 + i * 4 + 0);
      const r2 = rand(1337 + i * 4 + 1);
      const r3 = rand(1337 + i * 4 + 2);
      const r4 = rand(1337 + i * 4 + 3);

      return {
        top: `${r1 * 100}%`,
        left: `${r2 * 100}%`,
        duration: r3 * 6 + 4,
        delay: r4 * 5,
      };
    });
  }, []);

  // --- منطق تفاعل الخلفية مع الماوس ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const bgMoveX = useTransform(smoothX, [-500, 500], [30, -30]);
  const bgMoveY = useTransform(smoothY, [-500, 500], [30, -30]);

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    if (reduceMotion) return;
    const { clientX, clientY } = e;
    const moveX = clientX - window.innerWidth / 2;
    const moveY = clientY - window.innerHeight / 2;
    mouseX.set(moveX);
    mouseY.set(moveY);
  };

  const nextStep = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevStep = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => Math.abs(offset) * velocity;

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="py-40 bg-[#0a0f29] min-h-screen flex flex-col items-center justify-center relative overflow-hidden font-['Montserrat',sans-serif]"
    >
      {/* 1. طبقة الشبكة الديناميكية (Kinetic Grid) */}
      <motion.div
        style={{
          x: bgMoveX,
          y: bgMoveY,
          backgroundImage: `linear-gradient(#0087cb 1px, transparent 1px), linear-gradient(90deg, #0087cb 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(circle at center, black, transparent 80%)",
        }}
        className="absolute inset-0 opacity-20 pointer-events-none z-0"
      />

      {/* 2. الجزيئات الطائرة (Floating Particles) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {!reduceMotion && inView
          ? particles.map((p, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -120, 0],
                  opacity: [0, 0.6, 0],
                  scale: [0, 1.2, 0],
                }}
                transition={{
                  duration: p.duration,
                  repeat: Infinity,
                  delay: p.delay,
                }}
                className="absolute w-1.5 h-1.5 bg-[#0087cb] rounded-full blur-[1px]"
                style={{
                  top: p.top,
                  left: p.left,
                }}
              />
            ))
          : null}
      </div>

      {/* 3. توهجات السديم (Nebula Glows) */}
      <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-[#0087cb]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-[600px] h-[600px] bg-[#8e257a]/10 blur-[150px] rounded-full pointer-events-none" />

      {/* --- العنوان الرئيسي --- */}
      <div className="text-center mb-24 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="inline-block px-6 py-1.5 border border-[#0087cb]/40 rounded-full mb-6 bg-[#0087cb]/5"
        >
          <span className="text-[#0087cb] text-[10px] font-black tracking-[0.5em] uppercase">{badge}</span>
        </motion.div>
        <h2 className="text-white text-5xl md:text-8xl font-black tracking-tighter uppercase leading-none">
          {titlePrefix}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0087cb] via-white to-[#006db1]">{titleHighlight}</span>
        </h2>
      </div>

      {/* --- منطقة الصور الـ 3D --- */}
      <div className="relative w-full max-w-7xl h-[550px] flex items-center justify-center z-10">
        {/* زر السهم لليسار */}
        <motion.button
          whileHover={{ scale: 1.1, x: -5, backgroundColor: "rgba(0, 135, 203, 0.15)" }}
          whileTap={{ scale: 0.9 }}
          onClick={prevStep}
          className="hidden md:flex absolute left-4 md:left-8 z-50 p-5 rounded-full border border-white/10 bg-white/5 backdrop-blur-2xl text-[#0087cb] shadow-2xl transition-all"
        >
          <ChevronLeft size={36} strokeWidth={2.5} />
        </motion.button>

        <div className="relative w-full h-full flex items-center justify-center" style={{ perspective: "2500px" }}>
          <AnimatePresence mode="popLayout">
            {slides.map((img, i) => {
              const diff = (i - index + slides.length) % slides.length;
              const isCenter = diff === 0;
              const isRight = diff === 1;
              const isLeft = diff === slides.length - 1;

              if (!isCenter && !isRight && !isLeft) return null;

              return (
                <motion.div
                  key={img.url}
                  initial={{ opacity: 0, scale: 0.8, x: isRight ? 900 : -900 }}
                  animate={{
                    opacity: isCenter ? 1 : 0.35,
                    scale: isCenter ? 1 : 0.62,
                    x: isCenter ? 0 : isRight ? 520 : -520,
                    rotateY: isCenter ? 0 : isRight ? -45 : 45,
                    zIndex: isCenter ? 30 : 20,
                  }}
                  exit={{ opacity: 0, scale: 0.4 }}
                  transition={{ type: "spring", stiffness: 140, damping: 18 }}
                  drag={isCenter && isMobile && !reduceMotion ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(_, info) => {
                    if (!isCenter || !isMobile || reduceMotion) return;
                    const swipe = swipePower(info.offset.x, info.velocity.x);
                    if (swipe < -swipeConfidenceThreshold) {
                      nextStep();
                    } else if (swipe > swipeConfidenceThreshold) {
                      prevStep();
                    }
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                    willChange: "transform",
                    pointerEvents: isCenter ? "auto" : "none",
                    touchAction: isCenter && isMobile ? "pan-y" : undefined,
                  }}
                  className="absolute w-[340px] h-[480px] md:w-[650px] md:h-[420px] rounded-[60px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.7)] group"
                >
                  {/* حاوية الصورة مع Error Handling */}
                  <div className="w-full h-full bg-[#121b43] relative">
                    <img
                      src={img.url}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      alt={img.title}
                      onError={(e) => {
                        e.currentTarget.src = "https://via.placeholder.com/800x600/121b43/0087cb?text=Raptors+Creative";
                      }}
                    />
                    <div className="absolute inset-0 rounded-[60px] border border-white/20 pointer-events-none" />
                  </div>

                  {isCenter && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-t from-[#0a0f29] via-[#0a0f29]/20 to-transparent p-12 flex flex-col justify-end items-start"
                    >
                      {/* Status Badge داخل الكارت */}
                      <motion.span
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="bg-[#006db1] text-[#0a0f29] text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-4"
                      >
                        {img.status}
                      </motion.span>

                      <motion.h4
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-white text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-2"
                      >
                        {img.title}
                      </motion.h4>

                      <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-[#0087cb] text-sm md:text-lg font-bold uppercase tracking-widest opacity-80"
                      >
                        {img.details}
                      </motion.p>

                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: 96 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="h-1 w-24 bg-white/20 mt-8 rounded-full overflow-hidden"
                      >
                        <motion.div
                          initial={{ x: "-100%" }}
                          animate={{ x: 0 }}
                          transition={{ delay: 0.5, duration: 0.8 }}
                          className="h-full bg-[#0087cb]"
                        />
                      </motion.div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* زر السهم لليمين */}
        <motion.button
          whileHover={{ scale: 1.1, x: 5, backgroundColor: "rgba(0, 135, 203, 0.15)" }}
          whileTap={{ scale: 0.9 }}
          onClick={nextStep}
          className="hidden md:flex absolute right-4 md:right-8 z-50 p-5 rounded-full border border-white/10 bg-white/5 backdrop-blur-2xl text-[#0087cb] shadow-2xl transition-all"
        >
          <ChevronRight size={36} strokeWidth={2.5} />
        </motion.button>
      </div>

      {/* --- النقاط (Pagination Dots) --- */}
      <div className="flex gap-4 mt-16 relative z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all duration-700 ${i === index ? 'w-20 bg-[#0087cb]' : 'w-4 bg-white/10 hover:bg-white/30'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* --- زر الـ CTA النهائي --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-20 z-10"
      >
        <Link href={`/${locale}/case-study`} className={`group relative inline-block px-10 py-5 bg-transparent overflow-hidden border border-white/10 rounded-xl transition-all cursor-pointer ${isAr ? "text-right" : "text-left"}`}>
          <span className="relative z-10 text-white font-black uppercase tracking-[0.3em] text-[11px] group-hover:text-[#0a0f29] transition-colors duration-500">
            {ctaLabel}
          </span>
          <div className="absolute inset-0 bg-[#0087cb] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          {/* أيقونة السهم */}
          <span className={`absolute top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all ${isAr ? "left-4 group-hover:left-6" : "right-4 group-hover:right-6"}`}>
            <ChevronRight className={`text-[#0a0f29] w-5 h-5 ${isAr ? "rotate-180" : ""}`} />
          </span>
        </Link>
      </motion.div>
    </section>
  );
}
