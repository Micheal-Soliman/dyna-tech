import { HomeSections } from "@/components/home/HomeSections";
import type {
  AnnouncementItem,
  StatItem,
} from "@/components/home/types";
import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";

type Partner = {
  name: string;
  oneLiner: string;
  logoUrl?: string;
};

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
      primaryCtaLabel: string;
      secondaryCtaLabel: string;
      ceoQuote: string;
      ceoName: string;
      ceoTitle: string;
      ceoCtaLabel: string;
      ceoSectionLabel: string;
      ceoSubtitle: string;
    };
    partnersTitle: string;
    partners: Partner[];
    partnersCtaLabel: string;
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
    visualsCarousel: {
      badge: string;
      titlePrefix: string;
      titleHighlight: string;
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
  const isAr = locale === "ar";

  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-950 dark:bg-black dark:text-zinc-50" dir={isAr ? "rtl" : "ltr"}>
      <HomeSections
        locale={locale}
        isAr={isAr}
        slogan={dict.home.slogan}
        subheading={dict.home.subheading}
        primaryCtaLabel={dict.home.hero.primaryCtaLabel}
        primaryCtaHref={`/${locale}/about`}
        secondaryCtaLabel={dict.home.hero.secondaryCtaLabel}
        secondaryCtaHref={`/${locale}/contact`}
        heroBrandLeft={dict.home.hero.brandLeft}
        heroBrandRight={dict.home.hero.brandRight}
        heroFollowLine1={dict.home.hero.followLine1}
        heroFollowLine2={dict.home.hero.followLine2}
        heroPrimaryCtaLabel={dict.home.hero.primaryCtaLabel}
        heroSecondaryCtaLabel={dict.home.hero.secondaryCtaLabel}
        heroCeoQuote={dict.home.hero.ceoQuote}
        heroCeoName={dict.home.hero.ceoName}
        heroCeoTitle={dict.home.hero.ceoTitle}
        heroCeoCtaLabel={dict.home.hero.ceoCtaLabel}
        heroCeoSectionLabel={dict.home.hero.ceoSectionLabel}
        heroCeoSubtitle={dict.home.hero.ceoSubtitle}
        partnersTitle={dict.home.partnersTitle}
        partners={dict.home.partners}
        partnersCtaLabel={dict.home.partnersCtaLabel}
        partnersCtaHref={`/${locale}/about`}
        about={dict.home.about}
        statsTitle={dict.home.statsTitle}
        statsKicker={dict.home.statsKicker}
        stats={dict.home.stats}
        visualsCarouselBadge={dict.home.visualsCarousel.badge}
        visualsCarouselTitlePrefix={dict.home.visualsCarousel.titlePrefix}
        visualsCarouselTitleHighlight={dict.home.visualsCarousel.titleHighlight}
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
