"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Cpu, Shield, Globe, Terminal, Zap, ChevronRight, Activity } from "lucide-react";

const SERVICES = [
  {
    id: "01",
    title: "SYSTEM CORE",
    subtitle: "Architecture & Scalability",
    desc: "نحن نبني العمود الفقري الرقمي للمؤسسات الكبرى، مع ضمان استقرار الأنظمة تحت أقصى ظروف الضغط.",
    icon: <Terminal size={24} />,
    color: "#43becc",
    tags: ["Microservices", "Cloud Native", "Rust/Go"]
  },
  {
    id: "02",
    title: "NEURAL LINK",
    subtitle: "AI & Machine Learning",
    desc: "دمج الذكاء الاصطناعي في سير العمل اليومي لتحويل البيانات الخام إلى قرارات ذكية وتلقائية.",
    icon: <Cpu size={24} />,
    color: "#bcd647",
    tags: ["LLM", "Deep Learning", "Automation"]
  },
  {
    id: "03",
    title: "GHOST SHELL",
    subtitle: "Cybersecurity Protocols",
    desc: "تأمين الأصول الرقمية من خلال طبقات تشفير معقدة وبروتوكولات دفاعية استباقية لا يمكن اختراقها.",
    icon: <Shield size={24} />,
    color: "#8e257a",
    tags: ["Zero-Trust", "Encryption", "Audit"]
  }
];

export default function CyberDeckServices() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <main className="min-h-screen bg-[#020202] text-white p-6 md:p-20 font-['Montserrat',sans-serif]">
      
      {/* 1. الخلفية التقنية (Grid & Glow) */}
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: "radial-gradient(#43becc 0.5px, transparent 0.5px)", backgroundSize: "40px 40px" }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* العناوين العليا */}
        <div className="mb-20">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#43becc] font-mono text-xs tracking-[0.5em] mb-4 uppercase"
          >
            // Raptors_Operational_Capabilities
          </motion.p>
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter italic leading-none">
            TECH <br /> <span className="text-transparent" style={{ WebkitTextStroke: "1px #fff" }}>SOLUTIONS.</span>
          </h2>
        </div>

        {/* منطقة العرض الرئيسية (The Deck) */}
        <div className="grid lg:grid-cols-[400px_1fr] gap-10 items-start">
          
          {/* القائمة اليسرى (Selection Menu) */}
          <div className="space-y-4">
            {SERVICES.map((service, index) => (
              <button
                key={service.id}
                onMouseEnter={() => setActiveTab(index)}
                className={`w-full group relative flex items-center justify-between p-6 transition-all duration-300 border-l-4 ${
                  activeTab === index ? "bg-[#43becc]/10 border-[#43becc]" : "border-white/5 bg-transparent hover:bg-white/5"
                }`}
              >
                <div className="flex items-center gap-6">
                  <span className={`font-mono text-xs ${activeTab === index ? "text-[#43becc]" : "text-zinc-600"}`}>
                    [{service.id}]
                  </span>
                  <h3 className={`text-xl font-black uppercase tracking-widest ${activeTab === index ? "text-white" : "text-zinc-500"}`}>
                    {service.title}
                  </h3>
                </div>
                <ChevronRight className={`transition-transform ${activeTab === index ? "rotate-90 text-[#43becc]" : "text-zinc-800"}`} />
              </button>
            ))}
          </div>

          {/* شاشة العرض اليمنى (Data Display) */}
          <div className="relative min-h-[500px] bg-white/[0.02] border border-white/5 rounded-3xl p-10 backdrop-blur-3xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -20, filter: "blur(10px)" }}
                transition={{ duration: 0.3 }}
                className="relative z-10 h-full flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <div style={{ color: SERVICES[activeTab].color }} className="p-4 bg-white/5 rounded-2xl border border-current/20 shadow-[0_0_20px_rgba(0,0,0,0.3)]">
                      {SERVICES[activeTab].icon}
                    </div>
                    <div>
                      <h4 className="text-2xl font-black text-white uppercase italic">{SERVICES[activeTab].subtitle}</h4>
                      <p className="text-[#bcd647] font-mono text-[10px] tracking-widest uppercase mt-1">Status: Operational</p>
                    </div>
                  </div>

                  <p className="text-zinc-400 text-xl leading-relaxed max-w-2xl mb-10">
                    {SERVICES[activeTab].desc}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {SERVICES[activeTab].tags.map(tag => (
                      <span key={tag} className="px-4 py-1 bg-white/5 border border-white/10 text-[9px] font-bold text-zinc-500 uppercase tracking-widest rounded-full">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* زخرفة تقنية داخل العرض */}
                <div className="mt-20 pt-10 border-t border-white/5 flex justify-between items-center">
                   <div className="flex gap-2">
                      <Activity size={14} className="text-[#43becc] animate-pulse" />
                      <span className="text-[8px] font-mono text-zinc-600 uppercase">Packet_Loss: 0% // Latency: 2ms</span>
                   </div>
                   <button className="text-[10px] font-black uppercase text-[#43becc] hover:text-white transition-colors border-b border-[#43becc]">
                      View Full Documentation
                   </button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* تأثير خلفية متحرك خاص بالتبويب المفتوح */}
            <motion.div 
              animate={{ 
                opacity: [0.1, 0.2, 0.1],
                scale: [1, 1.1, 1]
              }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full blur-[100px] pointer-events-none"
              style={{ backgroundColor: SERVICES[activeTab].color + "33" }}
            />
          </div>

        </div>
      </div>

      {/* شريط معلومات سفلي (Footer HUD) */}
      <div className="fixed bottom-0 left-0 w-full p-4 border-t border-white/5 bg-black/80 backdrop-blur-md z-50 flex justify-between px-10">
        <div className="flex items-center gap-6">
           <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-[#43becc] rounded-full animate-ping" />
              <span className="text-[8px] font-mono text-zinc-500 uppercase">Encryption_Mode: active</span>
           </div>
        </div>
        <p className="text-[8px] font-mono text-zinc-700 uppercase">© Raptors_Corp // All_Rights_Reserved</p>
      </div>
    </main>
  );
}