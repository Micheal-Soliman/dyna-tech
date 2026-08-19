"use client";

import { motion } from "framer-motion";

export type TechInfoContent = {
  hero: {
    kicker: string;
    title: string;
    description: string;
  };
  filtersLabel: string;
  readMoreLabel: string;
  categories: {
    id: string;
    label: string;
  }[];
  articles: {
    slug: string;
    title: string;
    category: string;
    date: string;
    excerpt: string;
  }[];
};

type Props = {
  content: TechInfoContent;
  locale: string;
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function SectionKicker({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 inline-flex flex-col gap-3">
      <p className="text-xs font-black uppercase tracking-[0.24em] text-[#43becc]">
        {children}
      </p>
      <span className="h-px w-16 bg-[#0087cb]" />
    </div>
  );
}

export default function TechInfoPage({ content, locale }: Props) {
  const isAr = locale === "ar";

  return (
    <main
      dir={isAr ? "rtl" : "ltr"}
      lang={locale}
      className="min-h-screen bg-[#0a0f29] pt-24 text-white selection:bg-[#0087cb] selection:text-black"
    >
      <section className="relative flex min-h-[calc(100svh-6rem)] items-center overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 opacity-[0.045] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:58px_58px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0087cb] to-transparent" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <SectionKicker>{content.hero.kicker}</SectionKicker>
            <h1 className="max-w-4xl text-5xl font-black uppercase leading-[0.94] tracking-tight md:text-7xl">
              {content.hero.title}
            </h1>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="relative border border-white/10 border-l-[#0087cb] bg-[#121b43]/75 p-6 shadow-[inset_4px_0_0_#0087cb] md:p-8"
          >
            <div className="absolute right-0 top-0 h-8 w-8 border-r border-t border-[#0087cb]/70" />
            <p className="text-lg font-semibold leading-relaxed text-[#43becc]">
              {content.hero.description}
            </p>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
