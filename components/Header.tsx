"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { LocaleSwitcher } from "@/components/LocaleSwitcher";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpenPathname, setMenuOpenPathname] = useState<string | null>(null);
  const pathname = usePathname();
  const isMenuOpen = menuOpenPathname === pathname;

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const { currentLocale, navItems, labels, isAr } = useMemo(() => {
    const parts = pathname.split("/").filter(Boolean);
    const locale = parts[0] === "ar" ? "ar" : "en";
    const _isAr = locale === "ar";

    return {
      currentLocale: locale,
      isAr: _isAr,
      labels: {
        demo: _isAr ? "تواصل معنا" : "Contact Us",
      },
      navItems: [
        { href: `/${locale}`, label: _isAr ? "الرئيسية" : "Home" },
        { href: `/${locale}/about`, label: _isAr ? "من نحن" : "About Us" },
        { href: `/${locale}/services`, label: _isAr ? "نطاق العمل" : "Business Scope" },
        { href: `/${locale}/case-study`, label: _isAr ? "المشاريع" : "Projects" },
        { href: `/${locale}/media`, label: _isAr ? "الإعلام" : "Events & Media" },
        { href: `/${locale}/career`, label: _isAr ? "الوظائف" : "Careers" },
      ]
    };
  }, [pathname]);

  const isNavActive = (href: string) => {
    const homeHref = `/${currentLocale}`;
    if (href === homeHref) return pathname === href;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const showGlass = pathname !== `/${currentLocale}` || isScrolled;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[100] transition-all duration-700 ${showGlass
          ? "py-4 bg-black/60 backdrop-blur-xl border-b border-white/[0.08]"
          : "py-8 bg-transparent"
          }`}
      >
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between gap-8">
          
          {/* LOGO */}
          <Link href={`/${currentLocale}`} className="relative group flex items-center shrink-0">
            <div className="h-16 md:h-[84px] w-[80px] md:w-[150px]">
              <Image
                src="/logo-cropped.png"
                alt="DYNATECH"
                width={340}
                height={84}
                priority
                className="h-full w-full object-contain object-left transition-opacity duration-300 group-hover:opacity-80"
              />
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center bg-white/[0.03] border border-white/[0.08] rounded-full p-1.5 backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = isNavActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${
                    isActive ? "text-black" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-[#0087cb] rounded-full z-0 shadow-[0_0_15px_rgba(0,135,203,0.5)]"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* ACTIONS */}
          <div className="flex items-center gap-3 shrink-0">
            <LocaleSwitcher className="hidden md:flex text-white hover:text-[#0087cb] hover:bg-white/5 hover:ring-1 hover:ring-[#0087cb]/40 transition-all text-[10px] font-black uppercase bg-transparent border-none px-3 py-2" />
            
            <Link
              href={`/${currentLocale}/contact`}
              className="group hidden md:flex relative items-center gap-2 bg-white text-black px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest overflow-hidden transition-all hover:bg-[#0087cb] hover:text-white"
            >
              <span className="relative z-10">{labels.demo}</span>
              <ArrowRight size={14} className="relative z-10" />
            </Link>

            {/* HAMBURGER BTN */}
            <button
              onClick={() => setMenuOpenPathname(pathname)}
              className="lg:hidden cursor-pointer p-2 text-white hover:bg-white/5 rounded-full transition-colors"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE SIDE NAV */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpenPathname(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[110] lg:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: isAr ? "100%" : "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: isAr ? "100%" : "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className={`fixed top-0 ${isAr ? 'right-0 border-l' : 'left-0 border-r'} bottom-0 w-[80%] max-w-[320px] bg-black border-white/10 z-[120] lg:hidden shadow-2xl flex flex-col`}
            >
              <div className="p-6 flex items-center justify-between border-b border-white/5">
                <span className="text-[#0087cb] font-black text-sm uppercase tracking-tighter">Menu</span>
                <button onClick={() => setMenuOpenPathname(null)} className="text-white p-1">
                  <X size={24} />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto p-8 space-y-6">
                {navItems.map((item) => {
                  const isActive = isNavActive(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMenuOpenPathname(null)}
                      className={`block text-2xl font-black uppercase tracking-tighter transition-all ${
                        isActive ? "text-[#0087cb] translate-x-2" : "text-zinc-500 hover:text-white"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>

              <div className="p-8 space-y-4 border-t border-white/5 bg-zinc-900/50">
                <LocaleSwitcher className="justify-start p-0 text-white font-bold" />
                <Link
                  href={`/${currentLocale}/contact`}
                  onClick={() => setMenuOpenPathname(null)}
                  className="flex items-center justify-center w-full bg-[#0087cb] text-black py-4 rounded-xl font-black uppercase text-xs tracking-widest"
                >
                  {labels.demo}
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
