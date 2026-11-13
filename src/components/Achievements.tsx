"use client";

import React from "react";
import { content } from "@/data/content";
import { Award, CheckCircle2 } from "lucide-react";

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-10">
        <span className="text-xs font-mono font-black text-[#C6FF3D] px-2.5 py-1 rounded bg-[#14141B] border border-[#242432]">
          06 //
        </span>
        <div>
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F] uppercase tracking-tight">
            Achievements &amp; Honors
          </h2>
          <p className="text-xs sm:text-sm text-[#9E9EA8] mt-1">
            Recognition earned through hackathons and technical development.
          </p>
        </div>
        <div className="h-px flex-1 bg-[#242432] ml-4 hidden sm:block" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {content.achievements.map((item) => (
          <div
            key={item.id}
            className="bg-[#14141B] dark:bg-[#14141B] light:bg-white rounded-3xl p-6 border-2 border-[#242432] light:border-black/15 neo-card flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#0B0B0F] dark:bg-[#0B0B0F] light:bg-[#F4F4EE] border border-[#242432] flex items-center justify-center text-[#FF4D8D]">
                  <Award className="w-5 h-5" />
                </div>
                {item.isTodo ? (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-yellow-400/10 text-yellow-400 border border-yellow-400/30">
                    TODO Placeholder
                  </span>
                ) : (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#C6FF3D]/10 text-[#C6FF3D] border border-[#C6FF3D]/30">
                    Verified
                  </span>
                )}
              </div>

              <h3 className="font-heading font-black text-lg text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F] mb-1">
                {item.title}
              </h3>
              <p className="text-xs font-semibold text-[#B8A1FF] mb-3">
                {item.issuer} · {item.date}
              </p>
              <p className="text-xs text-[#9E9EA8] dark:text-[#9E9EA8] light:text-[#5C5C68] leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="mt-6 pt-3 border-t border-[#242432] flex items-center justify-between text-[11px] text-[#9E9EA8]">
              <span>Verified entry</span>
              <CheckCircle2 className="w-3.5 h-3.5 text-[#C6FF3D]" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
