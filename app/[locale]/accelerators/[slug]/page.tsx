import { notFound } from "next/navigation";

import PartnerDetailPage from "@/components/partners/PartnerDetailPage";
import type { OurPartnersContent } from "@/components/partners/OurPartnersPage";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

const slugToPartnerId: Record<string, string> = {
  "composites-united": "cu",
  fft: "fft",
};

type PartnersDictionary = {
  accelerators: OurPartnersContent;
};

export function generateStaticParams() {
  return Object.keys(slugToPartnerId).map((slug) => ({ slug }));
}

export default async function Page({
  params,
}: {
  params: { locale: Locale; slug: string } | Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await Promise.resolve(params);
  const partnerId = slugToPartnerId[slug];
  if (!partnerId) {
    notFound();
  }

  const dict = (await getDictionary(locale)) as PartnersDictionary;
  const partner = dict.accelerators.partners.find((item) => item.id === partnerId);
  const ecosystemColumn = dict.accelerators.ecosystem.columns.find((item) => item.label.toLowerCase() === partnerId);

  if (!partner || !ecosystemColumn) {
    notFound();
  }

  return <PartnerDetailPage partner={partner} ecosystemColumn={ecosystemColumn} locale={locale} />;
}
