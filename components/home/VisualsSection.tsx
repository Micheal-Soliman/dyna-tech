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
import { ChevronLeft, ChevronRight } from "lucide-react";

// الداتا الخاصة بالصور - تقدر تغير الروابط دي لصور من مشروعك
const IMAGES = [
  { url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800" },
  { url: "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?w=800" },
  { url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800" },
  { url: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=800" },
  { url: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?w=800" },
];

export default function VisualsSection({
  badge,
  titlePrefix,
  titleHighlight,
  slideTitles,
}: {
  badge: string;
  titlePrefix: string;
  titleHighlight: string;
  slideTitles: string[];
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
    () =>
      IMAGES.map((img, i) => ({
        url: img.url,
        title: slideTitles[i] ?? "",
      })),
    [slideTitles]
  );

  const particles = useMemo(() => {
    let seed = 1337;
    const rand = () => {
      seed = (seed * 1664525 + 1013904223) % 4294967296;
      return seed / 4294967296;
    };

    return Array.from({ length: 20 }, () => ({
      top: `${rand() * 100}%`,
      left: `${rand() * 100}%`,
      duration: rand() * 6 + 4,
      delay: rand() * 5,
    }));
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
          backgroundImage: `linear-gradient(#43becc 1px, transparent 1px), linear-gradient(90deg, #43becc 1px, transparent 1px)`,
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
                className="absolute w-1.5 h-1.5 bg-[#43becc] rounded-full blur-[1px]"
                style={{
                  top: p.top,
                  left: p.left,
                }}
              />
            ))
          : null}
      </div>

      {/* 3. توهجات السديم (Nebula Glows) */}
      <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-[#43becc]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-[600px] h-[600px] bg-[#8e257a]/10 blur-[150px] rounded-full pointer-events-none" />

      {/* --- العنوان الرئيسي --- */}
      <div className="text-center mb-24 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="inline-block px-6 py-1.5 border border-[#43becc]/40 rounded-full mb-6 bg-[#43becc]/5"
        >
          <span className="text-[#43becc] text-[10px] font-black tracking-[0.5em] uppercase">{badge}</span>
        </motion.div>
        <h2 className="text-white text-5xl md:text-8xl font-black tracking-tighter uppercase leading-none">
          {titlePrefix}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#43becc] via-white to-[#bcd647]">{titleHighlight}</span>
        </h2>
      </div>

      {/* --- منطقة الصور الـ 3D --- */}
      <div className="relative w-full max-w-7xl h-[550px] flex items-center justify-center z-10">
        {/* زر السهم لليسار */}
        <motion.button
          whileHover={{ scale: 1.1, x: -5, backgroundColor: "rgba(67, 190, 204, 0.15)" }}
          whileTap={{ scale: 0.9 }}
          onClick={prevStep}
          className="hidden md:flex absolute left-4 md:left-8 z-50 p-5 rounded-full border border-white/10 bg-white/5 backdrop-blur-2xl text-[#43becc] shadow-2xl transition-all"
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
                        e.currentTarget.src = "https://via.placeholder.com/800x600/121b43/43becc?text=Raptors+Creative";
                      }}
                    />
                    <div className="absolute inset-0 rounded-[60px] border border-white/20 pointer-events-none" />
                  </div>

                  {isCenter && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-t from-[#0a0f29] via-transparent p-12 flex flex-col justify-end items-start"
                    >
                      <motion.h4
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-white text-5xl font-black uppercase tracking-tighter leading-none"
                      >
                        {img.title}
                      </motion.h4>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: 64 }}
                        className="h-1.5 bg-[#43becc] mt-6 rounded-full"
                      />
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* زر السهم لليمين */}
        <motion.button
          whileHover={{ scale: 1.1, x: 5, backgroundColor: "rgba(67, 190, 204, 0.15)" }}
          whileTap={{ scale: 0.9 }}
          onClick={nextStep}
          className="hidden md:flex absolute right-4 md:right-8 z-50 p-5 rounded-full border border-white/10 bg-white/5 backdrop-blur-2xl text-[#43becc] shadow-2xl transition-all"
        >
          <ChevronRight size={36} strokeWidth={2.5} />
        </motion.button>
      </div>

      {/* --- النقاط (Pagination Dots) --- */}
      <div className="flex gap-4 mt-24 relative z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all duration-700 ${i === index ? 'w-20 bg-[#43becc]' : 'w-4 bg-white/10 hover:bg-white/30'}`}
          />
        ))}
      </div>
    </section>
  );
}