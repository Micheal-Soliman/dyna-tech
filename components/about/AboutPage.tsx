"use client";

import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

// Types (re-exported from ./types.ts)
import type { DynatechContent } from "./types";
export type { DynatechContent, StatItem, TimelineItem, ExperienceItem, LocationItem } from "./types";

// Layer Components
import HeroLayer from "./HeroLayer";
import MissionVisionLayer from "./MissionVisionLayer";
import StoryVisionLayer from "./StoryVisionLayer";
import FounderLayer from "./FounderLayer";
import TimelineLayer from "./TimelineLayer";
import LocationsLayer from "./LocationsLayer";

// ============================================
// BACKGROUND DECORATION
// ============================================

function BackgroundGrid() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
      <div 
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `linear-gradient(#0087cb22 1px, transparent 1px), linear-gradient(90deg, #0087cb22 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
    </div>
  );
}

function VideoBackground() {
  return (
    <div className="absolute inset-0 z-0">
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

// ============================================
// MAIN COMPONENT - DYNATECH INSTITUTIONAL
// ============================================

export default function AboutPage({
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

  // Scroll transforms - balanced timing for separated content layers
  // Hero: 0-15%
  const heroScale = useTransform(scrollYProgress, [0, 0.10], [1, 1.2]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.07, 0.12], [1, 1, 0]);
  
  // About platforms: 12-26%
  const mvOpacity = useTransform(scrollYProgress, [0.12, 0.16, 0.23, 0.26], [0, 1, 1, 0]);

  // Story and mission: 25-40%
  const storyOpacity = useTransform(scrollYProgress, [0.25, 0.29, 0.37, 0.40], [0, 1, 1, 0]);
  
  // Founder profile: 39-55%
  const founderScale = useTransform(scrollYProgress, [0.39, 0.44], [0.96, 1]);
  const founderY = useTransform(scrollYProgress, [0.39, 0.55], [44, -44]);
  const founderOpacity = useTransform(scrollYProgress, [0.39, 0.43, 0.52, 0.55], [0, 1, 1, 0]);

  // Timeline: 54-84%
  const timelineX = useTransform(scrollYProgress, [0.54, 0.84], [420, -3400]);
  const timelineScale = useTransform(scrollYProgress, [0.54, 0.60, 0.79, 0.84], [0.94, 1, 1, 0.94]);
  const timelineOpacity = useTransform(scrollYProgress, [0.54, 0.60, 0.79, 0.84], [0, 1, 1, 0]);
  
  // Locations: 84-100%
  const locationsOpacity = useTransform(scrollYProgress, [0.84, 0.88, 0.99, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={containerRef}
      dir={isAr ? "rtl" : "ltr"}
      lang={locale}
      className="relative w-full bg-[#0a0f29]"
      style={{ height: "850vh" }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        <VideoBackground />
        <BackgroundGrid />

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
          isAr={isAr}
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
    </section>
  );
}


