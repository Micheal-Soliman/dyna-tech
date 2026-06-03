import SingularityContactClient from "@/components/contact/SingularityContactClient";
import type { ContactPageContent } from "@/components/contact/ContactPage";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

type ContactDictionary = {
  contact: ContactPageContent;
};

export default async function Page({
  params,
}: {
  params: { locale: Locale } | Promise<{ locale: Locale }>;
}) {
  const { locale } = await Promise.resolve(params);
  const dict = (await getDictionary(locale)) as ContactDictionary;

  return <SingularityContactClient content={dict.contact} />;
}
