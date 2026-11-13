# Kashish — Personal Portfolio Website

> **"I turn real-world problems into full-stack products."**  
> Computer Science Engineering (Class of 2028) · Bhagat Phool Singh Mahila Vishwavidyalaya  
> Targeting Software Engineering, Frontend, and Full-Stack Internships.

---

## ⚡ Standout Features

1. **⚡ Recruiter Mode (`30s Executive Summary`)**:
   - Nav toggle (and keyboard shortcut `⌘K` / `Ctrl+K`) that collapses the entire site into one focused screen.
   - Highlights: Target roles, top 3 problem-solving projects with direct links, dynamically computed hackathon velocity, resume button, email with one-click copy, and GitHub.
2. **Impact-First Project Architecture**:
   - Every card explicitly details **Problem → Solution → Who It Helps** before listing the tech stack.
   - No fabricated metrics or exaggerated numbers.
   - Transparent attribution:
     - **Auronyx**: Credited to *Team AURONYXXX* for *Smart India Hackathon 2026*, with roadmap items clearly marked as **PROPOSED FUTURE IDEAS**.
     - **KrishiPath**: Live production deployment assisting farmers in Haryana.
     - **Uber Ride App**: Transparently credited as a tutorial build based on Adrian Hajdin (JavaScript Mastery).
3. **Dynamic Hackathon Wall**:
   - Sticker-style neo-brutalist interactive grid.
   - Total hackathon count is computed dynamically from the `content.hackathons` array—never hardcoded.
4. **"Problems I Care About" Interactive Strip**:
   - Agriculture (KrishiPath)
   - E-Waste & Circular Economy (Auronyx / REVARTA)
   - Local Commerce (Food Delivery App)
   - Clicking any problem navigates directly to the corresponding case study.
5. **Live GitHub Activity Widget**:
   - Connects in real-time to the public GitHub API (`https://api.github.com/users/Kashish-17-06`).
   - Seamless fallback ensures zero broken UI if the API rate-limits unauthenticated visitors.
6. **Command Palette (`Ctrl/Cmd + K`)**:
   - Instant search across all 12 sections, projects, and hackathons.
   - Quick actions to toggle Recruiter Mode, switch dark/light themes, copy email, or download resume.
7. **Comprehensive Case-Study Modals**:
   - Problem statement, implementation approach, architecture, key learnings, and honest TODO callouts.
8. **Gen Z Neo-Brutalist Visual Design**:
   - High-contrast color palette: Near-black (`#0B0B0F`), Neon Lime (`#C6FF3D`), Hot Pink (`#FF4D8D`), Soft Lavender (`#B8A1FF`).
   - Custom desktop cursor with magnetic hover states.
   - Playful custom 404 page (`/_not-found`).
   - Interactive confetti Easter Egg in the footer.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Static Export Friendly)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/) + Custom SVG Brand Icons
- **Animation & FX**: [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti), CSS Neo-Brutalist tokens
- **Typography**: Space Grotesk (Headings) & Inter (Body) via `next/font/google`

---

## 📁 Content Architecture (One File to Rule Them All)

All website content, personal info, projects, hackathons, and contact details live in **one single file**:

```
/src/data/content.ts  (also accessible via /data/content.ts)
```

You can update your bio, social links, project descriptions, or hackathons without touching a single component!

---

## 🚀 How to Add a New Hackathon to the Wall

To add a new hackathon, open `src/data/content.ts` and add an entry to the `content.hackathons` array:

```typescript
{
  id: "hackathon-name-slug",
  name: "Hackathon Name",
  year: "2026",
  organizer: "Host Organization / University",
  problemStatement: "Problem Statement Title or ID",
  project: "Project Built",
  team: "Team Name (if team project)",
  result: "Participated", // or "Winner", "Top 5", etc.
  role: "Frontend / Full-Stack Engineer",
  link: "https://github.com/your-username/your-project",
  tags: ["Web", "AI", "Mobile"],
  description: "Brief summary of what you built during the hack sprint."
}
```

> **Note**: The total hackathon counter displayed in the **Hero**, **About quick facts**, and **Recruiter Mode** will automatically update throughout the site!

---

## 🏃 Local Development

1. **Clone & Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start the Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Lint & Code Quality Check**:
   ```bash
   npm run lint
   ```

4. **Production Build**:
   ```bash
   npm run build
   ```

---

## 🚢 Deploying to Vercel

1. Push your repository to GitHub (`https://github.com/Kashish-17-06/portfolio`).
2. Log in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your `portfolio` repository.
4. Next.js will be detected automatically. Click **"Deploy"**.

---

## 📝 Assets to Customize in `/public`

- **Photo**: Place your portrait at `/public/me.jpg` to replace the default SVG placeholder avatar.
- **Resume**: Place your latest resume at `/public/resume.pdf` to replace the starter PDF document.
- **Formspree**: Update `formspreeEndpoint` in `src/data/content.ts` with your Formspree ID to receive direct emails from the contact form.

---

Crafted for **Kashish (CS '28)** with clean engineering and Gen Z energy.
