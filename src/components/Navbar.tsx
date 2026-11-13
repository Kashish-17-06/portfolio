"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePortfolio } from "@/context/PortfolioContext";
import { content } from "@/data/content";
import {
  Zap,
  Command,
  Sun,
  Moon,
  Menu,
  X,
  FileDown,
} from "lucide-react";

export default function Navbar() {
  const {
    isRecruiterMode,
    toggleRecruiterMode,
    theme,
    toggleTheme,
    setIsCommandPaletteOpen,
  } = usePortfolio();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Hackathons", href: "#hackathons" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#0B0B0F]/85 dark:bg-[#0B0B0F]/85 light:bg-[#F4F4EE]/90 border-b border-[#242432] dark:border-[#242432] light:border-[#D4D4D0] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group cursor-pointer focus:outline-none"
        >
          <div className="w-9 h-9 rounded-lg bg-[#14141B] dark:bg-[#14141B] light:bg-[#0F0F14] border border-[#242432] flex items-center justify-center font-heading font-black text-lg text-[#C6FF3D] group-hover:scale-105 transition-transform">
            K
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-black text-lg sm:text-xl tracking-tight text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0F0F14] flex items-center gap-1">
              {content.personal.name}
              <span className="w-2 h-2 rounded-full bg-[#C6FF3D] animate-ping inline-block" />
            </span>
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#B8A1FF]">
              CS &apos;28 · BPSMV
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        {!isRecruiterMode && (
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-1.5 text-xs lg:text-sm font-semibold tracking-wide text-[#9E9EA8] hover:text-[#C6FF3D] transition-colors rounded-md hover:bg-[#14141B]/60"
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Recruiter Mode Toggle */}
          <button
            onClick={toggleRecruiterMode}
            type="button"
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-full transition-all border ${
              isRecruiterMode
                ? "bg-[#C6FF3D] text-[#0B0B0F] border-[#C6FF3D] shadow-[0_0_15px_rgba(198,255,61,0.5)]"
                : "bg-[#14141B] dark:bg-[#14141B] light:bg-white text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0F0F14] border-[#242432] light:border-black/20 hover:border-[#C6FF3D]"
            }`}
            title="Toggle Recruiter Mode (30-second one-page summary)"
          >
            <Zap className={`w-3.5 h-3.5 ${isRecruiterMode ? "fill-[#0B0B0F]" : "text-[#C6FF3D]"}`} />
            <span>{isRecruiterMode ? "Exit Recruiter View" : "Recruiter Mode"}</span>
            <span className="hidden lg:inline text-[9px] px-1.5 py-0.2 rounded-full bg-[#FF4D8D] text-white">
              30s
            </span>
          </button>

          {/* Command Palette Button */}
          <button
            onClick={() => setIsCommandPaletteOpen(true)}
            type="button"
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium rounded-lg bg-[#14141B] dark:bg-[#14141B] light:bg-white border border-[#242432] light:border-black/20 text-[#9E9EA8] hover:text-[#F5F5F0] transition-colors"
            title="Command Palette (Ctrl/Cmd + K)"
          >
            <Command className="w-3.5 h-3.5 text-[#B8A1FF]" />
            <kbd className="text-[10px] bg-[#242432] text-white px-1.5 py-0.5 rounded font-mono">
              ⌘K
            </kbd>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            type="button"
            className="p-2 rounded-lg bg-[#14141B] dark:bg-[#14141B] light:bg-white border border-[#242432] light:border-black/20 text-[#9E9EA8] hover:text-[#C6FF3D] transition-colors"
            aria-label="Toggle dark/light theme"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-[#C6FF3D]" />
            ) : (
              <Moon className="w-4 h-4 text-[#FF4D8D]" />
            )}
          </button>

          {/* Direct Resume Download */}
          <a
            href={content.personal.resumePdf}
            download="Kashish_Resume.pdf"
            className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold bg-[#FF4D8D] text-white rounded-lg hover:bg-[#ff337a] transition-all shadow-[2px_2px_0px_0px_#0B0B0F]"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>

          {/* Mobile Menu Button */}
          {!isRecruiterMode && (
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="md:hidden p-2 rounded-lg bg-[#14141B] border border-[#242432] text-[#F5F5F0]"
              aria-label="Open menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && !isRecruiterMode && (
        <div className="md:hidden bg-[#0B0B0F] border-b border-[#242432] px-6 py-4 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-sm font-semibold text-[#F5F5F0] hover:text-[#C6FF3D] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[#242432] flex flex-col gap-2">
            <a
              href={content.personal.resumePdf}
              download="Kashish_Resume.pdf"
              className="flex items-center justify-center gap-2 py-2.5 text-xs font-bold bg-[#FF4D8D] text-white rounded-lg"
            >
              <FileDown className="w-4 h-4" />
              Download Resume (PDF)
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsCommandPaletteOpen(true);
              }}
              className="flex items-center justify-center gap-2 py-2 text-xs font-semibold bg-[#14141B] text-[#9E9EA8] rounded-lg border border-[#242432]"
            >
              <Command className="w-4 h-4 text-[#B8A1FF]" />
              Command Palette (Search)
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
