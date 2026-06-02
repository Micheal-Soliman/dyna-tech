import BusinessScopePage, {
  type BusinessScopeContent,
} from "@/components/services/BusinessScopePage";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

type ServicesDictionary = {
  services: BusinessScopeContent;
};

export default async function Page({
  params,
}: {
  params: { locale: Locale } | Promise<{ locale: Locale }>;
}) {
  const { locale } = await Promise.resolve(params);
  const dict = (await getDictionary(locale)) as ServicesDictionary;

  return <BusinessScopePage content={dict.services} locale={locale} />;
}
