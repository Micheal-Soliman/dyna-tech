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
    <div className="min-h-screen bg-[#0a0f29] font-sans text-white" dir={isAr ? "rtl" : "ltr"}>
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
