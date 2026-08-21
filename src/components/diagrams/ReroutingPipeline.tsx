"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, AlertTriangle, Navigation, Lock, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    step: 1,
    title: "ETA Calculation",
    icon: <Clock className="w-5 h-5 text-[#076FB8]" />,
    description: "Evaluates real-time traffic data, SOC remaining range, and distance to nearby charging hubs.",
    metric: "SOC: 18% • Dist: 4.2 km",
  },
  {
    step: 2,
    title: "Occupancy Forecasting",
    icon: <MapPin className="w-5 h-5 text-[#076FB8]" />,
    description: "Predicts arrival queue count by analyzing active sessions and historical turnover rate.",
    metric: "Historical Dwell: 22m",
  },
  {
    step: 3,
    title: "Risk Assessment",
    icon: <AlertTriangle className="w-5 h-5 text-[#EE7797]" />,
    description: "Computes a risk probability score that a charger spot will be taken prior to vehicle arrival.",
    metric: "Risk Index: 14% (LOW)",
  },
  {
    step: 4,
    title: "Dynamic Rerouting",
    icon: <Navigation className="w-5 h-5 text-[#FEC958]" />,
    description: "Reroutes driver to an optimal charging node with guaranteed fast availability.",
    metric: "Alternative Hub #02",
  },
  {
    step: 5,
    title: "Reservation Hold",
    icon: <Lock className="w-5 h-5 text-[#076FB8]" />,
    description: "Issues a 15-minute encrypted lock to secure the charger plug before arrival.",
    metric: "Spot Locked • 14:59 min",
  },
];

export const ReroutingPipeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(3);

  return (
    <div className="w-full bg-white/90 backdrop-blur-xl rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl">
      <div className="text-center max-w-xl mx-auto mb-10">
        <h3 className="text-2xl font-bold text-slate-900">
          AI Dynamic Rerouting Pipeline
        </h3>
        <p className="text-sm text-slate-600 mt-2">
          5-stage algorithmic intelligence preventing station queue frustration and range anxiety.
        </p>
      </div>

      {/* Horizontal Pipeline Steps */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
        {STEPS.map((s) => {
          const isActive = activeStep === s.step;
          return (
            <motion.div
              key={s.step}
              onClick={() => setActiveStep(s.step)}
              whileHover={{ y: -4 }}
              className={cn(
                "p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between relative",
                isActive
                  ? "bg-[#076FB8]/5 border-[#076FB8] ring-2 ring-[#076FB8]/20 shadow-md"
                  : "bg-white border-slate-200 hover:border-slate-300 shadow-sm"
              )}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#076FB8]/10 flex items-center justify-center">
                    {s.icon}
                  </div>
                  <span className="text-xs font-mono font-bold text-[#076FB8] bg-[#076FB8]/10 px-2 py-0.5 rounded-full">
                    0{s.step}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">{s.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">{s.description}</p>
              </div>

              <div className="text-[10px] font-mono font-semibold text-slate-700 bg-slate-100 p-2 rounded-lg border border-slate-200/80">
                {s.metric}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
