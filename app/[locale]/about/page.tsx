import AboutStickyStory, {
  type DynatechContent,
} from "@/components/about/AboutStickyStoryInstitutional";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

type AboutDictionary = {
  about: {
    institutional: DynatechContent;
  };
};

export default async function Page({
  params,
}: {
  params: { locale: Locale } | Promise<{ locale: Locale }>;
}) {
  const { locale } = await Promise.resolve(params);
  const dict = (await getDictionary(locale)) as AboutDictionary;

  return <AboutStickyStory content={dict.about.institutional} locale={locale} />;
}