import {
  ProjectsInvestmentDetailPage,
  type ProjectsInvestmentContent,
} from "@/components/projects/ProjectsInvestmentPage";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { notFound } from "next/navigation";

type ProjectsDictionary = {
  projects: ProjectsInvestmentContent;
};

export default async function Page({
  params,
}: {
  params:
    | { locale: Locale; slug: string }
    | Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await Promise.resolve(params);

  if (slug !== "automotive-hub") {
    notFound();
  }

  const dict = (await getDictionary(locale)) as ProjectsDictionary;

  return (
    <ProjectsInvestmentDetailPage content={dict.projects} locale={locale} />
  );
}
