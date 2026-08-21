import { TechCardItem } from "@/types";

export const TECH_FEATURES: TechCardItem[] = [
  {
    id: "ai-rerouting",
    title: "AI Dynamic Rerouting Engine",
    description: "Machine learning model predicting queue probability, traffic latency, and charging point availability in real-time.",
    icon: "Brain",
    details: [
      "ETA calculation factoring vehicle SOC & road conditions",
      "Occupancy forecasting via historical trend analysis",
      "Dynamic risk score assigned per charging candidate",
      "Proactive rerouting recommendation before arrival",
    ],
  },
  {
    id: "edge-iot",
    title: "Edge IoT Hardware & Telemetry",
    description: "Custom microcontrollers deployed inside charger units delivering microsecond power control and continuous sensor feedback.",
    icon: "Cpu",
    details: [
      "ESP32 dual-core microarchitecture",
      "High-precision current/voltage metering loops",
      "Sub-second MQTT telemetry ping over 4G/WiFi",
      "Fail-safe offline state caching & local queueing",
    ],
  },
  {
    id: "cloud-analytics",
    title: "Cloud Infrastructure & Real-Time Sync",
    description: "Event-driven microservice backend orchestrating thousands of simultaneous sessions, station locks, and revenue ledgers.",
    icon: "Cloud",
    details: [
      "WebSocket & MQTT pub-sub brokers",
      "Millisecond reservation guard locks",
      "Automated idle fee calculation algorithms",
      "Instant settlement dispatching to host wallets",
    ],
  },
  {
    id: "smart-hardware",
    title: "Smart Hardware Integration Layer",
    description: "Universal interface bridge connecting legacy electrical grid panels with next-gen EV charging equipment.",
    icon: "Zap",
    details: [
      "Modbus RTU / RS485 power meter protocol",
      "AC/DC contactor control with safety interlocks",
      "Over-voltage & thermal shutdown triggers",
      "Modular expansion port for solar/storage integration",
    ],
  },
];
