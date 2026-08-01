import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import type { Locale } from "@/i18n/config";
import { localizedPath, siteRoutes } from "@/lib/routes";
import { siteContact } from "@/lib/site-config";

type FooterProps = {
  locale: Locale;
};

const footerNavigation = [
  { label: "Home", path: siteRoutes.home },
  { label: "About", path: siteRoutes.about },
  { label: "Partners", path: siteRoutes.partners },
  { label: "Auto Hub", path: siteRoutes.autoHub },
  { label: "Careers", path: siteRoutes.careers },
  { label: "Contact", path: siteRoutes.contact },
] as const;

export function Footer({ locale }: FooterProps) {
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
        <div className="grid gap-9 lg:grid-cols-[1.05fr_1.35fr_0.9fr] lg:items-start">
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
            <div className="mt-7 border-t border-white/10 pt-5 text-zinc-500">
              <span className="text-[10px] font-black uppercase tracking-[0.22em]">
                {footerSlogan}
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.36em] text-[#0087cb]">
              Presence
            </h4>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="border-l border-[#43becc]/45 pl-4">
                <div className="mb-3 flex h-9 w-9 items-center justify-center bg-white/[0.04] text-[#43becc]">
                  <MapPin size={17} />
                </div>
                <span className="block text-[10px] font-black uppercase tracking-[0.18em] text-white">
                  CFC Main Office
                </span>
                <p className="mt-2 max-w-xs text-xs leading-relaxed text-zinc-400">
                  {siteContact.locations.cfcOffice}
                </p>
              </div>

              <div className="border-l border-[#43becc]/45 pl-4">
                <div className="mb-3 flex h-9 w-9 items-center justify-center bg-white/[0.04] text-[#43becc]">
                  <MapPin size={17} />
                </div>
                <span className="block text-[10px] font-black uppercase tracking-[0.18em] text-white">
                  Auto Hub
                </span>
                <p className="mt-2 max-w-xs text-xs leading-relaxed text-zinc-400">
                  {siteContact.locations.autoHub}
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-1">
            <div>
              <h4 className="mb-4 text-[10px] font-black uppercase tracking-[0.36em] text-[#0087cb]">
                Quick Links
              </h4>
              <div className="grid grid-cols-2 gap-x-5 gap-y-2">
                {footerNavigation.map((item) => (
                  <Link
                    key={item.path}
                    href={localizedPath(locale, item.path)}
                    className="text-xs font-black uppercase tracking-[0.12em] text-zinc-400 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="border-t border-white/10 pt-5">
              <h4 className="mb-4 text-[10px] font-black uppercase tracking-[0.36em] text-white/35">
                Connect
              </h4>
              <div className="space-y-3">
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
        </div>

        <div className="mt-9 border-t border-white/10 pt-5 text-[9px] font-bold uppercase tracking-[0.34em] text-zinc-600">
          &copy; {currentYear} DYNATECH CORP - ALL RIGHTS RESERVED
        </div>
      </div>
    </footer>
  );
}
