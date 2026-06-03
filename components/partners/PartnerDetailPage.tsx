"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Award, CheckCircle2, MapPin } from "lucide-react";
import type { OurPartnersContent } from "./OurPartnersPage";

type Partner = OurPartnersContent["partners"][number];
type EcosystemColumn = OurPartnersContent["ecosystem"]["columns"][number];

type Props = {
  partner: Partner;
  ecosystemColumn: EcosystemColumn;
  locale: string;
};

function partnerAccent(id: string) {
  return id === "fft" ? "#0087cb" : "#006db1";
}

export default function PartnerDetailPage({ partner, ecosystemColumn, locale }: Props) {
  const isAr = locale === "ar";
  const accent = partnerAccent(partner.id);
  const shortLabel = partner.id === "fft" ? "FFT" : "CU";

  return (
    <main
      dir={isAr ? "rtl" : "ltr"}
      lang={locale}
      className={`min-h-screen bg-[#0a0f29] pt-24 font-mono text-white selection:bg-[#0087cb] selection:text-black ${isAr ? "font-cairo" : ""}`}
      style={{ ["--accent-color" as string]: accent }}
    >
      <section className="relative flex min-h-[calc(100vh-6rem)] flex-col overflow-hidden border-b border-white/5 px-6 pb-20 pt-24 md:px-16 lg:px-32">
        <div className="absolute inset-0 opacity-[0.02] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:60px_60px]" />
        <div className="absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full opacity-10 blur-[180px]" style={{ backgroundColor: accent }} />

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center">
          <Link
            href={`/${locale}/accelerators`}
            className="group mb-16 inline-flex w-fit items-center gap-3 text-[10px] font-black uppercase tracking-widest text-zinc-500 transition-colors hover:text-white"
          >
            <ArrowLeft size={14} className="transition-transform duration-300 group-hover:-translate-x-1" />
            {partner.name}
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="grid gap-16 lg:grid-cols-2 lg:gap-24"
          >
            <div className="space-y-10">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center border" style={{ borderColor: `${accent}66` }}>
                    <Award size={18} style={{ color: accent }} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.4em]" style={{ color: accent }}>
                    {partner.roleTitle}
                  </span>
                </div>

                <h1 className="text-6xl font-[1000] uppercase italic leading-[0.9] tracking-tighter md:text-7xl lg:text-8xl">
                  {shortLabel}
                </h1>
                <p className="text-xl font-light italic tracking-tight text-zinc-500 md:text-2xl">
                  {partner.name}
                </p>
              </div>

              {partner.location && (
                <div className="flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.2em] text-zinc-400">
                  <MapPin size={14} style={{ color: accent }} />
                  {partner.location}
                </div>
              )}

              <div className={`space-y-4 border-t border-zinc-900 pt-6 text-base leading-relaxed text-zinc-400 ${isAr ? "text-right" : ""}`}>
                {partner.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="space-y-6 lg:pt-8">
              <motion.div
                whileHover={{ scale: 1.012, borderColor: `${accent}66` }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="group relative aspect-[4/3] overflow-hidden border-2 border-white/10 bg-[#121b43] transition-colors duration-500"
              >
                <div className="absolute left-0 top-0 h-8 w-8 border-l-2 border-t-2 border-white/20" />
                <div className="absolute bottom-0 right-0 h-8 w-8 border-b-2 border-r-2 border-white/20" />
                <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:42px_42px]" />
                <div
                  className="absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-18deg] opacity-0 blur-sm transition-all duration-700 group-hover:left-full group-hover:opacity-25"
                  style={{ backgroundColor: accent }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-6xl font-[1000] uppercase italic tracking-tighter text-white md:text-7xl">
                      {shortLabel}
                    </span>
                    <div
                      className="mx-auto mt-3 h-px w-28 shadow-[0_0_10px_currentColor]"
                      style={{ backgroundColor: accent, color: accent }}
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -4, borderColor: `${accent}55` }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="group relative overflow-hidden border border-white/10 bg-[#121b43] p-8 transition-colors duration-500"
              >
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-25 blur-[100px] transition-all duration-500 group-hover:h-52 group-hover:w-52" style={{ backgroundColor: accent }} />
                <h2 className="relative z-10 mb-5 text-[10px] font-black uppercase italic tracking-[0.45em]" style={{ color: accent }}>
                  {partner.roleTitle}
                </h2>
                <p className="relative z-10 text-lg leading-relaxed text-zinc-300">
                  {partner.roleText}
                </p>
              </motion.div>

              <div className="grid gap-3">
                {partner.scope.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: isAr ? 24 : -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={{ x: isAr ? -8 : 8, borderColor: `${accent}80` }}
                    transition={{ duration: 0.45, delay: 0.2 + index * 0.07 }}
                    className="group flex items-center gap-4 border border-white/5 bg-[#121b43]/80 p-5 transition-colors duration-300 hover:bg-white/[0.025]"
                  >
                    <span className="text-xl font-[1000] transition-transform duration-300 group-hover:scale-110" style={{ color: accent }}>
                      0{index + 1}
                    </span>
                    <span className="text-[11px] font-black uppercase leading-relaxed tracking-[0.18em] text-zinc-300 md:tracking-[0.22em]">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-20 px-6 py-24 md:px-16 lg:px-32">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6, borderColor: `${accent}55` }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-8 rounded-none"
          >
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <Award size={18} style={{ color: accent }} />
              <span className="text-[10px] font-black uppercase italic tracking-widest text-zinc-500">
                {partner.milestoneTitle}
              </span>
            </div>
            <div className="relative overflow-hidden border border-white/5 bg-[#121b43] p-8 transition-colors duration-300">
              <div className="absolute right-0 top-0 p-4 text-[56px] font-black italic opacity-10" style={{ color: accent }}>
                {partner.id === "fft" ? "2023" : "2022"}
              </div>
              <p className="relative z-10 text-sm font-black uppercase leading-loose tracking-widest" style={{ color: accent }}>
                {partner.milestoneText}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6, borderColor: `${accent}66` }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="group relative overflow-hidden border border-white/10 bg-[#121b43] p-10 transition-colors duration-500"
          >
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full blur-3xl transition-all duration-500 group-hover:h-36 group-hover:w-36" style={{ backgroundColor: `${accent}14` }} />
            <h2 className="text-2xl font-[1000] uppercase italic tracking-widest" style={{ color: accent }}>
              {ecosystemColumn.label} {ecosystemColumn.title}
            </h2>
            <ul className="mt-10 space-y-5">
              {ecosystemColumn.items.map((item) => (
                <li key={item} className="flex items-center justify-between gap-4 border-b border-white/5 pb-2 text-[10px] font-black uppercase italic tracking-widest text-zinc-400">
                  {item}
                  <CheckCircle2 size={12} style={{ color: accent }} />
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <a
          href={partner.ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="group mx-auto flex max-w-2xl flex-wrap items-center justify-center gap-4 px-6 py-8 text-center text-[12px] font-[1000] uppercase tracking-[0.32em] transition-all duration-300 hover:-translate-y-1 md:gap-6 md:tracking-[0.45em]"
          style={{ backgroundColor: accent, color: "black" }}
        >
          {partner.ctaLabel}
          <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>
      </section>
    </main>
  );
}
