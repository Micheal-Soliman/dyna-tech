"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import type { DynatechContent } from "./types";
export type { DynatechContent } from "./types";

import FounderLayer from "./FounderLayer";
import LocationsLayer from "./LocationsLayer";
import MissionVisionLayer from "./MissionVisionLayer";
import TimelineLayer from "./TimelineLayer";

function BackgroundGrid({ fixed = false }: { fixed?: boolean }) {
  return (
    <div className={`pointer-events-none inset-0 z-[1] overflow-hidden ${fixed ? "fixed" : "absolute"}`}>
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `linear-gradient(#0087cb22 1px, transparent 1px), linear-gradient(90deg, #0087cb22 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}

function VideoBackground({ fixed = false }: { fixed?: boolean }) {
  return (
    <div className={`inset-0 z-0 ${fixed ? "fixed" : "absolute"}`}>
      <video
        className="h-full w-full object-cover object-center"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label="DYNATECH background video"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[#050915]/65" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,15,41,0.92),rgba(10,15,41,0.56)_45%,rgba(10,15,41,0.92)),radial-gradient(circle_at_50%_45%,rgba(0,135,203,0.2),transparent_34%)]" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0a0f29] to-transparent" />
    </div>
  );
}

function CeoMessage({ content, isAr }: { content: DynatechContent["ceoMessage"]; isAr: boolean }) {
  return (
    <section className="relative z-10 overflow-hidden bg-[#0a0f29]/40 px-4 py-28 sm:px-6 md:py-36">
      <div className={`relative z-10 mx-auto w-full max-w-5xl bg-[#111936]/82 p-6 shadow-[0_26px_90px_rgba(0,0,0,0.36)] backdrop-blur-sm md:p-8 lg:p-10 ${isAr ? "border-r-4 border-[#0087cb] text-right" : "border-l-4 border-[#0087cb]"}`}>
        <p className="text-xs font-black uppercase tracking-[0.24em] text-[#43becc]">{content.kicker}</p>
        <h2 className="mt-4 text-4xl font-black uppercase leading-none tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">{content.title}</h2>
        <div className="mt-8 grid gap-x-10 gap-y-5 lg:grid-cols-2">
          {content.paragraphs.map((paragraph, index) => (
            <motion.p
              key={paragraph}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: Math.min(index * 0.04, 0.16) }}
              className="text-sm font-medium leading-relaxed text-zinc-300 md:text-base"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
        <div className="mt-9 border-t border-white/10 pt-6">
          <p className="font-black text-white">{content.signatureName}</p>
          <p className="mt-1 text-xs font-bold uppercase tracking-wider text-[#43becc]">{content.signatureRole}</p>
          <p className="mt-1 text-xs text-zinc-500">{content.signatureCompany}</p>
        </div>
      </div>
    </section>
  );
}

export default function AboutPage({ content, locale }: { content: DynatechContent; locale: string }) {
  const isAr = locale === "ar";
  const introRef = useRef<HTMLElement>(null);
  const historyRef = useRef<HTMLElement>(null);

  const { scrollYProgress: introProgress } = useScroll({ target: introRef, offset: ["start start", "end end"] });
  const companyOpacity = useTransform(introProgress, [0, 0.28, 0.38], [1, 1, 0]);
  const founderScale = useTransform(introProgress, [0.3, 0.42], [0.97, 1]);
  const founderY = useTransform(introProgress, [0.3, 0.96], [34, -30]);
  const founderOpacity = useTransform(introProgress, [0.3, 0.4, 0.9, 0.98], [0, 1, 1, 0]);

  const { scrollYProgress: historyProgress } = useScroll({ target: historyRef, offset: ["start start", "end end"] });
  const timelineX = useTransform(historyProgress, [0, 0.66], [100, -3150]);
  const timelineScale = useTransform(historyProgress, [0, 0.08, 0.6, 0.68], [0.97, 1, 1, 0.96]);
  const timelineOpacity = useTransform(historyProgress, [0, 0.6, 0.68], [1, 1, 0]);
  const locationsOpacity = useTransform(historyProgress, [0.64, 0.73, 0.98, 1], [0, 1, 1, 0]);

  return (
    <main dir={isAr ? "rtl" : "ltr"} lang={locale} className="relative isolate bg-[#0a0f29]">
      <VideoBackground fixed />
      <BackgroundGrid fixed />

      <section ref={introRef} className="relative z-10 w-full" style={{ height: "250vh" }}>
        <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
          <MissionVisionLayer opacity={companyOpacity} data={content.company} isAr={isAr} />
          <FounderLayer opacity={founderOpacity} scale={founderScale} y={founderY} data={content.founder} isAr={isAr} />
        </div>
      </section>

      <CeoMessage content={content.ceoMessage} isAr={isAr} />

      <section ref={historyRef} className="relative z-10 w-full" style={{ height: "470vh" }}>
        <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
          <TimelineLayer
            x={timelineX}
            opacity={timelineOpacity}
            scale={timelineScale}
            copy={{ kicker: content.timeline.kicker, titleLine1: content.timeline.title, titleHighlight: "" }}
            items={content.timeline.items}
            isAr={isAr}
          />
          <LocationsLayer
            opacity={locationsOpacity}
            copy={{ kicker: content.locations.kicker, titleLine1: content.locations.title, titleHighlight: "" }}
            items={content.locations.items}
            isAr={isAr}
          />
        </div>
      </section>
    </main>
  );
}
