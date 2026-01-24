"use client";
import React, { useEffect } from "react";
import { animate, motion, useMotionValue, useTransform, type Variants } from "framer-motion";
import {
    ArrowLeft, CheckCircle2, BarChart3, Quote,
    Cpu, Globe, Zap, ArrowRight, ExternalLink
} from "lucide-react";

// إعدادات الأنيميشن الافتراضية للظهور عند السكرول
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: EASE }
    }
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

type CounterProps = {
    value: number;
    duration?: number;
};

const Counter = ({ value, duration = 2 }: CounterProps) => {
    const count = useMotionValue(0);
    // إضافة spring لجعل الحركة أكثر انسيابية (Bounce خفيف)
    const rounded = useTransform(count, (latest) => {
        // التعامل مع الأرقام العشرية مثل 2.5 أو الأرقام الصحيحة
        return latest.toFixed(value % 1 !== 0 ? 1 : 0);
    });

    useEffect(() => {
        const controls = animate(count, value, { duration: duration, ease: "circOut" });
        return controls.stop;
    }, [value, duration]);

    return <motion.span>{rounded}</motion.span>;
};

export default function IndividualCaseStudy() {

    return (
        <div className="bg-[#020202] text-zinc-300 font-mono selection:bg-[#43becc] selection:text-black">

            {/* 2. HERO HEADER (Reveal Animation) */}
            <section className="py-24 px-6 md:px-16 border-b border-white/5 relative overflow-hidden">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-end relative z-10"
                >
                    <motion.div variants={fadeInUp}>
                        <span className="text-[#43becc] text-[10px] font-bold tracking-[0.4em] uppercase mb-6 block italic">
                            Data_Log // Sector: Pharma_Healthcare
                        </span>
                        <h1 className="text-6xl md:text-9xl font-[1000] italic uppercase tracking-[ -0.05em] text-white leading-[0.8]">
                            AL-NAHDI<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/20">MEDICAL.</span>
                        </h1>
                    </motion.div>

                    <motion.div variants={fadeInUp} className="flex flex-col items-end gap-6">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-[#43becc]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="w-32 h-32 bg-zinc-900 border border-white/10 flex items-center justify-center relative z-10">
                                <span className="text-[10px] font-black opacity-20 text-center uppercase">Logo_Ref</span>
                            </div>
                        </div>
                        <p className="text-right text-[9px] text-zinc-500 font-bold uppercase tracking-[0.3em] leading-loose">
                            Ref_ID: <span className="text-white">NH-2024</span> <br />
                            Region: <span className="text-white">Saudi_Arabia</span>
                        </p>
                    </motion.div>
                </motion.div>
            </section>

            {/* 3. METRICS (ULTRA-MODERN HUD STYLE WITH COUNTERS) */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b border-white/5 bg-[#050505]"
            >
                {[
                    { label: "Efficiency_Boost", val: 40, unit: "%", icon: <Zap size={14} />, color: "#bcd647" },
                    { label: "Compliance_Rate", val: 100, unit: "%", icon: <CheckCircle2 size={14} />, color: "#43becc" },
                    { label: "Payroll_Speed", val: 2.5, unit: "x", icon: <BarChart3 size={14} />, color: "#bcd647" },
                    { label: "System_Uptime", val: 99.9, unit: "%", icon: <Globe size={14} />, color: "#43becc" },
                ].map((stat, i) => (
                    <motion.div
                        key={i}
                        variants={fadeInUp}
                        className="relative p-12 border-r border-white/5 overflow-hidden group hover:bg-black transition-all duration-500"
                    >
                        {/* خلفية تفاعلية */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                            <div className="absolute top-[-20%] left-[-20%] w-[150px] h-[150px] bg-[#43becc]/10 blur-[60px] rounded-full" />
                        </div>

                        <div className="relative z-10 space-y-8">
                            <div className="flex justify-between items-start">
                                <div className="p-3 border border-white/5 bg-white/[0.02] relative" style={{ color: stat.color }}>
                                    {stat.icon}
                                    <div className="absolute -top-1 -right-1 w-1 h-1 bg-current" />
                                </div>
                                <span className="text-[8px] font-mono text-zinc-700 tracking-[0.3em] uppercase">
                                    DS_{i + 1} // METRIC_LIVE
                                </span>
                            </div>

                            <div className="space-y-1">
                                <div className="flex items-baseline gap-1">
                                    <h3 className="text-6xl font-[1000] italic text-white tracking-tighter">
                                        <Counter value={stat.val} />
                                    </h3>
                                    <span className="text-2xl font-black italic text-[#43becc]">{stat.unit}</span>
                                </div>
                                <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 font-bold group-hover:text-white transition-colors">
                                    {stat.label}
                                </p>
                            </div>

                            {/* الـ Animated Mini-graph اللي عملناه */}
                            <div className="flex items-end gap-[3px] h-10 opacity-20 group-hover:opacity-100 transition-opacity duration-700">
                                {[...Array(15)].map((_, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ height: 2 }}
                                        whileInView={{ height: Math.random() * 25 + 5 }}
                                        transition={{ repeat: Infinity, duration: 1.2, repeatType: 'reverse', delay: idx * 0.05 }}
                                        className="w-[2px] bg-zinc-800"
                                        style={{ backgroundColor: idx % 4 === 0 ? stat.color : '' }}
                                    />
                                ))}
                            </div>

                            <div className="pt-4 border-t border-white/5 flex justify-between items-center text-[7px] font-mono text-zinc-800">
                                <span className="flex items-center gap-2">
                                    <span className="w-1 h-1 bg-[#bcd647] rounded-full animate-ping" />
                                    STREAMING_DATA
                                </span>
                                <span>VAL_SYNC: OK</span>
                            </div>
                        </div>

                        {/* الخط الجمالي المتحرك في الأسفل */}
                        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#43becc] to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
                    </motion.div>
                ))}
            </motion.section>

            {/* 4. CONTENT BODY (Reveal on Scroll) */}
            <section className="py-32 px-6 md:px-16 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-12 gap-24">

                    <div className="lg:col-span-8 space-y-32">
                        {/* The Challenge */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            variants={fadeInUp}
                            className="space-y-10"
                        >
                            <h2 className="text-2xl font-black italic uppercase tracking-widest flex items-center gap-6 text-white">
                                <span className="w-12 h-[1px] bg-[#43becc]" /> 01_The_Challenge
                            </h2>
                            <p className="text-2xl font-light leading-relaxed italic text-zinc-400 pl-18">
                                Al-Nahdi was facing massive delays in <span className="text-white">GOSI compliance</span> reporting and payroll processing. The legacy system lacked localization, causing 15% error margins in monthly audits.
                            </p>
                        </motion.div>

                        {/* Raptor Solution */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            variants={fadeInUp}
                            className="space-y-10"
                        >
                            <h2 className="text-2xl font-black italic uppercase tracking-widest flex items-center gap-6 text-[#43becc]">
                                <span className="w-12 h-[1px] bg-[#43becc]" /> 02_Raptor_Solution
                            </h2>
                            <div className="pl-18 space-y-12">
                                <p className="text-xl leading-relaxed font-light">
                                    We engineered a <span className="text-white underline decoration-[#43becc] underline-offset-8">Clean-Core SAP SuccessFactors</span> architecture, eliminating custom technical debt while providing 100% localization.
                                </p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {['Automated Zakat reporting', 'BTP Extension Suite', 'KSA Localization Pack', 'HCM Cloud Migration'].map((item, idx) => (
                                        <motion.div
                                            key={item}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: idx * 0.1 }}
                                            className="flex items-center gap-4 p-5 bg-zinc-950 border border-white/5 text-[10px] font-black uppercase tracking-widest"
                                        >
                                            <div className="w-1.5 h-1.5 bg-[#bcd647]" /> {item}
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Sidebar (Sticky) */}
                    <aside className="lg:col-span-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="sticky top-32 p-10 bg-zinc-900/50 border border-white/10 space-y-12"
                        >
                            <div className="space-y-6">
                                <Quote className="text-[#43becc] opacity-50" size={32} />
                                <p className="text-lg italic leading-relaxed text-white">
                                    "Raptor's precision in SAP localization is unmatched in the MENA region."
                                </p>
                                <div>
                                    <p className="font-black italic uppercase text-[11px] tracking-widest text-white">Dr. Ahmed Salem</p>
                                    <p className="text-[9px] uppercase text-zinc-600 font-bold">CTO // Al-Nahdi Medical</p>
                                </div>
                            </div>

                            <div className="pt-10 border-t border-white/5 space-y-6">
                                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600">Core_Stack</h4>
                                <div className="flex flex-wrap gap-2">
                                    {['S/4HANA', 'BTP', 'HXM'].map(s => (
                                        <span key={s} className="px-3 py-1 bg-white/5 border border-white/10 text-[9px] font-bold text-[#43becc]">{s}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </aside>
                </div>
            </section>

            {/* 5. ACCELERATORS (Scroll Reveal) */}
            <section className="py-32 px-6 md:px-16 bg-white/[0.01] border-y border-white/5">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="max-w-7xl mx-auto"
                >
                    <motion.h3 variants={fadeInUp} className="text-[10px] font-black uppercase tracking-[0.6em] mb-16 text-center text-zinc-500">
                        Proprietary_Tech_Deployment
                    </motion.h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        {['GOSI_Bridge_v2', 'Zakat_Engine'].map((tech, i) => (
                            <motion.div
                                key={tech}
                                variants={fadeInUp}
                                whileHover={{ y: -10 }}
                                className="p-10 border border-white/10 bg-black hover:border-[#43becc]/40 transition-all cursor-pointer group"
                            >
                                <h4 className="text-2xl font-[1000] italic mb-4 uppercase group-hover:text-[#43becc]">{tech}</h4>
                                <p className="text-sm text-zinc-500 font-light leading-relaxed mb-8">Advanced middleware designed for rapid GCC compliance orchestration.</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-[9px] font-black tracking-widest text-zinc-700 italic underline">View_Documentation</span>
                                    <ExternalLink size={14} className="text-zinc-700" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* 6. CTA (Final Interaction) */}
            <section className="py-48 px-6 text-center relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative z-10"
                >
                    <h2 className="text-6xl md:text-8xl font-[1000] italic uppercase tracking-tighter mb-12">
                        Initialize<br /><span className="text-[#43becc]">Evolution.</span>
                    </h2>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-16 py-8 bg-white text-black font-black uppercase text-[11px] tracking-[0.6em] relative overflow-hidden group"
                    >
                        <span className="relative z-10">Request_System_Audit()</span>
                        <div className="absolute inset-0 bg-[#43becc] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    </motion.button>
                </motion.div>
            </section>

        </div>
    );
}