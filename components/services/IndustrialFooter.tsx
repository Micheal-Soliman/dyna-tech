"use client";

export default function IndustrialFooter() {
  return (
    <footer className="py-10 border-t border-white/5 bg-black px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-[8px] text-zinc-600 font-mono tracking-widest uppercase">
          &copy; 2026 Dynatech Industrial Development. All rights reserved.
        </div>
        <div className="flex gap-8 items-center text-[8px] font-black text-white/40 tracking-[0.3em] uppercase italic">
          <span>Cairo, EG</span>
          <span className="h-4 w-[1px] bg-white/10" />
          <span>Fulda, GER</span>
        </div>
      </div>
    </footer>
  );
}
