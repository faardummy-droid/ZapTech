"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Lock, Zap, Clock, AlertTriangle, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface StateItem {
  id: string;
  name: string;
  badge: string;
  color: string;
  icon: React.ReactNode;
  description: string;
  mqttPayload: string;
}

const STATES: StateItem[] = [
  {
    id: "available",
    name: "AVAILABLE",
    badge: "Ready",
    color: "#10B981",
    icon: <CheckCircle2 className="w-5 h-5 text-emerald-500" />,
    description: "Charger plug idle, relay contactor open, telemetry streaming heartbeats.",
    mqttPayload: '{"state": "AVAILABLE", "relay": false, "health": "OK"}',
  },
  {
    id: "reserved",
    name: "RESERVED",
    badge: "Locked",
    color: "#076FB8",
    icon: <Lock className="w-5 h-5 text-[#076FB8]" />,
    description: "Spot hold active for driver ETA window. Outer indicator glowing blue.",
    mqttPayload: '{"state": "RESERVED", "hold_sec": 900, "user_id": "usr_882"}',
  },
  {
    id: "charging",
    name: "CHARGING",
    badge: "Active Power",
    color: "#FEC958",
    icon: <Zap className="w-5 h-5 text-[#8F6300]" />,
    description: "Contactor closed, high-current delivery active, sub-second metering log.",
    mqttPayload: '{"state": "CHARGING", "power_kw": 48.5, "kwh_delivered": 14.2}',
  },
  {
    id: "idle_completed",
    name: "IDLE_COMPLETED",
    badge: "Grace & Fee",
    color: "#EE7797",
    icon: <Clock className="w-5 h-5 text-[#C02652]" />,
    description: "Target SOC reached. Plug remains plugged, idle fee counter active.",
    mqttPayload: '{"state": "IDLE", "idle_mins": 4, "fee_rate_min": 1500}',
  },
  {
    id: "offline",
    name: "OFFLINE / MAINTENANCE",
    badge: "Fault",
    color: "#64748B",
    icon: <AlertTriangle className="w-5 h-5 text-slate-500" />,
    description: "Grid disconnect or thermal protection triggered. Remote diagnostic mode.",
    mqttPayload: '{"state": "FAULT", "code": "E_THERMAL_LOCK", "retry": false}',
  },
];

export const StateMachine: React.FC = () => {
  const [selectedState, setSelectedState] = useState<string>("charging");

  const active = STATES.find((s) => s.id === selectedState) || STATES[2];

  return (
    <div className="w-full bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl">
      <div className="text-center max-w-xl mx-auto mb-8">
        <h3 className="text-2xl font-bold">
          Hardware & Session State Machine
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 mt-2">
          Automated lifecycle state transitions managed by ZapIn IoT Edge controllers.
        </p>
      </div>

      {/* State Machine Step Pipeline */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-8">
        {STATES.map((s) => {
          const isSelected = selectedState === s.id;
          return (
            <button
              key={s.id}
              onClick={() => setSelectedState(s.id)}
              className={cn(
                "p-4 rounded-xl text-left border transition-all flex flex-col justify-between cursor-pointer",
                isSelected
                  ? "bg-slate-800 border-[#076FB8] ring-2 ring-[#076FB8]/40 shadow-lg"
                  : "bg-slate-900/80 border-slate-800 hover:border-slate-700"
              )}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                  {s.icon}
                </div>
                <span
                  className="text-[10px] font-mono px-2 py-0.5 rounded-full font-bold"
                  style={{
                    backgroundColor: `${s.color}20`,
                    color: s.color,
                  }}
                >
                  {s.badge}
                </span>
              </div>
              <div className="text-xs font-bold font-mono text-white tracking-wider">{s.name}</div>
            </button>
          );
        })}
      </div>

      {/* Selected State Telemetry Inspector */}
      <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: active.color }} />
            <span className="text-sm font-bold font-mono text-white">{active.name}</span>
          </div>
          <p className="text-xs text-slate-300 max-w-lg">{active.description}</p>
        </div>

        <div className="w-full md:w-auto bg-slate-900 p-3 rounded-xl border border-slate-800 font-mono text-xs text-[#FEC958]">
          <div className="text-[9px] uppercase text-slate-500 mb-1">MQTT Telemetry Packet</div>
          <code>{active.mqttPayload}</code>
        </div>
      </div>
    </div>
  );
};
