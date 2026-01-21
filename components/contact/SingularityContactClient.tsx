"use client";

import { useRef } from "react";
import { useScroll, useSpring, useTransform } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

import ContactCoreSingularity from "./components/ContactCoreSingularity";
import ContactHeroSection from "./components/ContactHeroSection";
import ContactOrbitItemSection from "./components/ContactOrbitItemSection";
import ContactUltimateFormSection from "./components/ContactUltimateFormSection";
import ContactParticleFieldBackground from "./components/ContactParticleFieldBackground";

export default function SingularityContactClient() {
  const containerRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const coreScale = useTransform(smoothProgress, [0, 0.4, 0.8, 1], [1, 2.5, 5, 20]);
  const coreRotate = useTransform(smoothProgress, [0, 1], [0, 360]);
  const coreOpacity = useTransform(smoothProgress, [0, 0.8, 0.9, 1], [1, 1, 0, 0]);

  const heroOpacity = useTransform(smoothProgress, [0, 0.1], [1, 0]);

  return (
    <main
      ref={containerRef}
      className="bg-[#050505] min-h-[500vh] relative overflow-x-hidden font-['Montserrat',sans-serif]"
    >
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-20">
        <ContactCoreSingularity scale={coreScale} rotate={coreRotate} opacity={coreOpacity} />
      </div>

      <div className="relative z-30 w-full">
        <ContactHeroSection opacity={heroOpacity} />

        <ContactOrbitItemSection
          smoothProgress={smoothProgress}
          icon={<Phone />}
          label="Frequency"
          value="+20 123 456 7890"
          range={[0.2, 0.4]}
          xOffset={-300}
        />
        <ContactOrbitItemSection
          smoothProgress={smoothProgress}
          icon={<Mail />}
          label="Packet"
          value="ops@raptors.me"
          range={[0.4, 0.6]}
          xOffset={300}
        />
        <ContactOrbitItemSection
          smoothProgress={smoothProgress}
          icon={<MapPin />}
          label="Station"
          value="New Cairo, Egypt"
          range={[0.6, 0.8]}
          xOffset={-300}
        />

        <ContactUltimateFormSection smoothProgress={smoothProgress} />
      </div>

      <ContactParticleFieldBackground />
    </main>
  );
}
