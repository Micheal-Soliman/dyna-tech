"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { LocaleSwitcher } from "@/components/LocaleSwitcher";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const parts = pathname.split("/").filter(Boolean);
  const currentLocale = parts[0] === "ar" ? "ar" : "en";
  const isHome = parts.length <= 1;
  const requestDemoHref = `/${currentLocale}/request-demo`;
  const requestDemoLabel = currentLocale === "ar" ? "اطلب عرضًا" : "Request a Demo";

  // تفعيل الشكل الزجاجي عند السكرول أو في الصفحات الفرعية
  const showGlass = !isHome || isScrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 ${
        showGlass
          ? "py-3 bg-[#0a0f29]/60 backdrop-blur-2xl border-b border-white/10"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        
        {/* اللوجو مع تأثير الهوفر النيون */}
        <Link href={`/${currentLocale}`} className="group flex items-center gap-3 relative">
          <div className="relative">
            <motion.div 
               animate={showGlass ? { scale: 0.9 } : { scale: 1 }}
               className="relative z-10 w-10 h-10 flex items-center justify-center bg-white rounded-xl group-hover:shadow-[0_0_20px_#43becc] transition-all duration-500"
            >
              <span className="text-black font-black text-xl">R</span>
            </motion.div>
            {/* توهج خلف اللوجو */}
            <div className="absolute inset-0 bg-[#43becc] blur-lg opacity-0 group-hover:opacity-40 transition-opacity" />
          </div>

          <div className="flex flex-col">
            <span className={`text-lg font-black tracking-tighter leading-none ${
              showGlass ? "text-white" : "text-white"
            }`}>
              RAPTORS <span className="text-[#43becc]">ME</span>
            </span>
            <span className="text-[8px] font-bold tracking-[0.3em] text-[#bcd647] uppercase leading-none mt-1">
              Dynamics
            </span>
          </div>
        </Link>

        {/* الأزرار اليمين بستايل الكبسولة */}
        <div className="flex items-center gap-4">
          <Link
            href={requestDemoHref}
            className={`relative group overflow-hidden inline-flex h-11 items-center justify-center rounded-full px-8 text-xs font-black uppercase tracking-widest transition-all ${
              showGlass
                ? "bg-[#43becc] text-black hover:bg-[#bcd647]"
                : "bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white/20"
            }`}
          >
            <span className="relative z-10">{requestDemoLabel}</span>
            {/* تأثير اللمعان عند الهوفر */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </Link>

          <div className={`h-8 w-[1px] bg-white/10 mx-2 hidden md:block`} />

          <LocaleSwitcher
            className={`transition-all ${
              showGlass
                ? "bg-white/5 border-white/10 text-white hover:bg-white/10"
                : "bg-white/5 border-white/20 text-white hover:bg-white/10"
            } rounded-full px-4 h-11 flex items-center border font-bold text-[10px]`}
          />
        </div>
      </div>

      {/* خط نيون رفيع جداً تحت الهيدر يظهر عند السكرول */}
      {showGlass && (
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#43becc] to-transparent"
        />
      )}
    </header>
  );
}