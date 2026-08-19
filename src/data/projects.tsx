import { CodeXml } from "lucide-react";
import portfolioCardImage from "../assets/PortfolioCardImage.png";
import CHILCardImage from "../assets/CHILDataImage.png";
import { Project } from "./types";

// Add new projects here — Carousel/ProjectGrid render whatever this array contains,
// no layout code needs to change.
export const projects: Project[] = [
  {
    id: "freelance-portfolio",
    title: "Freelance Portfolio",
    summary:
      "My personal site — a glass-styled, animated showcase of my work, built to give prospective clients a fast, clear view of real project outcomes.",
    image: portfolioCardImage,
    imageAlt: "Freelance Portfolio site preview",
    tags: [
      { label: "React.js", icon: <CodeXml size={14} /> },
      { label: "GSAP", icon: <CodeXml size={14} /> },
      { label: "TypeScript", icon: <CodeXml size={14} /> },
    ],
    liveUrl: "https://joshuasadleir.com/",
    caseStudy: {
      problem:
        "Needed a personal site that does double duty — prove front-end and motion-design craft to prospective clients, while giving them a fast, honest way to see actual project outcomes rather than a generic template resume page.",
      approach:
        "Built with React 19 and TypeScript on Create React App, a custom glassmorphism design system (CSS custom properties, a reusable .glass treatment), Framer Motion for staggered section reveals, and a GSAP-driven 3D ring carousel — with an automatic grid fallback for small project counts — to present work without a heavy CMS or backend. Every case study is a typed entry in one local data file, so new work can be added without touching layout code.",
      outcome:
        "Live at joshuasadleir.com, used as the actual landing point for prospective clients — and it's a working example of the front-end and motion work described in this case study.",
      techStack: [
        "React 19",
        "TypeScript",
        "Framer Motion",
        "GSAP",
        "react-router-dom",
        "Create React App",
      ],
    },
  },
  {
    id: "chil-data-app",
    title: "CHIL Data App",
    summary:
      "A data-visualisation platform for CHIL's global satellite sensor network, built as a final-year university team project.",
    image: CHILCardImage,
    imageAlt: "CHIL Data App preview",
    tags: [
      { label: "React.js", icon: <CodeXml size={14} /> },
      { label: "Django", icon: <CodeXml size={14} /> },
      { label: "TypeScript", icon: <CodeXml size={14} /> },
      { label: "Python", icon: <CodeXml size={14} /> },
    ],
    liveUrl: "https://chil-data-app.up.railway.app/home",
    liveUrlNote:
      "Hosted on Railway's free tier — the first load after inactivity can take 30–60 seconds to spin up. Please be patient on first visit.",
    caseStudy: {
      problem:
        "CHIL operates satellite-linked environmental sensors deployed across multiple global sites; the raw sensor data had no accessible front-end, so insights lived in raw exports rather than something a non-technical stakeholder could interpret quickly.",
      approach:
        "As part of a 3–5 person final-year university team, I led front-end development and the client-facing presentations, building the React and TypeScript interface and the API integration points connecting it to a Django/Python backend — translating requirements from client meetings directly into working UI and data-fetching logic.",
      outcome:
        "Delivered a working data-visualisation app, presented to and validated with the client, demonstrating an end-to-end pipeline from raw sensor data to an interpretable dashboard.",
      techStack: ["React", "TypeScript", "Django", "Python", "REST API integration"],
      role: "University team project (3–5 members) — led front-end development, API integration, and client presentations.",
    },
  },
];
