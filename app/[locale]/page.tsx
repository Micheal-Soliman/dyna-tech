import { HomeSections } from "@/components/home/HomeSections";
import type { HomeContent } from "@/components/home/types";
import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";

type HomeDictionary = {
  home: HomeContent;
};

export default async function Home({
  params,
}: {
  params: { locale: Locale } | Promise<{ locale: Locale }>;
}) {
  const { locale } = await Promise.resolve(params);
  const dict = (await getDictionary(locale)) as HomeDictionary;
  const isAr = locale === "ar";

  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-950 dark:bg-black dark:text-zinc-50" dir={isAr ? "rtl" : "ltr"}>
      <HomeSections
        locale={locale}
        isAr={isAr}
        home={dict.home}
        primaryCtaHref={`/${locale}/about`}
        secondaryCtaHref={`/${locale}/contact`}
      />
    </div>
  );
}
