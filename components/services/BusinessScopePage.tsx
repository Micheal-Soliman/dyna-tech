"use client";

import Link from "next/link";
import { ArrowUpRight, Check, Factory, Gauge, Globe2 } from "lucide-react";

export type BusinessScopeContent = {
  hero: {
    kicker: string;
    title: string;
    intro: string;
    supporting: string;
  };
  partnerships: {
    kicker: string;
    title: string;
    paragraphs: string[];
    includesTitle: string;
    includes: string[];
    whyTitle: string;
    whyText: string;
    ctaLabel: string;
  };
  hub: {
    kicker: string;
    title: string;
    paragraphs: string[];
    componentsTitle: string;
    components: string[];
    highlights: string[];
    ctaLabel: string;
  };
  egypt: {
    kicker: string;
    title: string;
    paragraphs: string[];
    statsTitle: string;
    stats: {
      value: string;
      label: string;
    }[];
  };
};

type Props = {
  content: BusinessScopeContent;
  locale: string;
};

function VisualPanel({
  label,
  variant,
}: {
  label: string;
  variant: "network" | "hub" | "egypt";
}) {
  return (
    <div className="relative min-h-[360px] overflow-hidden border border-white/10 bg-[#121b43]">
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(#0087cb33_1px,transparent_1px),linear-gradient(90deg,#0087cb33_1px,transparent_1px)] [background-size:42px_42px]" />
      <div className="absolute inset-x-8 top-1/2 h-px bg-gradient-to-r from-transparent via-[#0087cb] to-transparent" />
      <div className="absolute inset-y-8 left-1/2 w-px bg-gradient-to-b from-transparent via-[#43becc] to-transparent" />

      {variant === "network" && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="grid grid-cols-3 items-center gap-8">
            {["EU", "DYNATECH", "MENA"].map((item, index) => (
              <div key={item} className="relative">
                <div className="flex h-24 w-24 items-center justify-center border border-[#0087cb]/40 bg-[#0a0f29] text-xs font-black uppercase tracking-widest text-white">
                  {item}
                </div>
                {index < 2 && <div className="absolute left-full top-1/2 h-px w-8 bg-[#0087cb]" />}
              </div>
            ))}
          </div>
        </div>
      )}

      {variant === "hub" && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative h-48 w-48 border border-[#0087cb]/40">
            <div className="absolute inset-12 border border-[#43becc]/50 bg-[#0087cb]/10" />
            {["EV", "Service", "Training", "Logistics"].map((item, index) => (
              <div
                key={item}
                className="absolute flex h-14 w-24 items-center justify-center border border-white/10 bg-[#0a0f29] text-[10px] font-bold uppercase tracking-wider text-zinc-300"
                style={{
                  left: index % 2 === 0 ? "-32px" : "auto",
                  right: index % 2 === 1 ? "-32px" : "auto",
                  top: index < 2 ? "-18px" : "auto",
                  bottom: index >= 2 ? "-18px" : "auto",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      )}

      {variant === "egypt" && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex items-center gap-5">
            {[Factory, Gauge, Globe2].map((Icon, index) => (
              <div key={index} className="flex h-24 w-24 items-center justify-center border border-[#0087cb]/35 bg-[#0a0f29] text-[#43becc]">
                <Icon size={34} strokeWidth={1.5} />
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="absolute bottom-6 left-6 right-6 border-t border-white/10 pt-4">
        <p className="text-[10px] font-black uppercase tracking-[0.32em] text-[#0087cb]">
          {label}
        </p>
      </div>
    </div>
  );
}

export default function BusinessScopePage({ content, locale }: Props) {
  const isAr = locale === "ar";

  return (
    <main
      dir={isAr ? "rtl" : "ltr"}
      lang={locale}
      className={`min-h-screen bg-[#0a0f29] pt-32 text-white ${isAr ? "font-cairo" : ""}`}
    >
      <section className="mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <p className="mb-5 text-xs font-black uppercase tracking-[0.35em] text-[#0087cb]">
            {content.hero.kicker}
          </p>
          <h1 className="max-w-4xl text-4xl font-black uppercase leading-[0.95] tracking-tight md:text-6xl lg:text-7xl">
            {content.hero.title}
          </h1>
        </div>
        <div className="border-l-4 border-[#0087cb] bg-white/[0.03] p-6 md:p-8">
          <p className="text-lg font-semibold leading-relaxed text-[#43becc]">
            {content.hero.intro}
          </p>
          <p className="mt-5 text-base leading-relaxed text-zinc-400">
            {content.hero.supporting}
          </p>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#121b43]/65 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.95fr_1.05fr]">
          <VisualPanel label={content.partnerships.kicker} variant="network" />
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.32em] text-[#0087cb]">
              {content.partnerships.kicker}
            </p>
            <h2 className="text-3xl font-black uppercase leading-tight tracking-tight md:text-5xl">
              {content.partnerships.title}
            </h2>
            <div className="mt-7 space-y-4 text-base leading-relaxed text-zinc-400">
              {content.partnerships.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-9 grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-sm font-black uppercase tracking-widest text-white">
                  {content.partnerships.includesTitle}
                </h3>
                <ul className="space-y-3">
                  {content.partnerships.includes.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-zinc-300">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#43becc]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border border-white/10 bg-white/[0.03] p-6">
                <h3 className="mb-4 text-sm font-black uppercase tracking-widest text-white">
                  {content.partnerships.whyTitle}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-400">
                  {content.partnerships.whyText}
                </p>
              </div>
            </div>

            <Link
              href={`/${locale}/accelerators`}
              className="mt-9 inline-flex items-center gap-3 bg-[#0087cb] px-6 py-4 text-xs font-black uppercase tracking-widest text-black transition hover:bg-white"
            >
              {content.partnerships.ctaLabel}
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.32em] text-[#0087cb]">
              {content.hub.kicker}
            </p>
            <h2 className="text-3xl font-black uppercase leading-tight tracking-tight md:text-5xl">
              {content.hub.title}
            </h2>
            <div className="mt-7 space-y-4 text-base leading-relaxed text-zinc-400">
              {content.hub.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-9 grid gap-8 md:grid-cols-[1fr_0.9fr]">
              <div>
                <h3 className="mb-4 text-sm font-black uppercase tracking-widest text-white">
                  {content.hub.componentsTitle}
                </h3>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {content.hub.components.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-zinc-300">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#43becc]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid gap-px border border-white/10 bg-white/10">
                {content.hub.highlights.map((item) => (
                  <div key={item} className="bg-[#121b43] p-5 text-sm font-bold uppercase tracking-wide text-zinc-200">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <Link
              href={`/${locale}/case-study#automotive-hub`}
              className="mt-9 inline-flex items-center gap-3 bg-white px-6 py-4 text-xs font-black uppercase tracking-widest text-black transition hover:bg-[#0087cb]"
            >
              {content.hub.ctaLabel}
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <VisualPanel label={content.hub.kicker} variant="hub" />
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#121b43]/70 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.85fr_1.15fr]">
          <VisualPanel label={content.egypt.kicker} variant="egypt" />
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.32em] text-[#0087cb]">
              {content.egypt.kicker}
            </p>
            <h2 className="text-3xl font-black uppercase leading-tight tracking-tight md:text-5xl">
              {content.egypt.title}
            </h2>
            <div className="mt-7 space-y-4 text-base leading-relaxed text-zinc-400">
              {content.egypt.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <h3 className="mt-10 mb-5 text-sm font-black uppercase tracking-widest text-white">
              {content.egypt.statsTitle}
            </h3>
            <div className="grid gap-px border border-white/10 bg-white/10 md:grid-cols-3">
              {content.egypt.stats.map((stat) => (
                <div key={stat.label} className="bg-[#121b43] p-6">
                  <div className="text-3xl font-black text-[#43becc] md:text-4xl">
                    {stat.value}
                  </div>
                  <p className="mt-3 text-xs font-bold uppercase leading-relaxed tracking-wide text-zinc-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
