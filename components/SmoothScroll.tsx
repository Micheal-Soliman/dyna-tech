"use client";

import Lenis from "lenis";
import type { ReactNode } from "react";
import { useEffect, useRef } from "react";

export default function SmoothScroll({
  children,
}: {
  children: ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);
  const rafIdRef = useRef<number | null>(null);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");

    function start() {
      if (lenisRef.current) return;

      const lenis = new Lenis({
        duration: 1.5,
        lerp: 0.1,
        smoothWheel: true,
        wheelMultiplier: 1,
      });

      let lastScroll = -1;
      lenis.on("scroll", (e: any) => {
        const next = typeof e?.scroll === "number" ? e.scroll : window.scrollY;
        if (next === lastScroll) return;
        lastScroll = next;
        window.dispatchEvent(new Event("scroll"));
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
      if (media.matches) stop();
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
  }, []);

  return <>{children}</>;
}
