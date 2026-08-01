import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { notFound } from "next/navigation";

import "../globals.css";

import { AmbientMotion } from "@/components/AmbientMotion";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { locales, type Locale } from "@/i18n/config";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = resolvedParams.locale as Locale;
  
  return {
    title: {
      default: "DYNATECH | " + (locale === "ar" ? "رائدة الصناعة التكنولوجية" : "Leading Technology Industry"),
      template: "%s | DYNATECH",
    },
    description: locale === "ar" 
      ? "دايناتك - شريكك الاستراتيجي في توطين التكنولوجيا والصناعات المتقدمة في مصر والشرق الأوسط."
      : "DYNATECH - Your strategic partner in technology localization and advanced industries in Egypt and the Middle East.",
    icons: {
      icon: "/favicon.ico",
    },
  };
}

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
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir} className="dark bg-[#0a0f29]">
      <body className={`${montserrat.variable} bg-[#0a0f29] text-white antialiased`}>
        <AmbientMotion />
        <div className="site-shell">
          <Header locale={locale} />
          {children}
          <Footer locale={locale} />
        </div>
      </body>
    </html>
  );
}
