"use client";

import React, { useState } from "react";
import Image from "next/image";
import { content } from "@/data/content";
import { usePortfolio } from "@/context/PortfolioContext";
import {
  MapPin,
  GraduationCap,
  Trophy,
  BookOpen,
  Hammer,
  ArrowRight,
  Layers,
} from "lucide-react";

export default function About() {
  const { setSelectedProject } = usePortfolio();
  const [imgError, setImgError] = useState(false);
  const hackathonCount = content.hackathons.length;

  const handleProblemClick = (projectId: string) => {
    const proj = content.projects.find((p) => p.id === projectId);
    if (proj) {
      setSelectedProject(proj);
    } else {
      const el = document.getElementById("projects");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-10">
        <span className="text-xs font-mono font-black text-[#C6FF3D] px-2.5 py-1 rounded bg-[#14141B] border border-[#242432]">
          01 //
        </span>
        <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F] uppercase tracking-tight">
          About Me
        </h2>
        <div className="h-px flex-1 bg-[#242432]" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Photo & Quick Status Card */}
        <div className="lg:col-span-5 space-y-6">
          <div className="relative group bg-[#14141B] dark:bg-[#14141B] light:bg-white rounded-3xl p-4 border-2 border-[#242432] light:border-black/20 neo-shadow-lime overflow-hidden">
            {/* Photo Container */}
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#1E1E2A] flex items-center justify-center border border-[#242432]">
              {!imgError ? (
                <Image
                  src={content.personal.avatar}
                  alt={content.personal.name}
                  width={600}
                  height={600}
                  priority
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#14141B] to-[#1E1E2A]">
                  <div className="w-24 h-24 rounded-full bg-[#C6FF3D]/10 border-2 border-[#C6FF3D] flex items-center justify-center text-4xl font-heading font-black text-[#C6FF3D] mb-4">
                    K
                  </div>
                  <span className="text-xs font-bold text-[#FF4D8D] uppercase tracking-wider bg-[#FF4D8D]/15 px-3 py-1 rounded-full border border-[#FF4D8D]/30 mb-2">
                    Photo Placeholder
                  </span>
                  <p className="text-xs text-[#9E9EA8] max-w-xs">
                    Drop your real photo into <code className="text-[#C6FF3D]">/public/me.jpg</code> to replace this graphic.
                  </p>
                </div>
              )}

              {/* Float Sticker */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#0B0B0F]/90 backdrop-blur-md p-3 rounded-xl border border-[#242432] flex items-center justify-between">
                <div>
                  <p className="font-heading font-bold text-sm text-[#F5F5F0]">
                    {content.personal.name}
                  </p>
                  <p className="text-[11px] text-[#B8A1FF]">
                    Class of {content.personal.graduationYear}
                  </p>
                </div>
                <span className="px-2 py-1 rounded bg-[#C6FF3D] text-[#0B0B0F] font-black text-[10px] uppercase">
                  Active
                </span>
              </div>
            </div>

            {/* Micro Tags below photo */}
            <div className="mt-4 flex flex-wrap gap-2 justify-center">
              <span className="text-[11px] font-medium bg-[#0B0B0F] dark:bg-[#0B0B0F] light:bg-[#F4F4EE] text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F] px-3 py-1 rounded-full border border-[#242432]">
                📍 Sonipat, Haryana
              </span>
              <span className="text-[11px] font-medium bg-[#0B0B0F] dark:bg-[#0B0B0F] light:bg-[#F4F4EE] text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F] px-3 py-1 rounded-full border border-[#242432]">
                ⚡ Builder Mentality
              </span>
            </div>
          </div>

          {/* Currently Learning & Currently Building Card */}
          <div className="bg-[#14141B] dark:bg-[#14141B] light:bg-white rounded-2xl p-5 border border-[#242432] light:border-black/15 space-y-4">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-[#B8A1FF]/10 text-[#B8A1FF] border border-[#B8A1FF]/30 mt-0.5">
                <BookOpen className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#9E9EA8] block">
                  Currently Learning
                </span>
                <p className="text-xs font-semibold text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F] mt-0.5">
                  {content.personal.currentlyLearning}
                </p>
                <span className="inline-block mt-1 text-[9px] px-2 py-0.5 rounded bg-yellow-400/10 text-yellow-400 border border-yellow-400/20">
                  TODO Placeholder
                </span>
              </div>
            </div>

            <div className="h-px bg-[#242432]" />

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-[#C6FF3D]/10 text-[#C6FF3D] border border-[#C6FF3D]/30 mt-0.5">
                <Hammer className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#9E9EA8] block">
                  Currently Building
                </span>
                <p className="text-xs font-semibold text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F] mt-0.5">
                  {content.personal.currentlyBuilding}
                </p>
                <span className="inline-block mt-1 text-[9px] px-2 py-0.5 rounded bg-yellow-400/10 text-yellow-400 border border-yellow-400/20">
                  TODO Placeholder
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Narrative Bio & Quick Facts Bento */}
        <div className="lg:col-span-7 space-y-8">
          {/* Main Bio Card */}
          <div className="bg-[#14141B] dark:bg-[#14141B] light:bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#242432] light:border-black/15">
            <h3 className="font-heading font-black text-xl sm:text-2xl text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F] mb-4">
              Building for problems that actually exist.
            </h3>
            <p className="text-base sm:text-lg text-[#9E9EA8] dark:text-[#9E9EA8] light:text-[#5C5C68] leading-relaxed">
              {content.personal.bio}
            </p>
          </div>

          {/* Quick Facts Bento Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {/* Fact 1 */}
            <div className="bg-[#14141B] dark:bg-[#14141B] light:bg-white p-4 rounded-2xl border border-[#242432] light:border-black/15">
              <MapPin className="w-5 h-5 text-[#C6FF3D] mb-2" />
              <span className="text-[10px] uppercase font-bold text-[#9E9EA8] block">
                Location
              </span>
              <p className="font-heading font-bold text-sm text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F]">
                {content.personal.location}
              </p>
            </div>

            {/* Fact 2 */}
            <div className="bg-[#14141B] dark:bg-[#14141B] light:bg-white p-4 rounded-2xl border border-[#242432] light:border-black/15">
              <GraduationCap className="w-5 h-5 text-[#B8A1FF] mb-2" />
              <span className="text-[10px] uppercase font-bold text-[#9E9EA8] block">
                Education
              </span>
              <p className="font-heading font-bold text-sm text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F]">
                B.Tech CS &apos;28
              </p>
            </div>

            {/* Fact 3: Auto-calculated */}
            <div className="bg-[#14141B] dark:bg-[#14141B] light:bg-white p-4 rounded-2xl border border-[#242432] light:border-black/15 col-span-2 sm:col-span-1">
              <Trophy className="w-5 h-5 text-[#FF4D8D] mb-2" />
              <span className="text-[10px] uppercase font-bold text-[#9E9EA8] block">
                Hackathons
              </span>
              <p className="font-heading font-bold text-sm text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F]">
                {hackathonCount} Participated
              </p>
            </div>
          </div>

          {/* Standout Feature 4: "Problems I Care About" Strip */}
          <div className="bg-[#14141B] dark:bg-[#14141B] light:bg-white rounded-3xl p-6 border-2 border-[#242432] light:border-black/15">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#C6FF3D]" />
                <h4 className="font-heading font-black text-base uppercase tracking-wider text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F]">
                  Problems I Care About
                </h4>
              </div>
              <span className="text-[11px] text-[#9E9EA8]">Click to inspect matching product</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {content.problemsICareAbout.map((item) => {
                const accentBorder =
                  item.accentColor === "lime"
                    ? "hover:border-[#C6FF3D]"
                    : item.accentColor === "pink"
                    ? "hover:border-[#FF4D8D]"
                    : "hover:border-[#B8A1FF]";

                const badgeBg =
                  item.accentColor === "lime"
                    ? "bg-[#C6FF3D]/10 text-[#C6FF3D] border-[#C6FF3D]/30"
                    : item.accentColor === "pink"
                    ? "bg-[#FF4D8D]/10 text-[#FF4D8D] border-[#FF4D8D]/30"
                    : "bg-[#B8A1FF]/10 text-[#B8A1FF] border-[#B8A1FF]/30";

                return (
                  <button
                    key={item.title}
                    onClick={() => handleProblemClick(item.projectId)}
                    className={`p-4 rounded-2xl bg-[#0B0B0F] dark:bg-[#0B0B0F] light:bg-[#F4F4EE] border border-[#242432] ${accentBorder} text-left transition-all group flex flex-col justify-between`}
                  >
                    <div>
                      <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-full border ${badgeBg} inline-block mb-2`}>
                        {item.badge}
                      </span>
                      <h5 className="font-heading font-bold text-sm text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F] group-hover:text-[#C6FF3D] transition-colors">
                        {item.title}
                      </h5>
                      <p className="text-[11px] text-[#9E9EA8] mt-1.5 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-2 border-t border-[#242432] flex items-center justify-between text-[10px] font-bold text-[#B8A1FF] group-hover:text-[#C6FF3D]">
                      <span>View Project</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
