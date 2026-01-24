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
import LeadershipLayer from "@/components/about/LeadershipLayer";
import PartnersLayer from "@/components/about/PartnersLayer";
import WhyChooseLayer from "@/components/about/WhyChooseLayer";

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
  whyChoose: {
    kicker: string;
    titlePrefix: string;
    titleHighlight: string;
    titleSuffix: string;
    items: { title: string; description: string }[];
  };
  leadership: {
    kicker: string;
    titlePrefix: string;
    titleHighlight: string;
    titleSuffix: string;
    members: { name: string; title: string; bio: string }[];
  };
  partners: {
    titlePrefix: string;
    titleHighlight: string;
    titleSuffix: string;
    subtitle: string;
    badges: { label: string }[];
    ctaLabel: string;
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

  const heroScale = useTransform(smoothProgress, [0, 0.12], [1, 2]);
  const heroOpacity = useTransform(smoothProgress, [0, 0.1, 0.12], [1, 1, 0]);

  const missionX = useTransform(smoothProgress, [0.12, 0.2, 0.28], [1000, 0, -1000]);
  const missionRotate = useTransform(smoothProgress, [0.12, 0.2, 0.28], [45, 0, -45]);
  const missionOpacity = useTransform(smoothProgress, [0.12, 0.16, 0.24, 0.28], [0, 1, 1, 0]);

  const visionRotateX = useTransform(smoothProgress, [0.28, 0.34, 0.4, 0.42], [90, 0, 0, -90]);
  const visionOpacity = useTransform(smoothProgress, [0.28, 0.31, 0.39, 0.42], [0, 1, 1, 0]);

  const statsZ = useTransform(smoothProgress, [0.42, 0.5, 0.58], [-500, 0, 500]);
  const statsOpacity = useTransform(smoothProgress, [0.42, 0.46, 0.54, 0.58], [0, 1, 1, 0]);

  const founderScale = useTransform(smoothProgress, [0.58, 0.66], [0.8, 1]);
  const founderOpacity = useTransform(smoothProgress, [0.58, 0.6, 0.68, 0.72], [0, 1, 1, 0]);

  const whyX = useTransform(smoothProgress, [0.72, 0.78, 0.84], [600, 0, -600]);
  const whyOpacity = useTransform(smoothProgress, [0.72, 0.75, 0.82, 0.84], [0, 1, 1, 0]);

  const leadershipY = useTransform(smoothProgress, [0.84, 0.89, 0.94], [200, 0, -200]);
  const leadershipOpacity = useTransform(smoothProgress, [0.84, 0.87, 0.92, 0.94], [0, 1, 1, 0]);

  const partnersOpacity = useTransform(smoothProgress, [0.94, 0.97], [0, 1]);

  return (
    <section
      ref={containerRef}
      className="bg-[#050505] relative w-full"
      style={{ height: "900vh" }}
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
        <WhyChooseLayer
          x={whyX}
          opacity={whyOpacity}
          kicker={content.whyChoose.kicker}
          titlePrefix={content.whyChoose.titlePrefix}
          titleHighlight={content.whyChoose.titleHighlight}
          titleSuffix={content.whyChoose.titleSuffix}
          items={content.whyChoose.items}
        />
        <LeadershipLayer
          y={leadershipY}
          opacity={leadershipOpacity}
          kicker={content.leadership.kicker}
          titlePrefix={content.leadership.titlePrefix}
          titleHighlight={content.leadership.titleHighlight}
          titleSuffix={content.leadership.titleSuffix}
          members={content.leadership.members}
        />
        <PartnersLayer
          opacity={partnersOpacity}
          titlePrefix={content.partners.titlePrefix}
          titleHighlight={content.partners.titleHighlight}
          titleSuffix={content.partners.titleSuffix}
          subtitle={content.partners.subtitle}
          badges={content.partners.badges}
          ctaLabel={content.partners.ctaLabel}
        />
      </div>

      <AboutBackgroundDecoration />
    </section>
  );
}
