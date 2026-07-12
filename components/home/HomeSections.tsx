"use client";

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
  return (
    <section className="relative bg-[#0a0f29]">
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

      <StatsSection
        title={home.statsTitle}
        kicker={home.statsKicker}
        stats={home.stats}
        isAr={isAr}
        animateOnScroll={false}
      />
    </section>
  );
}
