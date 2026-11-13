"use client";

import React, { useEffect, useState } from "react";
import { content } from "@/data/content";
import {
  Star,
  GitFork,
  ExternalLink,
  Activity,
  AlertCircle,
  Code2,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";

interface RepoData {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
}

interface UserProfile {
  public_repos: number;
  followers: number;
  following: number;
  avatar_url: string;
  bio: string | null;
}

// Reliable fallback repositories for Kashish-17-06
const fallbackRepos: RepoData[] = [
  {
    id: 1,
    name: "KrishiPath",
    description: "Smarter ways for farmers in Haryana to sell their produce.",
    html_url: "https://github.com/Kashish-17-06/KrishiPath",
    stargazers_count: 1,
    forks_count: 0,
    language: "JavaScript",
    updated_at: "2026-03-01T00:00:00Z",
  },
  {
    id: 2,
    name: "food-delievery",
    description: "Full-stack food delivery web application with user and admin dashboards.",
    html_url: "https://github.com/Kashish-17-06/food-delievery",
    stargazers_count: 1,
    forks_count: 0,
    language: "JavaScript",
    updated_at: "2026-03-01T00:00:00Z",
  },
  {
    id: 3,
    name: "uber",
    description: "Full-stack mobile ride booking application built with React Native and Expo.",
    html_url: "https://github.com/Kashish-17-06/uber",
    stargazers_count: 1,
    forks_count: 0,
    language: "TypeScript",
    updated_at: "2026-03-01T00:00:00Z",
  },
];

export default function GithubWidget() {
  const [repos, setRepos] = useState<RepoData[]>(fallbackRepos);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isUsingFallback, setIsUsingFallback] = useState(false);

  useEffect(() => {
    async function fetchGithubData() {
      try {
        // Fetch profile
        const userRes = await fetch("https://api.github.com/users/Kashish-17-06");
        if (userRes.ok) {
          const userData = await userRes.json();
          setProfile(userData);
        }

        // Fetch repos
        const reposRes = await fetch(
          "https://api.github.com/users/Kashish-17-06/repos?sort=updated&per_page=6"
        );
        if (reposRes.ok) {
          const reposData = await reposRes.json();
          if (Array.isArray(reposData) && reposData.length > 0) {
            setRepos(reposData);
            setIsUsingFallback(false);
          } else {
            setIsUsingFallback(true);
          }
        } else {
          setIsUsingFallback(true);
        }
      } catch {
        setIsUsingFallback(true);
      }
    }

    fetchGithubData();
  }, []);

  return (
    <section id="github" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono font-black text-[#C6FF3D] px-2.5 py-1 rounded bg-[#14141B] border border-[#242432]">
            08 //
          </span>
          <div>
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F] uppercase tracking-tight flex items-center gap-2">
              GitHub Live Activity
              <span className="w-2.5 h-2.5 rounded-full bg-[#C6FF3D] animate-ping" />
            </h2>
            <p className="text-xs sm:text-sm text-[#9E9EA8] mt-1">
              Real-time public repositories and code commits from Kashish-17-06.
            </p>
          </div>
        </div>

        <a
          href={content.personal.github}
          target="_blank"
          rel="noopener noreferrer"
          className="self-start sm:self-auto px-4 py-2 rounded-xl bg-[#14141B] dark:bg-[#14141B] light:bg-white border border-[#242432] hover:border-[#C6FF3D] text-xs font-bold text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F] flex items-center gap-2 transition-colors"
        >
          <GithubIcon className="w-4 h-4 text-[#C6FF3D]" />
          <span>Follow @Kashish-17-06</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Profile Overview Bar */}
      <div className="bg-[#14141B] dark:bg-[#14141B] light:bg-white rounded-3xl p-6 border-2 border-[#242432] light:border-black/15 mb-6 neo-shadow-lime flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#0B0B0F] border border-[#242432] flex items-center justify-center font-heading font-black text-xl text-[#C6FF3D]">
            <GithubIcon className="w-7 h-7" />
          </div>
          <div>
            <h3 className="font-heading font-black text-lg text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F]">
              Kashish-17-06
            </h3>
            <p className="text-xs text-[#9E9EA8]">
              Active open source contributions &amp; product prototyping
            </p>
          </div>
        </div>

        <div className="flex items-center gap-6 text-xs">
          <div>
            <span className="text-[10px] uppercase font-bold text-[#9E9EA8] block">
              Public Repos
            </span>
            <span className="font-heading font-black text-base text-[#C6FF3D]">
              {profile ? profile.public_repos : repos.length}
            </span>
          </div>
          <div className="h-6 w-px bg-[#242432]" />
          <div>
            <span className="text-[10px] uppercase font-bold text-[#9E9EA8] block">
              API Status
            </span>
            <span className="font-semibold text-xs text-[#B8A1FF] flex items-center gap-1">
              <Activity className="w-3.5 h-3.5 text-[#C6FF3D]" />
              {isUsingFallback ? "Static Sync" : "Live GitHub API"}
            </span>
          </div>
        </div>
      </div>

      {/* Fallback Notice if rate-limited */}
      {isUsingFallback && (
        <div className="mb-6 p-3 rounded-xl bg-[#0B0B0F] border border-[#242432] text-xs text-[#9E9EA8] flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-[#B8A1FF] shrink-0" />
          <span>
            Displaying cached public repository sync (GitHub rate-limits unauthenticated API requests gracefully).
          </span>
        </div>
      )}

      {/* Repos Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {repos.map((repo) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#14141B] dark:bg-[#14141B] light:bg-white rounded-2xl p-5 border border-[#242432] light:border-black/15 hover:border-[#C6FF3D] transition-all neo-card flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-mono font-bold text-[#C6FF3D] group-hover:underline flex items-center gap-1.5">
                  <Code2 className="w-4 h-4" />
                  {repo.name}
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-[#9E9EA8] group-hover:text-[#C6FF3D] transition-colors" />
              </div>

              <p className="text-xs text-[#9E9EA8] line-clamp-3 mb-4 leading-relaxed">
                {repo.description || "Public repository for web and mobile development."}
              </p>
            </div>

            <div className="pt-3 border-t border-[#242432] flex items-center justify-between text-xs text-[#9E9EA8]">
              <span className="flex items-center gap-1 font-semibold text-[#B8A1FF]">
                <span className="w-2 h-2 rounded-full bg-[#B8A1FF]" />
                {repo.language || "TypeScript"}
              </span>

              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <Star className="w-3 h-3 text-yellow-400" />
                  {repo.stargazers_count}
                </span>
                <span className="flex items-center gap-1">
                  <GitFork className="w-3 h-3" />
                  {repo.forks_count}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
