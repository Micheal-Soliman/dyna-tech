// TYPES - DYNATECH INSTITUTIONAL
// ============================================

export type StatItem = {
  label: string;
  value: string;
  color: string;
};

export type TimelineItem = {
  year: string;
  desc: string;
};

export type ExperienceItem = {
  period: string;
  company: string;
  achievement: string;
};

export type LocationItem = {
  name: string;
  detail: string;
};

export type DynatechContent = {
  hero: {
    titleLeft: string;
    titleRight: string;
    tagline: string;
  };
  missionVision: {
    kicker: string;
    visionTitle: string;
    visionText: string;
    missionTitle: string;
    missionText: string;
    established: string;
    capital: string;
  };
  stats: StatItem[];
  founder: {
    name: string;
    title: string;
    highlights: string[];
    experience: ExperienceItem[];
    imageSrc: string;
    imageAlt: string;
  };
  timeline: TimelineItem[];
  locations: LocationItem[];
};
