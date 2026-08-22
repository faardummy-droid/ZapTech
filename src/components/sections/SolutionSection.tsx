"use client";

import React from "react";
import Image from "next/image";
import { Cloud, Zap, PlugZap, Globe } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";
import { AnimatedGradientText } from "../animation/AnimatedGradientText";
import { RevealSection } from "../animation/RevealSection";
import { IMAGERY } from "@/data/imagery";

interface SolutionPillar {
  icon: React.ElementType;
  title: string;
  description: string;
}

const SOLUTION_PILLARS: SolutionPillar[] = [
  {
    icon: Cloud,
    title: "Real-Time Discovery",
    description:
      "Real-time hardware telemetry streams verified live plug availability directly to drivers before embarkation.",
  },
  {
    icon: PlugZap,
    title: "Smart Reservation",
    description:
      "Guaranteed 15-minute temporary spot hold while en route to eliminate arrival queue anxiety and friction.",
  },
  {
    icon: Zap,
    title: "Predictive Rerouting",
    description:
      "AI forecasting calculates queue probability and proactively reroutes drivers to optimal alternative hubs.",
  },
  {
    icon: Globe,
    title: "Connected Network",
    description:
      "Seamless QR session initiation, sub-second telemetry metering, and automated host partner revenue sharing.",
  },
];

export const SolutionSection: React.FC = () => {
  return (
    <section
      id="solution"
      className="py-32 relative bg-[#02182B] text-white overflow-hidden"
    >
      {/* Full-Bleed EV Charging Photographic Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={IMAGERY.heroEVCharging.src}
          alt="ZapIn Solution Infrastructure"
          fill
          priority
          className="object-cover object-center opacity-30 mix-blend-luminosity brightness-90"
        />
        {/* Controlled Dark Overlay strictly in Brand Palette */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#02182B]/95 via-[#043E69]/85 to-[#02182B]/95 pointer-events-none" />
      </div>

      {/* Ambient Glow */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#076FB8]/20 rounded-full blur-3xl pointer-events-none z-[1]" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#FEC958]/15 rounded-full blur-3xl pointer-events-none z-[1]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Section Title */}
        <SectionHeader
          index="03"
          badge="SOLUTION"
          theme="dark"
          title={
            <span className="text-white">
              From Uncertainty to{" "}
              <AnimatedGradientText className="text-white">
                Intelligent Movement.
              </AnimatedGradientText>
            </span>
          }
          description="ZapIn connects real-time infrastructure, predictive intelligence, and connected charging into one unified experience."
        />

        {/* 4-Pillar Non-Interactive Editorial Grid (Matching Reference Design) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mt-14">
          {SOLUTION_PILLARS.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <RevealSection key={idx} delay={idx * 0.12}>
                <div className="space-y-4">
                  
                  {/* Yellow Boxed Icon (Inspired by Reference Style) */}
                  <div className="w-14 h-14 rounded-xl border-2 border-[#FEC958] flex items-center justify-center bg-black/25 backdrop-blur-sm shadow-sm">
                    <IconComponent className="w-7 h-7 text-[#FEC958] stroke-[2.2]" />
                  </div>

                  {/* Bold White Title */}
                  <h3 className="text-2xl font-extrabold text-white tracking-tight leading-snug">
                    {pillar.title}
                  </h3>

                  {/* Clean Readable Description */}
                  <p className="text-sm text-blue-100/90 leading-relaxed font-normal">
                    {pillar.description}
                  </p>

                </div>
              </RevealSection>
            );
          })}
        </div>

      </div>
    </section>
  );
};
