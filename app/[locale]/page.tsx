import { HeroSection } from "@/components/home/HeroSection";
import type { HomeContent } from "@/content/schema/site";
import type { Locale } from "@/i18n/config";
import type { GlobalCmsContent } from "@/content/schema/site";
import { getPageDocument } from "@/lib/cms/page-document";

export default async function Home({
  params,
}: {
  params: { locale: Locale } | Promise<{ locale: Locale }>;
}) {
  const { locale } = await Promise.resolve(params);
  const [document, globalDocument] = await Promise.all([
    getPageDocument<HomeContent>("home", locale),
    getPageDocument<GlobalCmsContent>("global", locale),
  ]);
  return <HeroSection locale={locale} content={document.content.hero} media={document.media} contactEmail={globalDocument.content.contact.email} />;
}
