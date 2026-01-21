"use client";

type Content = {
  status: string;
  downloadLabel: string;
};

export default function ServicesFooter({ content }: { content: Content }) {
  return (
    <div className="max-w-7xl mx-auto mt-20 flex justify-between items-center relative z-10 border-t border-white/5 pt-10">
      <div className="flex items-center gap-4">
        <div className="w-2 h-2 bg-[#bcd647] rounded-full animate-pulse" />
        <p className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest">{content.status}</p>
      </div>
      <button className="text-[10px] font-black uppercase tracking-[0.4em] hover:text-[#43becc] transition-colors">
        {content.downloadLabel}
      </button>
    </div>
  );
}
