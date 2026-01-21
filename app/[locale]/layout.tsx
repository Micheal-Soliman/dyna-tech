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
        navigationTitle: string;
        navExpertise: string;
        navVisuals: string;
        navStats: string;
        navAnnouncements: string;
        newsletterTitle: string;
        newsletterPlaceholder: string;
        newsletterJoin: string;
        newsletterHint: string;
        rights: string;
        privacyPolicy: string;
        termsOfService: string;
        socialTwitter: string;
        socialLinkedIn: string;
        socialInstagram: string;
      };
    };
  };

  return (
    <SmoothScroll>
      <Header />
      {children}
      <Footer
        description={dict.common.footer.description}
        navigationTitle={dict.common.footer.navigationTitle}
        navExpertise={dict.common.footer.navExpertise}
        navVisuals={dict.common.footer.navVisuals}
        navStats={dict.common.footer.navStats}
        navAnnouncements={dict.common.footer.navAnnouncements}
        newsletterTitle={dict.common.footer.newsletterTitle}
        newsletterPlaceholder={dict.common.footer.newsletterPlaceholder}
        newsletterJoin={dict.common.footer.newsletterJoin}
        newsletterHint={dict.common.footer.newsletterHint}
        rights={dict.common.footer.rights}
        privacyPolicy={dict.common.footer.privacyPolicy}
        termsOfService={dict.common.footer.termsOfService}
        socialTwitter={dict.common.footer.socialTwitter}
        socialLinkedIn={dict.common.footer.socialLinkedIn}
        socialInstagram={dict.common.footer.socialInstagram}
      />
    </SmoothScroll>
  );
}
