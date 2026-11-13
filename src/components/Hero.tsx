"use client";

import React from "react";
import { content } from "@/data/content";
import { usePortfolio } from "@/context/PortfolioContext";
import {
  ArrowDown,
  FileDown,
  Mail,
  Zap,
  Sparkles,
  Trophy,
  Code2,
  Terminal,
} from "lucide-react";

export default function Hero() {
  const { toggleRecruiterMode } = usePortfolio();
  const hackathonCount = content.hackathons.length;

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background ambient neon glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#C6FF3D]/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-[#FF4D8D]/5 blur-[130px] pointer-events-none rounded-full" />

      {/* Top Status & Recruiter Pill */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#14141B] dark:bg-[#14141B] light:bg-white border border-[#242432] light:border-black/15 text-xs font-semibold">
          <span className="w-2.5 h-2.5 rounded-full bg-[#C6FF3D] animate-ping" />
          <span className="text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F]">
            Based in India
          </span>
          <span className="text-[#9E9EA8]">·</span>
          <span className="text-[#C6FF3D] font-bold">Open to Internships</span>
        </div>

        <button
          onClick={toggleRecruiterMode}
          className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C6FF3D]/10 hover:bg-[#C6FF3D]/20 border border-[#C6FF3D]/40 text-xs font-bold text-[#C6FF3D] transition-all cursor-pointer"
        >
          <Zap className="w-3.5 h-3.5 fill-[#C6FF3D] group-hover:scale-125 transition-transform" />
          <span>In a rush? Try Recruiter Mode (30s)</span>
          <span className="bg-[#C6FF3D] text-[#0B0B0F] px-1.5 py-0.2 rounded-full text-[10px]">
            ⚡ Click
          </span>
        </button>
      </div>

      {/* Oversized Expressive Typography */}
      <div className="space-y-4 mb-8">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#B8A1FF]">
          <span>Hi, I&apos;m {content.personal.name}</span>
          <span>·</span>
          <span>{content.personal.degree}</span>
          <span className="px-2 py-0.5 rounded bg-[#FF4D8D]/20 text-[#FF4D8D] border border-[#FF4D8D]/30">
            Class of 2028
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-heading font-black tracking-tighter leading-[0.95] text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F] uppercase">
          I turn <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C6FF3D] via-[#B8A1FF] to-[#FF4D8D]">real-world</span> problems into <span className="underline decoration-[#C6FF3D] decoration-wavy decoration-2">full-stack</span> products.
        </h1>

        <p className="text-lg sm:text-xl lg:text-2xl text-[#9E9EA8] dark:text-[#9E9EA8] light:text-[#5C5C68] max-w-3xl font-medium pt-2">
          {content.personal.heroSubline}
        </p>
      </div>

      {/* Interactive Sticker Badges Strip */}
      <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-10">
        {/* Hackathon count badge - auto calculated */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#14141B] dark:bg-[#14141B] light:bg-white border-2 border-[#C6FF3D] neo-shadow-lime text-xs font-black text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F] rotate-[-1deg] hover:rotate-0 transition-transform">
          <Trophy className="w-4 h-4 text-[#C6FF3D]" />
          <span>{hackathonCount} Hackathons &amp; Counting</span>
        </div>

        {/* SIH badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#14141B] dark:bg-[#14141B] light:bg-white border-2 border-[#FF4D8D] neo-shadow-pink text-xs font-black text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F] rotate-[2deg] hover:rotate-0 transition-transform">
          <Sparkles className="w-4 h-4 text-[#FF4D8D]" />
          <span>Smart India Hackathon 2026</span>
        </div>

        {/* Tech stack badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#14141B] dark:bg-[#14141B] light:bg-white border-2 border-[#B8A1FF] neo-shadow-lavender text-xs font-black text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F] rotate-[-1.5deg] hover:rotate-0 transition-transform">
          <Code2 className="w-4 h-4 text-[#B8A1FF]" />
          <span>React · React Native · Node.js</span>
        </div>

        {/* Live build badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#14141B] dark:bg-[#14141B] light:bg-white border border-[#242432] text-xs font-bold text-[#9E9EA8] rotate-[1deg] hover:rotate-0 transition-transform">
          <Terminal className="w-3.5 h-3.5 text-[#C6FF3D]" />
          <span>KrishiPath &amp; Auronyx</span>
        </div>
      </div>

      {/* Primary CTA Buttons */}
      <div className="flex flex-wrap items-center gap-4 pt-2">
        <a
          href="#projects"
          className="px-6 sm:px-8 py-3.5 rounded-xl bg-[#C6FF3D] hover:bg-[#b0f224] text-[#0B0B0F] font-heading font-black text-sm uppercase tracking-wider flex items-center gap-2 border-2 border-[#0B0B0F] shadow-[4px_4px_0px_0px_#0B0B0F] dark:shadow-[4px_4px_0px_0px_#F5F5F0] transition-all hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-1 active:translate-y-1"
        >
          <span>View Projects</span>
          <ArrowDown className="w-4 h-4" />
        </a>

        <a
          href={content.personal.resumePdf}
          download="Kashish_Resume.pdf"
          className="px-6 sm:px-8 py-3.5 rounded-xl bg-[#FF4D8D] hover:bg-[#ff337a] text-white font-heading font-black text-sm uppercase tracking-wider flex items-center gap-2 border-2 border-[#0B0B0F] shadow-[4px_4px_0px_0px_#0B0B0F] dark:shadow-[4px_4px_0px_0px_#F5F5F0] transition-all hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-1 active:translate-y-1"
        >
          <FileDown className="w-4 h-4" />
          <span>Download Resume</span>
        </a>

        <a
          href="#contact"
          className="px-6 sm:px-8 py-3.5 rounded-xl bg-[#14141B] dark:bg-[#14141B] light:bg-white hover:border-[#C6FF3D] text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F] font-heading font-bold text-sm uppercase tracking-wider flex items-center gap-2 border-2 border-[#242432] light:border-black/20 transition-colors"
        >
          <Mail className="w-4 h-4 text-[#B8A1FF]" />
          <span>Contact Me</span>
        </a>
      </div>
    </section>
  );
}
