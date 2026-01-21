"use client";

import { motion, type MotionValue } from "framer-motion";

type Props = {
  scanOpacity: MotionValue<number>;
};

export default function ServicesBackground({ scanOpacity }: Props) {
  return (
    <div className="fixed inset-0 z-0">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(#43becc 0.5px, transparent 0.5px), linear-gradient(90deg, #43becc 0.5px, transparent 0.5px)",
          backgroundSize: "60px 60px",
        }}
      />
      <motion.div
        animate={{ top: ["-10%", "110%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        style={{ opacity: scanOpacity }}
        className="absolute start-0 w-full h-[2px] bg-[#43becc]/20 blur-sm shadow-[0_0_15px_#43becc]"
      />
    </div>
  );
}
