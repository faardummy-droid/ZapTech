export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  github?: string;
  email?: string;
  education?: string;
  experience?: string[];
  focusAreas?: string[];
  statement?: string;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  features: string[];
}

export interface Milestone {
  id: string;
  title: string;
  category: string;
  date: string;
  description: string;
  status: "completed" | "current" | "upcoming";
}

export interface ImpactMetric {
  id: string;
  title: string;
  value: number;
  suffix: string;
  prefix?: string;
  description: string;
  category: string;
}

export interface TechCardItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  details: string[];
}
