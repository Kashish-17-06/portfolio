export interface HackathonItem {
  id: string;
  name: string;
  year?: string;
  organizer?: string;
  problemStatement?: string;
  project: string;
  result: string; // e.g., "Participated" or specific result
  role: string;
  link?: string;
  isTodo?: boolean;
  team?: string;
  tags?: string[];
  description?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  featured: boolean;
  category: "Team Project" | "Featured Project" | "Full-Stack Web" | "Tutorial Build" | "Slot";
  honestBadge?: string;
  teamCredit?: string;
  problem: string;
  solution: string;
  whoItHelps: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  demoUrl?: string;
  credit?: string;
  screenshots?: string[];
  caseStudy: {
    overview: string;
    approach: string;
    architecture?: string;
    challengesAndLearnings: string;
    futureIdeas?: string[]; // strictly labelled as PROPOSED FUTURE IDEAS for Auronyx
    todos?: string[];
  };
  careProblemKey?: "agriculture" | "ewaste" | "commerce";
}

export interface SkillCategory {
  title: string;
  skills: { name: string; icon?: string; isTodo?: boolean }[];
}

export interface SiteContent {
  personal: {
    name: string;
    graduationYear: string;
    college: string;
    degree: string;
    targetRoles: string[];
    tagline: string;
    heroSubline: string;
    bio: string;
    location: string;
    openToInternships: boolean;
    currentlyLearning: string;
    currentlyBuilding: string;
    avatar: string;
    resumePdf: string;
    email: string;
    github: string;
    linkedin: string;
    twitter?: string;
    formspreeEndpoint: string;
  };
  problemsICareAbout: {
    title: string;
    description: string;
    projectId: string;
    badge: string;
    accentColor: "lime" | "pink" | "lavender";
  }[];
  skills: {
    categories: SkillCategory[];
    marquee: string[];
  };
  projects: ProjectItem[];
  hackathons: HackathonItem[];
  experience: {
    id: string;
    title: string;
    company: string;
    period: string;
    description: string;
    isTodo: boolean;
  }[];
  achievements: {
    id: string;
    title: string;
    issuer: string;
    date: string;
    description: string;
    isTodo: boolean;
  }[];
  education: {
    degree: string;
    institution: string;
    timeline: string;
    details: string;
  };
}

