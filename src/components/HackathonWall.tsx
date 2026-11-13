"use client";

import React, { useState } from "react";
import { content, HackathonItem } from "@/data/content";
import {
  Trophy,
  ExternalLink,
  Users,
  ChevronRight,
} from "lucide-react";

export default function HackathonWall() {
  const [selectedHackathon, setSelectedHackathon] = useState<HackathonItem | null>(null);
  const hackathons = content.hackathons;
  const count = hackathons.length;

  return (
    <section id="hackathons" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono font-black text-[#C6FF3D] px-2.5 py-1 rounded bg-[#14141B] border border-[#242432]">
            04 //
          </span>
          <div>
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F] uppercase tracking-tight flex items-center gap-2">
              Hackathon Wall
              <span className="text-xs font-heading font-bold px-2.5 py-0.5 rounded-full bg-[#C6FF3D] text-[#0B0B0F]">
                {count} entries
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-[#9E9EA8] mt-1">
              Where I learn fastest: shipping under pressure, teamwork, and taking ideas to production.
            </p>
          </div>
        </div>

        <div className="inline-flex items-center gap-2 text-xs text-[#B8A1FF] bg-[#14141B] dark:bg-[#14141B] light:bg-white px-3 py-1.5 rounded-xl border border-[#242432]">
          <Trophy className="w-4 h-4 text-[#C6FF3D]" />
          <span>Count auto-calculated dynamically</span>
        </div>
      </div>

      {/* Sticker-Style Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {hackathons.map((hackathon, idx) => {
          const isSelected = selectedHackathon?.id === hackathon.id;
          // Alternate rotation angles for sticker aesthetic
          const rotations = ["rotate-[-0.8deg]", "rotate-[1deg]", "rotate-[-1.2deg]", "rotate-[0.9deg]"];
          const rotationClass = rotations[idx % rotations.length];

          return (
            <div
              key={hackathon.id}
              onClick={() => setSelectedHackathon(hackathon)}
              className={`group bg-[#14141B] dark:bg-[#14141B] light:bg-white rounded-3xl p-6 sm:p-7 border-2 transition-all cursor-pointer neo-card flex flex-col justify-between ${rotationClass} hover:rotate-0 ${
                isSelected
                  ? "border-[#C6FF3D] neo-shadow-lime"
                  : "border-[#242432] light:border-black/15 hover:border-[#B8A1FF]"
              }`}
            >
              <div>
                {/* Sticker Badges */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-md bg-[#C6FF3D]/10 text-[#C6FF3D] border border-[#C6FF3D]/30">
                      {hackathon.year || "Hackathon"}
                    </span>
                    {hackathon.team && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#FF4D8D]/10 text-[#FF4D8D] border border-[#FF4D8D]/20 flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {hackathon.team}
                      </span>
                    )}
                  </div>

                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#0B0B0F] dark:bg-[#0B0B0F] light:bg-[#F4F4EE] text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F] border border-[#242432]">
                    {hackathon.result || "Participated"}
                  </span>
                </div>

                {/* Hackathon Name & Project */}
                <h3 className="font-heading font-black text-xl sm:text-2xl text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F] group-hover:text-[#C6FF3D] transition-colors mb-1">
                  {hackathon.name}
                </h3>
                <p className="text-xs font-semibold text-[#B8A1FF] mb-3">
                  Project: {hackathon.project}
                </p>

                {/* Organizer or Problem Statement */}
                {hackathon.problemStatement && (
                  <p className="text-xs text-[#9E9EA8] bg-[#0B0B0F] dark:bg-[#0B0B0F] light:bg-[#F4F4EE] p-2.5 rounded-xl border border-[#242432] mb-3">
                    <strong className="text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F]">Focus:</strong> {hackathon.problemStatement}
                  </p>
                )}

                {/* Role & Result details */}
                <div className="grid grid-cols-2 gap-2 text-xs mb-4">
                  <div className="p-2 rounded-xl bg-[#0B0B0F] dark:bg-[#0B0B0F] light:bg-[#F4F4EE] border border-[#242432]">
                    <span className="text-[10px] uppercase font-bold text-[#9E9EA8] block">
                      Role
                    </span>
                    <span className="font-semibold text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F]">
                      {hackathon.role}
                    </span>
                  </div>

                  <div className="p-2 rounded-xl bg-[#0B0B0F] dark:bg-[#0B0B0F] light:bg-[#F4F4EE] border border-[#242432]">
                    <span className="text-[10px] uppercase font-bold text-[#9E9EA8] block">
                      Status
                    </span>
                    <span className="font-semibold text-[#C6FF3D]">
                      {hackathon.result}
                    </span>
                  </div>
                </div>

                {/* Description */}
                {hackathon.description && (
                  <p className="text-xs text-[#9E9EA8] leading-relaxed mb-4">
                    {hackathon.description}
                  </p>
                )}
              </div>

              {/* Footer Link / Detail prompt */}
              <div className="pt-3 border-t border-[#242432] flex items-center justify-between">
                <span className="text-xs font-bold text-[#B8A1FF] flex items-center gap-1 group-hover:text-[#C6FF3D]">
                  <span>Click for detail view</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>

                {hackathon.link && hackathon.link !== "TODO" && (
                  <a
                    href={hackathon.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-1.5 rounded-lg bg-[#0B0B0F] text-[#9E9EA8] hover:text-[#C6FF3D] border border-[#242432] transition-colors"
                    title="View Hackathon Project Link"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Expanded Detail Modal for Hackathon */}
      {selectedHackathon && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedHackathon(null)}
        >
          <div
            className="w-full max-w-lg bg-[#14141B] dark:bg-[#14141B] light:bg-white border-2 border-[#C6FF3D] rounded-3xl p-6 sm:p-8 neo-shadow-lime space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-mono text-[#C6FF3D] font-bold uppercase block mb-1">
                  Hackathon Entry Detail
                </span>
                <h3 className="font-heading font-black text-2xl text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F]">
                  {selectedHackathon.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedHackathon(null)}
                className="p-2 rounded-xl bg-[#0B0B0F] text-[#9E9EA8] hover:text-[#F5F5F0] border border-[#242432]"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-3 rounded-xl bg-[#0B0B0F] dark:bg-[#0B0B0F] light:bg-[#F4F4EE] border border-[#242432]">
                <strong className="text-[#B8A1FF] block text-[11px] uppercase mb-0.5">
                  Project Built:
                </strong>
                <span className="text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F] font-semibold">
                  {selectedHackathon.project}
                </span>
              </div>

              {selectedHackathon.team && (
                <div className="p-3 rounded-xl bg-[#0B0B0F] dark:bg-[#0B0B0F] light:bg-[#F4F4EE] border border-[#242432]">
                  <strong className="text-[#FF4D8D] block text-[11px] uppercase mb-0.5">
                    Team:
                  </strong>
                  <span className="text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F] font-semibold">
                    {selectedHackathon.team}
                  </span>
                </div>
              )}

              <div className="grid grid-cols-2 gap-2">
                <div className="p-3 rounded-xl bg-[#0B0B0F] dark:bg-[#0B0B0F] light:bg-[#F4F4EE] border border-[#242432]">
                  <strong className="text-[#9E9EA8] block text-[10px] uppercase mb-0.5">
                    My Role:
                  </strong>
                  <span className="text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F] font-semibold">
                    {selectedHackathon.role}
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-[#0B0B0F] dark:bg-[#0B0B0F] light:bg-[#F4F4EE] border border-[#242432]">
                  <strong className="text-[#9E9EA8] block text-[10px] uppercase mb-0.5">
                    Official Result:
                  </strong>
                  <span className="text-[#C6FF3D] font-bold">
                    {selectedHackathon.result}
                  </span>
                </div>
              </div>

              {selectedHackathon.description && (
                <p className="text-[#9E9EA8] leading-relaxed pt-1">
                  {selectedHackathon.description}
                </p>
              )}
            </div>

            <div className="pt-4 border-t border-[#242432] flex items-center justify-between">
              {selectedHackathon.link && selectedHackathon.link !== "TODO" ? (
                <a
                  href={selectedHackathon.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-[#C6FF3D] text-[#0B0B0F] font-heading font-black text-xs flex items-center gap-1.5"
                >
                  <span>Open Project Repository</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <span className="text-xs text-yellow-400">
                  [TODO: Project link pending]
                </span>
              )}

              <button
                onClick={() => setSelectedHackathon(null)}
                className="text-xs text-[#9E9EA8] hover:text-[#F5F5F0]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
