"use client";

import React from "react";
import { content } from "@/data/content";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

export default function Education() {
  const { degree, institution, timeline, details } = content.education;

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-10">
        <span className="text-xs font-mono font-black text-[#C6FF3D] px-2.5 py-1 rounded bg-[#14141B] border border-[#242432]">
          07 //
        </span>
        <div>
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F] uppercase tracking-tight">
            Academic Foundation
          </h2>
          <p className="text-xs sm:text-sm text-[#9E9EA8] mt-1">
            Formal Computer Science engineering training.
          </p>
        </div>
        <div className="h-px flex-1 bg-[#242432] ml-4 hidden sm:block" />
      </div>

      <div className="bg-[#14141B] dark:bg-[#14141B] light:bg-white rounded-3xl p-6 sm:p-10 border-2 border-[#242432] light:border-black/15 neo-shadow-lavender">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#B8A1FF]/15 text-[#B8A1FF] border border-[#B8A1FF]/30 flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5" />
                Undergraduate Degree
              </span>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#C6FF3D]/15 text-[#C6FF3D] border border-[#C6FF3D]/30 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {timeline}
              </span>
            </div>

            <h3 className="font-heading font-black text-2xl sm:text-3xl text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F]">
              {degree}
            </h3>

            <p className="text-base sm:text-lg font-semibold text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F] flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#FF4D8D]" />
              {institution}
            </p>

            <p className="text-xs sm:text-sm text-[#9E9EA8] dark:text-[#9E9EA8] light:text-[#5C5C68] leading-relaxed">
              {details}
            </p>
          </div>

          <div className="lg:col-span-4 bg-[#0B0B0F] dark:bg-[#0B0B0F] light:bg-[#F4F4EE] rounded-2xl p-6 border border-[#242432] space-y-3">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#9E9EA8] block">
              Core Coursework Highlights
            </span>
            <div className="flex flex-wrap gap-2">
              {[
                "Data Structures & Algorithms",
                "Object-Oriented Programming",
                "Database Management Systems",
                "Computer Networks",
                "Operating Systems",
                "Web Engineering",
              ].map((course) => (
                <span
                  key={course}
                  className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-[#14141B] dark:bg-[#14141B] light:bg-white text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F] border border-[#242432]"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
