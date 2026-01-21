"use client";

import { useRef } from "react";
import { useScroll, useSpring, useTransform } from "framer-motion";

import AboutBackgroundDecoration from "@/components/about/AboutBackgroundDecoration";
import AboutFounderLayer from "@/components/about/AboutFounderLayer";
import AboutHeroLayer from "@/components/about/AboutHeroLayer";
import AboutMissionLayer from "@/components/about/AboutMissionLayer";
import AboutStatsLayer, {
  type AboutStickyStatItem,
} from "@/components/about/AboutStatsLayer";
import AboutVisionLayer from "@/components/about/AboutVisionLayer";

export type AboutStickyStoryContent = {
  hero: {
    titleLeft: string;
    titleRight: string;
    tagline: string;
  };
  mission: {
    kicker: string;
    textPrefix: string;
    highlight: string;
    textMiddle: string;
    italic: string;
  };
  vision: {
    kicker: string;
    textPrefix: string;
    highlight: string;
    textSuffix: string;
  };
  stats: {
    items: AboutStickyStatItem[];
  };
  founder: {
    badge: string;
    nameLine1: string;
    nameHighlight: string;
    quote: string;
    buttonLabel: string;
    imageSrc: string;
    imageAlt: string;
  };
};

export default function AboutStickyStory({
  content,
}: {
  content: AboutStickyStoryContent;
}) {
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

  const heroScale = useTransform(smoothProgress, [0, 0.2], [1, 2]);
  const heroOpacity = useTransform(smoothProgress, [0, 0.15], [1, 0]);

  const missionX = useTransform(smoothProgress, [0.2, 0.3, 0.4], [1000, 0, -1000]);
  const missionRotate = useTransform(smoothProgress, [0.2, 0.3, 0.4], [45, 0, -45]);

  const visionRotateX = useTransform(smoothProgress, [0.4, 0.5, 0.6], [90, 0, -90]);
  const visionOpacity = useTransform(smoothProgress, [0.4, 0.45, 0.55, 0.6], [0, 1, 1, 0]);

  const statsZ = useTransform(smoothProgress, [0.6, 0.7, 0.8], [-500, 0, 500]);
  const statsOpacity = useTransform(smoothProgress, [0.6, 0.65, 0.75, 0.8], [0, 1, 1, 0]);

  const founderScale = useTransform(smoothProgress, [0.85, 1], [0.8, 1]);
  const founderOpacity = useTransform(smoothProgress, [0.8, 0.9], [0, 1]);

  const missionOpacity = useTransform(smoothProgress, [0.2, 0.25, 0.35, 0.4], [0, 1, 1, 0]);

  return (
    <section
      ref={containerRef}
      className="bg-[#050505] relative w-full"
      style={{ height: "600vh" }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center perspective-[1200px]">
        <AboutHeroLayer
          scale={heroScale}
          opacity={heroOpacity}
          titleLeft={content.hero.titleLeft}
          titleRight={content.hero.titleRight}
          tagline={content.hero.tagline}
        />
        <AboutMissionLayer
          x={missionX}
          rotateY={missionRotate}
          opacity={missionOpacity}
          kicker={content.mission.kicker}
          textPrefix={content.mission.textPrefix}
          highlight={content.mission.highlight}
          textMiddle={content.mission.textMiddle}
          italic={content.mission.italic}
        />
        <AboutVisionLayer
          rotateX={visionRotateX}
          opacity={visionOpacity}
          kicker={content.vision.kicker}
          textPrefix={content.vision.textPrefix}
          highlight={content.vision.highlight}
          textSuffix={content.vision.textSuffix}
        />
        <AboutStatsLayer z={statsZ} opacity={statsOpacity} items={content.stats.items} />
        <AboutFounderLayer
          scale={founderScale}
          opacity={founderOpacity}
          badge={content.founder.badge}
          nameLine1={content.founder.nameLine1}
          nameHighlight={content.founder.nameHighlight}
          quote={content.founder.quote}
          buttonLabel={content.founder.buttonLabel}
          imageSrc={content.founder.imageSrc}
          imageAlt={content.founder.imageAlt}
        />
      </div>

      <AboutBackgroundDecoration />
    </section>
  );
}
