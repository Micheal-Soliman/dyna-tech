import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";

import type { Locale } from "@/i18n/config";
import { localizedPath, primaryNavigation, siteRoutes } from "@/lib/routes";
import { siteContact } from "@/lib/site-config";

type FooterProps = {
  locale: Locale;
};

export function Footer({ locale }: FooterProps) {
  const isAr = locale === "ar";
  const currentYear = new Date().getFullYear();
  const footerSlogan =
    locale === "ar"
      ? "قوة دفع جديدة في صناعة السيارات في مصر"
      : "A New Driving Force In Egypt's Automotive Industry";

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#0a0f29] py-10 text-white md:py-12">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#43becc]/55 to-transparent" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.045] [background-image:linear-gradient(#43becc_1px,transparent_1px),linear-gradient(90deg,#43becc_1px,transparent_1px)] [background-size:88px_88px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-9 lg:grid-cols-[0.95fr_1fr_1.1fr_0.82fr] lg:items-start">
          <div>
            <Link href={localizedPath(locale, siteRoutes.home)} className="inline-flex">
              <Image
                src="/logo-cropped.png"
                alt="DYNATECH"
                width={300}
                height={76}
                className="h-auto w-[230px] object-contain"
              />
            </Link>
            <div className="mt-7 max-w-[280px] border-t border-white/10 pt-5 text-zinc-500">
              <span className="block text-[10px] font-black uppercase leading-loose tracking-[0.22em]">
                {footerSlogan}
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.36em] text-[#0087cb]">
              {isAr ? "تواجدنا" : "Presence"}
            </h4>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <div className="space-y-3">
                <span className="block min-h-8 text-[10px] font-black uppercase leading-relaxed tracking-[0.18em] text-white">
                  {isAr ? "المقر الرئيسي في CFC" : "CFC Main Office"}
                </span>
                <p className="max-w-xs text-xs leading-relaxed text-zinc-400">
                  {isAr ? siteContact.locations.cfcOfficeAr : siteContact.locations.cfcOffice}
                </p>
              </div>

              <div className="space-y-3">
                <span className="block min-h-8 text-[10px] font-black uppercase leading-relaxed tracking-[0.18em] text-white">
                  {isAr ? "مشروع مركز السيارات" : "Auto Hub Project"}
                </span>
                <p className="max-w-xs text-xs leading-relaxed text-zinc-400">
                  {isAr ? siteContact.locations.autoHubAr : siteContact.locations.autoHub}
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-[10px] font-black uppercase tracking-[0.36em] text-[#0087cb]">
              {isAr ? "روابط سريعة" : "Quick Links"}
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {primaryNavigation.map((item) => (
                <Link
                  key={item.path}
                  href={localizedPath(locale, item.path)}
                  className="text-xs font-black uppercase tracking-[0.12em] text-zinc-400 transition hover:text-white"
                >
                  {isAr ? item.labelAr : item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-[10px] font-black uppercase tracking-[0.36em] text-[#0087cb]">
              {isAr ? "تواصل" : "Connect"}
            </h4>
            <div className="space-y-3 border-t border-white/10 pt-5 lg:border-t-0 lg:pt-0">
              <a
                href={siteContact.phone.href}
                className="flex items-center gap-3 text-sm font-black tracking-tight text-white transition hover:text-[#43becc]"
              >
                <Phone size={16} className="text-[#43becc]" />
                {siteContact.phone.display}
              </a>
              <a
                href={`mailto:${siteContact.email}`}
                className="flex items-center gap-3 text-xs font-semibold text-zinc-400 transition hover:text-white"
              >
                <Mail size={16} className="text-[#43becc]" />
                {siteContact.email}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-9 border-t border-white/10 pt-5 text-[9px] font-bold uppercase tracking-[0.34em] text-zinc-600">
          &copy; {currentYear} DYNATECH CORP - {isAr ? "جميع الحقوق محفوظة" : "ALL RIGHTS RESERVED"}
        </div>
      </div>
    </footer>
  );
}
