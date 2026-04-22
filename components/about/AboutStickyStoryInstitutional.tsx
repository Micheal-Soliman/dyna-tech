"use client";

import { useRef } from "react";
import { useScroll, useSpring, useTransform } from "framer-motion";

// Types (re-exported from ./types.ts)
import type { DynatechContent } from "./types";
export type { DynatechContent, StatItem, TimelineItem, ExperienceItem, LocationItem } from "./types";

// Layer Components
import HeroLayer from "./HeroLayer";
import MissionVisionLayer from "./MissionVisionLayer";
import StatsLayer from "./StatsLayer";
import FounderLayer from "./FounderLayer";
import TimelineLayer from "./TimelineLayer";
import LocationsLayer from "./LocationsLayer";

// ============================================
// BACKGROUND DECORATION
// ============================================

function BackgroundDecoration() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Grid Pattern - absolute within sticky container */}
      <div 
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `linear-gradient(#0087cb22 1px, transparent 1px), linear-gradient(90deg, #0087cb22 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
      
      {/* Gradient Orbs - positioned within viewport */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-[350px] h-[350px] bg-[#0087cb]/25 rounded-full blur-[90px]" />
        <div className="absolute bottom-10 right-10 w-[250px] h-[250px] bg-[#006db1]/20 rounded-full blur-[70px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0087cb]/10 rounded-full blur-[120px]" />
      </div>
    </div>
  );
}

// ============================================
// MAIN COMPONENT - DYNATECH INSTITUTIONAL
// ============================================

export default function AboutStickyStory({
  content,
  locale,
}: {
  content: DynatechContent;
  locale: string;
}) {
  const isAr = locale === "ar";
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Scroll transforms - 1200vh total - BALANCED TIMING
  // Hero: 0-15%
  const heroScale = useTransform(smoothProgress, [0, 0.10], [1, 1.3]);
  const heroOpacity = useTransform(smoothProgress, [0, 0.08, 0.12], [1, 1, 0]);
  
  // Mission/Vision: 12-28% (16% duration)
  const mvOpacity = useTransform(smoothProgress, [0.12, 0.17, 0.23, 0.28], [0, 1, 1, 0]);
  
  // Stats: 26-42% (16% duration)
  const statsOpacity = useTransform(smoothProgress, [0.26, 0.31, 0.37, 0.42], [0, 1, 1, 0]);
  
  // Founder: 40-60% (20% duration - longest for reading)
  const founderScale = useTransform(smoothProgress, [0.40, 0.48], [0.95, 1]);
  const founderY = useTransform(smoothProgress, [0.40, 0.60], [60, -60]);
  const founderOpacity = useTransform(smoothProgress, [0.40, 0.45, 0.55, 0.60], [0, 1, 1, 0]);
  
  // Timeline: 55-95% (40% duration - extended for all items visibility)
  const timelineX = useTransform(smoothProgress, [0.55, 0.95], [400, -2800]);
  const timelineScale = useTransform(smoothProgress, [0.55, 0.62, 0.88, 0.95], [0.9, 1, 1, 0.9]);
  const timelineOpacity = useTransform(smoothProgress, [0.55, 0.62, 0.88, 0.95], [0, 1, 1, 0]);
  
  // Locations: 96-100% (after timeline completely finishes)
  const locationsOpacity = useTransform(smoothProgress, [0.96, 0.97, 0.99, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={containerRef}
      dir={isAr ? "rtl" : "ltr"}
      lang={locale}
      className={`bg-[#050505] relative w-full ${isAr ? 'font-cairo' : ''}`}
      style={{ height: "1200vh" }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        <HeroLayer
          opacity={heroOpacity}
          scale={heroScale}
          titleLeft={content.hero.titleLeft}
          titleRight={content.hero.titleRight}
          tagline={content.hero.tagline}
        />
        
        <MissionVisionLayer
          opacity={mvOpacity}
          data={content.missionVision}
        />
        
        <StatsLayer
          opacity={statsOpacity}
          items={content.stats}
          isAr={isAr}
        />
        
        <FounderLayer
          opacity={founderOpacity}
          scale={founderScale}
          y={founderY}
          data={content.founder}
          isAr={isAr}
        />
        
        <TimelineLayer
          x={timelineX}
          opacity={timelineOpacity}
          scale={timelineScale}
          items={content.timeline}
          isAr={isAr}
        />
        
        <LocationsLayer
          opacity={locationsOpacity}
          items={content.locations}
          isAr={isAr}
        />
      </div>

      <BackgroundDecoration />
    </section>
  );
}


