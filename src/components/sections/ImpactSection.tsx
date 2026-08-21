"use client";

import React from "react";
import Image from "next/image";
import { SectionHeader } from "../ui/SectionHeader";
import { AnimatedGradientText } from "../animation/AnimatedGradientText";
import { AnimatedCounter } from "../ui/AnimatedCounter";
import { RevealSection } from "../animation/RevealSection";
import { IMPACT_METRICS } from "@/data/impact";
import { IMAGERY } from "@/data/imagery";

export const ImpactSection: React.FC = () => {
  const badgeColors = [
    "text-[#076FB8] bg-[#076FB8]/10 border-[#076FB8]/20",
    "text-[#043E69] bg-[#FEC958]/25 border-[#FEC958]/40",
    "text-[#EE7797] bg-[#EE7797]/15 border-[#EE7797]/30",
  ];

  return (
    <section id="impact" className="py-24 bg-white relative overflow-hidden">
      {/* Full-Bleed Clean Mobility Photo Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-5 mix-blend-multiply">
        <Image
          src={IMAGERY.impactMobility.src}
          alt={IMAGERY.impactMobility.alt}
          fill
          className="object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Measurable Impact"
          title={
            <>
              Technology That Creates{" "}
              <AnimatedGradientText>Measurable Impact.</AnimatedGradientText>
            </>
          }
          description="Quantifiable environmental and economic value delivered across clean transportation, local business ecosystems, and grid efficiency."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {IMPACT_METRICS.map((metric, idx) => (
            <RevealSection key={metric.id} delay={idx * 0.15}>
              <div className="p-8 rounded-3xl bg-[#F0F7FB] border border-[#076FB8]/15 shadow-md relative overflow-hidden flex flex-col justify-between hover:border-[#076FB8]/40 hover:shadow-xl transition-all h-full">
                <div>
                  <div className="mb-6">
                    <span className={`inline-block text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full border ${badgeColors[idx]}`}>
                      {metric.category}
                    </span>
                  </div>

                  <div className="text-4xl sm:text-5xl font-black text-[#043E69] tracking-tight mb-3">
                    <AnimatedCounter
                      target={metric.value}
                      prefix={metric.prefix}
                      suffix={metric.suffix}
                    />
                  </div>

                  <h3 className="text-xl font-bold text-[#043E69] mb-2">{metric.title}</h3>
                  <p className="text-xs text-[#043E69]/75 leading-relaxed">{metric.description}</p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#076FB8]/15 flex items-center justify-between text-xs text-[#076FB8]/80 uppercase tracking-wider font-semibold">
                  <span>Impact Horizon</span>
                  <span className="font-bold text-[#076FB8]">Validated Metric</span>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
};


