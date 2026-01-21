"use client";

import { motion } from "framer-motion";

export function Footer({
  description,
  navigationTitle,
  navExpertise,
  navVisuals,
  navStats,
  navAnnouncements,
  newsletterTitle,
  newsletterPlaceholder,
  newsletterJoin,
  newsletterHint,
  rights,
  privacyPolicy,
  termsOfService,
  socialTwitter,
  socialLinkedIn,
  socialInstagram,
}: {
  description: string;
  navigationTitle: string;
  navExpertise: string;
  navVisuals: string;
  navStats: string;
  navAnnouncements: string;
  newsletterTitle: string;
  newsletterPlaceholder: string;
  newsletterJoin: string;
  newsletterHint: string;
  rights: string;
  privacyPolicy: string;
  termsOfService: string;
  socialTwitter: string;
  socialLinkedIn: string;
  socialInstagram: string;
}) {
  const currentYear = new Date().getFullYear();
  const rightsText = rights.replace("{year}", String(currentYear));

  return (
    <footer className="relative bg-[#0a0f29] pt-24 pb-12 overflow-hidden font-['Montserrat',sans-serif]">
      {/* 1. تأثير الشبكة المنظورية في الخلفية (Perspective Grid) */}
      <div 
        className="absolute bottom-0 left-0 w-full h-[300px] opacity-10 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#43becc 1px, transparent 1px), linear-gradient(90deg, #43becc 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          transform: 'perspective(500px) rotateX(45deg)',
          maskImage: 'linear-gradient(to top, black, transparent)'
        }}
      />

      {/* 2. توهج نيون خلفي */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-[#43becc]/50 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          
          {/* القسم الأول: البراند والوصف */}
          <div className="md:col-span-5 space-y-8">
            <motion.div 
              initial={{ opacity: 0 }} 
              whileInView={{ opacity: 1 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-[#43becc] rounded-xl flex items-center justify-center shadow-[0_0_20px_#43becc]">
                 <span className="text-black font-black text-xl">R</span>
              </div>
              <h2 className="text-white text-3xl font-black tracking-tighter">RAPTORS <span className="text-[#43becc]">ME</span></h2>
            </motion.div>
            
            <p
              dir="auto"
              style={{ unicodeBidi: "plaintext" }}
              className="text-zinc-400 text-lg leading-relaxed max-w-md"
            >
              {description}
            </p>

            <div className="flex gap-4">
              {[socialTwitter, socialLinkedIn, socialInstagram].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ y: -5, color: '#43becc' }}
                  className="text-white/40 text-sm font-bold uppercase tracking-widest transition-colors"
                >
                  {social}
                </motion.a>
              ))}
            </div>
          </div>

          {/* القسم الثاني: روابط سريعة */}
          <div className="md:col-span-3">
            <h4
              dir="auto"
              style={{ unicodeBidi: "plaintext" }}
              className="text-white font-black uppercase text-xs tracking-[0.3em] mb-10 border-l-2 border-[#bcd647] pl-4"
            >
              {navigationTitle}
            </h4>
            <ul className="space-y-4">
              {[
                { id: "expertise", label: navExpertise },
                { id: "visuals", label: navVisuals },
                { id: "stats", label: navStats },
                { id: "announcements", label: navAnnouncements },
              ].map((item) => (
                <li key={item.id}>
                  <motion.a 
                    href={`#${item.id}`}
                    whileHover={{ x: 10 }}
                    className="text-zinc-500 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-[1px] bg-[#43becc] group-hover:w-4 transition-all" />
                    <span dir="auto" style={{ unicodeBidi: "plaintext" }}>{item.label}</span>
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* القسم الثالث: الاشتراك (Newsletter) */}
          <div className="md:col-span-4">
            <h4
              dir="auto"
              style={{ unicodeBidi: "plaintext" }}
              className="text-white font-black uppercase text-xs tracking-[0.3em] mb-10 border-l-2 border-[#43becc] pl-4"
            >
              {newsletterTitle}
            </h4>
            <div className="relative group">
              <input 
                type="email" 
                placeholder={newsletterPlaceholder}
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white outline-none focus:border-[#43becc] transition-all"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-[#43becc] text-black font-bold px-6 rounded-xl hover:bg-[#bcd647] transition-colors">
                {newsletterJoin}
              </button>
            </div>
            <p
              dir="auto"
              style={{ unicodeBidi: "plaintext" }}
              className="mt-4 text-zinc-600 text-[10px] uppercase tracking-widest"
            >
              {newsletterHint}
            </p>
          </div>
        </div>

        {/* الجزء السفلي: الحقوق */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p
            dir="auto"
            style={{ unicodeBidi: "plaintext" }}
            className="text-zinc-600 text-xs font-medium"
          >
            {rightsText}
          </p>
          <div className="flex items-center gap-8">
            <a href="#" className="text-zinc-600 hover:text-white text-xs transition-colors" dir="auto" style={{ unicodeBidi: "plaintext" }}>
              {privacyPolicy}
            </a>
            <a href="#" className="text-zinc-600 hover:text-white text-xs transition-colors" dir="auto" style={{ unicodeBidi: "plaintext" }}>
              {termsOfService}
            </a>
          </div>
        </div>
      </div>

      {/* لمسة فنية: "النبض" الضوئي في الزاوية */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#bcd647]/5 blur-[100px] rounded-full pointer-events-none" />
    </footer>
  );
}