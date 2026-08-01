import TechInfoArticlePage, {
  techInfoArticleSlugs,
} from "@/components/tech-info/TechInfoArticlePage";
import type { Locale } from "@/i18n/config";

export const dynamicParams = false;

export function generateStaticParams() {
  return techInfoArticleSlugs.map((slug) => ({ slug }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  return <TechInfoArticlePage locale={locale} slug={slug} />;
}
