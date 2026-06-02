"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Award, CheckCircle2, MapPin } from "lucide-react";

export type OurPartnersContent = {
  hero: {
    kicker: string;
    title: string;
    paragraphs: string[];
  };
  partners: {
    id: string;
    name: string;
    location?: string;
    title: string;
    paragraphs: string[];
    roleTitle: string;
    roleText: string;
    scopeTitle: string;
    scope: string[];
    milestoneTitle: string;
    milestoneText: string;
    ctaLabel: string;
    ctaHref: string;
  }[];
  ecosystem: {
    title: string;
    paragraphs: string[];
    columns: {
      label: string;
      title: string;
      items: string[];
    }[];
  };
};

type Props = {
  content: OurPartnersContent;
  locale: string;
};

function partnerAccent(id: string) {
  return id === "fft" ? "#0087cb" : "#006db1";
}

function PartnerMark({
  label,
  accent,
}: {
  label: string;
  accent: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.015 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative aspect-square overflow-hidden border-2 border-white/10 bg-zinc-950 shadow-[0_0_50px_rgba(0,0,0,1)]"
    >
      <div className="absolute left-0 top-0 h-8 w-8 border-l-2 border-t-2 border-white/20" />
      <div className="absolute bottom-0 right-0 h-8 w-8 border-b-2 border-r-2 border-white/20" />
      <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:42px_42px]" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center transition-transform duration-700 hover:scale-110">
          <span className="text-5xl font-[1000] uppercase italic tracking-tighter text-white">
            {label}
          </span>
          <div
            className="mt-2 h-px w-full shadow-[0_0_10px_currentColor]"
            style={{ backgroundColor: accent, color: accent }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function OurPartnersPage({ content, locale }: Props) {
  const isAr = locale === "ar";

  return (
    <main
      dir={isAr ? "rtl" : "ltr"}
      lang={locale}
      className={`min-h-screen bg-black pt-24 font-mono text-white selection:bg-[#0087cb] selection:text-black ${isAr ? "font-cairo" : ""}`}
    >
      <header className="relative flex min-h-[calc(100vh-6rem)] flex-col justify-center overflow-hidden border-b-2 border-white/5 px-6 py-16 md:px-16 lg:px-32">
        <div className="absolute inset-0 opacity-[0.02] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:50px_50px]" />
        <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(ellipse_at_top,rgba(0,135,203,0.16),transparent_65%)]" />
        <div className="absolute inset-x-0 bottom-0 h-72 bg-[radial-gradient(ellipse_at_bottom,rgba(0,109,177,0.12),transparent_70%)]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <div className="flex flex-col items-start justify-between gap-16 lg:flex-row lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="max-w-3xl space-y-8"
            >
              <div className="flex items-center gap-3">
                <div className="h-[2px] w-8 bg-[#0087cb]" />
                <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#0087cb]">
                  {content.hero.kicker}
                </span>
              </div>

              <h1 className="text-4xl font-[1000] uppercase italic leading-[0.9] tracking-tighter md:text-6xl lg:text-[5rem] xl:text-[6rem]">
                {content.hero.title}
              </h1>

              <div className="max-w-xl space-y-4 text-[11px] font-bold uppercase leading-loose tracking-[0.15em] text-zinc-400">
                {content.hero.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: isAr ? -28 : 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
              className="w-full max-w-md space-y-6"
            >
              {content.ecosystem.columns.map((column, index) => {
                const accent = index === 0 ? "#006db1" : "#0087cb";
                return (
                  <div
                    key={column.label}
                    className="flex items-center gap-4 border p-6"
                    style={{
                      borderColor: `${accent}4d`,
                      backgroundColor: `${accent}1a`,
                    }}
                  >
                    <div
                      className="flex h-14 w-14 items-center justify-center"
                      style={{ backgroundColor: `${accent}1f` }}
                    >
                      <span
                        className="text-2xl font-[1000] uppercase italic tracking-tighter"
                        style={{ color: accent }}
                      >
                        {column.label}
                      </span>
                    </div>
                    <div>
                      <div className="text-[12px] font-[1000] uppercase tracking-widest text-white">
                        {column.title}
                      </div>
                      <div className="text-[9px] font-black uppercase tracking-widest text-zinc-600">
                        {column.items[0]}
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl space-y-48 px-6 py-32 md:px-16 lg:px-32">
        {content.partners.map((partner) => {
          const accent = partnerAccent(partner.id);
          const shortLabel = partner.id === "fft" ? "FFT" : "CU";

          return (
            <motion.article
              key={partner.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              className="grid items-start gap-16 lg:grid-cols-12"
            >
              <div className="space-y-12 lg:sticky lg:top-32 lg:col-span-5">
                <PartnerMark label={shortLabel} accent={accent} />

                <div className="space-y-8">
                  <div className="space-y-4">
                    {partner.location && (
                      <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest" style={{ color: accent }}>
                        <MapPin size={14} />
                        {partner.location}
                      </div>
                    )}
                    <h2 className="text-5xl font-[1000] uppercase italic leading-none tracking-tighter">
                      {partner.name}
                    </h2>
                  </div>
                  <div className={`space-y-4 text-sm font-medium italic leading-relaxed text-zinc-500 ${isAr ? "border-r border-white/10 pr-6 text-right" : "border-l border-white/10 pl-6"}`}>
                    {partner.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative space-y-12 border-2 border-white/10 bg-zinc-950/50 p-10 md:p-20 lg:col-span-7">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-black uppercase italic tracking-[0.5em]" style={{ color: accent }}>
                      {partner.roleTitle}
                    </span>
                    <div className="h-px flex-grow bg-white/5" />
                  </div>
                  <p className={`text-lg italic leading-relaxed text-zinc-400 ${isAr ? "border-r-2 border-white/10 pr-8 text-right" : "border-l-2 border-white/10 pl-8"}`}>
                    {partner.roleText}
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-3xl font-[1000] uppercase italic tracking-tight">
                    {partner.scopeTitle}
                  </h3>
                  {partner.scope.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: isAr ? 24 : -24 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.45, delay: index * 0.05 }}
                      className="group flex items-center gap-6 border border-white/5 bg-black p-6 transition-all"
                      style={{ borderColor: "rgba(255,255,255,0.05)" }}
                    >
                      <div className="h-2 w-2" style={{ backgroundColor: accent }} />
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-300">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <div className="space-y-6 pt-10">
                  <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                    <Award size={16} style={{ color: accent }} />
                    <span className="text-[10px] font-black uppercase italic tracking-widest text-zinc-500">
                      {partner.milestoneTitle}
                    </span>
                  </div>
                  <div className="relative overflow-hidden border border-white/5 bg-black p-8">
                    <div className="absolute right-0 top-0 p-4 text-[40px] font-black italic opacity-10" style={{ color: accent }}>
                      {partner.id === "fft" ? "2023" : "2022"}
                    </div>
                    <p className="relative z-10 text-xs font-black uppercase leading-relaxed tracking-widest" style={{ color: accent }}>
                      {partner.milestoneText}
                    </p>
                  </div>
                </div>

                <Link
                  href={`/${locale}/accelerators/${partner.id === "cu" ? "composites-united" : "fft"}`}
                  className="flex w-full items-center justify-center gap-6 py-8 text-[11px] font-[1000] uppercase tracking-[0.5em] transition-all"
                  style={{ backgroundColor: partner.id === "cu" ? "white" : "transparent", color: partner.id === "cu" ? "black" : accent, border: `2px solid ${accent}4d` }}
                >
                  {partner.ctaLabel}
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </motion.article>
          );
        })}

        <section className="border-t-2 border-white/5 pb-20 pt-40">
          <div className="mx-auto max-w-4xl space-y-20">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="space-y-8 text-center"
            >
              <h2 className="text-5xl font-[1000] uppercase italic leading-none tracking-tighter md:text-7xl">
                {content.ecosystem.title}
              </h2>
              <div className="mx-auto max-w-2xl space-y-4 text-[10px] font-black uppercase italic leading-loose tracking-[0.35em] text-zinc-500">
                {content.ecosystem.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </motion.div>

            <div className="grid gap-4 md:grid-cols-2">
              {content.ecosystem.columns.map((column, index) => {
                const accent = index === 0 ? "#006db1" : "#0087cb";
                return (
                  <motion.div
                    key={column.label}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.65, delay: index * 0.12 }}
                    className="relative overflow-hidden border border-white/10 bg-zinc-950 p-12"
                  >
                    <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full blur-3xl transition-all" style={{ backgroundColor: `${accent}14` }} />
                    <h3 className="text-xl font-[1000] uppercase italic tracking-widest" style={{ color: accent }}>
                      {column.label} {column.title}
                    </h3>
                    <ul className="mt-10 space-y-5">
                      {column.items.map((item) => (
                        <li key={item} className="flex items-center justify-between border-b border-white/5 pb-2 text-[10px] font-black uppercase italic tracking-widest text-zinc-400">
                          {item}
                          <CheckCircle2 size={12} style={{ color: accent }} />
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
