import { ReactNode } from "react";

export interface ProjectTag {
  label: string;
  icon?: ReactNode;
}

export interface CaseStudy {
  problem: string;
  approach: string;
  outcome: string;
  techStack: string[];
  role?: string;
}

export interface Project {
  id: string;
  title: string;
  summary: string;
  image: string;
  imageAlt?: string;
  tags: ProjectTag[];
  liveUrl?: string;
  liveUrlNote?: string;
  repoUrl?: string;
  caseStudy: CaseStudy;
}
