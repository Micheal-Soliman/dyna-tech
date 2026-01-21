"use client";

import { useMemo, useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import {
  BarChart,
  Code,
  Cpu,
  Globe,
  Rocket,
  ShieldCheck,
} from "lucide-react";

import ServicesBackground from "./components/ServicesBackground";
import ServicesHeader from "./components/ServicesHeader";
import ServicesGrid from "./components/ServicesGrid";
import ServicesFooter from "./components/ServicesFooter";

export type ServiceIcon =
  | "code"
  | "rocket"
  | "shield"
  | "cpu"
  | "globe"
  | "chart";

export type ServiceModule = {
  id: string;
  title: string;
  desc: string;
  icon: ServiceIcon;
  color: string;
  tags: string[];
};

export type ServicesPageContent = {
  header: {
    kicker: string;
    titleLine1: string;
    titleLine2: string;
    titleStroke: string;
  };
  services: ServiceModule[];
  footer: {
    status: string;
    downloadLabel: string;
  };
};

export function getServiceIcon(icon: ServiceIcon) {
  if (icon === "code") return <Code size={32} />;
  if (icon === "rocket") return <Rocket size={32} />;
  if (icon === "shield") return <ShieldCheck size={32} />;
  if (icon === "cpu") return <Cpu size={32} />;
  if (icon === "globe") return <Globe size={32} />;
  return <BarChart size={32} />;
}

export default function NeuralServicesClient({ content }: { content: ServicesPageContent }) {
  const containerRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  const scanOpacity = useTransform(scrollYProgress, [0, 1], [0.2, 0.35]);

  const servicesWithIcons = useMemo(() => {
    return content.services.map((s) => ({ ...s, iconNode: getServiceIcon(s.icon) }));
  }, [content.services]);

  return (
    <main
      ref={containerRef}
      className="bg-[#050505] min-h-screen pt-32 pb-20 px-6 font-['Montserrat',sans-serif] text-white overflow-hidden relative"
    >
      <ServicesBackground scanOpacity={scanOpacity} />

      <div className="max-w-7xl mx-auto relative z-10 mb-24">
        <ServicesHeader content={content.header} />
      </div>

      <ServicesGrid services={servicesWithIcons} scrollYProgress={scrollYProgress} />

      <ServicesFooter content={content.footer} />
    </main>
  );
}
