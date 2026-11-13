"use client";

import React, { useState, useMemo } from "react";
import { usePortfolio } from "@/context/PortfolioContext";
import { content } from "@/data/content";
import {
  Search,
  X,
  Zap,
  FolderGit2,
  Trophy,
  Moon,
  Sun,
  Copy,
  Check,
  FileDown,
  Compass,
} from "lucide-react";

const sectionsList = [
  { name: "About Kashish", href: "#about", desc: "Bio, quick facts & passion areas" },
  { name: "Skills Bento", href: "#skills", desc: "Languages, Frontend, Backend & Tools" },
  { name: "Projects Wall", href: "#projects", desc: "Problem-first product builds" },
  { name: "Hackathon Wall", href: "#hackathons", desc: "Smart India Hackathon, Aethon & velocity" },
  { name: "Experience & Timeline", href: "#experience", desc: "Roles & target internships" },
  { name: "Education", href: "#education", desc: "B.Tech CS @ BPS Mahila Vishwavidyalaya" },
  { name: "GitHub Live Widget", href: "#github", desc: "Real-time repos and activity" },
  { name: "Resume", href: "#resume", desc: "Download PDF resume" },
  { name: "Contact Me", href: "#contact", desc: "Send an inquiry or reach out" },
];

export default function CommandPalette() {
  const {
    isCommandPaletteOpen,
    setIsCommandPaletteOpen,
    toggleRecruiterMode,
    isRecruiterMode,
    toggleTheme,
    theme,
    setSelectedProject,
  } = usePortfolio();

  const [search, setSearch] = useState("");
  const [copied, setCopied] = useState(false);

  // Filter items
  const filteredSections = useMemo(() => {
    return sectionsList.filter((s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.desc.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const filteredProjects = useMemo(() => {
    return content.projects.filter(
      (p) =>
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.problem.toLowerCase().includes(search.toLowerCase()) ||
        p.techStack.some((t) => t.toLowerCase().includes(search.toLowerCase()))
    );
  }, [search]);

  const filteredHackathons = useMemo(() => {
    return content.hackathons.filter(
      (h) =>
        h.name.toLowerCase().includes(search.toLowerCase()) ||
        h.project.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  if (!isCommandPaletteOpen) return null;

  const navigateTo = (href: string) => {
    setIsCommandPaletteOpen(false);
    if (isRecruiterMode) {
      toggleRecruiterMode();
    }
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(content.personal.email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      setIsCommandPaletteOpen(false);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-2xl bg-[#14141B] dark:bg-[#14141B] light:bg-white border-2 border-[#C6FF3D] rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-[#242432] light:border-black/10 gap-3">
          <Search className="w-5 h-5 text-[#C6FF3D]" />
          <input
            type="text"
            autoFocus
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Type a command, project, or section to jump..."
            className="w-full bg-transparent text-sm sm:text-base text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F] placeholder-[#9E9EA8] focus:outline-none"
          />
          <button
            onClick={() => setIsCommandPaletteOpen(false)}
            className="p-1 rounded-lg bg-[#242432] text-[#9E9EA8] hover:text-[#F5F5F0] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Results */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4">
          {/* Quick Actions */}
          <div>
            <span className="text-[10px] font-bold tracking-widest uppercase text-[#9E9EA8] px-2 block mb-2">
              ⚡ Quick Actions
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <button
                onClick={() => {
                  toggleRecruiterMode();
                  setIsCommandPaletteOpen(false);
                }}
                className="flex items-center justify-between p-2.5 rounded-xl bg-[#0B0B0F] dark:bg-[#0B0B0F] light:bg-[#F4F4EE] hover:border-[#C6FF3D] border border-[#242432] text-left transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#C6FF3D]" />
                  <span className="text-xs font-bold text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F]">
                    {isRecruiterMode ? "Exit Recruiter Mode" : "Switch to Recruiter Mode"}
                  </span>
                </div>
                <span className="text-[10px] text-[#9E9EA8]">30s view</span>
              </button>

              <button
                onClick={() => {
                  toggleTheme();
                  setIsCommandPaletteOpen(false);
                }}
                className="flex items-center justify-between p-2.5 rounded-xl bg-[#0B0B0F] dark:bg-[#0B0B0F] light:bg-[#F4F4EE] hover:border-[#FF4D8D] border border-[#242432] text-left transition-colors"
              >
                <div className="flex items-center gap-2">
                  {theme === "dark" ? (
                    <Sun className="w-4 h-4 text-[#C6FF3D]" />
                  ) : (
                    <Moon className="w-4 h-4 text-[#FF4D8D]" />
                  )}
                  <span className="text-xs font-bold text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F]">
                    Toggle Theme ({theme === "dark" ? "Light" : "Dark"})
                  </span>
                </div>
              </button>

              <button
                onClick={handleCopyEmail}
                className="flex items-center justify-between p-2.5 rounded-xl bg-[#0B0B0F] dark:bg-[#0B0B0F] light:bg-[#F4F4EE] hover:border-[#B8A1FF] border border-[#242432] text-left transition-colors"
              >
                <div className="flex items-center gap-2">
                  {copied ? (
                    <Check className="w-4 h-4 text-[#C6FF3D]" />
                  ) : (
                    <Copy className="w-4 h-4 text-[#B8A1FF]" />
                  )}
                  <span className="text-xs font-bold text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F]">
                    {copied ? "Copied to Clipboard!" : "Copy Kashish's Email"}
                  </span>
                </div>
              </button>

              <a
                href={content.personal.resumePdf}
                download="Kashish_Resume.pdf"
                onClick={() => setIsCommandPaletteOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-xl bg-[#0B0B0F] dark:bg-[#0B0B0F] light:bg-[#F4F4EE] hover:border-[#FF4D8D] border border-[#242432] text-left transition-colors"
              >
                <div className="flex items-center gap-2">
                  <FileDown className="w-4 h-4 text-[#FF4D8D]" />
                  <span className="text-xs font-bold text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F]">
                    Download Resume (PDF)
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Projects */}
          {filteredProjects.length > 0 && (
            <div>
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#9E9EA8] px-2 block mb-2">
                📂 Projects ({filteredProjects.length})
              </span>
              <div className="space-y-1.5">
                {filteredProjects.map((project) => (
                  <button
                    key={project.id}
                    onClick={() => {
                      setSelectedProject(project);
                      setIsCommandPaletteOpen(false);
                    }}
                    className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-[#0B0B0F] dark:hover:bg-[#0B0B0F] light:hover:bg-[#F4F4EE] border border-transparent hover:border-[#C6FF3D] transition-colors text-left group"
                  >
                    <div className="flex items-center gap-3">
                      <FolderGit2 className="w-4 h-4 text-[#C6FF3D] group-hover:scale-110 transition-transform" />
                      <div>
                        <p className="text-xs font-bold text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F]">
                          {project.title}
                        </p>
                        <p className="text-[10px] text-[#9E9EA8]">
                          {project.tagline}
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#242432] text-[#B8A1FF]">
                      Open Modal
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Hackathons */}
          {filteredHackathons.length > 0 && (
            <div>
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#9E9EA8] px-2 block mb-2">
                🏆 Hackathons ({filteredHackathons.length})
              </span>
              <div className="space-y-1.5">
                {filteredHackathons.map((h) => (
                  <button
                    key={h.id}
                    onClick={() => navigateTo("#hackathons")}
                    className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-[#0B0B0F] dark:hover:bg-[#0B0B0F] light:hover:bg-[#F4F4EE] border border-transparent hover:border-[#B8A1FF] transition-colors text-left group"
                  >
                    <div className="flex items-center gap-3">
                      <Trophy className="w-4 h-4 text-[#B8A1FF]" />
                      <div>
                        <p className="text-xs font-bold text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F]">
                          {h.name}
                        </p>
                        <p className="text-[10px] text-[#9E9EA8]">
                          Project: {h.project}
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] text-[#9E9EA8]">
                      Jump to Wall
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Sections */}
          {filteredSections.length > 0 && (
            <div>
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#9E9EA8] px-2 block mb-2">
                🧭 Page Sections
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {filteredSections.map((sec) => (
                  <button
                    key={sec.name}
                    onClick={() => navigateTo(sec.href)}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-[#0B0B0F] dark:hover:bg-[#0B0B0F] light:hover:bg-[#F4F4EE] border border-transparent hover:border-[#C6FF3D] transition-colors text-left"
                  >
                    <div className="flex items-center gap-2">
                      <Compass className="w-3.5 h-3.5 text-[#9E9EA8]" />
                      <div>
                        <span className="text-xs font-semibold text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F] block">
                          {sec.name}
                        </span>
                        <span className="text-[10px] text-[#9E9EA8] block">
                          {sec.desc}
                        </span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer info bar */}
        <div className="p-3 bg-[#0B0B0F] dark:bg-[#0B0B0F] light:bg-[#EAEAE4] border-t border-[#242432] light:border-black/10 flex items-center justify-between text-[11px] text-[#9E9EA8]">
          <span>Press <kbd className="px-1.5 py-0.5 bg-[#242432] text-white rounded">ESC</kbd> to dismiss</span>
          <span>Navigation made instant</span>
        </div>
      </div>
    </div>
  );
}
