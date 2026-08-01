"use client";

import { useEffect } from "react";

export function AmbientMotion() {
  useEffect(() => {
    const root = document.documentElement;
    let frame = 0;

    const setPointer = (event: PointerEvent) => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const x = (event.clientX / window.innerWidth) * 100;
        const y = (event.clientY / window.innerHeight) * 100;
        root.style.setProperty("--ambient-x", `${x.toFixed(2)}%`);
        root.style.setProperty("--ambient-y", `${y.toFixed(2)}%`);
      });
    };

    window.addEventListener("pointermove", setPointer, { passive: true });

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", setPointer);
    };
  }, []);

  return (
    <div className="ambient-motion" aria-hidden="true">
      <div className="ambient-motion__grid" />
      <div className="ambient-motion__signal ambient-motion__signal--one" />
      <div className="ambient-motion__signal ambient-motion__signal--two" />
      <div className="ambient-motion__cursor" />
      <div className="ambient-motion__scan" />
      <div className="ambient-motion__flow ambient-motion__flow--one" />
      <div className="ambient-motion__flow ambient-motion__flow--two" />
      <div className="ambient-motion__flow ambient-motion__flow--three" />
      <div className="ambient-motion__frame ambient-motion__frame--one" />
      <div className="ambient-motion__frame ambient-motion__frame--two" />
    </div>
  );
}
