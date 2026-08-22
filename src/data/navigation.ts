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
  { id: "featured-product", label: "Featured Product", isProduct: true },
  { id: "impact", label: "Impact" },
  { id: "growth-map", label: "Growth Map" },
  { id: "team", label: "Team" },
];

export const FEATURED_PRODUCTS: FeaturedProductConfig[] = [
  {
    name: "ZapIn",
    slug: "/technology/zapin",
    tagline: "Powering Your Journey, Smarter!",
    status: "featured",
  },
];
