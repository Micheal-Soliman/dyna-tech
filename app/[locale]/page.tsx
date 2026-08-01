import { HeroSection } from "@/components/home/HeroSection";
import type { HomeContent } from "@/components/home/types";
import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";

type HomeDictionary = {
  home: HomeContent;
};

export default async function Home({
  params,
}: {
  params: { locale: Locale } | Promise<{ locale: Locale }>;
}) {
  const { locale } = await Promise.resolve(params);
  const dict = (await getDictionary(locale)) as HomeDictionary;
  return <HeroSection locale={locale} content={dict.home.hero} />;
}
