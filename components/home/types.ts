export type StatItem = { value: string; label: string };

export type AnnouncementItem = {
  title: string;
  date: string;
  description: string;
};

export type Partner = {
  name: string;
  oneLiner: string;
  logoUrl?: string;
};

export type HomeHeroCopy = {
  brandLeft: string;
  brandRight: string;
  heroImageAlt: string;
  scrollLabel: string;
  brandOutroTagline: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
  ceoQuote: string;
  ceoName: string;
  ceoTitle: string;
  ceoCtaLabel: string;
  ceoSectionLabel: string;
  ceoSubtitle: string;
};

export type HomeAboutCopy = {
  sectionKicker: string;
  sectionTitleFirst: string;
  sectionTitleHighlight: string;
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

export type VisualSlideItem = {
  title: string;
  status: string;
  details: string;
  url?: string;
};

export type HomeVisualsCarousel = {
  badge: string;
  titlePrefix: string;
  titleHighlight: string;
  slides: VisualSlideItem[];
  ctaLabel: string;
};

export type HomeSectorsCopy = {
  kicker: string;
  titleLine1: string;
  titleLine2: string;
  highlight: string;
  description: string;
  ctaLabel: string;
  items: {
    title: string;
    description: string;
  }[];
};

export type HomeContent = {
  slogan: string;
  subheading: string;
  hero: HomeHeroCopy;
  partnersTitle: string;
  partnersHeading: string;
  partnersIntro: string;
  partnersCapabilities: string[];
  partners: Partner[];
  partnersCtaLabel: string;
  about: HomeAboutCopy;
  statsTitle: string;
  statsKicker: string;
  stats: StatItem[];
  sectors: HomeSectorsCopy;
  visualsCarousel: HomeVisualsCarousel;
  announcementsTitle: string;
  announcementsKicker: string;
  announcementsBlurb: string;
  announcementsReadMoreLabel: string;
  announcementsReadMoreArrow: string;
  announcementsViewAllLabel: string;
  announcements: AnnouncementItem[];
};
