import type { AnnouncementItem, StatItem } from "@/components/home/types";
import { AnnouncementsSection } from "@/components/home/AnnouncementsSection";
import { AboutSection } from "@/components/home/AboutSection";
import { HeroSection } from "@/components/home/HeroSection";
import { LogosLoop } from "@/components/home/LogosLoop";
import { SectorsGrid } from "@/components/home/SectorsGrid";
import { StatsSection } from "@/components/home/StatsSection";
import VisualsSection from "@/components/home/VisualsSection";

type Partner = {
  name: string;
  oneLiner: string;
  logoUrl?: string;
};

type HomeSectionsProps = {
  locale: string;
  isAr: boolean;
  slogan: string;
  subheading: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
  heroBrandLeft: string;
  heroBrandRight: string;
  heroFollowLine1: string;
  heroFollowLine2: string;
  heroPrimaryCtaLabel: string;
  heroSecondaryCtaLabel: string;
  heroCeoQuote: string;
  heroCeoName: string;
  heroCeoTitle: string;
  heroCeoCtaLabel: string;
  heroCeoSectionLabel: string;
  heroCeoSubtitle: string;
  partnersTitle: string;
  partners: Partner[];
  partnersCtaLabel?: string;
  partnersCtaHref?: string;
  about: {
    backdropText: string;
    imageAlt: string;
    cardPlumTitle: string;
    cardPlumText: string;
    cardCyanTitle: string;
    cardCyanText: string;
    centerHeadingLine1: string;
    centerHeadingLine2: string;
    edgeVision: string;
    edgeStrategy: string;
    revealPrefix: string;
    brandName: string;
    revealMiddle: string;
    revealHighlight: string;
    revealSuffix: string;
    cta: string;
  };
  statsTitle: string;
  statsKicker: string;
  stats: StatItem[];
  visualsCarouselBadge: string;
  visualsCarouselTitlePrefix: string;
  visualsCarouselTitleHighlight: string;
  announcementsTitle: string;
  announcementsKicker: string;
  announcementsBlurb: string;
  announcementsReadMoreLabel: string;
  announcementsReadMoreArrow: string;
  announcements: AnnouncementItem[];
};

export function HomeSections(props: HomeSectionsProps) {
  const { locale, isAr } = props;

  return (
    <>
      <HeroSection
        locale={locale}
        isAr={isAr}
        slogan={props.slogan}
        subheading={props.subheading}
        primaryCtaLabel={props.heroPrimaryCtaLabel}
        primaryCtaHref={props.primaryCtaHref}
        secondaryCtaLabel={props.heroSecondaryCtaLabel}
        secondaryCtaHref={props.secondaryCtaHref}
        brandLeft={props.heroBrandLeft}
        brandRight={props.heroBrandRight}
        ceoQuote={props.heroCeoQuote}
        ceoName={props.heroCeoName}
        ceoTitle={props.heroCeoTitle}
        ceoCtaLabel={props.heroCeoCtaLabel}
        ceoSectionLabel={props.heroCeoSectionLabel}
        ceoSubtitle={props.heroCeoSubtitle}
      />

      <LogosLoop
        title={props.partnersTitle}
        partners={props.partners}
        ctaLabel={props.partnersCtaLabel}
        ctaHref={props.partnersCtaHref}
        isAr={isAr}
      />

      <AboutSection copy={props.about} isAr={isAr} locale={locale} />

      <SectorsGrid isAr={isAr} locale={locale} />

      <StatsSection title={props.statsTitle} kicker={props.statsKicker} stats={props.stats} isAr={isAr} />

      <VisualsSection
        badge={props.visualsCarouselBadge}
        titlePrefix={props.visualsCarouselTitlePrefix}
        titleHighlight={props.visualsCarouselTitleHighlight}
        slideTitles={[]}
        isAr={isAr}
      />

      <AnnouncementsSection
        title={props.announcementsTitle}
        kicker={props.announcementsKicker}
        blurb={props.announcementsBlurb}
        readMoreLabel={props.announcementsReadMoreLabel}
        readMoreArrow={props.announcementsReadMoreArrow}
        items={props.announcements}
        isAr={isAr}
      />

    </>
  );
}
