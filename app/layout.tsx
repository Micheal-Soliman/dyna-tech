import type { Metadata } from "next";
import { cookies, headers } from "next/headers";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";

import { defaultLocale, locales, type Locale } from "@/i18n/config";

function resolveLocale(raw: string | undefined): Locale {
  return locales.includes(raw as Locale) ? (raw as Locale) : defaultLocale;
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DYNATECH | رائدة الصناعة التكنولوجية",
  description:
    "DYNATECH - شريكك الاستراتيجي في توطين التكنولوجيا والصناعات المتقدمة في مصر والشرق الأوسط.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerStore = await headers();
  const cookieStore = await cookies();

  const rawLocale = headerStore.get("x-locale") ?? cookieStore.get("locale")?.value;
  const locale = resolveLocale(rawLocale ?? undefined);

  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir} className="dark bg-[#0a0f29]">
      <body
        className={`${montserrat.variable} ${geistSans.variable} ${geistMono.variable} bg-[#0a0f29] text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
