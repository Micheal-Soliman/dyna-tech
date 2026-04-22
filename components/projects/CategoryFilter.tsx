"use client";

import React from "react";
import { Filter, Terminal } from "lucide-react";

interface CategoryFilterProps {
  categories: string[];
  activeFilter: string;
  onFilterChange: (category: string) => void;
  projectCount: number;
}

export default function CategoryFilter({ 
  categories, 
  activeFilter, 
  onFilterChange, 
  projectCount 
}: CategoryFilterProps) {
  return (
    <nav className="sticky top-0 z-50 bg-[#020202]/90 backdrop-blur-xl border-y border-white/10 py-6 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-6 overflow-x-auto no-scrollbar w-full md:w-auto">
          <Filter size={14} className="text-[#006db1]" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onFilterChange(cat)}
              className={`text-[10px] font-black uppercase tracking-[0.3em] px-4 py-2 transition-all
                ${activeFilter === cat ? 'bg-[#006db1] text-black' : 'text-zinc-600 hover:text-white border border-transparent hover:border-white/5'}`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-4 text-[9px] font-black text-zinc-700">
          <Terminal size={12} /> // DATABASE_RECORDS: {projectCount} PROJECT_ENTRIES
        </div>
      </div>
    </nav>
  );
}
