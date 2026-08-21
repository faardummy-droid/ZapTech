import { Product } from "@/types";

export const PRODUCTS: Product[] = [
  {
    id: "zapin-mobile",
    name: "ZapIN Mobile Platform",
    tagline: "Intelligent Clean Mobility & EV Ecosystem",
    description:
      "Empowering EV drivers with real-time station availability, AI-powered dynamic rerouting, guaranteed reservation holds, and seamless instant payments.",
    tags: ["Mobile App", "AI Navigation", "Reservation Hold", "EV Mobility"],
    image: "/images/products/zapin-mobile.svg",
    link: "/technology/zapin",
    features: [
      "Real-time charger telemetry & queue forecasting",
      "AI dynamic rerouting based on traffic & station occupancy",
      "Automated reservation holds to mitigate range anxiety",
      "Unified payment gateway for cross-network charging",
    ],
  },
  {
    id: "smart-controller",
    name: "ZapTech Smart IoT Controller",
    tagline: "Edge Energy Telemetry & Power Automation",
    description:
      "Deep-tech embedded controller providing sub-second electrical metering, relay automation, cloud MQTT sync, and thermal monitoring for distributed chargers.",
    tags: ["ESP32 Hardware", "MQTT Telemetry", "Power Control", "Edge AI"],
    image: "/images/products/iot-controller.svg",
    link: "/technology/zapin#hardware",
    features: [
      "Voltage, current, active power & kWh measurement",
      "High-reliability multi-channel relay contactor switching",
      "MQTT over TLS encrypted real-time cloud streaming",
      "Over-The-Air (OTA) firmware update protocol",
    ],
  },
  {
    id: "partner-analytics",
    name: "ZapTech Partner Analytics",
    tagline: "B2B Infrastructure Management Platform",
    description:
      "Comprehensive cloud portal for host businesses, fleet operators, and energy partners to track station occupancy, revenue settlement, and grid health.",
    tags: ["B2B SaaS", "Revenue Sharing", "Station Analytics", "Grid Insights"],
    image: "/images/products/partner-analytics.svg",
    link: "/solutions",
    features: [
      "Automated daily revenue settlement & split calculation",
      "Station usage heatmaps & peak load forecasting",
      "Remote diagnostics & maintenance ticketing",
      "Carbon offset tracking & sustainability reporting",
    ],
  },
];
