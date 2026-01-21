export type CaseStudy = {
  eyebrow: string;
  title: string;
  description: string;
  metric1Label: string;
  metric1Value: string;
  metric2Label: string;
  metric2Value: string;
};

export type StatItem = { value: string; label: string };

export type AnnouncementItem = {
  title: string;
  date: string;
  description: string;
};

export type AboutCopy = {
  eyebrow: string;
  headingPrefix: string;
  headingAccent: string;
  headingSuffix: string;
  description: string;
  bullets: string[];
  visionKicker: string;
  visionTitle: string;
  statValue: string;
  statLabel: string;
  imageAltMain: string;
  imageAltSmall: string;
};
