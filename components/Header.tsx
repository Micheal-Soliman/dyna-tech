"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
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

  const { currentLocale, navItems, isAr } = useMemo(() => {
    const parts = pathname.split("/").filter(Boolean);
    const locale = parts[0] === "ar" ? "ar" : "en";
    const _isAr = locale === "ar";

    return {
      currentLocale: locale,
      isAr: _isAr,
      navItems: [
        { href: `/${locale}`, label: "Home" },
        { href: `/${locale}/about`, label: "About Us" },
        { href: `/${locale}/services`, label: "Technology Partners" },
        { href: `/${locale}/case-study`, label: "The Auto Hub" },
        { href: `/${locale}/knowledge`, label: "Tech Info" },
        { href: `/${locale}/career`, label: "Careers" },
      ],
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
        className={`fixed inset-x-0 top-0 z-[100] transition-all duration-700 ${
          showGlass
            ? "border-b border-white/[0.08] bg-black/60 py-4 backdrop-blur-xl"
            : "bg-transparent py-8"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-6">
          <Link href={`/${currentLocale}`} className="group relative flex shrink-0 items-center">
            <div className="h-16 w-[80px] md:h-[84px] md:w-[150px]">
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

          <nav className="hidden items-center rounded-full border border-white/[0.08] bg-white/[0.03] p-1.5 backdrop-blur-md lg:flex">
            {navItems.map((item) => {
              const isActive = isNavActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative rounded-full px-5 py-2 text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${
                    isActive ? "text-black" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 z-0 rounded-full bg-[#0087cb] shadow-[0_0_15px_rgba(0,135,203,0.5)]"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-3">
            <LocaleSwitcher className="hidden border-none bg-transparent px-3 py-2 text-[10px] font-black uppercase text-white transition-all hover:bg-white/5 hover:text-[#0087cb] hover:ring-1 hover:ring-[#0087cb]/40 md:flex" />

            <Link
              href={`/${currentLocale}/career`}
              className="group relative hidden items-center gap-2 overflow-hidden rounded-full bg-white px-6 py-2.5 text-[10px] font-black uppercase tracking-widest text-black transition-all hover:bg-[#0087cb] hover:text-white md:flex"
            >
              <span className="relative z-10">Careers</span>
              <ArrowRight size={14} className="relative z-10" />
            </Link>

            <button
              onClick={() => setMenuOpenPathname(pathname)}
              className="cursor-pointer rounded-full p-2 text-white transition-colors hover:bg-white/5 lg:hidden"
              aria-label="Open menu"
              type="button"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpenPathname(null)}
              className="fixed inset-0 z-[110] bg-black/60 backdrop-blur-sm lg:hidden"
            />

            <motion.div
              initial={{ x: isAr ? "100%" : "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: isAr ? "100%" : "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className={`fixed bottom-0 top-0 z-[120] flex w-[80%] max-w-[320px] flex-col border-white/10 bg-black shadow-2xl lg:hidden ${
                isAr ? "right-0 border-l" : "left-0 border-r"
              }`}
            >
              <div className="flex items-center justify-between border-b border-white/5 p-6">
                <span className="text-sm font-black uppercase tracking-tighter text-[#0087cb]">Menu</span>
                <button onClick={() => setMenuOpenPathname(null)} className="p-1 text-white" type="button">
                  <X size={24} />
                </button>
              </div>

              <nav className="flex-1 space-y-6 overflow-y-auto p-8">
                {navItems.map((item) => {
                  const isActive = isNavActive(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMenuOpenPathname(null)}
                      className={`block text-2xl font-black uppercase tracking-tighter transition-all ${
                        isActive ? "translate-x-2 text-[#0087cb]" : "text-zinc-500 hover:text-white"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>

              <div className="space-y-4 border-t border-white/5 bg-zinc-900/50 p-8">
                <LocaleSwitcher className="justify-start p-0 font-bold text-white" />
                <Link
                  href={`/${currentLocale}/career`}
                  onClick={() => setMenuOpenPathname(null)}
                  className="flex w-full items-center justify-center rounded-xl bg-[#0087cb] py-4 text-xs font-black uppercase tracking-widest text-black"
                >
                  Careers
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
