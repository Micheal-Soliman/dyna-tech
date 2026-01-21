import { HomeSections } from "@/components/home/HomeSections";
import type {
  AnnouncementItem,
  StatItem,
} from "@/components/home/types";
import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";

type HomeDictionary = {
  common: {
    requestDemo: string;
  };
  home: {
    slogan: string;
    subheading: string;
    hero: {
      brandLeft: string;
      brandRight: string;
      followLine1: string;
      followLine2: string;
    };
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
    visualsCarousel: {
      badge: string;
      titlePrefix: string;
      titleHighlight: string;
      slideTitles: string[];
    };
    announcementsTitle: string;
    announcementsKicker: string;
    announcementsBlurb: string;
    announcementsReadMoreLabel: string;
    announcementsReadMoreArrow: string;
    announcements: AnnouncementItem[];
  };
};

export default async function Home({
  params,
}: {
  params: { locale: Locale } | Promise<{ locale: Locale }>;
}) {
  const { locale } = await Promise.resolve(params);
  const dict = (await getDictionary(locale)) as HomeDictionary;
  const requestDemoHref = `/${locale}/request-demo`;
  
  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-950 dark:bg-black dark:text-zinc-50">
      <HomeSections
        slogan={dict.home.slogan}
        subheading={dict.home.subheading}
        requestDemoLabel={dict.common.requestDemo}
        requestDemoHref={requestDemoHref}
        heroBrandLeft={dict.home.hero.brandLeft}
        heroBrandRight={dict.home.hero.brandRight}
        heroFollowLine1={dict.home.hero.followLine1}
        heroFollowLine2={dict.home.hero.followLine2}
        logosTitle={dict.home.logosTitle}
        logos={dict.home.logos}
        about={dict.home.about}
        statsTitle={dict.home.statsTitle}
        statsKicker={dict.home.statsKicker}
        stats={dict.home.stats}
        visualsTitle={dict.home.visualsTitle}
        visualsSubtitle={dict.home.visualsSubtitle}
        visualsCard1Title={dict.home.visualsCard1Title}
        visualsCard1Text={dict.home.visualsCard1Text}
        visualsCard2Title={dict.home.visualsCard2Title}
        visualsCard2Text={dict.home.visualsCard2Text}
        visualsVideoTitle={dict.home.visualsVideoTitle}
        visualsCarouselBadge={dict.home.visualsCarousel.badge}
        visualsCarouselTitlePrefix={dict.home.visualsCarousel.titlePrefix}
        visualsCarouselTitleHighlight={dict.home.visualsCarousel.titleHighlight}
        visualsCarouselSlides={dict.home.visualsCarousel.slideTitles}
        announcementsTitle={dict.home.announcementsTitle}
        announcementsKicker={dict.home.announcementsKicker}
        announcementsBlurb={dict.home.announcementsBlurb}
        announcementsReadMoreLabel={dict.home.announcementsReadMoreLabel}
        announcementsReadMoreArrow={dict.home.announcementsReadMoreArrow}
        announcements={dict.home.announcements}
      />
    </div>
  );
 }
