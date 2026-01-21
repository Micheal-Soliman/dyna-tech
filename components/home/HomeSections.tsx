import type { AnnouncementItem, StatItem } from "@/components/home/types";
import { AnnouncementsSection } from "@/components/home/AnnouncementsSection";
import { AboutSection } from "@/components/home/AboutSection";
import { HeroSection } from "@/components/home/HeroSection";
import { LogosLoop } from "@/components/home/LogosLoop";
import { StatsSection } from "@/components/home/StatsSection";
import VisualsSection from "@/components/home/VisualsSection";

type HomeSectionsProps = {
  slogan: string;
  subheading: string;
  requestDemoLabel: string;
  requestDemoHref: string;
  heroBrandLeft: string;
  heroBrandRight: string;
  heroFollowLine1: string;
  heroFollowLine2: string;
  logosTitle: string;
  logos: string[];
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
  visualsTitle: string;
  visualsSubtitle: string;
  visualsCard1Title: string;
  visualsCard1Text: string;
  visualsCard2Title: string;
  visualsCard2Text: string;
  visualsVideoTitle: string;
  visualsCarouselBadge: string;
  visualsCarouselTitlePrefix: string;
  visualsCarouselTitleHighlight: string;
  visualsCarouselSlides: string[];
  announcementsTitle: string;
  announcementsKicker: string;
  announcementsBlurb: string;
  announcementsReadMoreLabel: string;
  announcementsReadMoreArrow: string;
  announcements: AnnouncementItem[];
};

export function HomeSections(props: HomeSectionsProps) {
  return (
    <>
      <HeroSection
        slogan={props.slogan}
        subheading={props.subheading}
        requestDemoLabel={props.requestDemoLabel}
        requestDemoHref={props.requestDemoHref}
        brandLeft={props.heroBrandLeft}
        brandRight={props.heroBrandRight}
        followLine1={props.heroFollowLine1}
        followLine2={props.heroFollowLine2}
      />

      <LogosLoop title={props.logosTitle} logos={props.logos} />

      <AboutSection copy={props.about} />

      <StatsSection title={props.statsTitle} kicker={props.statsKicker} stats={props.stats} />

      <VisualsSection
        badge={props.visualsCarouselBadge}
        titlePrefix={props.visualsCarouselTitlePrefix}
        titleHighlight={props.visualsCarouselTitleHighlight}
        slideTitles={props.visualsCarouselSlides}
      />

      <AnnouncementsSection
        title={props.announcementsTitle}
        kicker={props.announcementsKicker}
        blurb={props.announcementsBlurb}
        readMoreLabel={props.announcementsReadMoreLabel}
        readMoreArrow={props.announcementsReadMoreArrow}
        items={props.announcements}
      />

    </>
  );
}
