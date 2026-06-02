"use client";

import { useRef } from "react";
import { useScroll, useSpring, useTransform } from "framer-motion";

// Types (re-exported from ./types.ts)
import type { DynatechContent } from "./types";
export type { DynatechContent, StatItem, TimelineItem, ExperienceItem, LocationItem } from "./types";

// Layer Components
import HeroLayer from "./HeroLayer";
import MissionVisionLayer from "./MissionVisionLayer";
import StoryVisionLayer from "./StoryVisionLayer";
import FounderLayer from "./FounderLayer";
import FounderCareerLayer from "./FounderCareerLayer";
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

  // Scroll transforms - 1400vh total - balanced timing for separated content layers
  // Hero: 0-15%
  const heroScale = useTransform(smoothProgress, [0, 0.10], [1, 1.3]);
  const heroOpacity = useTransform(smoothProgress, [0, 0.08, 0.12], [1, 1, 0]);
  
  // About platforms: 12-26%
  const mvOpacity = useTransform(smoothProgress, [0.12, 0.16, 0.23, 0.26], [0, 1, 1, 0]);

  // Story and mission: 25-40%
  const storyOpacity = useTransform(smoothProgress, [0.25, 0.29, 0.37, 0.40], [0, 1, 1, 0]);
  
  // Founder profile: 39-53%
  const founderScale = useTransform(smoothProgress, [0.39, 0.44], [0.95, 1]);
  const founderY = useTransform(smoothProgress, [0.39, 0.53], [60, -60]);
  const founderOpacity = useTransform(smoothProgress, [0.39, 0.43, 0.50, 0.53], [0, 1, 1, 0]);

  // Founder career: 52-66%
  const founderCareerOpacity = useTransform(smoothProgress, [0.52, 0.56, 0.63, 0.66], [0, 1, 1, 0]);
  
  // Timeline: 64-92%
  const timelineX = useTransform(smoothProgress, [0.64, 0.92], [500, -3700]);
  const timelineScale = useTransform(smoothProgress, [0.64, 0.70, 0.87, 0.92], [0.9, 1, 1, 0.9]);
  const timelineOpacity = useTransform(smoothProgress, [0.64, 0.70, 0.87, 0.92], [0, 1, 1, 0]);
  
  // Locations: 93-100%
  const locationsOpacity = useTransform(smoothProgress, [0.93, 0.95, 0.99, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={containerRef}
      dir={isAr ? "rtl" : "ltr"}
      lang={locale}
      className={`bg-[#050505] relative w-full ${isAr ? 'font-cairo' : ''}`}
      style={{ height: "1400vh" }}
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

        <StoryVisionLayer
          opacity={storyOpacity}
          data={content.missionVision}
          isAr={isAr}
        />

        <FounderLayer
          opacity={founderOpacity}
          scale={founderScale}
          y={founderY}
          data={content.founder}
          isAr={isAr}
        />

        <FounderCareerLayer
          opacity={founderCareerOpacity}
          data={content.founder}
          isAr={isAr}
        />
        
        <TimelineLayer
          x={timelineX}
          opacity={timelineOpacity}
          scale={timelineScale}
          copy={content.timelineSection}
          items={content.timeline}
          isAr={isAr}
        />
        
        <LocationsLayer
          opacity={locationsOpacity}
          copy={content.locationsSection}
          items={content.locations}
          closing={content.closing}
          isAr={isAr}
        />
      </div>

      <BackgroundDecoration />
    </section>
  );
}


