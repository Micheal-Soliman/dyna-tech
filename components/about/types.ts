// TYPES - DYNATECH INSTITUTIONAL
// ============================================

export type StatItem = {
  label: string;
  value: string;
  color: string;
};

export type ExperienceItem = {
  period: string;
  company: string;
  achievement: string;
};

export type LocationItem = {
  name: string;
  detail: string;
  status?: string;
};

export type PlatformItem = {
  title: string;
  description: string;
};

export type TimelineItem = {
  year: string;
  desc: string;
};

export type TimelineSectionCopy = {
  kicker: string;
  titleLine1: string;
  titleHighlight: string;
};

export type LocationsSectionCopy = {
  kicker: string;
  titleLine1: string;
  titleHighlight: string;
};

export type DynatechContent = {
  hero: {
    titleLeft: string;
    titleRight: string;
    tagline: string;
  };
  missionVision: {
    kicker: string;
    title: string;
    subtitle: string;
    intro: string;
    overviewParagraphs?: string[];
    platformsTitle: string;
    platformsIntro: string;
    platforms: PlatformItem[];
    storyTitle: string;
    storySubtitle: string;
    storyParagraphs: string[];
    visionTitle: string;
    visionText: string;
    missionTitle: string;
    missionText: string;
  };
  founder: {
    name: string;
    title: string;
    intro: string;
    careerTimelineTitle: string;
    highlightsTitle: string;
    highlights: string[];
    experience: ExperienceItem[];
    imageSrc: string;
    imageAlt: string;
    linkedinUrl?: string;
    linkedinLabel?: string;
  };
  timelineSection: TimelineSectionCopy;
  timeline: TimelineItem[];
  locationsSection: LocationsSectionCopy;
  locations: LocationItem[];
  closing: {
    title: string;
    text: string;
  };
};
