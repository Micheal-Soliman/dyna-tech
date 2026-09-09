import CareersPage from "@/components/careers/CareersPage";
import type { CareersPageContent } from "@/content/schema/site";
import type { Locale } from "@/i18n/config";
import { getPageDocument } from "@/lib/cms/page-document";

export default async function Page({
  params,
}: {
  params: { locale: Locale } | Promise<{ locale: Locale }>;
}) {
  const { locale } = await Promise.resolve(params);
  const document = await getPageDocument<CareersPageContent>("careers", locale);
  return <CareersPage content={document.content} media={document.media} locale={locale} />;
}
