import AutoHubPage, {
  type AutoHubContent,
} from "@/components/auto-hub/AutoHubPage";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

type AutoHubDictionary = {
  projects: AutoHubContent;
};

export default async function Page({
  params,
}: {
  params: { locale: Locale } | Promise<{ locale: Locale }>;
}) {
  const { locale } = await Promise.resolve(params);
  const dict = (await getDictionary(locale)) as AutoHubDictionary;

  return <AutoHubPage content={dict.projects} locale={locale} />;
}
