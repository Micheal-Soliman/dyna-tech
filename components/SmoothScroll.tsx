"use client";

import Lenis from "lenis";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { useEffect, useRef } from "react";

export default function SmoothScroll({
  children,
}: {
  children: ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);
  const rafIdRef = useRef<number | null>(null);
  const pathname = usePathname();
  const isHomePage = /^\/(en|ar)\/?$/.test(pathname);

  useEffect(() => {
    const media = window.matchMedia(
      "(prefers-reduced-motion: reduce), (pointer: coarse), (max-width: 768px)"
    );

    function start() {
      if (lenisRef.current) return;

      const lenis = new Lenis({
        duration: 1.1,
        lerp: 0.08,
        smoothWheel: true,
        wheelMultiplier: 1,
      });

      lenisRef.current = lenis;

      const raf = (time: number) => {
        lenis.raf(time);

        rafIdRef.current = requestAnimationFrame(raf);
      };

      rafIdRef.current = requestAnimationFrame(raf);
    }

    function stop() {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }

      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
    }

    function apply() {
      if (isHomePage || media.matches) stop();
      else start();
    }

    apply();

    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", apply);
      return () => {
        media.removeEventListener("change", apply);
        stop();
      };
    }

    media.addListener(apply);
    return () => {
      media.removeListener(apply);
      stop();
    };
  }, [isHomePage]);

  return <>{children}</>;
}
