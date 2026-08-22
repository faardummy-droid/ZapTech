"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Smartphone,
  Server,
  Brain,
  Cpu,
  Zap,
  ArrowDown,
  Lock,
  Layers,
  Activity,
  CheckCircle2,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ComponentDetail {
  id: string;
  layer: string;
  name: string;
  icon: React.ReactNode;
  protocol: string;
  summary: string;
  techDetails: string[];
}

const ARCH_COMPONENTS: ComponentDetail[] = [
  {
    id: "mobile-app",
    layer: "01. Client Presentation Layer",
    name: "ZapIN Mobile & Web Interface",
    icon: <Smartphone className="w-5 h-5 text-[#076FB8]" />,
    protocol: "HTTPS / WSS Websockets",
    summary:
      "Cross-platform client app handling map rendering, live dock lookup, 15-minute spot lock reservations, and QR payment settlement.",
    techDetails: ["React Native / Next.js", "Mapbox GL Vectors", "Biometric Authentication"],
  },
  {
    id: "backend-cloud",
    layer: "02. Core Business Engine",
    name: "ZapIn Cloud Core & Event Broker",
    icon: <Server className="w-5 h-5 text-[#076FB8]" />,
    protocol: "REST API & EMQX MQTT Broker",
    summary:
      "Distributed backend orchestrating reservation lifecycle, user session state, QR payment gateways (QRIS/GoPay), and telemetry logs.",
    techDetails: ["Node.js / Express Server", "PostgreSQL + Redis Cache", "TLS 1.3 Encryption"],
  },
  {
    id: "ai-rerouting",
    layer: "03. Predictive Intelligence",
    name: "Dynamic AI Rerouting & Risk Engine",
    icon: <Brain className="w-5 h-5 text-[#EE7797]" />,
    protocol: "gRPC Microservices",
    summary:
      "Predictive machine learning pipeline calculating arrival occupancy probability, temporal charging curves, and proactive alternative routing.",
    techDetails: ["XGBoost Queue Predictor", "LSTM Temporal Dwell Model", "Traffic Latency API"],
  },
  {
    id: "iot-controller",
    layer: "04. Edge Microcontroller",
    name: "ZapIn Embedded ESP32 Board",
    icon: <Cpu className="w-5 h-5 text-[#FEC958]" />,
    protocol: "MQTT over TLS / Wi-Fi & 4G",
    summary:
      "Custom IoT hardware interfacing directly with charger contactor relays, reading voltage, current, and energy consumption every 500ms.",
    techDetails: ["ESP32 Dual-Core Microcontroller", "FreeRTOS Real-Time OS", "Contactor Switching Relay"],
  },
  {
    id: "charging-hardware",
    layer: "05. Physical Energy Hardware",
    name: "EV Charging Dock & Grid Infrastructure",
    icon: <Zap className="w-5 h-5 text-[#FEC958]" />,
    protocol: "OCPP 1.6J / ISO 15118",
    summary:
      "Physical EV chargers, electrical distribution panels, and transformer grid interconnects.",
    techDetails: ["22kW AC to 240kW DC Fast", "Thermal Protection Relays", "Grid Power Monitoring"],
  },
];

export const ArchitectureDiagram: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>("ai-rerouting");

  const selected =
    ARCH_COMPONENTS.find((c) => c.id === hoveredId) || ARCH_COMPONENTS[2];

  return (
    <div className="w-full bg-[#043E69] text-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-[#076FB8]/30">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/15">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#FEC958] border border-white/20 text-xs font-mono mb-2">
            System Architecture Protocol
          </div>
          <h3 className="text-2xl font-bold tracking-tight text-white">
            ZapIN End-to-End Deep Tech Pipeline
          </h3>
        </div>
        <p className="text-xs text-white/70 max-w-sm">
          Hover over any architecture block to inspect underlying protocols, telemetry loops, and software specs.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Stacked Flow Diagram */}
        <div className="lg:col-span-7 space-y-3 relative">
          {ARCH_COMPONENTS.map((item, index) => {
            const isHovered = hoveredId === item.id;
            return (
              <div key={item.id} className="relative">
                <motion.div
                  onMouseEnter={() => setHoveredId(item.id)}
                  whileHover={{ x: 4 }}
                  className={cn(
                    "p-4 rounded-xl border transition-all duration-300 flex items-center justify-between cursor-pointer",
                    isHovered
                      ? "bg-[#022744] border-[#076FB8] ring-1 ring-[#076FB8] shadow-lg shadow-[#076FB8]/20"
                      : "bg-white/5 border-white/10 hover:border-white/25"
                  )}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={cn(
                        "w-10 h-10 rounded-lg flex items-center justify-center border transition-colors",
                        isHovered
                          ? "bg-[#076FB8]/20 border-[#076FB8]"
                          : "bg-white/5 border-white/10"
                      )}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-white/60 uppercase">
                        {item.layer}
                      </div>
                      <div className="text-sm font-bold text-white">
                        {item.name}
                      </div>
                    </div>
                  </div>

                  <div className="hidden sm:block text-right">
                    <div className="text-[10px] font-mono text-[#FEC958] bg-white/10 px-2.5 py-1 rounded">
                      {item.protocol}
                    </div>
                  </div>
                </motion.div>

                {index < ARCH_COMPONENTS.length - 1 && (
                  <div className="flex justify-center my-1 opacity-40">
                    <ArrowDown className="w-4 h-4 text-[#076FB8]" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right Column: Dynamic Component Inspector */}
        <div className="lg:col-span-5 sticky top-24">
          <motion.div
            key={selected.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="p-6 rounded-2xl bg-[#022744] border border-white/15 space-y-5 shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#076FB8]/20 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-[#FEC958]" />
                <span className="text-xs font-mono font-bold text-white">
                  COMPONENT INSPECTOR
                </span>
              </div>
              <span className="text-[10px] font-mono text-[#FEC958] bg-white/10 px-2 py-0.5 rounded border border-white/20">
                ACTIVE LAYER
              </span>
            </div>

            <div>
              <div className="text-[10px] font-mono text-[#076FB8] uppercase tracking-wider mb-1">
                {selected.layer}
              </div>
              <h4 className="text-xl font-bold text-white">{selected.name}</h4>
              <p className="text-xs text-white/80 leading-relaxed mt-2">
                {selected.summary}
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1 font-mono text-xs">
              <div className="text-[10px] text-white/50 uppercase">COMMUNICATION PROTOCOL</div>
              <div className="font-bold text-[#FEC958]">{selected.protocol}</div>
            </div>

            <div>
              <div className="text-xs font-semibold text-white/80 uppercase tracking-wider mb-2">
                Technical Highlights
              </div>
              <div className="space-y-2">
                {selected.techDetails.map((tech, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-white/90">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#076FB8] shrink-0" />
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
