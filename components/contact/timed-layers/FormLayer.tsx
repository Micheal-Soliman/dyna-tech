"use client";

import type { MotionValue } from "framer-motion";
import { FileUp, Send, Terminal } from "lucide-react";

import type { ContactPageContent } from "../ContactPage";
import Layer from "./Layer";

type Props = {
  progress: MotionValue<number>;
  content: ContactPageContent;
};

export default function FormLayer({ progress, content }: Props) {
  return (
    <Layer progress={progress} range={[0.65, 0.88]}>
      <div className="w-full max-w-4xl rounded-[40px] border border-white/10 bg-[#080808]/90 p-10 backdrop-blur-3xl">
        <div className="mb-8 flex flex-col items-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#006db1] shadow-[0_0_30px_#006db1]/30">
            <span className="text-2xl font-[1000] italic text-black">D</span>
          </div>
          <h2 className="text-2xl font-[1000] uppercase italic tracking-tight text-white">
            DYNATECH
          </h2>
          <p className="mt-1 text-[9px] font-black uppercase tracking-[0.4em] text-zinc-500">
            {content.form.title}
          </p>
        </div>

        <div className="mb-8 flex items-center gap-3 text-[#006db1]">
          <Terminal size={16} />
          <span className="font-mono text-[10px] uppercase italic">
            {content.conversation.title}
          </span>
        </div>

        <form className="grid grid-cols-2 gap-4 text-left">
          <input
            placeholder={content.form.fields.fullName}
            className="rounded-xl border border-white/10 bg-white/5 p-5 text-[10px] outline-none focus:border-[#006db1]"
          />
          <input
            placeholder={content.form.fields.company}
            className="rounded-xl border border-white/10 bg-white/5 p-5 text-[10px] outline-none focus:border-[#006db1]"
          />
          <input
            placeholder={content.form.fields.email}
            type="email"
            className="rounded-xl border border-white/10 bg-white/5 p-5 text-[10px] outline-none focus:border-[#006db1]"
          />
          <input
            placeholder={content.form.fields.phone}
            type="tel"
            className="rounded-xl border border-white/10 bg-white/5 p-5 text-[10px] outline-none focus:border-[#006db1]"
          />
          <select className="col-span-2 rounded-xl border border-white/10 bg-[#111] p-5 text-[10px] uppercase text-zinc-500">
            <option>{content.form.fields.inquiryType}</option>
            {content.form.categories.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </select>
          <textarea
            placeholder={content.form.fields.message}
            className="col-span-2 h-28 resize-none rounded-xl border border-white/10 bg-white/5 p-5 text-[10px] outline-none focus:border-[#006db1]"
          />
          <label className="col-span-2 flex cursor-pointer items-center justify-between rounded-xl border border-dashed border-white/10 bg-white/5 p-5 text-[10px] uppercase text-zinc-500 transition hover:border-[#006db1]/40">
            <span>{content.form.fields.fileUpload}</span>
            <FileUp size={14} className="text-[#006db1]" />
            <input type="file" className="hidden" />
          </label>
          <button className="col-span-2 flex items-center justify-center gap-3 rounded-xl bg-[#006db1] py-6 text-[11px] font-black uppercase tracking-[0.3em] text-black transition-all hover:bg-white">
            {content.form.submitLabel} <Send size={14} />
          </button>
        </form>
      </div>
    </Layer>
  );
}
