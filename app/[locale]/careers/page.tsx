import CareersPage, { type CareersPageContent } from "@/components/careers/CareersPage";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

type CareersDictionary = {
  careers: CareersPageContent;
};

export default async function Page({
  params,
}: {
  params: { locale: Locale } | Promise<{ locale: Locale }>;
}) {
  const { locale } = await Promise.resolve(params);
  const dict = (await getDictionary(locale)) as CareersDictionary;

  return <CareersPage content={dict.careers} locale={locale} />;
}
