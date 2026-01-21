"use client";

import { motion } from "framer-motion";

type Content = {
  kicker: string;
  titleLine1: string;
  titleLine2: string;
  titleStroke: string;
};

export default function ServicesHeader({ content }: { content: Content }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex flex-col gap-2"
    >
      <span className="text-[#bcd647] font-mono text-[10px] tracking-[0.6em] uppercase italic">
        {content.kicker}
      </span>
      <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-none">
        {content.titleLine1} <br /> {content.titleLine2}{" "}
        <span
          className="italic"
          style={{
            color: "transparent",
            WebkitTextStroke: "1px #43becc",
          }}
        >
          {content.titleStroke}
        </span>
      </h1>
    </motion.div>
  );
}
