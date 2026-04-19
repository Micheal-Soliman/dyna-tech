"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// ============================================
// TYPES
// ============================================
type HeroMainProps = {
  slogan: string;
  subheading: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
  heroImageUrl?: string;
  imageScale: any;
  imageRadius: any;
  textY: any;
  mainOpacity: any;
};

type CeoMessageProps = {
  ceoName?: string;
  ceoTitle?: string;
  ceoCtaLabel?: string;
  ceoImageUrl?: string;
  heroImageUrl?: string;
  ceoQuote?: string;
  locale?: string;
};

type BrandOutroProps = {
  brandLeft: string;
  brandRight: string;
  heroImageUrl?: string;
  progress: any;
};

// ============================================
// SECTION 1: HERO MAIN (Sticky with parallax)
// ============================================
function HeroMainSection({
  slogan,
  subheading,
  primaryCtaLabel,
  primaryCtaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
  heroImageUrl,
  imageScale,
  imageRadius,
  textY,
  mainOpacity,
  isAr = false,
}: HeroMainProps & { isAr?: boolean }) {
  // Split slogan on em-dash or regular dash
  const sloganParts = slogan.includes(" — ") 
    ? slogan.split(" — ") 
    : slogan.includes(" - ")
    ? slogan.split(" - ")
    : [slogan, ""];

  return (
    <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden pt-12 md:pt-16">
        
        {/* 1. High-Impact Background Image */}
        <motion.div
          style={{ scale: imageScale, borderRadius: imageRadius }}
          className="absolute inset-0 z-10 overflow-hidden"
        >
          <img
            src={heroImageUrl || "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"}
            alt="DYNATECH Leadership"
            className="h-full w-full object-cover"
          />
          {/* Advanced Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f29] via-[#0a0f29]/20 to-[#0a0f29]/60" />
        </motion.div>

        {/* 2. Primary Hero Content */}
        <motion.div
          style={{ y: textY, opacity: mainOpacity }}
          className="absolute z-30 inset-0 flex flex-col items-center justify-center text-center px-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1
              dir="auto"
              style={{ unicodeBidi: "plaintext" }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight uppercase italic tracking-tight max-w-5xl"
            >
              {sloganParts[0]}
              {sloganParts[1] && (
                <>
                  <br />
                  <span className="text-[#43becc]">{sloganParts[1]}</span>
                </>
              )}
            </h1>
            
            <p
              dir="auto"
              style={{ unicodeBidi: "plaintext" }}
              className="mt-6 text-sm sm:text-base md:text-lg text-zinc-300 max-w-xl mx-auto font-medium uppercase tracking-wider px-4"
            >
              {subheading}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center pointer-events-auto relative z-50">
              <motion.a 
                href={primaryCtaHref}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-[#43becc] text-[#0a0f29] font-black uppercase tracking-widest rounded-full shadow-lg text-xs sm:text-sm cursor-pointer relative"
              >
                {primaryCtaLabel}
              </motion.a>
              <motion.a 
                href={secondaryCtaHref}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 border-2 border-[#bcd647] text-[#bcd647] font-black uppercase tracking-widest rounded-full hover:bg-[#bcd647] hover:text-[#0a0f29] transition-all text-xs sm:text-sm cursor-pointer relative"
              >
                {secondaryCtaLabel}
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator - Lower position to avoid CTA overlap */}
        <div className="absolute bottom-6 md:bottom-8 w-full flex justify-center z-[35] pointer-events-none">
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] text-white/30 uppercase tracking-[0.5em] font-bold mb-1">
              Scroll
            </span>
            <div className="relative flex flex-col items-center">
              <motion.div
                animate={{ height: [20, 40, 20], opacity: [0.3, 1, 0.3] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="w-[2px] bg-gradient-to-b from-[#43becc] to-[#bcd647]"
              />
              <motion.div
                animate={{ y: [0, 5, 0], opacity: [0.3, 1, 0.3] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="flex flex-col items-center -mt-1"
              >
                <div className="w-3 h-3 border-b-2 border-r-2 border-[#bcd647] rotate-45 transform" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
  );
}

// ============================================
// SECTION 2: CEO MESSAGE (Editorial)
// ============================================
function CeoMessageSection({
  ceoName,
  ceoTitle,
  ceoCtaLabel,
  ceoImageUrl,
  heroImageUrl,
  ceoQuote,
  ceoSectionLabel,
  ceoSubtitle,
  isAr = false,
  locale = "en",
}: CeoMessageProps & { ceoSectionLabel?: string; ceoSubtitle?: string; isAr?: boolean; locale?: string }) {
  return (
    <div className="relative z-40 bg-[#0a0f29] min-h-screen py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <div className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-24 ${isAr ? 'lg:flex-row-reverse' : ''}`}>
          
          {/* Portrait with neon border */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: isAr ? 30 : -30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "circOut" }}
            className="relative w-full lg:w-1/2 aspect-[4/5] md:aspect-square lg:aspect-[3/4] max-w-md"
          >
            <div className={`absolute inset-0 border-2 border-[#43becc]/20 ${isAr ? '-translate-x-6' : 'translate-x-6'} translate-y-6 rounded-2xl`} />
            <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={ceoImageUrl || heroImageUrl || "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop"} 
                alt={ceoName || "Eng. Ahmed Sorour"} 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f29] via-transparent to-transparent opacity-60" />
            </div>
            
            {/* Title card - flip position for RTL */}
            <div className={`absolute -bottom-6 ${isAr ? '-left-6' : '-right-6'} bg-[#43becc] p-6 rounded-xl shadow-xl hidden md:block`}>
              <p className="text-[#0a0f29] font-black text-xs uppercase tracking-widest">{ceoTitle || "Founder & CEO"}</p>
              <div className="w-10 h-1 bg-[#0a0f29] mt-2" />
            </div>
          </motion.div>

          {/* Content - align end for RTL */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`w-full lg:w-1/2 flex flex-col ${isAr ? 'items-end text-right' : 'items-start text-left'}`}
          >
            <span 
              dir="auto"
              style={{ unicodeBidi: "plaintext" }}
              className="text-[#bcd647] font-black tracking-[0.4em] text-[10px] uppercase mb-6 block"
            >
              {ceoSectionLabel || "A Message From Leadership"}
            </span>
            
            <h2 
              dir="auto"
              style={{ unicodeBidi: "plaintext" }}
              className="text-white text-3xl md:text-4xl lg:text-5xl font-black uppercase leading-[1.15] mb-6 md:mb-8 tracking-tight"
            >
              {(ceoName || "Eng. Ahmed Sorour").split(" ").slice(0, -1).join(" ")} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#43becc] to-white/60">
                {(ceoName || "Eng. Ahmed Sorour").split(" ").slice(-1)}
              </span>
            </h2>

            {/* Quote section - flip padding and quote position for RTL */}
            <div className={`relative ${isAr ? 'pr-4 md:pr-6 pl-0' : 'pl-4 md:pl-6'}`}>
              <span className={`absolute -top-4 ${isAr ? '-right-2 md:-right-4' : '-left-2 md:-left-4'} text-[60px] md:text-[80px] text-white/[0.08] font-serif leading-none select-none`}>&ldquo;</span>
              
              <p 
                dir="auto"
                style={{ unicodeBidi: "plaintext" }}
                className="text-zinc-400 text-base md:text-lg leading-relaxed font-medium mb-6 relative z-10 italic"
              >
                {ceoQuote || "At DYNATECH, we don't just import technology; we architect local industrial ecosystems. Our commitment is to bridge the gap between global innovation and regional investment, creating a sustainable future for Egypt's high-tech sectors."}
              </p>
            </div>

            <div className="mt-6 md:mt-8 mb-8 md:mb-10">
              <p 
                dir="auto"
                style={{ unicodeBidi: "plaintext" }}
                className="text-[#43becc] text-2xl md:text-3xl opacity-80 italic font-serif"
              >
                {(ceoName || "Ahmed Sorour").split(" ").slice(-1)}
              </p>
              <p 
                dir="auto"
                style={{ unicodeBidi: "plaintext" }}
                className={`text-white/30 text-[10px] uppercase tracking-[0.3em] font-bold mt-2 ${isAr ? 'text-right' : 'text-left'}`}
              >
                {ceoSubtitle || "Strategic Growth & Engineering Excellence"}
              </p>
            </div>

            {/* CTA - flip arrow direction for RTL */}
            <motion.a
              href={`/${locale}/about`}
              whileHover={{ x: isAr ? -10 : 10 }}
              className={`group inline-flex items-center gap-6 text-white text-xs font-black uppercase tracking-[0.3em] border-b border-white/10 pb-4 transition-all cursor-pointer ${isAr ? 'flex-row-reverse' : ''}`}
            >
              {ceoCtaLabel || "Read Full CEO Message"}
              <span className={`text-[#bcd647] group-hover:${isAr ? '-translate-x-2' : 'translate-x-2'} transition-transform duration-300`}>{isAr ? '←' : '→'}</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// SECTION 3: BRAND OUTRO (DYNA TECH after CEO)
// ============================================
function BrandOutroSection({
  brandLeft,
  brandRight,
  heroImageUrl,
  progress,
}: BrandOutroProps) {
  // Text converges from sides to center
  const opacity = useTransform(progress, [0.7, 0.85], [0, 1]);
  const scale = useTransform(progress, [0.75, 1], [0.9, 1.1]);
  
  // Letters coming from far to center (Convergence)
  const xLeft = useTransform(progress, [0.7, 0.9], ["-30%", "0%"]);
  const xRight = useTransform(progress, [0.7, 0.9], ["30%", "0%"]);
  const taglineOpacity = useTransform(progress, [0.9, 1], [0, 1]);

  return (
    <motion.div 
      style={{ opacity }}
      className="relative h-screen w-full overflow-hidden bg-[#0a0f29] flex items-center justify-center"
    >
      {/* Background Image with Parallax */}
      <motion.div style={{ scale }} className="absolute inset-0 z-10">
        <img
          src={heroImageUrl || "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"}
          alt="DYNATECH Industrial"
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f29] via-transparent to-[#0a0f29]" />
      </motion.div>

      {/* The Focused Brand Name */}
      <div className="relative z-20 flex flex-col items-center">
        <div className="flex items-center justify-center">
          <motion.h2 
            style={{ x: xLeft }}
            className="text-white text-[15vw] font-black uppercase italic tracking-tighter drop-shadow-[0_0_30px_rgba(0,0,0,0.5)]"
          >
            {brandLeft}
          </motion.h2>
          <motion.h2 
            style={{ x: xRight }}
            className="text-[#43becc] text-[15vw] font-black uppercase italic tracking-tighter drop-shadow-[0_0_30px_rgba(0,0,0,0.5)]"
          >
            {brandRight}
          </motion.h2>
        </div>

        {/* Neon line under the name */}
        <div className="h-[2px] bg-gradient-to-r from-transparent via-[#bcd647] to-transparent mt-6 w-48" />
        
        <motion.p 
          style={{ opacity: taglineOpacity }}
          className="text-white/40 text-xs md:text-sm uppercase tracking-[0.5em] mt-6 font-bold"
        >
          The Future of Industry
        </motion.p>
      </div>
    </motion.div>
  );
}

// ============================================
// MAIN EXPORT: Combines all sections
// ============================================
export function HeroSection({
  locale,
  isAr,
  slogan,
  subheading,
  primaryCtaLabel,
  primaryCtaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
  heroImageUrl,
  ceoQuote,
  ceoName,
  ceoTitle,
  ceoCtaLabel,
  ceoSectionLabel,
  ceoSubtitle,
  ceoImageUrl,
  brandLeft,
  brandRight,
}: {
  locale: string;
  isAr: boolean;
  slogan: string;
  subheading: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
  heroImageUrl?: string;
  ceoQuote?: string;
  ceoName?: string;
  ceoTitle?: string;
  ceoCtaLabel?: string;
  ceoSectionLabel?: string;
  ceoSubtitle?: string;
  ceoImageUrl?: string;
  brandLeft: string;
  brandRight: string;
}) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Parallax and Scale Effects
  const imageScale = useTransform(scrollYProgress, [0, 0.4], [1.1, 0.8]);
  const imageRadius = useTransform(scrollYProgress, [0, 0.4], ["0px", "60px"]);
  const textY = useTransform(scrollYProgress, [0, 0.3], [0, -150]);
  const mainOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  // Hide Hero section after 60% scroll to allow BrandOutro to show
  const heroVisibility = useTransform(scrollYProgress, [0, 0.6, 0.65], [1, 1, 0]);

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-[#0a0f29] font-['Montserrat',sans-serif]">
      {/* Section 1: Hero - with controlled visibility */}
      <motion.div
        style={{ opacity: heroVisibility }}
        className="sticky top-0 h-screen w-full z-10"
      >
        <HeroMainSection
          slogan={slogan}
          subheading={subheading}
          primaryCtaLabel={primaryCtaLabel}
          primaryCtaHref={primaryCtaHref}
          secondaryCtaLabel={secondaryCtaLabel}
          secondaryCtaHref={secondaryCtaHref}
          heroImageUrl={heroImageUrl}
          imageScale={imageScale}
          imageRadius={imageRadius}
          textY={textY}
          mainOpacity={mainOpacity}
          isAr={isAr}
        />
      </motion.div>

      {/* Section 2: CEO - Natural scroll with higher z-index */}
      <div className="relative z-30">
        <CeoMessageSection
          ceoName={ceoName}
          ceoTitle={ceoTitle}
          ceoCtaLabel={ceoCtaLabel}
          ceoSectionLabel={ceoSectionLabel}
          ceoSubtitle={ceoSubtitle}
          ceoImageUrl={ceoImageUrl}
          heroImageUrl={heroImageUrl}
          ceoQuote={ceoQuote}
          isAr={isAr}
          locale={locale}
        />
      </div>

      {/* Section 3: Brand Outro - Highest z-index to appear on top */}
      <div className="sticky bottom-0 h-screen w-full z-50 pointer-events-none">
        <BrandOutroSection
          brandLeft={brandLeft}
          brandRight={brandRight}
          heroImageUrl={heroImageUrl}
          progress={scrollYProgress}
        />
      </div>
    </section>
  );
}