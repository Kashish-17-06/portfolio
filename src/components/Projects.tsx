"use client";

import React, { useState } from "react";
import { content } from "@/data/content";
import { usePortfolio } from "@/context/PortfolioContext";
import {
  ExternalLink,
  BookOpen,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export default function Projects() {
  const { setSelectedProject } = usePortfolio();
  const [showOptionalSlot, setShowOptionalSlot] = useState(false);

  // Projects to display (filter out Loknigani if toggle is off)
  const displayedProjects = content.projects.filter(
    (p) => p.id !== "loknigani" || showOptionalSlot
  );

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono font-black text-[#C6FF3D] px-2.5 py-1 rounded bg-[#14141B] border border-[#242432]">
            03 //
          </span>
          <div>
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F] uppercase tracking-tight">
              Featured Work
            </h2>
            <p className="text-xs sm:text-sm text-[#9E9EA8] mt-1">
              Problem-first software engineered for real-world impact.
            </p>
          </div>
        </div>

        {/* Optional Slot Toggle */}
        <button
          onClick={() => setShowOptionalSlot(!showOptionalSlot)}
          className="self-start sm:self-auto px-3 py-1.5 rounded-xl bg-[#14141B] dark:bg-[#14141B] light:bg-white text-xs font-semibold text-[#9E9EA8] hover:text-[#C6FF3D] border border-[#242432] transition-colors"
        >
          {showOptionalSlot ? "Hide 'Loknigani' Slot" : "Show 'Loknigani' Slot"}
        </button>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {displayedProjects.map((project) => {
          const isFeatured = project.featured;

          return (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className={`group bg-[#14141B] dark:bg-[#14141B] light:bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#242432] light:border-black/15 hover:border-[#C6FF3D] transition-all cursor-pointer neo-card flex flex-col justify-between ${
                isFeatured ? "md:col-span-2 lg:p-10 border-[#242432]" : ""
              }`}
            >
              <div>
                {/* Badges & Honest Attribution */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <div className="flex flex-wrap items-center gap-2">
                    {project.honestBadge && (
                      <span className="text-[10px] sm:text-xs font-extrabold uppercase px-3 py-1 rounded-full bg-[#B8A1FF]/15 text-[#B8A1FF] border border-[#B8A1FF]/30">
                        {project.honestBadge}
                      </span>
                    )}
                    {project.featured && (
                      <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-[#C6FF3D]/15 text-[#C6FF3D] border border-[#C6FF3D]/30 flex items-center gap-1">
                        <Sparkles className="w-3 h-3" /> Featured
                      </span>
                    )}
                  </div>

                  {project.liveUrl && (
                    <span className="text-xs font-bold text-[#C6FF3D] flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-[#C6FF3D] animate-pulse" />
                      Live App
                    </span>
                  )}
                </div>

                {/* Title & Tagline */}
                <div className="mb-6">
                  <h3 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F] group-hover:text-[#C6FF3D] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base font-semibold text-[#B8A1FF] mt-1">
                    {project.tagline}
                  </p>
                </div>

                {/* Honest Credit note if tutorial or team */}
                {project.credit && (
                  <p className="text-xs text-[#FF4D8D] font-medium bg-[#FF4D8D]/10 border border-[#FF4D8D]/20 rounded-xl p-3 mb-6">
                    ★ {project.credit}
                  </p>
                )}

                {/* Impact First: Problem -> Solution -> Who it helps */}
                <div className="space-y-3.5 bg-[#0B0B0F] dark:bg-[#0B0B0F] light:bg-[#F4F4EE] p-5 rounded-2xl border border-[#242432] mb-6">
                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#FF4D8D] block mb-0.5">
                      Problem
                    </span>
                    <p className="text-xs sm:text-sm text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F] leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  <div className="h-px bg-[#242432]" />

                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#C6FF3D] block mb-0.5">
                      Solution
                    </span>
                    <p className="text-xs sm:text-sm text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F] leading-relaxed">
                      {project.solution}
                    </p>
                  </div>

                  <div className="h-px bg-[#242432]" />

                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#B8A1FF]">
                      Who it helps:
                    </span>
                    <span className="text-xs font-semibold text-[#C6FF3D]">
                      {project.whoItHelps}
                    </span>
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-[#0B0B0F] dark:bg-[#0B0B0F] light:bg-white text-[#9E9EA8] border border-[#242432]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#242432] flex flex-wrap items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0B0B0F] dark:bg-[#0B0B0F] light:bg-[#F4F4EE] border border-[#242432] hover:border-[#C6FF3D] text-xs font-bold text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F] transition-colors"
                >
                  <BookOpen className="w-3.5 h-3.5 text-[#C6FF3D]" />
                  <span>Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && project.githubUrl !== "TODO" && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 rounded-xl bg-[#0B0B0F] dark:bg-[#0B0B0F] light:bg-[#F4F4EE] border border-[#242432] hover:border-[#C6FF3D] text-[#9E9EA8] hover:text-[#C6FF3D] transition-colors"
                      title="View GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="px-3.5 py-2 rounded-xl bg-[#C6FF3D] text-[#0B0B0F] font-heading font-black text-xs flex items-center gap-1.5 hover:bg-[#b0f224] transition-colors"
                      title="Open Live Website"
                    >
                      <span>Live Site</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
