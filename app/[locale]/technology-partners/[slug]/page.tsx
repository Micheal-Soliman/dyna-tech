import { notFound } from "next/navigation";

import TechnologyPartnerPage from "@/components/partners/TechnologyPartnerPage";
import type { TechnologyPartnerPageContent } from "@/content/schema/site";
import type { Locale } from "@/i18n/config";
import { getPageDocument } from "@/lib/cms/page-document";

const slugToPartnerId: Record<string, string> = {
  "composites-united": "cu",
  fft: "fft",
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

  const pageKey = partnerId === "fft" ? "partner-fft" : "partner-cu";
  const document = await getPageDocument<TechnologyPartnerPageContent>(pageKey, locale);
  return <TechnologyPartnerPage partner={document.content.partner} ecosystemColumn={document.content.ecosystemColumn} copy={document.content.copy} media={document.media} locale={locale} />;
}
