"use client";

import { motion, type MotionValue } from "framer-motion";

type Props = {
  scale: MotionValue<number>;
  rotate: MotionValue<number>;
  opacity: MotionValue<number>;
};

export default function ContactCoreSingularity({ scale, rotate, opacity }: Props) {
  return (
    <motion.div
      style={{ scale, rotate, opacity }}
      className="w-40 h-40 rounded-full border-[1px] border-[#43becc]/30 flex items-center justify-center"
    >
      <div className="w-32 h-32 rounded-full border-[2px] border-[#43becc] shadow-[0_0_50px_#43becc]" />
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute w-10 h-10 bg-[#bcd647] rounded-full blur-xl"
      />
    </motion.div>
  );
}
