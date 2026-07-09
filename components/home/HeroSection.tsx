"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type HeroSectionProps = {
  locale: string;
  isAr: boolean;
  slogan: string;
  subheading: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
  heroImageUrl?: string;
  heroImageAlt: string;
  logoAlt: string;
  headlineLine1: string;
  headlineLine2: string;
  strategicPartnersLabel: string;
  knowMoreLabel: string;
  headOfficeTitle: string;
  headOfficeLines: string[];
  autoHubTitle: string;
  autoHubLines: string[];
  contactLabel: string;
  contactEmail: string;
  copyrightText: string;
  privacyPolicyLabel: string;
  scrollLabel: string;
  brandOutroTagline: string;
  ceoQuote?: string;
  ceoName?: string;
  ceoTitle?: string;
  ceoCtaLabel?: string;
  ceoSectionLabel?: string;
  ceoSubtitle?: string;
  ceoImageUrl?: string;
  brandLeft: string;
  brandRight: string;
};

function InfoCard({ title, lines }: { title: string; lines: string[] }) {
  return (
    <div className="min-w-0 rounded-md border border-white/15 bg-[#0a0f29]/35 px-3 py-2 text-left shadow-[0_18px_50px_rgba(0,0,0,0.35)] backdrop-blur-md sm:min-w-[226px] sm:px-4 sm:py-3">
      <p className="mb-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-[#43becc] sm:mb-2 sm:text-[11px]">
        {title}
      </p>
      {lines.map((line) => (
        <p key={line} className="text-[9px] font-semibold leading-relaxed text-white/80 sm:text-[10px]">
          {line}
        </p>
      ))}
    </div>
  );
}

export function HeroSection({
  locale,
  isAr,
  heroImageAlt,
  logoAlt,
  headlineLine1,
  headlineLine2,
  strategicPartnersLabel,
  knowMoreLabel,
  headOfficeTitle,
  headOfficeLines,
  autoHubTitle,
  autoHubLines,
  contactLabel,
  contactEmail,
  copyrightText,
  privacyPolicyLabel,
}: HeroSectionProps) {
  return (
    <section dir={isAr ? "rtl" : "ltr"} className="relative h-screen min-h-[620px] overflow-hidden bg-[#0a0f29] font-['Montserrat',sans-serif] text-white [height:100svh]">
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={heroImageAlt}
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#050915]/45" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_34%_42%,rgba(67,190,204,0.16),transparent_26%),linear-gradient(90deg,rgba(3,7,18,0.62),rgba(3,7,18,0.18)_45%,rgba(3,7,18,0.62))]" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#050915] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-[#43becc]/25" />
      </div>

      <div className="pointer-events-none absolute inset-0 opacity-10 [background-image:linear-gradient(#43becc_1px,transparent_1px),linear-gradient(90deg,#43becc_1px,transparent_1px)] [background-size:96px_96px] [mask-image:linear-gradient(to_top,black,transparent_62%)]" />

      <div className="relative z-10 flex h-full flex-col px-4 pb-4 pt-20 sm:px-6 md:px-9 md:pb-7 md:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto flex flex-1 flex-col items-center justify-center text-center"
        >
          <div className="relative mb-4 h-[70px] w-[270px] max-w-[72vw] sm:mb-5 md:h-[94px] md:w-[360px] xl:h-[106px] xl:w-[410px]">
            <Image
              src="/logo-cropped.png"
              alt={logoAlt}
              fill
              priority
              sizes="420px"
              className="object-contain"
            />
          </div>

          <h1 className="max-w-4xl text-[clamp(1.3rem,3.45vw,3.55rem)] font-[1000] uppercase italic leading-[1.05] tracking-[0.04em] text-white drop-shadow-[0_8px_26px_rgba(0,0,0,0.55)]">
            {headlineLine1}
            <br />
            <span className="text-[#43becc]">{headlineLine2}</span>
          </h1>

          <div className="mt-5 text-[10px] font-black uppercase tracking-[0.38em] text-white/55 md:mt-7 md:text-[11px]">
            {strategicPartnersLabel}
          </div>

          <div className="mt-3 flex items-center justify-center gap-6 md:mt-4 md:gap-10">
            <div className="text-[clamp(2.1rem,4vw,3.8rem)] font-[1000] italic leading-none tracking-[-0.08em] text-[#45f5ca] drop-shadow-[0_0_18px_rgba(69,245,202,0.28)]">
              FFT
            </div>
            <div className="h-12 w-px bg-white/55 md:h-14" />
            <div className="flex flex-col items-center leading-none">
              <div className="text-[clamp(1.9rem,3.3vw,3rem)] font-[1000] tracking-[-0.12em]">
                <span className="text-[#006db1]">C</span>
                <span className="text-[#ef6a25]">U</span>
              </div>
              <span className="mt-1 text-[8px] font-black uppercase tracking-[0.08em] text-[#006db1]">
                Composites
              </span>
              <span className="text-[8px] font-black uppercase tracking-[0.08em] text-[#006db1]">
                United
              </span>
            </div>
          </div>

          <Link
            href={`/${locale}/services`}
            className="pointer-events-auto mt-4 border-b border-[#43becc]/45 pb-1 text-[10px] font-black uppercase tracking-[0.32em] text-[#43becc] transition hover:border-white hover:text-white md:mt-5 md:text-[11px]"
          >
            {knowMoreLabel}
          </Link>
        </motion.div>

        <div className="relative z-20 grid gap-3 md:grid-cols-[auto_1fr_auto] md:items-end md:gap-5">
          <div>
            <div className="grid grid-cols-2 gap-2 sm:flex sm:gap-3">
              <InfoCard
                title={headOfficeTitle}
                lines={headOfficeLines}
              />
              <InfoCard
                title={autoHubTitle}
                lines={autoHubLines}
              />
            </div>
            <p className="mt-2 text-[10px] font-medium text-white/75 sm:mt-4 sm:text-[11px]">
              {contactLabel}{" "}
              <a
                href={`mailto:${contactEmail}`}
                className="pointer-events-auto text-[#43becc] transition hover:text-white"
              >
                {contactEmail}
              </a>
            </p>
          </div>

          <p className="hidden text-center text-[10px] font-bold uppercase tracking-[0.16em] text-white/18 md:block">
            {copyrightText}
          </p>

          <Link
            href={`/${locale}/knowledge`}
            className="pointer-events-auto justify-self-start text-[10px] font-black uppercase tracking-[0.22em] text-white/45 transition hover:text-[#43becc] md:justify-self-end"
          >
            Knowledge
          </Link>
        </div>
      </div>
    </section>
  );
}
