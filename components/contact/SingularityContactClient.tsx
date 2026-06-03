"use client";

import { useRef } from "react";
import { useScroll, useSpring, useTransform } from "framer-motion";

import ContactCoreSingularity from "./components/ContactCoreSingularity";
import ContactTimedLayers from "./ContactTimedLayers";
import type { ContactPageContent } from "./ContactPage";

type Props = {
  content: ContactPageContent;
};

export default function SingularityContactClient({ content }: Props) {
  const containerRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 25 });

  const coreScale = useTransform(smoothProgress, [0, 0.4, 0.8, 1], [1, 2.5, 5, 25]);
  const coreRotate = useTransform(smoothProgress, [0, 1], [0, 360]);
  const coreOpacity = useTransform(smoothProgress, [0, 0.8, 0.95], [0.8, 0.8, 0]);

  return (
    <main
      ref={containerRef}
      className="bg-[#0a0f29] text-white min-h-[1200vh] relative overflow-x-hidden font-['Montserrat',sans-serif]"
    >
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-10">
        <ContactCoreSingularity scale={coreScale} rotate={coreRotate} opacity={coreOpacity} />
      </div>

      <ContactTimedLayers progress={smoothProgress} content={content} />

      <div className="fixed inset-0 pointer-events-none opacity-20 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(#0087cb 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>
    </main>
  );
}
