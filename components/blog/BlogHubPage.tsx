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

export default function BlogHubPage({ content, locale }: Props) {
  const isAr = locale === "ar";
  const [activeCategory, setActiveCategory] = useState(content.categories[0]?.id);
  const activeArticles = content.articles.filter(
    (article) => article.category === activeCategory,
  );
  const activeCategoryLabel =
    content.categories.find((category) => category.id === activeCategory)?.label ??
    content.categories[0]?.label;

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
            <p className="mb-5 inline-flex border border-[#0087cb]/35 bg-[#0087cb]/10 px-3 py-2 text-xs font-black uppercase tracking-[0.24em] text-[#43becc]">
              {content.hero.kicker}
            </p>
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
            <p className="mb-3 text-xs font-black uppercase tracking-[0.24em] text-zinc-500">
              {content.filtersLabel}
            </p>
            <h2 className="text-3xl font-black uppercase tracking-tight text-white md:text-4xl">
              {activeCategoryLabel}
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {content.categories.map((category) => {
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
            const category = content.categories.find(
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
                  href={`/${locale}/knowledge/${article.slug}`}
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
