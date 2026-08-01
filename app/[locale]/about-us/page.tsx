import AboutPage, {
  type DynatechContent,
} from "@/components/about/AboutPage";
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

  return <AboutPage content={dict.about.institutional} locale={locale} />;
}
