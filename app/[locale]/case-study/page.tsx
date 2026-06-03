import ProjectsInvestmentPage, {
  type ProjectsInvestmentContent,
} from "@/components/projects/ProjectsInvestmentPage";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

type ProjectsDictionary = {
  projects: ProjectsInvestmentContent;
};

export default async function Page({
  params,
}: {
  params: { locale: Locale } | Promise<{ locale: Locale }>;
}) {
  const { locale } = await Promise.resolve(params);
  const dict = (await getDictionary(locale)) as ProjectsDictionary;

  return <ProjectsInvestmentPage content={dict.projects} locale={locale} />;
}
