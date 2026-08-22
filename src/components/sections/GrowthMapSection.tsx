"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "../ui/SectionHeader";
import { AnimatedGradientText } from "../animation/AnimatedGradientText";
import { RevealSection } from "../animation/RevealSection";
import { cn } from "@/lib/utils";

interface GrowthPhase {
  id: string;
  phaseNum: string;
  title: string;
  subtitle: string;
  focusItems: string[];
  output: string;
}

const GROWTH_PHASES: GrowthPhase[] = [
  {
    id: "build",
    phaseNum: "01",
    title: "BUILD",
    subtitle: "MVP & Technology Validation",
    focusItems: [
      "IoT charging controller hardware & firmware",
      "ZapIn driver application prototype",
      "Core cloud software foundation",
      "Sub-500ms telemetry data pipeline",
      "Initial AI dwell prediction algorithms",
    ],
    output: "Working Charging Infrastructure MVP",
  },
  {
    id: "validate",
    phaseNum: "02",
    title: "VALIDATE",
    subtitle: "Controlled Pilot",
    focusItems: [
      "Initial commercial charging hub deployments",
      "UMKM host partner testing (Kafe & Retail)",
      "Real-world telemetry & load data validation",
      "15-minute temporary reservation workflow",
      "Driver satisfaction & dwell behavior analytics",
    ],
    output: "Validated Pilot System",
  },
  {
    id: "connect",
    phaseNum: "03",
    title: "CONNECT",
    subtitle: "Infrastructure & Intelligence",
    focusItems: [
      "OCPP 1.6J / 2.0.1 standard protocol integration",
      "Multi-site hub network synchronization",
      "Production AI availability & queue prediction",
      "Real-time operational monitoring",
      "Automated partner onboarding systems",
    ],
    output: "Connected Charging Network",
  },
  {
    id: "scale",
    phaseNum: "04",
    title: "SCALE",
    subtitle: "Commercial Expansion",
    focusItems: [
      "Nationwide multi-city infrastructure rollout",
      "Expanded host partner & fleet ecosystem",
      "Platform monetization & automated billing",
      "Smart grid peak shaving & load balancing",
      "Strategic clean mobility partnerships",
    ],
    output: "Scalable Intelligent Energy Platform",
  },
];

export const GrowthMapSection: React.FC = () => {
  return (
    <section
      id="growth-map"
      className="py-32 bg-gradient-to-b from-white via-[#F0F7FB] to-white relative overflow-hidden"
    >
      {/* Rich Layered Ambient Accents */}
      <div className="absolute top-1/4 -right-32 w-[600px] h-[600px] bg-[#076FB8]/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -left-32 w-[600px] h-[600px] bg-[#FEC958]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-[#EE7797]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Decorative Technical Vector Grid Pattern */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="growth-grid-pattern" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#076FB8" strokeWidth="0.5" strokeDasharray="3 3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#growth-grid-pattern)" />
      </svg>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Section Title */}
        <SectionHeader
          index="06"
          badge="GROWTH MAP"
          title={
            <>
              Growing From Prototype to{" "}
              <AnimatedGradientText>Infrastructure.</AnimatedGradientText>
            </>
          }
          description="A focused path from validated technology to scalable intelligent charging infrastructure across Indonesia."
        />

        {/* Vertical Animated Timeline */}
        <div className="relative mt-16 max-w-4xl mx-auto">
          
          {/* Progressive Animated Connecting Line */}
          <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 -translate-x-1/2 w-1 bg-[#076FB8]/15">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full bg-gradient-to-b from-[#076FB8] via-[#EE7797] to-[#FEC958]"
            />
          </div>

          {/* Timeline Phase Entries */}
          <div className="space-y-12 sm:space-y-16 relative">
            {GROWTH_PHASES.map((phase, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <RevealSection key={phase.id} delay={idx * 0.12}>
                  <div
                    className={cn(
                      "flex flex-col sm:flex-row items-start gap-8 relative",
                      isEven ? "sm:flex-row" : "sm:flex-row-reverse"
                    )}
                  >
                    {/* Phase Card Content */}
                    <div
                      className={cn(
                        "w-full sm:w-[calc(50%-2.5rem)] ml-12 sm:ml-0 p-7 rounded-3xl bg-[#F0F7FB] border border-[#076FB8]/15 shadow-md hover:shadow-xl hover:border-[#076FB8]/40 transition-all",
                        "space-y-4"
                      )}
                    >
                      <div className="flex items-center justify-between gap-2 border-b border-[#076FB8]/10 pb-3">
                        <span className="text-xs font-mono font-extrabold text-[#076FB8]">
                          PHASE {phase.phaseNum}
                        </span>
                        <span className="text-xs font-mono font-extrabold text-[#043E69] tracking-wider">
                          {phase.title}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-xl font-black text-[#043E69] leading-tight">
                          {phase.subtitle}
                        </h3>
                      </div>

                      <ul className="space-y-2 text-xs text-[#043E69]/80 pt-1">
                        {phase.focusItems.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#076FB8] mt-1.5 shrink-0" />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Phase Output */}
                      <div className="pt-4 border-t border-[#076FB8]/15 space-y-1">
                        <span className="text-[10px] font-mono font-bold text-[#076FB8]/70 uppercase tracking-wider block">
                          PHASE OUTPUT
                        </span>
                        <div className="text-xs font-black text-[#043E69]">
                          {phase.output}
                        </div>
                      </div>
                    </div>

                    {/* Timeline Node Marker */}
                    <div className="absolute left-6 sm:left-1/2 top-8 -translate-x-1/2 w-10 h-10 rounded-full bg-white border-4 border-[#076FB8] shadow-lg flex items-center justify-center shrink-0 z-10">
                      <span className="font-mono text-xs font-black text-[#043E69]">
                        {phase.phaseNum}
                      </span>
                    </div>
                  </div>
                </RevealSection>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
