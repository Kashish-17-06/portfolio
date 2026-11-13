"use client";

import React from "react";
import { content } from "@/data/content";
import {
  Code,
  Layout,
  Smartphone,
  Database,
  Wrench,
  Sparkles,
} from "lucide-react";

export default function Skills() {
  const getCategoryIcon = (title: string) => {
    switch (title.toLowerCase()) {
      case "languages":
        return <Code className="w-5 h-5 text-[#C6FF3D]" />;
      case "frontend":
        return <Layout className="w-5 h-5 text-[#FF4D8D]" />;
      case "mobile":
        return <Smartphone className="w-5 h-5 text-[#B8A1FF]" />;
      case "backend & database":
        return <Database className="w-5 h-5 text-[#C6FF3D]" />;
      default:
        return <Wrench className="w-5 h-5 text-[#B8A1FF]" />;
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-10">
        <span className="text-xs font-mono font-black text-[#C6FF3D] px-2.5 py-1 rounded bg-[#14141B] border border-[#242432]">
          02 //
        </span>
        <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F] uppercase tracking-tight">
          Skills &amp; Tech Stack
        </h2>
        <div className="h-px flex-1 bg-[#242432]" />
      </div>

      {/* Infinite Marquee Strip */}
      <div className="relative w-full overflow-hidden bg-[#14141B] dark:bg-[#14141B] light:bg-white border-2 border-[#242432] light:border-black/15 py-3 rounded-2xl mb-12 shadow-[2px_2px_0px_0px_#C6FF3D]">
        <div className="flex animate-marquee space-x-6 whitespace-nowrap">
          {content.skills.marquee.concat(content.skills.marquee).map((skill, index) => (
            <div
              key={`${skill}-${index}`}
              className="inline-flex items-center gap-2 text-xs font-heading font-black uppercase tracking-wider text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F]"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C6FF3D]" />
              <span>{skill}</span>
              <span className="text-[#FF4D8D]">★</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bento Grid of Grouped Skills */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {content.skills.categories.map((category, idx) => {
          const isLarge = idx === 0 || idx === 1;
          return (
            <div
              key={category.title}
              className={`bg-[#14141B] dark:bg-[#14141B] light:bg-white rounded-3xl p-6 border-2 border-[#242432] light:border-black/15 neo-card flex flex-col justify-between ${
                isLarge ? "md:col-span-1 lg:col-span-1" : ""
              }`}
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-[#0B0B0F] dark:bg-[#0B0B0F] light:bg-[#F4F4EE] border border-[#242432]">
                      {getCategoryIcon(category.title)}
                    </div>
                    <h3 className="font-heading font-black text-lg text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F]">
                      {category.title}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono text-[#9E9EA8] px-2 py-0.5 rounded bg-[#0B0B0F] border border-[#242432]">
                    {category.skills.length} items
                  </span>
                </div>

                {/* Skills Chips */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        skill.isTodo
                          ? "bg-yellow-400/10 text-yellow-400 border border-yellow-400/30 border-dashed"
                          : "bg-[#0B0B0F] dark:bg-[#0B0B0F] light:bg-[#F4F4EE] text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F] border border-[#242432] hover:border-[#C6FF3D] hover:scale-105"
                      }`}
                    >
                      {skill.name}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Note */}
              <div className="mt-6 pt-3 border-t border-[#242432] text-[11px] text-[#9E9EA8]">
                <span>Validated in hackathons &amp; personal projects</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
