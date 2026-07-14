"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Battery,
  Calendar,
  Factory,
  Layers,
  Newspaper,
  Zap,
} from "lucide-react";
import { useState } from "react";

export type BlogHubContent = {
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
  content: BlogHubContent;
  locale: string;
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function CategoryIcon({ id }: { id: string }) {
  if (id === "tech-info") return <Newspaper size={15} />;
  if (id === "e-mobility") return <Zap size={15} />;
  if (id === "energy-storage") return <Battery size={15} />;
  if (id === "lightweight-materials") return <Layers size={15} />;
  return <Factory size={15} />;
}

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

export default function BlogHubPage({ content, locale }: Props) {
  const isAr = locale === "ar";
  const techInfoArticles = content.articles.filter(
    (article) => article.slug === "tech-info-fft-dynatech-egypt",
  );
  const visibleCategories = content.categories.filter((category) =>
    techInfoArticles.some((article) => article.category === category.id),
  );
  const [activeCategory, setActiveCategory] = useState(
    visibleCategories[0]?.id ?? "tech-info",
  );
  const activeArticles = techInfoArticles.filter(
    (article) => article.category === activeCategory,
  );
  const activeCategoryLabel =
    visibleCategories.find((category) => category.id === activeCategory)?.label ??
    visibleCategories[0]?.label;

  return (
    <main
      dir={isAr ? "rtl" : "ltr"}
      lang={locale}
      className={`min-h-screen bg-[#0a0f29] pt-32 text-white selection:bg-[#0087cb] selection:text-black ${isAr ? "font-cairo" : "font-mono"}`}
    >
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:58px_58px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0087cb] to-transparent" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
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

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <div className="mb-3 inline-flex flex-col gap-2">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-zinc-500">
                {content.filtersLabel}
              </p>
              <span className="h-px w-14 bg-zinc-600" />
            </div>
            <h2 className="text-3xl font-black uppercase tracking-tight text-white md:text-4xl">
              {activeCategoryLabel}
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {visibleCategories.map((category) => {
              const isActive = activeCategory === category.id;

              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveCategory(category.id)}
                  className={`inline-flex items-center gap-2 border px-4 py-3 text-xs font-black uppercase tracking-widest transition ${
                    isActive
                      ? "border-[#0087cb] bg-[#0087cb] text-black"
                      : "border-white/10 bg-[#121b43] text-zinc-400 hover:border-[#0087cb]/55 hover:text-white"
                  }`}
                >
                  <CategoryIcon id={category.id} />
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid gap-px border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
          {activeArticles.map((article, index) => {
            const category = visibleCategories.find(
              (item) => item.id === article.category,
            );

            return (
              <motion.article
                key={article.slug}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="group relative min-h-[320px] overflow-hidden bg-[#121b43] p-6 transition hover:bg-[#0f1738]"
              >
                <div className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-[#0087cb] transition-transform duration-500 group-hover:scale-x-100" />
                <div className="mb-8 flex items-start justify-between gap-5">
                  <span className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-[#43becc]">
                    <CategoryIcon id={article.category} />
                    {category?.label}
                  </span>
                  <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-600">
                    <Calendar size={13} />
                    {article.date}
                  </span>
                </div>

                <h3 className="text-2xl font-black uppercase leading-tight tracking-tight text-white transition-colors group-hover:text-[#0087cb]">
                  {article.title}
                </h3>
                <p className="mt-5 line-clamp-2 text-sm leading-relaxed text-zinc-400">
                  {article.excerpt}
                </p>

                <Link
                  href={`/${locale}/tech-info/${article.slug}`}
                  className="absolute bottom-6 left-6 inline-flex items-center gap-3 text-xs font-black uppercase tracking-widest text-zinc-500 transition hover:text-[#43becc]"
                >
                  {content.readMoreLabel}
                  <ArrowUpRight size={15} />
                </Link>
              </motion.article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
