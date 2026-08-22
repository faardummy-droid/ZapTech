export interface ImageAsset {
  src: string;
  alt: string;
  caption?: string;
  category: "hero" | "about" | "challenge" | "technology" | "product" | "impact" | "team" | "contact";
}

export const IMAGERY: Record<string, ImageAsset> = {
  heroEVCharging: {
    src: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1600&q=80",
    alt: "Modern Electric Vehicle Charging at Clean Energy Hub",
    caption: "Intelligent EV Infrastructure Network",
    category: "hero",
  },
  heroEngineVisual: {
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    alt: "Deep Tech Microcontroller Telemetry Board",
    caption: "Sub-second IoT Edge Processing",
    category: "hero",
  },
  aboutLab: {
    src: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1400&q=80",
    alt: "ZapIn Clean-Tech R&D Laboratory",
    caption: "Hardware & AI Engineering Facility",
    category: "about",
  },
  challengeFriction: {
    src: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1400&q=80",
    alt: "Urban EV Charging Station Queue",
    caption: "Overcoming Charging Infrastructure Bottlenecks",
    category: "challenge",
  },
  technologyHardware: {
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    alt: "ZapIn ESP32 Embedded Microcontroller",
    caption: "Custom IoT Hardware & Relays",
    category: "technology",
  },
  productZapIN: {
    src: "https://images.unsplash.com/photo-1558441719-23451ead6699?auto=format&fit=crop&w=1400&q=80",
    alt: "ZapIn Smart Charging App in Commercial Hub",
    caption: "15-Minute Guaranteed Reservation Hold",
    category: "product",
  },
  impactMobility: {
    src: "/images/clean-mobility.jpg",
    alt: "Clean Electric Vehicle Mobility & Zero-Emission Driving",
    caption: "Accelerating Indonesia's Zero-Emission Transition",
    category: "impact",
  },
  impactKafe: {
    src: "/images/impact-kafe.jpg",
    alt: "Commercial Host Partner UMKM Kafe Charging Station",
    caption: "Local Business Revenue Growth",
    category: "impact",
  },
  impactGrid: {
    src: "/images/impact-grid.jpg",
    alt: "Smart Clean Grid Telemetry and Efficiency",
    caption: "Edge IoT Load Balancing",
    category: "impact",
  },
  impactCarbon: {
    src: "/images/carbon-impact.jpg",
    alt: "Clean Renewable Energy & Solar Infrastructure",
    caption: "Sustainable Power Transition",
    category: "impact",
  },
  contactHQ: {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80",
    alt: "ZapIn Innovation Center",
    caption: "Malang, East Java Innovation Facilities",
    category: "contact",
  },
};
