"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Terminal } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0B0B0F] text-[#F5F5F0] flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md w-full bg-[#14141B] border-2 border-[#C6FF3D] rounded-3xl p-8 neo-shadow-lime space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF4D8D]/15 text-[#FF4D8D] border border-[#FF4D8D]/30 text-xs font-mono font-bold">
          <Terminal className="w-4 h-4" />
          <span>git checkout -b 404-lost</span>
        </div>

        <h1 className="text-7xl sm:text-8xl font-heading font-black tracking-tight text-[#C6FF3D]">
          404
        </h1>

        <div className="space-y-2">
          <h2 className="text-xl font-heading font-black text-[#F5F5F0] uppercase">
            Bro, you got lost in a detached HEAD
          </h2>
          <p className="text-xs sm:text-sm text-[#9E9EA8] leading-relaxed">
            The page you are looking for has been rebased, merged, or never pushed to origin. Let&apos;s get you back on main.
          </p>
        </div>

        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-[#C6FF3D] text-[#0B0B0F] font-heading font-black text-sm uppercase tracking-wider hover:bg-[#b0f224] transition-all shadow-[3px_3px_0px_0px_#000]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Safety (Portfolio)</span>
        </Link>
      </div>
    </div>
  );
}
