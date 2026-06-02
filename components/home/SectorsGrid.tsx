"use client";

import { motion } from "framer-motion";
import { Battery, Car, Layers, ArrowUpRight, Settings, Briefcase, Package } from "lucide-react";
import Link from "next/link";
import { useRef, useState, type ComponentType, type MouseEvent, type SVGProps } from "react";

type SectorItem = {
  title: string;
  description: string;
};

type SectorIcon = ComponentType<SVGProps<SVGSVGElement>>;

type SectorCardProps = {
  sector: SectorItem;
  Icon: SectorIcon;
  color: string;
  index: number;
  isAr?: boolean;
};

const SECTOR_ICONS: SectorIcon[] = [Car, Battery, Layers, Settings, Briefcase, Package];
const SECTOR_COLORS = ["#0087cb", "#006db1", "#005093", "#43becc", "#8e257a", "#bcd647"];

function SectorCard({ sector, Icon, color, index, isAr = false }: SectorCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      viewport={{ once: true }}
      className="group relative"
    >
      {/* Card Container */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className="relative h-full p-10 rounded-[32px] bg-white/[0.03] border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-500 overflow-hidden"
      >
        {/* Hover Glow Effect */}
        <div
          className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, ${color}15, transparent 40%)`
          }}
        />

        {/* Icon Box */}
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
          style={{ backgroundColor: `${color}10`, color }}
        >
          <Icon className="w-8 h-8" />
        </div>

        {/* Content */}
        <h3
          dir="auto"
          style={{ unicodeBidi: "plaintext" }}
          className="text-2xl font-black text-white mb-4 tracking-tighter uppercase"
        >
          {sector.title}
        </h3>

        <p
          dir="auto"
          style={{ unicodeBidi: "plaintext" }}
          className="text-zinc-400 text-sm leading-relaxed mb-6 font-medium"
        >
          {sector.description}
        </p>

        {/* Decorative Accent Line - flip for RTL */}
        <div
          className={`absolute bottom-0 ${isAr ? 'right-0' : 'left-0'} h-1 w-0 group-hover:w-full transition-all duration-700`}
          style={{ backgroundColor: color }}
        />
      </div>
    </motion.div>
  );
}

export function SectorsGrid({
  isAr = false,
  locale = "en",
  kicker,
  titleLine1,
  titleLine2,
  highlight,
  description,
  ctaLabel,
  sectors,
}: {
  isAr?: boolean;
  locale?: string;
  kicker: string;
  titleLine1: string;
  titleLine2: string;
  highlight: string;
  description: string;
  ctaLabel: string;
  sectors: SectorItem[];
}) {
  const sectorItems = sectors.map((sector, index) => ({
    ...sector,
    Icon: SECTOR_ICONS[index % SECTOR_ICONS.length],
    color: SECTOR_COLORS[index % SECTOR_COLORS.length],
  }));

  return (
    <section className="py-32 bg-[#0a0f29] relative overflow-hidden font-['Montserrat',sans-serif]">
      {/* خلفية تقنية خفيفة */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(#0087cb 1px, transparent 1px)", backgroundSize: "40px 40px" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 ${isAr ? 'md:flex-row-reverse' : ''}`}>
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, x: isAr ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`flex items-center gap-3 mb-6 ${isAr ? 'flex-row-reverse' : ''}`}
            >
              <div className={`w-12 h-[2px] ${isAr ? 'bg-gradient-to-l' : 'bg-gradient-to-r'} from-[#0087cb] to-transparent`} />
              <span dir="auto" style={{ unicodeBidi: "plaintext" }} className="text-[#0087cb] font-black tracking-[0.5em] text-[10px] uppercase">{kicker}</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className={`relative text-white text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] uppercase ${isAr ? 'text-right' : 'text-left'}`}
            >
              <span dir="auto" style={{ unicodeBidi: "plaintext" }}>{titleLine1}</span>{" "}
              <span dir="auto" style={{ unicodeBidi: "plaintext" }} className="text-[#0087cb]">{highlight}</span> <br />
              <span className="relative inline-block mt-2">
                <span dir="auto" style={{ unicodeBidi: "plaintext" }} className="text-transparent bg-clip-text bg-gradient-to-r from-[#0087cb] via-white to-[#006db1]">
                  {titleLine2}
                </span>
                {/* Underline decorative element - flip for RTL */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className={`absolute -bottom-2 ${isAr ? 'right-0' : 'left-0'} h-[4px] bg-gradient-to-r from-[#0087cb] to-transparent rounded-full`}
                />
              </span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            dir="auto"
            style={{
              unicodeBidi: "plaintext",
              borderInlineStart: "1px solid rgba(0, 135, 203, 0.3)",
              paddingInlineStart: "1.5rem",
            }}
            className={`text-zinc-500 text-sm max-w-sm font-medium leading-relaxed italic ${isAr ? 'text-right' : 'text-left'}`}
          >
            {description}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {sectorItems.map((sector, index) => (
            <SectorCard
              key={sector.title}
              sector={sector}
              Icon={sector.Icon}
              color={sector.color}
              index={index}
              isAr={isAr}
            />
          ))}
        </div>

        {/* Unified CTA Button - Refined Tech Aesthetic */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-24 flex justify-center"
        >
          <Link
            href={`/${locale}/case-study`}
            className={`group relative inline-flex items-center gap-8 py-3 border border-white/10 bg-white/5 backdrop-blur-sm rounded-full overflow-hidden transition-all duration-700 hover:border-[#0087cb]/50 hover:shadow-[0_0_30px_rgba(67,190,204,0.15)] ${isAr ? "pr-10 pl-3 flex-row-reverse" : "pl-10 pr-3"}`}
          >
            {/* Label */}
            <span className="text-[11px] font-black uppercase tracking-[0.4em] text-zinc-300 group-hover:text-[#0a0f29] relative z-20 transition-colors duration-500">
              {ctaLabel}
            </span>
            
            {/* Icon Circle */}
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-[#0a0f29]/20 group-hover:rotate-[360deg] relative z-20 transition-all duration-700 ease-in-out">
              <ArrowUpRight className={`w-5 h-5 text-[#0087cb] group-hover:text-[#0a0f29] ${isAr ? "-rotate-90" : ""}`} />
            </div>

            {/* Dynamic Background Slide */}
            <div 
              className="absolute inset-0 bg-gradient-to-r from-[#0087cb] to-[#006db1] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-700 ease-[0.22,1,0.36,1] z-10"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