export const content: SiteContent = {
  personal: {
    name: "Kashish",
    graduationYear: "2028",
    college: "Bhagat Phool Singh Mahila Vishwavidyalaya",
    degree: "B.Tech in Computer Science",
    targetRoles: [
      "Software Engineering Intern",
      "Frontend Intern",
      "Full-Stack Intern",
    ],
    tagline: "I turn real-world problems into full-stack products.",
    heroSubline:
      "CS '28 · Hackathon builder · Open to SDE, frontend and full-stack internships",
    bio: "I'm Kashish, a Computer Science student (class of 2028) who builds software for problems that actually exist. I built KrishiPath to help Haryana's farmers find better markets, and worked with Team AURONYXXX on Auronyx for Smart India Hackathon 2026, connecting scrap collectors with e-waste recyclers. Hackathons like SIH and Aethon are where I learn fastest: shipping under pressure, working in teams, and turning ideas into working products. I work across React, Node.js and React Native, and I'm looking for an SDE, frontend or full-stack internship where I can ship real features.",
    location: "India",
    openToInternships: true,
    currentlyLearning: "TODO (Fill in what you are exploring right now)",
    currentlyBuilding: "TODO (Fill in your active side project)",
    avatar: "/me.jpg",
    resumePdf: "/resume.pdf",
    email: "TODO: Add your email in /data/content.ts",
    github: "https://github.com/Kashish-17-06",
    linkedin: "TODO: Add your LinkedIn profile",
    twitter: "TODO: Add Twitter/X profile",
    formspreeEndpoint: "https://formspree.io/f/TODO_YOUR_ID",
  },

  problemsICareAbout: [
    {
      title: "Agriculture & Fair Markets",
      description:
        "Helping Haryana's farmers overcome market intermediaries, comparing transport, storage, and demand to maximize crop earnings.",
      projectId: "krishipath",
      badge: "Agritech",
      accentColor: "lime",
    },
    {
      title: "E-Waste & Circular Economy",
      description:
        "Diverting hazardous electronic waste from landfills by empowering informal scrap collectors with digital valuation and recycler matching.",
      projectId: "auronyx",
      badge: "Sustainability & AI",
      accentColor: "lavender",
    },
    {
      title: "Local Commerce & Food Delivery",
      description:
        "Building dependable, full-stack ordering and administration platforms connecting local eateries directly to community customers.",
      projectId: "food-delivery",
      badge: "Commerce",
      accentColor: "pink",
    },
  ],

  skills: {
    categories: [
      {
        title: "Languages",
        skills: [
          { name: "JavaScript" },
          { name: "TypeScript" },
          { name: "TODO: Add more languages", isTodo: true },
        ],
      },
      {
        title: "Frontend",
        skills: [
          { name: "React" },
          { name: "Next.js" },
          { name: "HTML5" },
          { name: "CSS3" },
          { name: "Tailwind CSS" },
        ],
      },
      {
        title: "Mobile",
        skills: [
          { name: "React Native" },
          { name: "Expo" },
        ],
      },
      {
        title: "Backend & Database",
        skills: [
          { name: "Node.js" },
          { name: "Express" },
          { name: "MongoDB" },
          { name: "PostgreSQL" },
        ],
      },
      {
        title: "Tools & Services",
        skills: [
          { name: "Git" },
          { name: "GitHub" },
          { name: "Vercel" },
          { name: "Stripe" },
          { name: "Clerk" },
          { name: "Google Maps API" },
          { name: "TODO: Add tools", isTodo: true },
        ],
      },
    ],
    marquee: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "React Native",
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "Expo",
      "Clerk",
      "Stripe",
      "Git & GitHub",
      "Vercel",
      "Smart India Hackathon 2026",
      "Framer Motion",
      "Full-Stack Engineering",
    ],
  },

  projects: [
    {
      id: "auronyx",
      title: "Auronyx / REVARTA",
      tagline: "Revalue the Waste. Reconnect the Chain.",
      featured: true,
      category: "Team Project",
      honestBadge: "Team project · SIH 2026",
      teamCredit: "Team AURONYXXX",
      careProblemKey: "ewaste",
      problem:
        "Informal scrap collectors (kabadiwalas) have no easy way to identify electronic waste, calculate its fair market value, or safely connect with formal recyclers.",
      solution:
        "REVARTA bridges informal collectors with the formal e-waste recycling ecosystem through material identification from images, estimated valuation from weight and pricing data, recycler discovery by location and material, digital handover records, an earnings ledger, and recycler matching.",
      whoItHelps:
        "Scrap collectors (kabadiwalas) and licensed e-waste recyclers",
      techStack: [
        "React",
        "Node.js",
        "Computer Vision (AI)",
        "TODO: Confirm complete stack",
      ],
      githubUrl: "https://github.com/soniya1610/Auronyx",
      liveUrl: undefined,
      demoUrl: undefined,
      credit: "Built with Team AURONYXXX for Smart India Hackathon 2026. All rights reserved by Team AURONYXXX.",
      screenshots: [],
      caseStudy: {
        overview:
          "Auronyx (REVARTA) was developed for Smart India Hackathon 2026 (Problem Statement SIH26229) to tackle India's rapidly growing informal e-waste challenge. It bridges the gap between grassroots collectors and formal green recyclers.",
        approach:
          "Designed a transparent workflow: scrap collectors capture images of discarded devices to identify materials and estimate value using live pricing data, then connect with verified recyclers through an intuitive map and digital handover system.",
        architecture:
          "Frontend client application paired with backend microservices for valuation, directory lookups, and transaction logs.",
        challengesAndLearnings:
          "Shipping under high pressure at SIH 2026 taught our team how to synthesize hardware and software concepts into a clean user interface that non-technical informal workers can operate effortlessly.",
        futureIdeas: [
          "PROPOSED FUTURE IDEA: Integration of automated computer vision micro-models on edge mobile devices.",
          "PROPOSED FUTURE IDEA: Automated payout escrow smart contracts upon verified recycling handover.",
          "PROPOSED FUTURE IDEA: Regional multi-language audio prompts for grassroots collectors.",
        ],
        todos: [
          "Confirm exact Problem Statement ID (currently SIH26229)",
          "Confirm exact role of Kashish within Team AURONYXXX",
          "Confirm exact finalized tech stack details",
          "Provide live demo link or UI screenshots if available",
        ],
      },
    },
    {
      id: "krishipath",
      title: "KrishiPath",
      tagline: "Smarter ways for farmers to sell.",
      featured: true,
      category: "Featured Project",
      honestBadge: "Live Production",
      careProblemKey: "agriculture",
      problem:
        "Farmers in Haryana face volatile pricing and lack visibility into where, when, and how to sell their produce for maximum net profit.",
      solution:
        "An intelligent farm-to-market platform that compares agricultural markets, buyers, transportation costs, storage options, and real-time demand to help farmers select the most lucrative sales channel.",
      whoItHelps: "Farmers across Haryana",
      techStack: [
        "React",
        "Node.js",
        "Express",
        "Market Module API",
        "Tailwind CSS",
        "Vercel",
      ],
      githubUrl: "https://github.com/Kashish-17-06/KrishiPath",
      liveUrl: "https://krishi-path-neon.vercel.app",
      screenshots: [],
      caseStudy: {
        overview:
          "KrishiPath is an agriculture-tech platform built to empower local farmers in Haryana with data-driven decision making, moving away from predatory middleman rates toward transparent market comparisons.",
        approach:
          "Separated architecture into a modern React frontend and a dedicated Node.js backend. The backend hosts a specialized market module calculating net yield after transport and storage estimates.",
        architecture:
          "Decoupled client-server architecture with an independent market analysis engine deployed on Vercel.",
        challengesAndLearnings:
          "Understanding real farmer pain points and simplifying complex logistical comparisons into clear, accessible visual indicators.",
        todos: [
          "Confirm exact finalized tech stack libraries",
          "Specify Kashish's exact personal contribution highlights",
          "Add high-res screenshots of dashboard and market comparison tool",
        ],
      },
    },
    {
      id: "food-delivery",
      title: "Food Delivery App",
      tagline: "Order, track, manage. End to end.",
      featured: false,
      category: "Full-Stack Web",
      honestBadge: "Full-Stack Web App",
      careProblemKey: "commerce",
      problem:
        "Local restaurants need an accessible ordering and order management pipeline without prohibitive middleman commissions.",
      solution:
        "A full-stack food delivery web application allowing users to register, authenticate, browse menus, manage a shopping cart, and place orders online, accompanied by an administrative dashboard to manage menu items and monitor orders.",
      whoItHelps: "Online food shoppers and local restaurant operators",
      techStack: ["React", "Node.js", "Express", "MongoDB", "CSS"],
      githubUrl: "https://github.com/Kashish-17-06/food-delievery",
      liveUrl: undefined,
      screenshots: [],
      caseStudy: {
        overview:
          "A full-stack e-commerce experience implementing end-to-end food ordering, cart persistence, state management, and real-time order tracking for customers alongside an admin control center.",
        approach:
          "Built a RESTful API with Express and MongoDB to handle authentication, product listings, and order lifecycle states. Connected to a responsive React UI.",
        challengesAndLearnings:
          "Managing synchronous cart updates, state validation, and designing separate user vs admin roles.",
        todos: [
          "Provide live deployed link if active",
          "Add screenshots of menu, cart checkout, and admin dashboard",
        ],
      },
    },
    {
      id: "uber-clone",
      title: "Uber Ride App",
      tagline: "Mobile ride-booking with live maps and payments.",
      featured: false,
      category: "Tutorial Build",
      honestBadge: "Tutorial build · Adrian Hajdin (JSM)",
      credit:
        "Built while following JavaScript Mastery's comprehensive Uber clone tutorial (original: https://github.com/adrianhajdin/uber). Transparently credited as a learning project.",
      problem:
        "Understanding complex mobile workflows: GPS geolocation tracking, real-time map routing, secure payment processing, and serverless databases in React Native.",
      solution:
        "A full-featured mobile ride-booking app built with Expo and React Native. Includes user onboarding, email and Google sign-in via Clerk, live location on Google Maps, place autocomplete, ride search, fare calculation, Stripe payments, profile management, and ride history powered by Neon Postgres.",
      whoItHelps: "Commuters seeking seamless on-demand ride booking",
      techStack: [
        "React Native",
        "Expo",
        "TypeScript",
        "Tailwind (NativeWind)",
        "Zustand",
        "Clerk",
        "Stripe",
        "Google Maps",
        "PostgreSQL (Neon)",
      ],
      githubUrl: "https://github.com/Kashish-17-06/uber",
      liveUrl: undefined,
      demoUrl: undefined,
      screenshots: [],
      caseStudy: {
        overview:
          "A deep dive into cross-platform mobile engineering. Built to understand how modern production-grade mobile applications orchestrate mapping, payments, and authentication.",
        approach:
          "Integrated Clerk for auth, Google Maps API for interactive driver/passenger coordinates and route polylines, and Stripe SDK for tokenized payment checkout.",
        challengesAndLearnings:
          "Managing native device permissions, geocoding coordinates, handling Stripe webhooks, and optimizing Zustand stores for reactive map state.",
        todos: [
          "List personal customizations or unique features added beyond the baseline tutorial",
          "Add demo video or app simulator screenshots",
        ],
      },
    },
    {
      id: "loknigani",
      title: "Loknigani",
      tagline: "TODO: Add project tagline",
      featured: false,
      category: "Slot",
      honestBadge: "Upcoming Slot",
      problem: "TODO: Describe the problem Loknigani addresses.",
      solution: "TODO: Describe the technical solution and core functionality.",
      whoItHelps: "TODO: Define the primary target audience.",
      techStack: ["TODO: Specify tech stack"],
      githubUrl: "TODO: Add repository link",
      liveUrl: undefined,
      screenshots: [],
      caseStudy: {
        overview: "TODO: Overview placeholder for Loknigani project.",
        approach: "TODO: Implementation approach.",
        challengesAndLearnings: "TODO: Key technical takeaways.",
        todos: [
          "Provide project name & description",
          "Provide tech stack and links",
          "Or remove this slot if not needed",
        ],
      },
    },
  ],

  hackathons: [
    {
      id: "sih-2026",
      name: "Smart India Hackathon 2026",
      year: "2026",
      organizer: "Ministry of Education & AICTE",
      problemStatement: "Problem Statement ID: SIH26229 (confirm)",
      project: "Auronyx / REVARTA",
      team: "Team AURONYXXX",
      result: "Participated (Result: TODO)",
      role: "TODO: Describe your role",
      link: "https://github.com/soniya1610/Auronyx",
      tags: ["National Hackathon", "Hardware & AI", "Sustainability", "SIH"],
      description:
        "Building REVARTA to connect informal scrap collectors with certified e-waste recyclers using AI material valuation and geolocation discovery.",
    },
    {
      id: "aethon",
      name: "Aethon",
      year: "TODO",
      organizer: "TODO: Organizer / College",
      project: "TODO: Project built at Aethon",
      result: "Participated (Result: TODO)",
      role: "TODO: Your role",
      link: "TODO: Link to project or certificate",
      tags: ["Hackathon", "Rapid Prototyping"],
      description:
        "Intensive hackathon sprint focusing on rapid product prototyping and collaborative problem solving.",
    },
    {
      id: "hackathon-slot-3",
      name: "Hackathon #3 (Slot)",
      year: "TODO",
      organizer: "TODO",
      project: "TODO: Project Name",
      result: "Participated",
      role: "TODO: Role",
      link: "TODO",
      isTodo: true,
      tags: ["Upcoming", "Hackathon"],
      description: "TODO: Add details for hackathon entry #3.",
    },
    {
      id: "hackathon-slot-4",
      name: "Hackathon #4 (Slot)",
      year: "TODO",
      organizer: "TODO",
      project: "TODO: Project Name",
      result: "Participated",
      role: "TODO: Role",
      link: "TODO",
      isTodo: true,
      tags: ["Upcoming", "Hackathon"],
      description: "TODO: Add details for hackathon entry #4.",
    },
  ],

  experience: [
    {
      id: "exp-1",
      title: "Software Engineering / Frontend Intern (Targeting)",
      company: "Open to Opportunities (Summer / Fall 2025 - 2026)",
      period: "Upcoming",
      description:
        "Actively preparing and seeking an SDE, frontend, or full-stack internship. Ready to contribute production features in React, Next.js, Node.js, and React Native.",
      isTodo: true,
    },
    {
      id: "exp-placeholder",
      title: "Previous Internships / Roles: TODO",
      company: "TODO: Company / Organization Name",
      period: "TODO: Dates",
      description:
        "TODO: If you have prior internship, freelance, or open-source contributor experience, list it here.",
      isTodo: true,
    },
  ],

  achievements: [
    {
      id: "ach-1",
      title: "Smart India Hackathon 2026 Participant",
      issuer: "AICTE & Ministry of Education, Govt of India",
      date: "2026",
      description:
        "Shortlisted to tackle national-level e-waste problem statement SIH26229 with Team AURONYXXX.",
      isTodo: false,
    },
    {
      id: "ach-2",
      title: "Aethon Hackathon Participant",
      issuer: "Aethon Organizers",
      date: "TODO",
      description:
        "Participated and built software under intense hackathon pressure.",
      isTodo: true,
    },
    {
      id: "ach-3",
      title: "Certifications & Honors: TODO",
      issuer: "TODO: Platform / Organization",
      date: "TODO",
      description:
        "TODO: Add web development certifications, competitive coding ratings, or academic honors.",
      isTodo: true,
    },
  ],

  education: {
    degree: "B.Tech in Computer Science and Engineering",
    institution:
      "Bhagat Phool Singh Mahila Vishwavidyalaya (BPSMV), Khanpur Kalan, Sonipat, Haryana",
    timeline: "2024 – 2028 (Graduating 2028)",
    details:
      "Focusing on foundational Computer Science, Data Structures & Algorithms, Object-Oriented Software Design, Database Systems, and Full-Stack Web Development.",
  },
};
