"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Smartphone,
  Cloud,
  Brain,
  Cpu,
  Building2,
  Zap,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface EcosystemNode {
  id: string;
  name: string;
  category: string;
  icon: React.ReactNode;
  description: string;
  highlightColor: string;
}

const NODES: EcosystemNode[] = [
  {
    id: "ev-driver",
    name: "EV Driver",
    category: "User & Mobility",
    icon: <Smartphone className="w-5 h-5 text-[#076FB8]" />,
    description: "Driver experiencing range anxiety & station search requirements.",
    highlightColor: "#076FB8",
  },
  {
    id: "zapin",
    name: "ZapIN App",
    category: "Mobile Platform",
    icon: <Zap className="w-5 h-5 text-[#076FB8]" />,
    description: "App facilitating dynamic rerouting, charger lookup & spot locks.",
    highlightColor: "#076FB8",
  },
  {
    id: "ai-engine",
    name: "AI Engine",
    category: "Intelligence Layer",
    icon: <Brain className="w-5 h-5 text-[#EE7797]" />,
    description: "Predictive model computing station queue probability & ETA risk.",
    highlightColor: "#EE7797",
  },
  {
    id: "zapin-cloud",
    name: "ZapIn Cloud",
    category: "Backend & Broker",
    icon: <Cloud className="w-5 h-5 text-[#076FB8]" />,
    description: "Event broker handling telemetry stream, sessions & settlement.",
    highlightColor: "#076FB8",
  },
  {
    id: "iot-controller",
    name: "IoT Controller",
    category: "Edge Hardware",
    icon: <Cpu className="w-5 h-5 text-[#FEC958]" />,
    description: "ESP32 board reading sub-second voltage/current & relay switches.",
    highlightColor: "#FEC958",
  },
  {
    id: "host-partner",
    name: "Host Partner",
    category: "B2B Location",
    icon: <Building2 className="w-5 h-5 text-[#076FB8]" />,
    description: "Commercial partner earning automated revenue split from EV dwell time.",
    highlightColor: "#076FB8",
  },
  {
    id: "energy-infra",
    name: "Energy Grid",
    category: "Physical Infra",
    icon: <Zap className="w-5 h-5 text-[#FEC958]" />,
    description: "Distributed charger electrical panel and grid power supply.",
    highlightColor: "#FEC958",
  },
];

export const EcosystemDiagram: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string>("zapin");

  const activeDetails = NODES.find((n) => n.id === activeNode) || NODES[1];

  return (
    <div className="w-full bg-white/90 backdrop-blur-xl rounded-3xl p-6 sm:p-10 border border-[#076FB8]/15 shadow-xl">
      <div className="text-center max-w-xl mx-auto mb-8">
        <h3 className="text-xl sm:text-2xl font-bold text-[#043E69]">
          Connected Clean Energy Ecosystem
        </h3>
        <p className="text-xs sm:text-sm text-[#076FB8]/75 mt-1">
          Click any node below to inspect real-time data flows across hardware, cloud, and driver applications.
        </p>
      </div>

      {/* Desktop Diagram Layout (Hidden on Mobile) */}
      <div className="hidden md:block relative min-h-[380px] p-6 rounded-2xl bg-[#F0F7FB]/70 border border-[#076FB8]/15">
        {/* Animated Connecting SVG Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <motion.path
            d="M 120 80 L 320 80 L 520 80 M 320 80 L 320 200 M 320 200 L 120 300 L 520 300 M 320 200 L 720 200"
            fill="none"
            stroke="#076FB8"
            strokeWidth="2"
            strokeDasharray="6 6"
            animate={{ strokeDashoffset: [100, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
        </svg>

        {/* Nodes Grid Layout */}
        <div className="relative z-10 grid grid-cols-3 gap-y-12 gap-x-8 items-center max-w-4xl mx-auto">
          <NodeCard node={NODES[0]} isActive={activeNode === NODES[0].id} onClick={() => setActiveNode(NODES[0].id)} />
          <NodeCard node={NODES[1]} isActive={activeNode === NODES[1].id} onClick={() => setActiveNode(NODES[1].id)} />
          <NodeCard node={NODES[2]} isActive={activeNode === NODES[2].id} onClick={() => setActiveNode(NODES[2].id)} />

          <div className="col-span-3 flex justify-center my-2">
            <NodeCard node={NODES[3]} isActive={activeNode === NODES[3].id} onClick={() => setActiveNode(NODES[3].id)} isCenterHub />
          </div>

          <NodeCard node={NODES[4]} isActive={activeNode === NODES[4].id} onClick={() => setActiveNode(NODES[4].id)} />
          <NodeCard node={NODES[5]} isActive={activeNode === NODES[5].id} onClick={() => setActiveNode(NODES[5].id)} />
          <NodeCard node={NODES[6]} isActive={activeNode === NODES[6].id} onClick={() => setActiveNode(NODES[6].id)} />
        </div>
      </div>

      {/* Mobile Vertical Fallback Layout */}
      <div className="md:hidden space-y-4">
        <div className="text-xs font-semibold text-[#076FB8]/60 uppercase tracking-wider mb-2">
          Vertical Ecosystem Flow
        </div>
        {NODES.map((node, idx) => (
          <div key={node.id} className="relative">
            <NodeCard node={node} isActive={activeNode === node.id} onClick={() => setActiveNode(node.id)} />
            {idx < NODES.length - 1 && (
              <div className="w-0.5 h-4 bg-[#076FB8]/30 mx-auto my-1 flex items-center justify-center">
                <ArrowRight className="w-3 h-3 text-[#076FB8] rotate-90" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Active Node Detail Card */}
      <motion.div
        key={activeDetails.id}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mt-8 p-5 rounded-2xl bg-[#043E69] text-white shadow-lg border border-[#076FB8]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/10 border border-white/20" style={{ color: activeDetails.highlightColor }}>
            {activeDetails.icon}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-base font-bold text-white">{activeDetails.name}</span>
              <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-white/10 text-[#FEC958] font-semibold border border-white/15">
                {activeDetails.category}
              </span>
            </div>
            <p className="text-xs text-blue-100/90 mt-1 max-w-xl">
              {activeDetails.description}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-semibold text-[#FEC958] shrink-0 bg-white/10 px-3 py-1.5 rounded-lg border border-white/15">
          <CheckCircle2 className="w-4 h-4 text-[#FEC958]" />
          <span>Active Pipeline Synchronized</span>
        </div>
      </motion.div>
    </div>
  );
};

interface NodeCardProps {
  node: EcosystemNode;
  isActive: boolean;
  onClick: () => void;
  isCenterHub?: boolean;
}

const NodeCard: React.FC<NodeCardProps> = ({ node, isActive, onClick, isCenterHub = false }) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "w-full text-left p-3.5 rounded-xl border transition-all duration-300 flex items-center gap-3 cursor-pointer",
        isCenterHub ? "max-w-xs shadow-md" : "",
        isActive
          ? "bg-white border-[#076FB8] ring-2 ring-[#076FB8]/20 shadow-lg"
          : "bg-white/90 border-[#076FB8]/15 hover:border-[#076FB8]/40 shadow-sm"
      )}
    >
      <div
        className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 border"
        style={{
          backgroundColor: `${node.highlightColor}15`,
          borderColor: `${node.highlightColor}30`,
        }}
      >
        {node.icon}
      </div>
      <div className="truncate">
        <div className="text-xs font-bold text-[#043E69] truncate">{node.name}</div>
        <div className="text-[10px] text-[#076FB8]/70 truncate">{node.category}</div>
      </div>
    </motion.button>
  );
};
