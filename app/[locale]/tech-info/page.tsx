import TechInfoPage, { type TechInfoContent } from "@/components/tech-info/TechInfoPage";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

type TechInfoDictionary = {
  blog: TechInfoContent;
};

export default async function Page({
  params,
}: {
  params: { locale: Locale } | Promise<{ locale: Locale }>;
}) {
  const { locale } = await Promise.resolve(params);
  const dict = (await getDictionary(locale)) as TechInfoDictionary;

  return <TechInfoPage content={dict.blog} locale={locale} />;
}
