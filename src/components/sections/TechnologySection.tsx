"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Brain, Cpu, Cloud, Zap, ArrowRight, Layers } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";
import { AnimatedGradientText } from "../animation/AnimatedGradientText";
import { RevealSection } from "../animation/RevealSection";
import { cn } from "@/lib/utils";
import { IMAGERY } from "@/data/imagery";

const TECH_SCROLL_STATES = [
  {
    step: "ingestion",
    badge: "Telemetry & Ingestion",
    title: "Station Data Ingestion",
    subtitle: "Real-Time Electrical Telemetry",
    description: "ESP32 microcontrollers stream active plug power, voltage, current, and dwell time every 500ms over TLS encrypted MQTT.",
    details: [
      { label: "Active Contactor", val: "Closed / Active" },
      { label: "Voltage Input", val: "400V Fast AC/DC" },
      { label: "Current Draw", val: "125A Duty Rate" },
      { label: "Power Output", val: "50kW Active" },
    ],
  },
  {
    step: "prediction",
    badge: "AI Forecasting",
    title: "Predictive Availability Engine",
    subtitle: "Machine Learning Dwell Estimation",
    description: "Evaluating historical charging duration curves, vehicle SOC, and spatial traffic latency to estimate plug release times.",
    details: [
      { label: "Historical Dwell Avg", val: "22 Mins" },
      { label: "Target SOC Class", val: "80% Target" },
      { label: "Est. Plug Release", val: "7 Mins" },
      { label: "Model Architecture", val: "Graph AI / Neural Net" },
    ],
  },
  {
    step: "risk",
    badge: "Queue Probability",
    title: "Dynamic Risk Assessment",
    subtitle: "Arrival Congestion Evaluation",
    description: "Quantifying arrival queue risk into probability scores to determine whether a charger will remain available upon arrival.",
    details: [
      { label: "Target Station A", val: "High Occupancy" },
      { label: "Alternative Hub B", val: "Low Occupancy" },
      { label: "Driver ETA", val: "12 Mins" },
      { label: "Risk Evaluation", val: "Low Risk Verified" },
    ],
  },
  {
    step: "rerouting",
    badge: "Spot Lock & Guide",
    title: "Rerouting & Spot Lock Decision",
    subtitle: "Proactive Guidance & Reservation",
    description: "Automated routing recommendation directing driver to low-risk station with guaranteed 15-minute reservation spot hold.",
    details: [
      { label: "Recommended Hub", val: "Hub SCBD #02" },
      { label: "System Action", val: "Auto-Rerouted" },
      { label: "Spot Hold Lock", val: "15 Mins Active" },
      { label: "Driver Certainty", val: "100% Guaranteed" },
    ],
  },
];

export const TechnologySection: React.FC = () => {
  const [activeStepIdx, setActiveStepIdx] = useState<number>(0);
  const currentState = TECH_SCROLL_STATES[activeStepIdx];

  return (
    <section id="technology" className="py-24 bg-white/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Proprietary Technology"
          title={
            <>
              Where Artificial Intelligence Meets{" "}
              <AnimatedGradientText>Real-World Infrastructure.</AnimatedGradientText>
            </>
          }
          description="Combining microsecond electrical metering, cloud MQTT streaming, and predictive graph neural networks."
        />

        {/* Sticky Visual Storytelling Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start my-12">
          
          {/* Left Column: Narrative Step Selection */}
          <div className="lg:col-span-6 space-y-4">
            {TECH_SCROLL_STATES.map((st, idx) => {
              const isSelected = activeStepIdx === idx;
              return (
                <RevealSection key={st.step} delay={idx * 0.1}>
                  <div
                    onClick={() => setActiveStepIdx(idx)}
                    className={cn(
                      "p-6 rounded-2xl border transition-all cursor-pointer",
                      isSelected
                        ? "bg-[#F0F7FB] border-[#076FB8] shadow-md border-l-4 border-l-[#076FB8]"
                        : "bg-white border-[#076FB8]/15 hover:border-[#076FB8]/30 shadow-sm"
                    )}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold text-[#076FB8] bg-[#076FB8]/10 px-2.5 py-0.5 rounded-full border border-[#076FB8]/20">
                        {st.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#043E69] mb-1.5">{st.title}</h3>
                    <p className="text-xs text-[#043E69]/75 leading-relaxed">{st.description}</p>
                  </div>
                </RevealSection>
              );
            })}
          </div>

          {/* Right Column: Sticky Visual State Display with Hardware Photo Framing */}
          <div className="lg:col-span-6 lg:sticky lg:top-28">
            <motion.div
              key={currentState.step}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="p-8 rounded-3xl bg-[#043E69] text-white shadow-2xl border border-[#076FB8]/30 relative overflow-hidden space-y-6"
            >
              {/* Background Hardware Microcontroller Photo */}
              <div className="absolute inset-0 pointer-events-none opacity-15 mix-blend-overlay">
                <Image
                  src={IMAGERY.technologyHardware.src}
                  alt={IMAGERY.technologyHardware.alt}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative z-10 space-y-4">
                <div className="inline-block text-xs font-bold text-[#FEC958] uppercase tracking-wider px-3 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm">
                  {currentState.subtitle}
                </div>
                <h4 className="text-2xl font-bold text-white">{currentState.title}</h4>
                <p className="text-xs text-blue-100/90 leading-relaxed bg-white/10 p-4 rounded-2xl border border-white/15 backdrop-blur-md">
                  {currentState.description}
                </p>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  {currentState.details.map((d, i) => (
                    <div key={i} className="p-3.5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm">
                      <div className="text-[11px] text-blue-100/70 uppercase font-medium">{d.label}</div>
                      <div className="text-sm font-bold text-[#FEC958] mt-1">{d.val}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Big Banner CTA */}
        <div className="text-center pt-8">
          <Link
            href="/technology/zapin"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#076FB8] text-white font-bold hover:bg-[#043E69] transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 text-sm"
          >
            <span>Explore ZapIN Platform</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

