import { notFound } from "next/navigation";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { getDictionary } from "@/i18n/get-dictionary";
import { locales, type Locale } from "@/i18n/config";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string } | Promise<{ locale: string }>;
}>) {
  const resolvedParams = await Promise.resolve(params);
  const rawLocale = resolvedParams?.locale;
  if (!rawLocale) {
    notFound();
  }

  const normalizedLocale = String(rawLocale).toLowerCase();

  if (!locales.includes(normalizedLocale as Locale)) {
    notFound();
  }

  const locale = normalizedLocale as Locale;

  const dict = (await getDictionary(locale)) as {
    common: {
      footer: {
        description: string;
        navExpertise: string;
        navVisuals: string;
        navStats: string;
        navAnnouncements: string;
      };
    };
  };

  return (
    <SmoothScroll>
      <Header />
      {children}
      <Footer
        description={dict.common.footer.description}
        navExpertise={dict.common.footer.navExpertise}
        navVisuals={dict.common.footer.navVisuals}
        navStats={dict.common.footer.navStats}
        navAnnouncements={dict.common.footer.navAnnouncements}
      />
    </SmoothScroll>
  );
}
