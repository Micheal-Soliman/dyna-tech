"use client";

import type { MotionValue } from "framer-motion";
import { Clock, MapPin, Phone, Terminal, Factory, Zap, Mail } from "lucide-react";

import Layer from "./Layer";

type Props = {
  progress: MotionValue<number>;
};

const LOCATIONS = [
  {
    id: "main",
    name: "DYNATECH MAIN OFFICE",
    type: "Headquarters",
    address: "P6 Office 109, CFC Business Park, New Cairo",
    phone: "+20 105 528 2565",
    email: "info@dynatech-eg.net",
    hours: "Sun - Thu [09:00 - 18:00]",
    icon: Terminal
  },
  {
    id: "automotive",
    name: "DYNATECH AUTOMOTIVE HUB",
    type: "Industrial Facility",
    address: "Industrial Area, New Cairo",
    status: "Under Construction",
    phone: "+20 105 528 2565",
    email: "info@dynatech-eg.net",
    hours: "Opening 2025",
    icon: Factory
  },
  {
    id: "showroom",
    name: "DYNATECH SHOWROOM",
    type: "Experience Center",
    address: "1st Settlement, New Cairo",
    phone: "+20 105 528 2565",
    email: "info@dynatech-eg.net",
    hours: "Daily [10:00 - 22:00]",
    icon: Zap
  }
];

export default function OfficeLayer({ progress }: Props) {
  return (
    <Layer progress={progress} range={[0.4, 0.6]}>
      <div className="w-full max-w-6xl space-y-6">
        <div className="text-center mb-10">
          <span className="text-[#0087cb] font-mono text-[10px] tracking-widest uppercase italic">
            {"// PHYSICAL_NODES"}
          </span>
          <h2 className="text-4xl font-black italic uppercase text-white mt-2">
            OUR <span className="text-[#006db1]">LOCATIONS.</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-4">
          {LOCATIONS.map((loc) => {
            const Icon = loc.icon;
            return (
              <div key={loc.id} className={`bg-white/[0.03] border backdrop-blur-3xl rounded-2xl p-6 transition-all relative ${loc.id === 'automotive' ? 'border-[#0087cb]/30' : 'border-white/10 hover:border-[#006db1]/30'}`}>
                {/* Status Badge for Under Construction */}
                {loc.status && (
                  <div className="absolute top-4 right-4 px-2 py-1 bg-[#0087cb]/10 border border-[#0087cb]/30 rounded">
                    <span className="text-[7px] font-black uppercase tracking-widest text-[#0087cb]">{loc.status}</span>
                  </div>
                )}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-[#006db1]/10 rounded-lg">
                    <Icon size={20} className="text-[#006db1]" />
                  </div>
                  <span className="text-[9px] font-mono text-[#0087cb] uppercase tracking-widest">{loc.type}</span>
                </div>
                <h3 className="text-lg font-black italic uppercase text-white mb-3">{loc.name}</h3>
                <div className="space-y-2 text-zinc-400 font-mono text-[9px]">
                  <p className="flex items-start gap-2">
                    <MapPin size={12} className="text-[#006db1] mt-0.5 shrink-0" /> 
                    {loc.address}
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone size={12} className="text-[#0087cb]" /> 
                    {loc.phone}
                  </p>
                  {'email' in loc && (
                    <p className="flex items-center gap-2">
                      <Mail size={12} className="text-[#006db1]" /> 
                      {loc.email}
                    </p>
                  )}
                  <p className="flex items-center gap-2 text-[#006db1]">
                    <Clock size={12} /> 
                    {loc.hours}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Map Embed Placeholder */}
        <div className="mt-8 bg-zinc-900/40 border border-white/10 rounded-2xl h-48 flex items-center justify-center relative overflow-hidden">
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `linear-gradient(to right, #006db1 1px, transparent 1px), linear-gradient(to bottom, #006db1 1px, transparent 1px)`,
              backgroundSize: '30px 30px'
            }}
          />
          <div className="text-center z-10">
            <MapPin size={32} className="text-[#006db1] mx-auto mb-2" />
            <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest">Interactive Map</p>
            <a 
              href="https://maps.google.com/?q=Cairo+Festival+City+New+Cairo+Egypt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 px-4 py-2 bg-[#006db1] text-black text-[9px] font-black uppercase tracking-widest hover:bg-white transition-colors"
            >
              Open Google Maps
            </a>
          </div>
        </div>
      </div>
    </Layer>
  );
}
