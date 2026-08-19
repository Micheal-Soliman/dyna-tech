import { notFound } from "next/navigation";

import type { Locale } from "@/i18n/config";

export const techInfoArticleSlugs: string[] = [];

type TechInfoArticlePageProps = {
  locale: Locale;
  slug: string;
};

export default function TechInfoArticlePage(props: TechInfoArticlePageProps) {
  void props;
  return notFound();
}
