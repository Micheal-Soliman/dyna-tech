"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { HomeContent } from "@/components/home/types";
import { HeroSection } from "@/components/home/HeroSection";
import { StatsSection } from "@/components/home/StatsSection";

type HomeSectionsProps = {
  locale: string;
  isAr: boolean;
  home: HomeContent;
  primaryCtaHref: string;
  secondaryCtaHref: string;
};

export function HomeSections({ locale, isAr, home, primaryCtaHref, secondaryCtaHref }: HomeSectionsProps) {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.24, 0.40], [1, 1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.40], [0, -28]);

  const statsOpacity = useTransform(scrollYProgress, [0.30, 0.44, 1], [0, 1, 1]);
  const statsY = useTransform(scrollYProgress, [0.30, 0.44], [44, 0]);

  return (
    <section ref={containerRef} className="relative h-[150vh] bg-[#0a0f29]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          className="absolute inset-0 will-change-transform"
          style={{ opacity: heroOpacity, y: heroY }}
        >
          <HeroSection
            locale={locale}
            isAr={isAr}
            slogan={home.slogan}
            subheading={home.subheading}
            primaryCtaLabel={home.hero.primaryCtaLabel}
            primaryCtaHref={primaryCtaHref}
            secondaryCtaLabel={home.hero.secondaryCtaLabel}
            secondaryCtaHref={secondaryCtaHref}
            brandLeft={home.hero.brandLeft}
            brandRight={home.hero.brandRight}
            logoAlt={home.hero.logoAlt}
            headlineLine1={home.hero.headlineLine1}
            headlineLine2={home.hero.headlineLine2}
            strategicPartnersLabel={home.hero.strategicPartnersLabel}
            knowMoreLabel={home.hero.knowMoreLabel}
            headOfficeTitle={home.hero.headOfficeTitle}
            headOfficeLines={home.hero.headOfficeLines}
            autoHubTitle={home.hero.autoHubTitle}
            autoHubLines={home.hero.autoHubLines}
            contactLabel={home.hero.contactLabel}
            contactEmail={home.hero.contactEmail}
            copyrightText={home.hero.copyrightText}
            privacyPolicyLabel={home.hero.privacyPolicyLabel}
            heroImageAlt={home.hero.heroImageAlt}
            scrollLabel={home.hero.scrollLabel}
            brandOutroTagline={home.hero.brandOutroTagline}
            ceoQuote={home.hero.ceoQuote}
            ceoName={home.hero.ceoName}
            ceoTitle={home.hero.ceoTitle}
            ceoCtaLabel={home.hero.ceoCtaLabel}
            ceoSectionLabel={home.hero.ceoSectionLabel}
            ceoSubtitle={home.hero.ceoSubtitle}
          />
        </motion.div>

        <motion.div
          className="pointer-events-none absolute inset-0 will-change-transform"
          style={{ opacity: statsOpacity, y: statsY }}
        >
          <StatsSection
            title={home.statsTitle}
            kicker={home.statsKicker}
            stats={home.stats}
            isAr={isAr}
            animateOnScroll={false}
          />
        </motion.div>
      </div>
    </section>
  );
}
