"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";

type Props = {
  scrollYProgress: MotionValue<number>;
};

export default function ServicesPowerLines({ scrollYProgress }: Props) {
  const lineOpacity = useTransform(scrollYProgress, [0.1, 0.6, 1], [0, 0.55, 0.2]);
  const pathLength = useTransform(scrollYProgress, [0.1, 0.8], [0, 1]);

  return (
    <motion.div
      aria-hidden
      style={{ opacity: lineOpacity }}
      className="absolute inset-0 pointer-events-none"
    >
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 700" preserveAspectRatio="none">
        <motion.path
          d="M 200 180 C 380 180, 420 240, 500 340 S 650 520, 800 520"
          fill="none"
          stroke="#43becc"
          strokeWidth="1"
          strokeOpacity="0.55"
          style={{ pathLength }}
        />
        <motion.path
          d="M 800 180 C 620 180, 580 240, 500 340 S 350 520, 200 520"
          fill="none"
          stroke="#bcd647"
          strokeWidth="1"
          strokeOpacity="0.45"
          style={{ pathLength }}
        />
        <motion.path
          d="M 500 0 L 500 700"
          fill="none"
          stroke="#43becc"
          strokeWidth="0.6"
          strokeOpacity="0.15"
          style={{ pathLength }}
        />
      </svg>
    </motion.div>
  );
}
