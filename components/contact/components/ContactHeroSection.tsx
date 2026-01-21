"use client";

import { motion, type MotionValue } from "framer-motion";

type Props = {
  opacity: MotionValue<number>;
};

export default function ContactHeroSection({ opacity }: Props) {
  return (
    <section className="h-screen flex items-center justify-center sticky top-0">
      <motion.div style={{ opacity }} className="text-center">
        <h1 className="text-[8vw] font-black text-white uppercase tracking-tighter leading-none italic">
          UNLEASH <br /> <span className="text-[#43becc]">THE SIGNAL.</span>
        </h1>
        <p className="mt-6 text-zinc-500 font-mono text-[10px] tracking-[0.5em] uppercase">
          Scroll to expand the core
        </p>
      </motion.div>
    </section>
  );
}
