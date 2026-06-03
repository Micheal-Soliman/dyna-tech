import BlogHubPage, { type BlogHubContent } from "@/components/blog/BlogHubPage";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

type BlogDictionary = {
  blog: BlogHubContent;
};

export default async function Page({
  params,
}: {
  params: { locale: Locale } | Promise<{ locale: Locale }>;
}) {
  const { locale } = await Promise.resolve(params);
  const dict = (await getDictionary(locale)) as BlogDictionary;

  return <BlogHubPage content={dict.blog} locale={locale} />;
}
