"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export type BusinessScopeContent = {
  hero: {
    kicker: string;
    title: string;
    intro: string;
    supporting: string;
  };
  technologyPartners: {
    kicker: string;
    title: string;
    partners: {
      name: string;
      heading: string;
      paragraphs: string[];
      ctaLabel: string;
      ctaHref: string;
    }[];
  };
};

type Props = {
  content: BusinessScopeContent;
  locale: string;
};

function partnerSlug(name: string) {
  return name.toLowerCase().includes("cu") ? "composites-united" : "fft";
}

function partnerLabel(name: string) {
  return name.toLowerCase().includes("cu") ? "CU" : "FFT";
}

function partnerCardCopy(name: string) {
  if (name.toLowerCase().includes("cu")) {
    return {
      name: "CU Company",
      heading: "Composite Lightweight Technologies",
      paragraphs: [
        "Composites United e. V. (CU), one of the world's largest networks for fiber-based multi-material lightweight design, emerged by the two associations Carbon Composites e. V. and CFK Valley e. V. About 350 members have joined to form this high-performance industry and research association to jointly develop lightweight design solutions for the future.",
      ],
    };
  }

  return {
    name: "FFT Company",
    heading: "Intelligent Manufacturing Systems",
    paragraphs: [
      "Since 1974, we have stood for dynamism, solidity, global presence and a claim to technological leadership.",
      "As a leading global provider of innovative, flexible and complex manufacturing systems, we specialize in their development, project planning and implementation. We assume overall responsibility for turnkey solutions and carry out projects worldwide, including for the automotive and aviation industries.",
    ],
  };
}

function PartnerLogo({ id }: { id: "fft" | "cu" }) {
  if (id === "fft") {
    return (
      <div className="text-[clamp(2.4rem,4vw,4.6rem)] font-[1000] italic leading-none tracking-[-0.08em] text-[#45f5ca] drop-shadow-[0_0_18px_rgba(69,245,202,0.28)]">
        FFT
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center leading-none">
      <div className="text-[clamp(2.2rem,3.6vw,3.8rem)] font-[1000] tracking-[-0.12em]">
        <span className="text-[#006db1]">C</span>
        <span className="text-[#ef6a25]">U</span>
      </div>
      <span className="mt-1 text-[9px] font-black uppercase tracking-[0.08em] text-[#006db1]">
        Composites
      </span>
      <span className="text-[9px] font-black uppercase tracking-[0.08em] text-[#006db1]">
        United
      </span>
    </div>
  );
}

export default function BusinessScopePage({ content, locale }: Props) {
  const isAr = locale === "ar";
  const reduceMotion = useReducedMotion();
  const reveal = reduceMotion
    ? { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }
    : { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } };
  const revealTransition = { duration: 0.75, ease: "easeOut" as const };

  return (
    <main
      dir={isAr ? "rtl" : "ltr"}
      lang={locale}
      className={`min-h-screen bg-[#080d20] text-white ${isAr ? "font-cairo" : ""}`}
    >
      <section className="relative flex min-h-screen items-end overflow-hidden px-6 pb-14 pt-32 md:px-12 lg:px-20">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        <div className="absolute inset-0 bg-[#080d20]/70" />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,#080d20_0%,rgba(8,13,32,0.58)_48%,rgba(8,13,32,0.22)_100%)]" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <motion.div
            initial="hidden"
            animate="show"
            variants={reveal}
            transition={revealTransition}
            className="max-w-4xl"
          >
            <p className="mb-5 text-xs font-black uppercase tracking-[0.34em] text-[#43becc]">
              {content.hero.kicker}
            </p>
            <h1 className="text-5xl font-black uppercase leading-[0.92] tracking-tight md:text-7xl lg:text-8xl">
              {content.hero.title}
            </h1>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            variants={reveal}
            transition={{ ...revealTransition, delay: reduceMotion ? 0 : 0.12 }}
            className="max-w-2xl border border-white/12 bg-[#0a0f29]/70 p-6 backdrop-blur-md md:p-8"
          >
            <p className="text-lg font-semibold leading-relaxed text-white md:text-xl">
              {content.hero.intro}
            </p>
            <p className="mt-5 text-sm leading-relaxed text-zinc-300 md:text-base">
              {content.hero.supporting}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative border-t border-white/10 bg-[#080d20] px-6 py-20 md:px-12 lg:px-20">
        <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:56px_56px]" />
        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.28 }}
            variants={reveal}
            transition={revealTransition}
            className="mb-10 max-w-3xl"
          >
            <p className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-[#0087cb]">
              {content.technologyPartners.kicker}
            </p>
            <h2 className="text-3xl font-black uppercase leading-tight tracking-tight md:text-5xl">
              {content.technologyPartners.title}
            </h2>
          </motion.div>

          <div className="grid gap-5 lg:grid-cols-2">
            {content.technologyPartners.partners.map((partner, index) => {
              const label = partnerLabel(partner.name);
              const logoId = label.toLowerCase() as "fft" | "cu";
              const href = `/${locale}/services/${partnerSlug(partner.name)}`;
              const card = partnerCardCopy(partner.name);

              return (
                <motion.div
                  key={partner.name}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.22 }}
                  variants={reveal}
                  transition={{ ...revealTransition, delay: reduceMotion ? 0 : index * 0.08 }}
                >
                  <Link
                    href={href}
                    className="group relative block min-h-[360px] overflow-hidden border border-white/10 bg-[#111936] p-7 transition duration-500 hover:-translate-y-1 hover:border-[#43becc]/55 hover:bg-[#121b43] md:p-9"
                  >
                    <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:44px_44px]" />
                    <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#0087cb]/20 blur-3xl transition duration-500 group-hover:bg-[#43becc]/25" />
                    <div className="relative z-10 flex h-full flex-col">
                      <div className="flex items-start justify-between gap-6">
                        <div>
                          <span className="font-mono text-xs tracking-[0.3em] text-[#43becc]">
                            0{index + 1}
                          </span>
                          <h3 className="mt-5 text-4xl font-black uppercase tracking-tight md:text-5xl">
                            {card.name}
                          </h3>
                        </div>
                        <div className="flex min-h-20 min-w-28 shrink-0 items-center justify-center border border-white/10 bg-[#080d20]/80 px-4 py-3">
                          <PartnerLogo id={logoId} />
                        </div>
                      </div>

                      <div className="mt-10">
                        <p className="text-xl font-black leading-snug text-white/90">
                          {card.heading}
                        </p>
                        <p className="mt-5 line-clamp-4 text-sm leading-relaxed text-zinc-400 md:text-base">
                          {card.paragraphs.join(" ")}
                        </p>
                      </div>

                      <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-7">
                        <span className="text-[11px] font-black uppercase tracking-[0.28em] text-white">
                          {label} Company
                        </span>
                        <span className="flex h-11 w-11 items-center justify-center bg-[#0087cb] text-black transition duration-300 group-hover:bg-white">
                          <ArrowUpRight size={18} />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
