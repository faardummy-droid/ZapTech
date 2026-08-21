export interface NavItem {
  id: string;
  label: string;
  isProduct?: boolean;
}

export interface FeaturedProductConfig {
  name: string;
  slug: string;
  tagline: string;
  status: "featured" | "upcoming";
}

export const NAV_ITEMS: NavItem[] = [
  { id: "about", label: "About" },
  { id: "challenge", label: "Challenge" },
  { id: "solution", label: "Solution" },
  { id: "technology", label: "Technology" },
  { id: "featured-product", label: "Featured Product", isProduct: true },
  { id: "impact", label: "Impact" },
  { id: "team", label: "Team" },
  { id: "milestones", label: "Milestones" },
];

export const FEATURED_PRODUCTS: FeaturedProductConfig[] = [
  {
    name: "ZapIN",
    slug: "/technology/zapin",
    tagline: "Intelligent Clean Mobility & EV Charging Ecosystem",
    status: "featured",
  },
];
