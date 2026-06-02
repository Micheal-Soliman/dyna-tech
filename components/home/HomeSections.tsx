import type { HomeContent } from "@/components/home/types";
import { AnnouncementsSection } from "@/components/home/AnnouncementsSection";
import { AboutSection } from "@/components/home/AboutSection";
import { HeroSection } from "@/components/home/HeroSection";
import { LogosLoop } from "@/components/home/LogosLoop";
import { SectorsGrid } from "@/components/home/SectorsGrid";
import { StatsSection } from "@/components/home/StatsSection";
import VisualsSection from "@/components/home/VisualsSection";

type HomeSectionsProps = {
  locale: string;
  isAr: boolean;
  home: HomeContent;
  primaryCtaHref: string;
  secondaryCtaHref: string;
};

export function HomeSections({ locale, isAr, home, primaryCtaHref, secondaryCtaHref }: HomeSectionsProps) {
  return (
    <>
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

      <LogosLoop
        title={home.partnersTitle}
        heading={home.partnersHeading}
        partners={home.partners}
        ctaLabel={home.partnersCtaLabel}
        ctaHref={secondaryCtaHref}
        isAr={isAr}
      />

      <AboutSection copy={home.about} isAr={isAr} locale={locale} />

      <SectorsGrid
        isAr={isAr}
        locale={locale}
        kicker={home.sectors.kicker}
        titleLine1={home.sectors.titleLine1}
        titleLine2={home.sectors.titleLine2}
        highlight={home.sectors.highlight}
        description={home.sectors.description}
        ctaLabel={home.sectors.ctaLabel}
        sectors={home.sectors.items}
      />

      <StatsSection title={home.statsTitle} kicker={home.statsKicker} stats={home.stats} isAr={isAr} />

      <VisualsSection
        badge={home.visualsCarousel.badge}
        titlePrefix={home.visualsCarousel.titlePrefix}
        titleHighlight={home.visualsCarousel.titleHighlight}
        slides={home.visualsCarousel.slides}
        ctaLabel={home.visualsCarousel.ctaLabel}
        locale={locale}
        isAr={isAr}
      />

      <AnnouncementsSection
        title={home.announcementsTitle}
        kicker={home.announcementsKicker}
        blurb={home.announcementsBlurb}
        readMoreLabel={home.announcementsReadMoreLabel}
        readMoreArrow={home.announcementsReadMoreArrow}
        viewAllLabel={home.announcementsViewAllLabel}
        items={home.announcements}
        locale={locale}
        isAr={isAr}
      />
    </>
  );
}
