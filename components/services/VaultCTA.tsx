"use client";

export default function VaultCTA() {
  return (
    <section className="py-40 bg-[#050505] z-30 relative border-t-2 border-white/10 overflow-hidden text-center">
      <div className="max-w-4xl mx-auto px-6 space-y-12">
        <h3 className="text-5xl md:text-7xl font-[1000] italic tracking-tighter uppercase leading-none text-white">
          READY TO <span className="text-[#bcd647]">SCALE?</span>
        </h3>
        <p className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.4em] max-w-xl mx-auto leading-loose">
          Access our full industrial portfolio and partnership framework for the Egyptian market.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button className="px-12 py-6 bg-white text-black font-[1000] uppercase italic text-[10px] tracking-[0.5em] hover:bg-[#bcd647] transition-all">
            DOWNLOAD_PORTFOLIO()
          </button>
          <button className="px-12 py-6 border-2 border-white/20 text-white font-[1000] uppercase italic text-[10px] tracking-[0.5em] hover:bg-white hover:text-black transition-all">
            REQUEST_BRIEFING()
          </button>
        </div>
      </div>
    </section>
  );
}
