"use client";

import type { ReactNode } from "react";
import type { MotionValue } from "framer-motion";
import { motion } from "framer-motion";
import { Globe, Zap, ArrowRight } from "lucide-react";

import Layer from "./Layer";

type Props = {
    progress: MotionValue<number>;
};

export default function FinalLinksLayer({ progress }: Props) {
    return (
        <Layer progress={progress} range={[0.92, 1]}>
            <div className="relative flex flex-col items-center max-w-5xl w-full px-6">

                {/* Decorative Grid Background */}
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#bcd647]/5 via-transparent to-transparent blur-3xl" />

                {/* 1. Quick Links Cards */}
                <div className="grid md:grid-cols-2 gap-6 w-full mb-20">
                    <QuickLinkCard
                        title="Knowledge Hub"
                        subtitle="Technical Resources"
                        icon={<Globe size={18} />}
                        color="#bcd647"
                    />
                    <QuickLinkCard
                        title="Career Portal"
                        subtitle="Join The Force"
                        icon={<Zap size={18} />}
                        color="#43becc"
                    />
                </div>

                {/* 2. Main CTA Section */}
                <div className="text-center space-y-12">
                    <div className="space-y-4">
                        <motion.p
                            initial={{ opacity: 0, letterSpacing: "0.2em" }}
                            whileInView={{ opacity: 1, letterSpacing: "1em" }}
                            className="text-[#bcd647] font-mono text-[10px] uppercase italic"
                        >
              {"// Connection_Established"}
                        </motion.p>
                        <h2 className="relative z-10 w-full text-[7vw] md:text-[5vw] font-black italic uppercase leading-[0.85] tracking-tighter text-white">
                            <span className="block opacity-80">READY TO</span>

                            <span className="relative inline-block mt-2">
                                <span className="relative z-10 text-[#bcd647] px-4">
                                    CONNECT?
                                </span>
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                    className="absolute -bottom-2 left-0 h-[2px] bg-gradient-to-r from-[#bcd647] to-transparent"
                                />
                            </span>
                        </h2>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative px-12 py-6 md:px-20 md:py-10 bg-white overflow-hidden transition-all duration-500"
                    >
                        <div className="absolute inset-0 bg-[#bcd647] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                        <span className="relative z-10 flex items-center gap-4 text-black font-black text-xl md:text-3xl italic uppercase tracking-tighter">
                            Start Partnership
                            <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" size={32} />
                        </span>
                    </motion.button>
                </div>

                {/* Footer Info */}
                <div className="absolute -bottom-20 flex justify-between w-full border-t border-white/5 pt-4 opacity-30">
                    <p className="text-[8px] font-mono uppercase tracking-widest text-zinc-500">DYNATECH_INDUSTRIES // EST.2024</p>
                    <p className="text-[8px] font-mono uppercase tracking-widest text-zinc-500">info@dynatech-eg.net</p>
                </div>
            </div>
        </Layer>
    );
}

// مكون فرعي للكروت الجانبية
function QuickLinkCard({
    title,
    subtitle,
    icon,
    color,
}: {
    title: string;
    subtitle: string;
    icon: ReactNode;
    color: string;
}) {
    return (
        <motion.div
            whileHover={{ y: -5, borderColor: color }}
            className="group cursor-pointer p-8 bg-white/[0.03] border border-white/10 rounded-[30px] backdrop-blur-xl transition-all duration-300 flex items-center justify-between"
        >

            <div className="space-y-2 text-left">
                <p className="text-zinc-500 font-mono text-[9px] uppercase tracking-widest italic group-hover:text-white transition-colors">
                    {subtitle}
                </p>
                <h4 className="text-white text-xl font-black italic uppercase tracking-tight">
                    {title}
                </h4>
            </div>
            <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-black transition-all group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                style={{ backgroundColor: color }}
            >
                {icon}
            </div>
        </motion.div>
    );
}