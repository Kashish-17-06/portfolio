"use client";

import React from "react";
import { usePortfolio } from "@/context/PortfolioContext";
import {
  X,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  Cpu,
  Layers,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export default function ProjectModal() {
  const { selectedProject, setSelectedProject } = usePortfolio();

  if (!selectedProject) return null;

  const {
    title,
    tagline,
    honestBadge,
    credit,
    problem,
    solution,
    whoItHelps,
    techStack,
    githubUrl,
    liveUrl,
    caseStudy,
  } = selectedProject;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn overflow-y-auto"
      onClick={() => setSelectedProject(null)}
    >
      <div
        className="relative w-full max-w-3xl my-8 bg-[#14141B] dark:bg-[#14141B] light:bg-white border-2 border-[#C6FF3D] rounded-3xl neo-shadow-lime overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="p-6 border-b border-[#242432] light:border-black/10 flex items-start justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              {honestBadge && (
                <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-[#B8A1FF]/15 text-[#B8A1FF] border border-[#B8A1FF]/30">
                  {honestBadge}
                </span>
              )}
              <span className="text-[10px] font-mono text-[#9E9EA8] px-2 py-0.5 rounded bg-[#0B0B0F] border border-[#242432]">
                Detailed Case Study
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-black text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F]">
              {title}
            </h2>
            <p className="text-sm font-semibold text-[#C6FF3D] mt-0.5">
              {tagline}
            </p>
          </div>

          <button
            onClick={() => setSelectedProject(null)}
            className="p-2 rounded-xl bg-[#0B0B0F] text-[#9E9EA8] hover:text-[#F5F5F0] border border-[#242432] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto text-sm">
          {/* Honest Credit Callout (if any) */}
          {credit && (
            <div className="p-4 rounded-2xl bg-[#0B0B0F] dark:bg-[#0B0B0F] light:bg-[#F4F4EE] border border-[#FF4D8D]/40 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-[#FF4D8D] shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF4D8D] block">
                  Transparency &amp; Attribution
                </span>
                <p className="text-xs text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F] mt-0.5">
                  {credit}
                </p>
              </div>
            </div>
          )}

          {/* Impact First: Problem -> Solution -> Who it helps */}
          <div className="space-y-4 bg-[#0B0B0F] dark:bg-[#0B0B0F] light:bg-[#F4F4EE] p-5 rounded-2xl border border-[#242432]">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#9E9EA8] block">
              Core Impact Framework
            </span>

            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <span className="text-xs font-black text-[#FF4D8D] uppercase shrink-0 mt-0.5">
                  Problem:
                </span>
                <p className="text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F] leading-relaxed">
                  {problem}
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="text-xs font-black text-[#C6FF3D] uppercase shrink-0 mt-0.5">
                  Solution:
                </span>
                <p className="text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F] leading-relaxed">
                  {solution}
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="text-xs font-black text-[#B8A1FF] uppercase shrink-0 mt-0.5">
                  Who it helps:
                </span>
                <p className="text-[#C6FF3D] font-medium">
                  {whoItHelps}
                </p>
              </div>
            </div>
          </div>

          {/* Overview & Approach */}
          <div className="space-y-3">
            <h3 className="font-heading font-black text-lg text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F] flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-[#C6FF3D]" />
              Overview &amp; Approach
            </h3>
            <p className="text-[#9E9EA8] dark:text-[#9E9EA8] light:text-[#5C5C68] leading-relaxed">
              {caseStudy.overview}
            </p>
            <p className="text-[#9E9EA8] dark:text-[#9E9EA8] light:text-[#5C5C68] leading-relaxed">
              {caseStudy.approach}
            </p>
          </div>

          {/* Architecture (if specified) */}
          {caseStudy.architecture && (
            <div className="space-y-2">
              <h3 className="font-heading font-black text-base text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F] flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#B8A1FF]" />
                Architecture
              </h3>
              <p className="text-[#9E9EA8] dark:text-[#9E9EA8] light:text-[#5C5C68] leading-relaxed">
                {caseStudy.architecture}
              </p>
            </div>
          )}

          {/* Tech Stack */}
          <div className="space-y-3">
            <h3 className="font-heading font-black text-base text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F] flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#FF4D8D]" />
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-bold rounded-lg bg-[#0B0B0F] text-[#F5F5F0] dark:bg-[#0B0B0F] light:bg-[#EAEAE4] light:text-[#0B0B0F] border border-[#242432]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* What I Learned */}
          <div className="space-y-2">
            <h3 className="font-heading font-black text-base text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#C6FF3D]" />
              What I Learned &amp; Challenges
            </h3>
            <p className="text-[#9E9EA8] dark:text-[#9E9EA8] light:text-[#5C5C68] leading-relaxed">
              {caseStudy.challengesAndLearnings}
            </p>
          </div>

          {/* Auronyx Proposed Future Ideas (Honest distinction) */}
          {caseStudy.futureIdeas && caseStudy.futureIdeas.length > 0 && (
            <div className="p-4 rounded-2xl bg-[#0B0B0F] border border-[#B8A1FF]/40 space-y-2">
              <span className="text-xs font-black uppercase text-[#B8A1FF] tracking-wider block">
                Proposed Future Roadmap Ideas (Not Yet Implemented)
              </span>
              <ul className="space-y-1.5 list-disc list-inside text-xs text-[#9E9EA8]">
                {caseStudy.futureIdeas.map((idea, i) => (
                  <li key={i}>{idea}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Todos / Pending details */}
          {caseStudy.todos && caseStudy.todos.length > 0 && (
            <div className="p-4 rounded-2xl bg-yellow-400/5 border border-yellow-400/20 space-y-2">
              <span className="text-xs font-black uppercase text-yellow-400 tracking-wider block">
                Pending Information To Provide
              </span>
              <ul className="space-y-1 list-disc list-inside text-xs text-yellow-200/80">
                {caseStudy.todos.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-[#242432] light:border-black/10 flex flex-wrap items-center justify-between gap-3 bg-[#0B0B0F] dark:bg-[#0B0B0F] light:bg-[#F4F4EE]">
          <div className="flex items-center gap-3">
            {githubUrl && githubUrl !== "TODO" && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-[#14141B] dark:bg-[#14141B] light:bg-white text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F] border border-[#242432] hover:border-[#C6FF3D] text-xs font-bold flex items-center gap-2 transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-[#C6FF3D]" />
                <span>GitHub Repository</span>
              </a>
            )}

            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-[#C6FF3D] text-[#0B0B0F] font-heading font-black text-xs flex items-center gap-2 hover:bg-[#b0f224] transition-colors"
              >
                <span>Live Deployment</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          <button
            onClick={() => setSelectedProject(null)}
            className="text-xs text-[#9E9EA8] hover:text-[#F5F5F0] transition-colors underline"
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
}
