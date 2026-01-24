"use client";

import { MotionValue, motion } from "framer-motion";

type LeadershipMember = {
  name: string;
  title: string;
  bio: string;
};

type Props = {
  y: MotionValue<number>;
  opacity: MotionValue<number>;
  kicker: string;
  titlePrefix: string;
  titleHighlight: string;
  titleSuffix: string;
  members: LeadershipMember[];
};

export default function LeadershipLayer({
  y,
  opacity,
  kicker,
  titlePrefix,
  titleHighlight,
  titleSuffix,
  members,
}: Props) {
  return (
    <motion.div
      style={{ y, opacity, zIndex: 70 }}
      className="absolute inset-0 flex items-center justify-center z-50 px-6"
    >
      <div className="w-full max-w-6xl">
        <div className="mb-12 text-center">
          <div className="text-[#bcd647] font-mono text-[10px] tracking-[0.5em] uppercase italic mb-4">
            {kicker}
          </div>
          <h2 className="text-white text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
            {titlePrefix} <span className="text-[#43becc]">{titleHighlight}</span> {titleSuffix}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {members.map((m, i) => (
            <motion.div
              key={i}
              className="group relative bg-white/5 border border-white/10 p-8 rounded-3xl"
              whileHover={{ borderColor: "#43becc" }}
            >
              <div className="w-full h-56 bg-zinc-900/60 border border-white/10 rounded-2xl mb-6 flex items-center justify-center">
                <div className="text-white/60 font-black text-4xl">
                  {m.name
                    .split(" ")
                    .filter(Boolean)
                    .slice(0, 2)
                    .map((p) => p[0])
                    .join("")}
                </div>
              </div>
              <div className="text-white text-2xl font-black italic uppercase tracking-tight">
                {m.name}
              </div>
              <div className="text-[#43becc] font-mono text-[10px] uppercase tracking-widest mt-2 mb-4">
                {m.title}
              </div>
              <div className="text-zinc-400 text-sm leading-relaxed">
                {m.bio}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
