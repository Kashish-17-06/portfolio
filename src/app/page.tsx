"use client";

import React from "react";
import { PortfolioProvider, usePortfolio } from "@/context/PortfolioContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ProjectModal from "@/components/ProjectModal";
import HackathonWall from "@/components/HackathonWall";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Education from "@/components/Education";
import GithubWidget from "@/components/GithubWidget";
import ResumeSection from "@/components/ResumeSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import RecruiterMode from "@/components/RecruiterMode";
import CommandPalette from "@/components/CommandPalette";
import CustomCursor from "@/components/CustomCursor";

function PortfolioContent() {
  const { isRecruiterMode } = usePortfolio();

  return (
    <div className="relative min-h-screen grain-overlay">
      <CustomCursor />
      <CommandPalette />
      <ProjectModal />

      <Navbar />

      <main>
        {isRecruiterMode ? (
          <RecruiterMode />
        ) : (
          <>
            {/* 1. Hero */}
            <Hero />

            {/* 2. About me & "Problems I care about" strip */}
            <About />

            {/* 3. Skills (bento grid + marquee) */}
            <Skills />

            {/* 4. Projects (cards + case-study modals) */}
            <Projects />

            {/* 5. Hackathons (Hackathon Wall stickers with detail view) */}
            <HackathonWall />

            {/* 6. Experience / internships timeline */}
            <Experience />

            {/* 7. Achievements & certifications */}
            <Achievements />

            {/* 8. Education */}
            <Education />

            {/* 9. GitHub live activity widget */}
            <GithubWidget />

            {/* 10. Resume download button */}
            <ResumeSection />

            {/* 11. Contact working form + social links */}
            <Contact />
          </>
        )}
      </main>

      {/* 12. Footer with easter egg */}
      <Footer />
    </div>
  );
}

export default function Home() {
  return (
    <PortfolioProvider>
      <PortfolioContent />
    </PortfolioProvider>
  );
}
