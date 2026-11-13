"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { content } from "@/data/content";
import { Sparkles } from "lucide-react";

export default function Footer() {
  const [easterEggActive, setEasterEggActive] = useState(false);
  const [easterEggMessage, setEasterEggMessage] = useState("");

  const easterEggQuotes = [
    "🚀 Offer Letter Drafted! Kashish will ship features from day one.",
    "⚡ 0 Console Errors. 100% Impact.",
    "🌱 KrishiPath & Auronyx say hello from Haryana!",
    "🏆 Smart India Hackathon mode activated!",
    "👾 You found the secret terminal easter egg!",
  ];

  const triggerEasterEgg = () => {
    // Fire festive confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.8 },
      colors: ["#C6FF3D", "#FF4D8D", "#B8A1FF", "#FFFFFF"],
    });

    const randomQuote =
      easterEggQuotes[Math.floor(Math.random() * easterEggQuotes.length)];
    setEasterEggMessage(randomQuote);
    setEasterEggActive(true);
    setTimeout(() => setEasterEggActive(false), 4500);
  };

  return (
    <footer className="w-full bg-[#07070A] border-t-2 border-[#242432] py-12 px-4 sm:px-6 lg:px-8 mt-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#242432]">
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="w-10 h-10 rounded-xl bg-[#14141B] border border-[#242432] flex items-center justify-center font-heading font-black text-xl text-[#C6FF3D]">
              K
            </div>
            <div>
              <p className="font-heading font-black text-lg text-[#F5F5F0]">
                {content.personal.name}
              </p>
              <p className="text-xs text-[#9E9EA8]">
                B.Tech CS &apos;28 · Bhagat Phool Singh Mahila Vishwavidyalaya
              </p>
            </div>
          </div>

          {/* Standout Easter Egg Button */}
          <div className="relative">
            <button
              onClick={triggerEasterEgg}
              className="px-4 py-2 rounded-full bg-[#14141B] hover:bg-[#C6FF3D] hover:text-[#0B0B0F] border-2 border-[#C6FF3D] text-[#C6FF3D] font-heading font-black text-xs uppercase tracking-wider flex items-center gap-2 transition-all neo-shadow-lime hover:scale-105 active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Hire Kashish Button (Easter Egg)</span>
              <span className="w-2 h-2 rounded-full bg-[#FF4D8D] animate-ping" />
            </button>

            {/* Easter Egg Popup Balloon */}
            {easterEggActive && (
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-72 sm:w-80 p-3 rounded-2xl bg-[#14141B] border-2 border-[#FF4D8D] neo-shadow-pink text-center text-xs font-bold text-[#F5F5F0] animate-bounce z-50">
                <span className="text-[#C6FF3D] block text-[10px] font-mono uppercase mb-0.5">
                  ★ EASTER EGG UNLOCKED ★
                </span>
                {easterEggMessage}
              </div>
            )}
          </div>
        </div>

        {/* Bottom Footer Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9E9EA8]">
          <p className="flex items-center gap-1.5">
            <span>© 2026 {content.personal.name}.</span>
            <span>Crafted with Next.js, Tailwind &amp; Gen Z energy.</span>
          </p>

          <div className="flex items-center gap-4">
            <a
              href="#about"
              className="hover:text-[#C6FF3D] transition-colors"
            >
              Top ↑
            </a>
            <a
              href={content.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C6FF3D] transition-colors"
            >
              GitHub
            </a>
            <a
              href={content.personal.resumePdf}
              download="Kashish_Resume.pdf"
              className="hover:text-[#FF4D8D] transition-colors"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
