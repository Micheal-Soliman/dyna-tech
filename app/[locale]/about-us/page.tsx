import AboutPage from "@/components/about/AboutPage";
import { aboutContent } from "@/components/about/content";
import type { Locale } from "@/i18n/config";

export default async function Page({
  params,
}: {
  params: { locale: Locale } | Promise<{ locale: Locale }>;
}) {
  const { locale } = await Promise.resolve(params);
  return <AboutPage content={aboutContent[locale]} locale={locale} />;
}
