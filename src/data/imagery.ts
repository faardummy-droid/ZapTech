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
    alt: "ZapTech Clean-Tech R&D Laboratory",
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
    alt: "ZapTech ESP32 Embedded Microcontroller",
    caption: "Custom IoT Hardware & Relays",
    category: "technology",
  },
  productZapIN: {
    src: "https://images.unsplash.com/photo-1558441719-23451ead6699?auto=format&fit=crop&w=1400&q=80",
    alt: "ZapIN Smart Charging App in Commercial Hub",
    caption: "15-Minute Guaranteed Reservation Hold",
    category: "product",
  },
  impactMobility: {
    src: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1600&q=80",
    alt: "Clean Energy Infrastructure & Sustainable Transit",
    caption: "Accelerating Indonesia's Zero-Emission Transition",
    category: "impact",
  },
  contactHQ: {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80",
    alt: "ZapTech Corporate Headquarters & Innovation Center",
    caption: "Jakarta & Bandung Innovation Facilities",
    category: "contact",
  },
};
