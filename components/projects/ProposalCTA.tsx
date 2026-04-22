"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ProposalCTA() {
  return (
    <section className="py-32 px-6 text-center relative border-t border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        <h2 className="text-5xl md:text-7xl font-[1000] italic uppercase tracking-tighter mb-8">
          Submit <span className="text-[#006db1]">Proposal.</span>
        </h2>
        <p className="text-zinc-500 max-w-xl mx-auto mb-12 text-xs uppercase tracking-widest">
          Technical proposals accepted until Q2 2026. Direct all inquiries to procurement.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-12 py-6 bg-[#006db1] text-black font-black uppercase text-[10px] tracking-[0.4em]"
          >
            DOWNLOAD_RFP_DOC
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-12 py-6 border-2 border-white/10 text-white font-black uppercase text-[10px] tracking-[0.4em] hover:bg-white hover:text-black transition-all"
          >
            CONTACT_TEAM
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
