"use client";

import React from "react";
import { content } from "@/data/content";
import { FileText, Download } from "lucide-react";

export default function ResumeSection() {
  const { resumePdf, name, targetRoles } = content.personal;

  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-10">
        <span className="text-xs font-mono font-black text-[#C6FF3D] px-2.5 py-1 rounded bg-[#14141B] border border-[#242432]">
          09 //
        </span>
        <div>
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F] uppercase tracking-tight">
            Curriculum Vitae
          </h2>
          <p className="text-xs sm:text-sm text-[#9E9EA8] mt-1">
            Official resume document for engineering internships and technical review.
          </p>
        </div>
        <div className="h-px flex-1 bg-[#242432] ml-4 hidden sm:block" />
      </div>

      <div className="bg-[#14141B] dark:bg-[#14141B] light:bg-white rounded-3xl p-6 sm:p-10 border-2 border-[#242432] light:border-black/15 neo-shadow-pink">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#FF4D8D]/15 text-[#FF4D8D] border border-[#FF4D8D]/30 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5" />
                PDF Document
              </span>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#C6FF3D]/15 text-[#C6FF3D] border border-[#C6FF3D]/30">
                Ready for Review
              </span>
            </div>

            <h3 className="font-heading font-black text-2xl sm:text-3xl text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F]">
              Download {name}&apos;s Official Resume
            </h3>

            <p className="text-xs sm:text-sm text-[#9E9EA8] dark:text-[#9E9EA8] light:text-[#5C5C68] leading-relaxed">
              Contains detailed breakdowns of KrishiPath, Auronyx (SIH 2026), full-stack project architectures, academic credentials from BPS Mahila Vishwavidyalaya, and core technical proficiencies.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              {targetRoles.map((role) => (
                <span
                  key={role}
                  className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-[#0B0B0F] dark:bg-[#0B0B0F] light:bg-[#F4F4EE] text-[#B8A1FF] border border-[#242432]"
                >
                  ✓ {role}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto">
            <a
              href={resumePdf}
              download="Kashish_Resume.pdf"
              className="px-8 py-4 rounded-2xl bg-[#FF4D8D] hover:bg-[#ff337a] text-white font-heading font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 border-2 border-[#0B0B0F] shadow-[4px_4px_0px_0px_#0B0B0F] transition-all hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-1 active:translate-y-1"
            >
              <Download className="w-5 h-5" />
              <span>Download PDF (resume.pdf)</span>
            </a>

            <a
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-xl bg-[#0B0B0F] dark:bg-[#0B0B0F] light:bg-[#F4F4EE] text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F] border border-[#242432] hover:border-[#C6FF3D] text-xs font-bold text-center transition-colors"
            >
              Open In New Tab Preview
            </a>
          </div>
        </div>

        {/* Note on updating file */}
        <div className="mt-8 pt-4 border-t border-[#242432] text-xs text-[#9E9EA8] flex items-center justify-between">
          <span>File location: <code className="text-[#C6FF3D]">/public/resume.pdf</code></span>
          <span>Last synchronized: Current version</span>
        </div>
      </div>
    </section>
  );
}
