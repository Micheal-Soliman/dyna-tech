"use client";
import React, { useRef } from "react";
import { motion, useMotionValue, useScroll, useTransform, useSpring } from "framer-motion";
import {
    ArrowUpRight, Cpu, Globe, Zap,
    Terminal, Workflow, Target, Star,
    Search, MapPin, ChevronRight
} from "lucide-react";

export default function UltraCareersPage() {

    const REASONS = [
        { id: '01', t: "Global_Standard", d: "We implement Clean-Core SAP architectures that become case studies globally.", icon: <Globe size={24} /> },
        { id: '02', t: "Radical_Growth", d: "Internal 'Propel' training ensures you double your technical worth every 12 months.", icon: <Zap size={24} /> },
        { id: '03', t: "Elite_Benefits", d: "Equity options, MENA-wide mobility, and 'Work-from-Anywhere' protocols.", icon: <Target size={24} /> }
    ];

    const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // تأثيرات ناعمة للسكرول
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    // أنيميشن للهيرو: يختفي ويصغر مع السكرول
    const heroScale = useTransform(smoothProgress, [0, 0.15], [1, 0.85]);
    const heroOpacity = useTransform(smoothProgress, [0, 0.15], [1, 0]);
    const heroY = useTransform(smoothProgress, [0, 0.2], [0, -100]);
    const gridY = useTransform(smoothProgress, [0, 1], [0, 200]);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const spotlightBg = useTransform(
        [mouseX, mouseY],
        ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(67, 190, 204, 0.08), transparent 80%)`
    );

    function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
        const { left, top } = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - left);
        mouseY.set(e.clientY - top);
    }

    return (
        <div ref={containerRef} className="bg-[#050505] text-white font-mono selection:bg-[#bcd647]">

            {/* 1. THE ARCHITECT HERO (Sticky Sequence) */}
            <section
                onMouseMove={handleMouseMove}
                className="h-[150vh] relative border-b border-white/5 group"
            >
                <motion.div
                    style={{ scale: heroScale, opacity: heroOpacity, y: heroY }}
                    className="sticky top-0 h-screen flex flex-col justify-center px-6 md:px-16 overflow-hidden"
                >
                    <motion.div
                        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition duration-300"
                        style={{ background: spotlightBg }}
                    />

                    <motion.div
                        style={{
                            y: gridY,
                            backgroundImage: `linear-gradient(to right, #1f1f1f 1px, transparent 1px), linear-gradient(to bottom, #1f1f1f 1px, transparent 1px)`,
                            backgroundSize: "60px 60px",
                            maskImage: "radial-gradient(circle at center, black, transparent 80%)"
                        }}
                        className="absolute inset-0 opacity-[0.15]"
                    />

                    <div className="relative z-10 max-w-7xl mx-auto w-full">
                        <motion.div
                            initial={{ y: 60, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1.2, ease: EASE }}
                            className="space-y-8"
                        >
                            <div className="flex items-center gap-4">
                                <div className="h-[1px] w-12 bg-[#bcd647]/50" />
                                <div className="inline-flex items-center gap-3 bg-[#bcd647]/5 border border-[#bcd647]/10 px-4 py-2 rounded-full backdrop-blur-md">
                                    <div className="relative">
                                        <span className="block w-2 h-2 bg-[#bcd647] rounded-full" />
                                        <span className="absolute inset-0 w-2 h-2 bg-[#bcd647] rounded-full animate-ping" />
                                    </div>
                                    <span className="text-[9px] font-black text-[#bcd647] tracking-[0.5em] uppercase leading-none">
                                        Nexus_Protocol_v2.6
                                    </span>
                                </div>
                            </div>

                            <h1 className="text-[13vw] md:text-[10vw] font-[1000] italic leading-[0.8] uppercase tracking-tighter">
                                <span className="block text-white overflow-hidden">
                                    <motion.span
                                        initial={{ y: "100%" }}
                                        animate={{ y: 0 }}
                                        transition={{ duration: 1, delay: 0.2 }}
                                        className="block"
                                    >
                                        EVOLVE_TO
                                    </motion.span>
                                </span>
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#43becc] via-[#bcd647] to-[#43becc] bg-[length:200%_auto] animate-gradient-x py-2">
                                    RAPTOR.
                                </span>
                            </h1>

                            <div className="flex flex-col md:flex-row gap-16 mt-16 items-start">
                                <div className="relative">
                                    <div className="absolute left-0 top-0 w-[2px] h-full bg-gradient-to-bottom from-[#43becc] to-transparent opacity-50" />
                                    <p className="max-w-md text-zinc-500 text-sm md:text-lg italic leading-relaxed pl-8 font-medium">
                                        We are not a consulting firm. We are an <span className="text-white">Elite Engineering Force</span>. Join the architects of MENA's digital backbone.
                                    </p>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(188, 214, 71, 0.2)" }}
                                    whileTap={{ scale: 0.98 }}
                                    className="relative group px-14 py-8 bg-white overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-[#bcd647] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.16, 1, 0.3, 1]" />
                                    <span className="relative z-10 text-black font-[1000] uppercase text-xs tracking-[0.6em] group-hover:text-black transition-colors duration-500">
                                        START_DEPLOYMENT()
                                    </span>
                                </motion.button>
                            </div>
                        </motion.div>
                    </div>

                    <div className="absolute bottom-10 right-10 hidden md:block">
                        <div className="font-mono text-[8px] text-zinc-800 space-y-1">
                            <p>LAT: 30.0444° N</p>
                            <p>LONG: 31.2357° E</p>
                            <p className="text-[#43becc]">STATUS: READY_TO_DEPLOY</p>
                        </div>
                    </div>
                </motion.div>
            </section>

            <section className="py-40 px-6 md:px-16 bg-[#050505] relative z-20">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-32">

                    {/* الجانب الأيسر الثابت */}
                    <div className="sticky top-40 h-fit space-y-8">
                        <div className="flex items-center gap-3">
                            <div className="w-1 h-1 bg-[#43becc] rounded-full animate-ping" />
                            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#43becc]">Core_Philosophy</span>
                        </div>
                        <h2 className="text-7xl font-[1000] italic leading-none uppercase tracking-tighter text-white">
                            WHY_US?<br /><span className="text-zinc-800">/REASONS</span>
                        </h2>
                        <div className="w-20 h-[1px] bg-zinc-800" />
                    </div>

                    {/* الجانب الأيمن (النقاط التي تضيء عند الاقتراب) */}
                    <div className="space-y-60 pb-40">
                        {REASONS.map((p) => (
                            <motion.div
                                key={p.id}
                                initial={{
                                    opacity: 0.4, // مش مطفي أوي، بس هادي
                                    color: "#52525b", // رمادي غامق (zinc-600)
                                }}
                                whileInView={{
                                    opacity: 1,
                                    color: "#ffffff", // ينور للأبيض
                                }}
                                viewport={{
                                    once: false,
                                    amount: 0.7 // يبدأ ينور لما يقرب ويوصل لـ 70% من مساحة العرض
                                }}
                                transition={{ duration: 0.5 }}
                                className="space-y-8 group relative"
                            >
                                {/* التوهج الخلفي - بيظهر بوضوح لما تقرب */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ amount: 0.7 }}
                                    className="absolute -left-16 -top-10 w-48 h-48 bg-[#43becc]/5 blur-[80px] rounded-full pointer-events-none"
                                />

                                <div className="flex items-center gap-8 relative z-10">
                                    {/* الرقم لونه بيتغير عند الاقتراب */}
                                    <motion.span
                                        initial={{ color: "#18181b" }} // zinc-900
                                        whileInView={{ color: "#43becc" }}
                                        className="text-6xl font-[1000] italic tracking-tighter transition-colors duration-500"
                                    >
                                        {p.id}
                                    </motion.span>

                                    <div className="w-full h-[1px] bg-zinc-900 overflow-hidden">
                                        <motion.div
                                            initial={{ x: "-100%" }}
                                            whileInView={{ x: "0%" }}
                                            transition={{ duration: 0.8, ease: "easeOut" }}
                                            className="w-full h-full bg-[#43becc]/30"
                                        />
                                    </div>

                                    {/* الأيقونة بتنور ببرواز Cyan */}
                                    <motion.div
                                        initial={{ borderColor: "rgba(255,255,255,0.05)", color: "#3f3f46" }}
                                        whileInView={{ borderColor: "rgba(67, 190, 204, 0.5)", color: "#43becc" }}
                                        className="p-5 bg-zinc-950 border transition-all duration-500 shadow-2xl"
                                    >
                                        {p.icon}
                                    </motion.div>
                                </div>

                                <div className="space-y-4 relative z-10">
                                    <motion.h3
                                        className="text-4xl font-black italic uppercase tracking-tighter"
                                    // اللون هيتورث من الـ Parent div اللي هو الأبيض
                                    >
                                        {p.t}
                                    </motion.h3>
                                    <motion.p
                                        initial={{ color: "#27272a" }} // zinc-800
                                        whileInView={{ color: "#a1a1aa" }} // zinc-400
                                        className="text-xl font-bold italic leading-relaxed uppercase max-w-md transition-colors duration-500"
                                    >
                                        {p.d}
                                    </motion.p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. THE LABS (Departments as Interactive Terminals) */}
            <section className="py-40 px-6 md:px-16 bg-[#0a0a0a]">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-black italic uppercase tracking-[0.4em] mb-20 text-center text-zinc-800">// DEPARTMENTS_STRUCTURE</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {['Consulting', 'Development', 'Support', 'Academy', 'Business'].map((name, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className="p-10 border border-white/5 bg-zinc-950 hover:border-[#43becc]/50 transition-all relative overflow-hidden group"
                            >
                                <div className="absolute top-0 right-0 p-4 font-mono text-[8px] text-zinc-800">UNIT_REF_{i + 100}</div>
                                <h3 className="text-2xl font-black italic uppercase text-white mb-6 group-hover:text-[#43becc] transition-colors">{name}</h3>
                                <div className="space-y-4 mb-10 text-[10px] text-zinc-500 font-bold uppercase tracking-widest italic">
                                    <p>+ Strategic Delivery</p>
                                    <p>+ System Architecture</p>
                                    <p>+ MENA Localization</p>
                                </div>
                                <button className="flex items-center gap-3 text-[9px] font-black uppercase text-[#43becc]">
                                    VIEW_ROLES <ArrowUpRight size={14} />
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. THE PROPEL ACADEMY (High-Contrast Segment) */}
            <section className="py-40 px-6 md:px-16 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[#bcd647] -skew-y-3 origin-top-left z-0" />
                <div className="max-w-7xl mx-auto relative z-10 text-black grid lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-10">
                        <h2 className="text-7xl md:text-9xl font-[1000] italic leading-none uppercase tracking-tighter">PROPEL<br />ACADEMY.</h2>
                        <p className="text-xl font-black italic uppercase leading-relaxed max-w-md">"We take the best graduates and forge them into SAP Architects in 12 intensive weeks."</p>
                        <button className="px-12 py-6 bg-black text-[#bcd647] font-black uppercase text-xs tracking-[0.6em] hover:invert transition-all">
                            APPLY_FOR_BOOTCAMP()
                        </button>
                    </div>
                    <div className="bg-black/5 p-12 border-2 border-black/10 backdrop-blur-sm">
                        <div className="space-y-8 font-black uppercase tracking-widest text-xs">
                            <div className="flex justify-between border-b border-black/20 pb-4"><span>Status:</span> <span className="text-white bg-black px-2">OPEN_JAN_2026</span></div>
                            <div className="flex justify-between border-b border-black/20 pb-4"><span>Intensity:</span> <span>CRITICAL</span></div>
                            <div className="flex justify-between border-b border-black/20 pb-4"><span>Focus:</span> <span>S/4HANA & BTP</span></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. JOB FEED (Real-time Filter) */}
            <section className="py-40 px-6 md:px-16 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10">
                    <h2 className="text-6xl font-[1000] italic uppercase tracking-tighter">LIVE_ROLES.</h2>
                    <div className="flex items-center gap-4 bg-zinc-950 border border-white/5 p-2 focus-within:border-[#43becc] transition-all">
                        <Search size={20} className="text-zinc-700 ml-4" />
                        <input type="text" placeholder="Filter_Roles..." className="bg-transparent p-4 w-64 text-[10px] font-black uppercase tracking-widest focus:outline-none" />
                    </div>
                </div>

                <div className="space-y-2">
                    {[
                        { t: "Senior SuccessFactors Consultant", d: "Consulting", l: "L5", r: "Egypt/Remote" },
                        { t: "BTP Backend Engineer", d: "Dev", l: "L3", r: "Cairo, HQ" },
                        { t: "Enablement Mentor", d: "Academy", l: "L4", r: "MENA_Wide" }
                    ].map((job, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ x: 15, backgroundColor: 'rgba(67, 190, 204, 0.05)' }}
                            className="p-10 border border-white/5 bg-zinc-950/50 flex flex-col md:flex-row justify-between items-center group transition-all"
                        >
                            <div className="flex items-center gap-10">
                                <span className="text-[10px] font-black text-zinc-800">{job.l}</span>
                                <div>
                                    <h3 className="text-2xl font-black italic uppercase group-hover:text-white transition-colors">{job.t}</h3>
                                    <div className="flex gap-4 mt-2">
                                        <span className="text-[9px] font-bold text-zinc-600 uppercase tracking-[0.2em]">{job.d}</span>
                                        <span className="text-[9px] font-bold text-zinc-600 uppercase tracking-[0.2em] flex items-center gap-1"><MapPin size={10} /> {job.r}</span>
                                    </div>
                                </div>
                            </div>
                            <button className="mt-8 md:mt-0 px-10 py-5 bg-white text-black font-black uppercase text-[10px] tracking-[0.4em] hover:bg-[#bcd647] transition-all">
                                APPLY_SYSTEM.RUN()
                            </button>
                        </motion.div>
                    ))}
                </div>
            </section>

        </div>
    );
}