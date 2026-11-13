"use client";

import React from "react";
import { content } from "@/data/content";
import { Briefcase, Calendar } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-10">
        <span className="text-xs font-mono font-black text-[#C6FF3D] px-2.5 py-1 rounded bg-[#14141B] border border-[#242432]">
          05 //
        </span>
        <div>
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F] uppercase tracking-tight">
            Experience &amp; Trajectory
          </h2>
          <p className="text-xs sm:text-sm text-[#9E9EA8] mt-1">
            Internship targeting and work history timeline.
          </p>
        </div>
        <div className="h-px flex-1 bg-[#242432] ml-4 hidden sm:block" />
      </div>

      <div className="relative border-l-2 border-[#242432] ml-4 sm:ml-8 space-y-10">
        {content.experience.map((item) => (
          <div key={item.id} className="relative pl-6 sm:pl-10 group">
            {/* Timeline node icon */}
            <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-[#14141B] dark:bg-[#14141B] light:bg-white border-2 border-[#C6FF3D] flex items-center justify-center text-[#C6FF3D] group-hover:scale-110 transition-transform shadow-[0_0_10px_rgba(198,255,61,0.4)]">
              <Briefcase className="w-4 h-4" />
            </div>

            {/* Timeline Card */}
            <div className="bg-[#14141B] dark:bg-[#14141B] light:bg-white rounded-3xl p-6 sm:p-7 border-2 border-[#242432] light:border-black/15 hover:border-[#C6FF3D] transition-all neo-card">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="text-xs font-bold text-[#C6FF3D] flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {item.period}
                </span>

                {item.isTodo ? (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-yellow-400/10 text-yellow-400 border border-yellow-400/30">
                    TODO Placeholder
                  </span>
                ) : (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#B8A1FF]/10 text-[#B8A1FF] border border-[#B8A1FF]/30">
                    Active Focus
                  </span>
                )}
              </div>

              <h3 className="font-heading font-black text-xl sm:text-2xl text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F] mb-1">
                {item.title}
              </h3>
              <p className="text-sm font-semibold text-[#B8A1FF] mb-3">
                {item.company}
              </p>
              <p className="text-xs sm:text-sm text-[#9E9EA8] dark:text-[#9E9EA8] light:text-[#5C5C68] leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
