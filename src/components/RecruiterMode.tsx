"use client";

import React, { useState } from "react";
import { usePortfolio } from "@/context/PortfolioContext";
import { content } from "@/data/content";
import {
  Zap,
  ExternalLink,
  Copy,
  Check,
  FileDown,
  ArrowRight,
  Sparkles,
  Trophy,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export default function RecruiterMode() {
  const { toggleRecruiterMode, setSelectedProject } = usePortfolio();
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Top 3 projects
  const topProjects = content.projects.slice(0, 3);
  // Auto-calculated hackathon count
  const hackathonCount = content.hackathons.length;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(content.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="min-h-[calc(100vh-80px)] w-full py-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto flex flex-col justify-between animate-fadeIn">
      {/* Top Banner Notice */}
      <div className="bg-[#14141B] dark:bg-[#14141B] light:bg-white border-2 border-[#C6FF3D] rounded-2xl p-4 sm:p-6 mb-8 neo-shadow-lime flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#C6FF3D] text-[#0B0B0F] flex items-center justify-center font-bold">
            <Zap className="w-6 h-6 fill-current" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-widest font-black text-[#C6FF3D] bg-[#0B0B0F] px-2 py-0.5 rounded">
                Recruiter Mode Active
              </span>
              <span className="text-xs text-[#9E9EA8]">30-second executive summary</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-heading font-black text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F]">
              {content.personal.name}
            </h1>
          </div>
        </div>

        <button
          onClick={toggleRecruiterMode}
          className="self-stretch sm:self-auto px-4 py-2 text-xs font-bold bg-[#0B0B0F] text-[#F5F5F0] dark:bg-[#0B0B0F] light:bg-[#0B0B0F] border border-[#242432] rounded-xl hover:border-[#C6FF3D] transition-colors flex items-center justify-center gap-2"
        >
          <span>Exit to Full Site</span>
          <ArrowRight className="w-4 h-4 text-[#C6FF3D]" />
        </button>
      </div>

      {/* Target Role & Key Credentials Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {/* Roles */}
        <div className="bg-[#14141B] dark:bg-[#14141B] light:bg-white p-5 rounded-2xl border border-[#242432] light:border-black/10">
          <span className="text-[11px] font-bold tracking-wider text-[#9E9EA8] uppercase block mb-1">
            Targeting Role
          </span>
          <p className="font-heading font-bold text-lg text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F]">
            Software Engineering / Frontend / Full-Stack Internships
          </p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {content.personal.targetRoles.map((role) => (
              <span
                key={role}
                className="text-[10px] font-semibold bg-[#242432] text-[#C6FF3D] px-2 py-0.5 rounded-full"
              >
                {role}
              </span>
            ))}
          </div>
        </div>

        {/* Education & Status */}
        <div className="bg-[#14141B] dark:bg-[#14141B] light:bg-white p-5 rounded-2xl border border-[#242432] light:border-black/10">
          <span className="text-[11px] font-bold tracking-wider text-[#9E9EA8] uppercase block mb-1">
            Education & Location
          </span>
          <p className="font-heading font-bold text-base text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F]">
            {content.education.degree}
          </p>
          <p className="text-xs text-[#9E9EA8] mt-1">
            {content.personal.college} (Class of {content.personal.graduationYear}) · {content.personal.location}
          </p>
        </div>

        {/* Hackathon Velocity & Availability */}
        <div className="bg-[#14141B] dark:bg-[#14141B] light:bg-white p-5 rounded-2xl border border-[#242432] light:border-black/10 flex flex-col justify-between">
          <span className="text-[11px] font-bold tracking-wider text-[#9E9EA8] uppercase block mb-1">
            Velocity & Availability
          </span>
          <div className="flex items-center gap-4 my-auto">
            <div className="flex items-center gap-2">
              <Trophy className="w-6 h-6 text-[#C6FF3D]" />
              <div>
                <span className="text-2xl font-black font-heading text-[#C6FF3D]">
                  {hackathonCount}
                </span>
                <span className="text-xs text-[#9E9EA8] block -mt-1">
                  Hackathons Done
                </span>
              </div>
            </div>
            <div className="h-8 w-px bg-[#242432]" />
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#C6FF3D] animate-ping" />
              <span className="text-xs font-bold text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F]">
                Open for Internships
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Top 3 Projects Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-heading font-bold uppercase tracking-wider text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F] flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#C6FF3D]" />
            Top 3 Problem-Solving Projects
          </h2>
          <span className="text-xs text-[#9E9EA8]">Click card to read case study</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {topProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group bg-[#14141B] dark:bg-[#14141B] light:bg-white rounded-2xl p-5 border border-[#242432] light:border-black/15 hover:border-[#C6FF3D] transition-all cursor-pointer neo-card flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-[#B8A1FF]/15 text-[#B8A1FF] border border-[#B8A1FF]/30">
                    {project.honestBadge || project.category}
                  </span>
                  {project.liveUrl && (
                    <span className="text-[10px] font-bold text-[#C6FF3D] flex items-center gap-1">
                      Live <ExternalLink className="w-3 h-3" />
                    </span>
                  )}
                </div>

                <h3 className="font-heading font-black text-xl text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F] group-hover:text-[#C6FF3D] transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-[#B8A1FF] font-semibold mb-3">
                  {project.tagline}
                </p>

                {/* Impact first */}
                <div className="space-y-2 text-xs border-t border-[#242432] pt-3">
                  <p className="text-[#9E9EA8] line-clamp-2">
                    <strong className="text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F]">Problem:</strong> {project.problem}
                  </p>
                  <p className="text-[#9E9EA8] line-clamp-2">
                    <strong className="text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F]">Solution:</strong> {project.solution}
                  </p>
                  <p className="text-[#C6FF3D] text-[11px] font-medium">
                    🎯 Who it helps: {project.whoItHelps}
                  </p>
                </div>
              </div>

              {/* Tech Stack Pills & Direct Links */}
              <div className="mt-4 pt-3 border-t border-[#242432] flex items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1">
                  {project.techStack.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="text-[9px] bg-[#0B0B0F] text-[#F5F5F0] px-1.5 py-0.5 rounded border border-[#242432]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  {project.githubUrl && project.githubUrl !== "TODO" && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-1.5 rounded-lg bg-[#0B0B0F] text-[#9E9EA8] hover:text-[#C6FF3D] hover:scale-110 transition-transform"
                      title="View GitHub Repo"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-1.5 rounded-lg bg-[#0B0B0F] text-[#C6FF3D] hover:scale-110 transition-transform"
                      title="View Live Deployment"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recruiter Quick Actions Footer */}
      <div className="bg-[#14141B] dark:bg-[#14141B] light:bg-white rounded-2xl p-6 border-2 border-[#242432] light:border-black/15 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-heading font-black text-lg text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F]">
            Ready to connect?
          </h3>
          <p className="text-xs text-[#9E9EA8]">
            Available for immediate technical interviews and summer/fall internship opportunities.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          {/* Resume button */}
          <a
            href={content.personal.resumePdf}
            download="Kashish_Resume.pdf"
            className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-[#C6FF3D] text-[#0B0B0F] font-heading font-bold text-xs flex items-center justify-center gap-2 hover:bg-[#b0f224] transition-colors shadow-[2px_2px_0px_0px_#000]"
          >
            <FileDown className="w-4 h-4" />
            Download Resume (PDF)
          </a>

          {/* Copy Email */}
          <button
            onClick={handleCopyEmail}
            className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-[#0B0B0F] text-[#F5F5F0] border border-[#242432] hover:border-[#C6FF3D] text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
          >
            {copiedEmail ? (
              <>
                <Check className="w-4 h-4 text-[#C6FF3D]" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#9E9EA8]" />
                <span>Copy Email</span>
              </>
            )}
          </button>

          {/* GitHub link */}
          <a
            href={content.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-[#0B0B0F] text-[#F5F5F0] border border-[#242432] hover:border-[#C6FF3D] transition-colors flex items-center justify-center"
            title="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
