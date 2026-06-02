import OurPartnersPage, {
  type OurPartnersContent,
} from "@/components/partners/OurPartnersPage";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

type PartnersDictionary = {
  accelerators: OurPartnersContent;
};

export default async function Page({
  params,
}: {
  params: { locale: Locale } | Promise<{ locale: Locale }>;
}) {
  const { locale } = await Promise.resolve(params);
  const dict = (await getDictionary(locale)) as PartnersDictionary;

  return <OurPartnersPage content={dict.accelerators} locale={locale} />;
}
