export type TimelineItem = {
  year: string;
  desc: string;
};

export type TimelineSectionCopy = {
  kicker: string;
  titleLine1: string;
  titleHighlight: string;
};

export type LocationItem = {
  name: string;
  detail: string;
  status?: string;
  imageSrc?: string;
  imageAlt?: string;
};

export type LocationsSectionCopy = {
  kicker: string;
  titleLine1: string;
  titleHighlight: string;
};

export type LegacyStoryContent = {
  storyTitle: string;
  storySubtitle: string;
  storyParagraphs: string[];
  visionTitle: string;
  visionText: string;
  missionTitle: string;
  missionText: string;
};

export type DynatechContent = {
  company: {
    kicker: string;
    title: string;
    lead: string;
    paragraphs: string[];
  };
  founder: {
    kicker: string;
    name: string;
    role: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    linkedinUrl: string;
    linkedinLabel: string;
  };
  ceoMessage: {
    kicker: string;
    title: string;
    paragraphs: string[];
    signatureName: string;
    signatureRole: string;
    signatureCompany: string;
  };
  timeline: {
    kicker: string;
    title: string;
    items: TimelineItem[];
  };
  locations: {
    kicker: string;
    title: string;
    items: LocationItem[];
  };
};
