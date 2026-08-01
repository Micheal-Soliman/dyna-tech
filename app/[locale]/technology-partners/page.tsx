import TechnologyPartnersPage, {
  type TechnologyPartnersContent,
} from "@/components/partners/TechnologyPartnersPage";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

type TechnologyPartnersDictionary = {
  services: TechnologyPartnersContent;
};

export default async function Page({
  params,
}: {
  params: { locale: Locale } | Promise<{ locale: Locale }>;
}) {
  const { locale } = await Promise.resolve(params);
  const dict = (await getDictionary(locale)) as TechnologyPartnersDictionary;

  return <TechnologyPartnersPage content={dict.services} locale={locale} />;
}
