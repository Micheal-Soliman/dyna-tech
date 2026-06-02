"use client";

import { motion, useMotionTemplate, useMotionValue, useReducedMotion } from "framer-motion";
import type { AnnouncementItem } from "@/components/home/types";
import { PointerEvent, useRef } from "react";
import Link from "next/link";

// مكون فرعي للكارت عشان نتحكم في حركة الماوس المنفصلة
function AnnouncementCard({
  a,
  index,
  readMoreLabel,
  readMoreArrow,
  href,
}: {
  a: AnnouncementItem;
  index: number;
  readMoreLabel: string;
  readMoreArrow: string;
  href: string;
}) {
  const reduceMotion = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const cardRef = useRef<HTMLDivElement | null>(null);
  const rectRef = useRef<DOMRect | null>(null);
  const rafRef = useRef<number | null>(null);
  const pendingRef = useRef<{ x: number; y: number } | null>(null);

  function flushPending() {
    const pending = pendingRef.current;
    if (!pending) return;
    mouseX.set(pending.x);
    mouseY.set(pending.y);
    pendingRef.current = null;
  }

  function handlePointerEnter(e: PointerEvent<HTMLDivElement>) {
    if (reduceMotion) return;
    if (e.pointerType && e.pointerType !== "mouse") return;
    const el = cardRef.current;
    if (!el) return;
    rectRef.current = el.getBoundingClientRect();
  }

  function handlePointerMove(e: PointerEvent<HTMLDivElement>) {
    if (reduceMotion) return;
    if (e.pointerType && e.pointerType !== "mouse") return;

    const rect = rectRef.current;
    if (!rect) return;

    pendingRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      flushPending();
    });
  }

  function handlePointerLeave() {
    rectRef.current = null;
    pendingRef.current = null;
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      viewport={{ once: true }}
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="group relative rounded-[40px] border border-white/10 bg-white/[0.02] p-10 overflow-hidden transition-all duration-500 hover:border-[#0087cb]/50"
    >
      {/* تأثير الـ Spotlight (الإضاءة اللي بتلحق الماوس) */}
      {!reduceMotion ? (
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-[40px] opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                650px circle at ${mouseX}px ${mouseY}px,
                rgba(0, 135, 203, 0.15),
                transparent 80%
              )
            `,
          }}
        />
      ) : null}

      <div className="relative z-10 flex flex-col h-full justify-between">
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-8 bg-[#006db1]" />
            <span
              dir="auto"
              style={{ unicodeBidi: "plaintext" }}
              className="text-[11px] font-black text-[#006db1] tracking-[0.3em] uppercase"
            >
              {a.date}
            </span>
          </div>

          <h3
            dir="auto"
            style={{ unicodeBidi: "plaintext" }}
            className="text-2xl font-bold text-white mb-5 leading-tight group-hover:text-[#0087cb] transition-colors duration-300"
          >
            {a.title}
          </h3>

          <p
            dir="auto"
            style={{ unicodeBidi: "plaintext" }}
            className="text-zinc-400 text-sm leading-relaxed line-clamp-4 font-medium"
          >
            {a.description}
          </p>
        </div>

        <div className="mt-12 flex items-center justify-between">
          <motion.div
            whileHover={{ gap: "15px" }}
            className="inline-flex"
          >
            <Link
              href={href}
              className="inline-flex items-center gap-2 text-white text-[10px] font-black uppercase tracking-[0.2em] transition-all cursor-pointer"
            >
              {readMoreLabel}
              <span
                dir="ltr"
                style={{ unicodeBidi: "plaintext" }}
                className="text-2xl leading-none text-[#0087cb] translate-y-[-2px]"
              >
                {readMoreArrow}
              </span>
            </Link>
          </motion.div>

          {/* أيقونة ديكورية صغيرة تتفاعل مع الهوفر */}
          <div className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center group-hover:border-[#0087cb]/30 group-hover:bg-[#0087cb]/5 transition-all duration-500">
            <div className="w-1.5 h-1.5 rounded-full bg-[#0087cb] animate-pulse" />
          </div>
        </div>
      </div>

      {/* لمسة نهائية: خط نيون خفي في الأسفل */}
      <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-[#0087cb] to-transparent w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center" />
    </motion.div>
  );
}

export function AnnouncementsSection({
  title,
  kicker,
  blurb,
  readMoreLabel,
  readMoreArrow,
  viewAllLabel,
  items,
  locale = "en",
  isAr = false,
}: {
  title: string;
  kicker: string;
  blurb: string;
  readMoreLabel: string;
  readMoreArrow: string;
  viewAllLabel: string;
  items: AnnouncementItem[];
  locale?: string;
  isAr?: boolean;
}) {
  const knowledgeHref = `/${locale}/knowledge`;

  return (
    <section className="py-32 bg-[#121b43] font-['Montserrat',sans-serif] relative overflow-hidden">

      {/* دوائر خلفية ضوئية لزيادة الفخامة */}
      <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-[#0087cb]/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-[-10%] w-[500px] h-[500px] bg-[#8e257a]/5 blur-[120px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Header بتصميم Minimalist فخم */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8 ${isAr ? "md:flex-row-reverse" : ""}`}>
          <motion.div
            initial={{ opacity: 0, x: isAr ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={isAr ? "text-right" : "text-left"}
          >
            <div className={`flex items-center gap-3 mb-4 ${isAr ? "flex-row-reverse" : ""}`}>
              <div className="w-12 h-[2px] bg-[#0087cb]" />
              <span className="text-[#0087cb] font-black tracking-[0.4em] text-[10px] uppercase">{kicker}</span>
            </div>

            <h2 className="text-white text-5xl md:text-7xl font-black tracking-tighter leading-none">
              <span dir="auto" style={{ unicodeBidi: "plaintext" }}>
                {title.split(' ')[0]}{" "}
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">
                <span dir="auto" style={{ unicodeBidi: "plaintext" }}>
                  {title.split(' ').slice(1).join(' ')}
                </span>
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            dir="auto"
            style={{
              unicodeBidi: "plaintext",
              borderInlineStart: "1px solid rgba(255,255,255,0.1)",
              paddingInlineStart: "1.5rem",
            }}
            className={`text-zinc-500 text-sm max-w-xs font-medium ${isAr ? "text-right" : "text-left"}`}
          >
            {blurb}
          </motion.p>
        </div>

        {/* Grid الكروت المطور */}
        <div className="grid gap-8 lg:grid-cols-3">
          {items.slice(0, 3).map((a, index) => (
            <AnnouncementCard
              key={`${a.title}-${index}`}
              a={a}
              index={index}
              readMoreLabel={readMoreLabel}
              readMoreArrow={readMoreArrow}
              href={knowledgeHref}
            />
          ))}
        </div>

        {/* Global CTA: View All News */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-20 flex justify-center"
        >
          <Link href={knowledgeHref} className="group relative inline-block px-8 py-4 bg-transparent overflow-hidden cursor-pointer">
            <span className="relative z-10 text-white font-black uppercase tracking-[0.3em] text-[11px] group-hover:text-[#121b43] transition-colors duration-300">
              {viewAllLabel}
            </span>
            <div className="absolute inset-0 border border-white/20 group-hover:bg-[#0087cb] group-hover:border-[#0087cb] transition-all duration-300" />
            <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#006db1]" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
