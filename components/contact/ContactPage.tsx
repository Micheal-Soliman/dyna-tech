"use client";

import { motion } from "framer-motion";
import {
  Building2,
  FileUp,
  Mail,
  MessageSquare,
  Phone,
  Send,
  User,
} from "lucide-react";

export type ContactPageContent = {
  hero: {
    kicker: string;
    title: string;
    description: string;
  };
  conversation: {
    title: string;
    paragraphs: string[];
  };
  form: {
    title: string;
    fields: {
      fullName: string;
      company: string;
      email: string;
      phone: string;
      inquiryType: string;
      message: string;
      fileUpload: string;
    };
    categoriesTitle: string;
    categories: string[];
    submitLabel: string;
  };
};

type Props = {
  content: ContactPageContent;
  locale: string;
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function SectionKicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 inline-flex border border-[#0087cb]/35 bg-[#0087cb]/10 px-3 py-2 text-xs font-black uppercase tracking-[0.24em] text-[#43becc]">
      {children}
    </p>
  );
}

function CityVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.18, ease: "easeOut" }}
      className="group relative min-h-[430px] overflow-hidden border border-white/10 bg-[#121b43]/75 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.45)] transition-colors duration-300 hover:border-[#0087cb]/55"
    >
      <div className="absolute left-0 top-0 h-12 w-12 border-l border-t border-[#0087cb]/70" />
      <div className="absolute bottom-0 right-0 h-12 w-12 border-b border-r border-[#43becc]/60" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(#0087cb_1px,transparent_1px),linear-gradient(90deg,#0087cb_1px,transparent_1px)] [background-size:38px_38px]" />
      <div className="absolute inset-x-8 top-1/2 h-px bg-gradient-to-r from-transparent via-[#0087cb] to-transparent" />
      <div className="absolute inset-y-8 left-1/2 w-px bg-gradient-to-b from-transparent via-[#43becc] to-transparent" />
      <div className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-[#43becc] transition-transform duration-700 group-hover:scale-x-100" />

      <div className="absolute inset-x-8 bottom-12 flex items-end justify-center gap-3">
        {[72, 130, 96, 170, 118, 86, 148].map((height, index) => (
          <motion.div
            key={`${height}-${index}`}
            initial={{ height: 0 }}
            animate={{ height }}
            transition={{ duration: 0.7, delay: 0.18 + index * 0.05 }}
            className="w-full max-w-[54px] border border-[#0087cb]/35 bg-[#0087cb]/10"
          >
            <div className="grid h-full grid-cols-2 gap-px p-2 opacity-60">
              {Array.from({ length: 8 }).map((_, cell) => (
                <span key={cell} className="bg-[#43becc]/30" />
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="absolute left-10 right-10 top-16">
        <div className="relative h-28">
          <div className="absolute left-0 top-1/2 h-px w-full bg-gradient-to-r from-[#0087cb] via-[#43becc] to-transparent" />
          <div className="absolute left-1/4 top-2 h-px w-1/2 rotate-[-14deg] bg-gradient-to-r from-transparent via-[#0087cb] to-transparent" />
          <div className="absolute right-0 top-20 h-px w-2/3 rotate-[12deg] bg-gradient-to-r from-transparent via-[#43becc] to-transparent" />
          {[0, 1, 2, 3].map((node) => (
            <div
              key={node}
              className="absolute h-4 w-4 border border-[#43becc] bg-[#0a0f29]"
              style={{
                left: `${node * 28 + 6}%`,
                top: `${node % 2 === 0 ? 42 : 62}%`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between border-t border-white/10 pt-4">
        <span className="text-[10px] font-black uppercase tracking-widest text-white">
          Mobility
        </span>
        <span className="text-[10px] font-black uppercase tracking-widest text-[#43becc]">
          Energy
        </span>
        <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">
          Infrastructure
        </span>
      </div>
    </motion.div>
  );
}

function Field({
  label,
  icon,
  type = "text",
}: {
  label: string;
  icon: React.ReactNode;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-zinc-500">
        {icon}
        {label}
      </span>
      <input
        type={type}
        className="w-full border border-white/10 bg-[#121b43] px-4 py-4 text-sm text-white outline-none transition focus:border-[#0087cb]"
      />
    </label>
  );
}

export default function ContactPage({ content, locale }: Props) {
  const isAr = locale === "ar";

  return (
    <main
      dir={isAr ? "rtl" : "ltr"}
      lang={locale}
      className={`min-h-screen bg-[#0a0f29] pt-32 text-white selection:bg-[#0087cb] selection:text-black ${isAr ? "font-cairo" : "font-mono"}`}
    >
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:58px_58px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0087cb] to-transparent" />
        <div className="pointer-events-none absolute -right-12 top-12 text-[15vw] font-black uppercase leading-none tracking-tight text-white/[0.025]">
          Contact
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
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
            <p className="mt-7 max-w-2xl text-base font-semibold leading-relaxed text-zinc-400 md:text-lg">
              {content.hero.description}
            </p>
          </motion.div>

          <CityVisual />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionKicker>{content.conversation.title}</SectionKicker>
          <h2 className="text-3xl font-black uppercase leading-tight tracking-tight md:text-5xl">
            {content.conversation.title}
          </h2>
          <div className="mt-7 space-y-4 text-base leading-relaxed text-zinc-400">
            {content.conversation.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-10 grid gap-px border border-white/10 bg-white/10">
            {content.form.categories.map((category) => (
              <div
                key={category}
                className="bg-[#121b43] p-4 text-sm font-bold uppercase tracking-wide text-zinc-300"
              >
                {category}
              </div>
            ))}
          </div>
        </div>

        <form className="relative border border-white/10 bg-[#121b43]/75 p-6 md:p-8">
          <div className="absolute right-0 top-0 h-8 w-8 border-r border-t border-[#0087cb]/70" />
          <h3 className="mb-8 text-2xl font-black uppercase tracking-tight text-white">
            {content.form.title}
          </h3>

          <div className="grid gap-5 md:grid-cols-2">
            <Field label={content.form.fields.fullName} icon={<User size={14} />} />
            <Field
              label={content.form.fields.company}
              icon={<Building2 size={14} />}
            />
            <Field
              label={content.form.fields.email}
              icon={<Mail size={14} />}
              type="email"
            />
            <Field
              label={content.form.fields.phone}
              icon={<Phone size={14} />}
              type="tel"
            />

            <label className="block md:col-span-2">
              <span className="mb-2 flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-zinc-500">
                <MessageSquare size={14} />
                {content.form.fields.inquiryType}
              </span>
              <select className="w-full border border-white/10 bg-[#121b43] px-4 py-4 text-sm text-zinc-400 outline-none transition focus:border-[#0087cb]">
                {content.form.categories.map((category) => (
                  <option key={category}>{category}</option>
                ))}
              </select>
            </label>

            <label className="block md:col-span-2">
              <span className="mb-2 flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-zinc-500">
                <MessageSquare size={14} />
                {content.form.fields.message}
              </span>
              <textarea className="min-h-36 w-full resize-none border border-white/10 bg-[#121b43] px-4 py-4 text-sm text-white outline-none transition focus:border-[#0087cb]" />
            </label>

            <label className="block md:col-span-2">
              <span className="mb-2 flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-zinc-500">
                <FileUp size={14} />
                {content.form.fields.fileUpload}
              </span>
              <input
                type="file"
                className="w-full border border-dashed border-white/15 bg-[#121b43] px-4 py-4 text-sm text-zinc-500 file:mr-4 file:border-0 file:bg-[#0087cb] file:px-4 file:py-2 file:text-xs file:font-black file:uppercase file:tracking-widest file:text-black"
              />
            </label>

            <button className="group inline-flex items-center justify-center gap-3 bg-[#0087cb] px-6 py-5 text-xs font-black uppercase tracking-widest text-black transition hover:bg-white md:col-span-2">
              {content.form.submitLabel}
              <Send size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
