"use client";

import type { ReactNode } from "react";
import { motion, useTransform, type MotionValue } from "framer-motion";

type Props = {
  progress: MotionValue<number>;
  range: [number, number];
  xOffset?: number;
  children: ReactNode;
};

export default function Layer({ progress, range, xOffset = 0, children }: Props) {
  const opacity = useTransform(
    progress,
    [range[0], range[0] + 0.03, range[1] - 0.03, range[1]],
    [0, 1, 1, 0],
  );
  const scale = useTransform(
    progress,
    [range[0], range[0] + 0.03, range[1] - 0.03, range[1]],
    [0.8, 1, 1, 0.8],
  );
  const x = useTransform(
    progress,
    [range[0], range[0] + 0.03, range[1] - 0.03, range[1]],
    [xOffset, 0, 0, xOffset],
  );
  const pointerEvents = useTransform(progress, (v) =>
    (v > range[0] + 0.02 && v < range[1] - 0.02 ? "auto" : "none") as
      | "auto"
      | "none",
  );

  return (
    <motion.section
      style={{ opacity, scale, x, pointerEvents, zIndex: 40 }}
      className="fixed inset-0 flex items-center justify-center p-6"
    >
      {children}
    </motion.section>
  );
}
