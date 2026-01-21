import AboutStickyStory, {
  type AboutStickyStoryContent,
} from "@/components/about/AboutStickyStory";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

type AboutDictionary = {
  about: {
    stickyStory: AboutStickyStoryContent;
  };
};

export default async function Page({
  params,
}: {
  params: { locale: Locale } | Promise<{ locale: Locale }>;
}) {
  const { locale } = await Promise.resolve(params);
  const dict = (await getDictionary(locale)) as AboutDictionary;

  return <AboutStickyStory content={dict.about.stickyStory} />;
}