"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";
import { AnimatedGradientText } from "../animation/AnimatedGradientText";
import { RevealSection } from "../animation/RevealSection";
import { IMAGERY } from "@/data/imagery";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="About ZapTech"
          title={
            <>
              Building the Infrastructure Behind a{" "}
              <AnimatedGradientText>Smarter Energy Future.</AnimatedGradientText>
            </>
          }
          description="ZapTech is an Indonesia-focused clean-tech research and development company pioneering intelligent distributed infrastructure by combining custom IoT hardware, edge computing, and predictive artificial intelligence."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Editorial Photo Framing with Embedded Tech Badge */}
          <RevealSection direction="left" className="lg:col-span-5 relative flex">
            <div className="relative rounded-3xl overflow-hidden border border-[#076FB8]/20 shadow-2xl group w-full flex flex-col justify-between bg-[#043E69] min-h-[420px]">
              <div className="absolute inset-0 z-0">
                <Image
                  src={IMAGERY.aboutLab.src}
                  alt={IMAGERY.aboutLab.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#02182B] via-[#043E69]/50 to-transparent opacity-95" />
              </div>

              {/* Top Visual Pill */}
              <div className="relative z-10 p-6">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md text-[#FEC958] border border-white/20 text-xs font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>R&D Laboratory • Bandung & Jakarta</span>
                </span>
              </div>

              {/* Bottom Visual Highlights */}
              <div className="relative z-10 p-6 sm:p-8 text-white space-y-3 mt-auto">
                <h3 className="text-2xl font-black text-white leading-snug">
                  Edge Microcontrollers Coupled with Predictive AI
                </h3>
                <p className="text-xs text-blue-100/90 leading-relaxed">
                  Pioneering sub-second electrical telemetry and decentralized smart routing across Indonesia.
                </p>
              </div>
            </div>
          </RevealSection>

          {/* Right Column: Three Rich Aesthetic Visual Pillars (No Boxed Icons) */}
          <div className="lg:col-span-7 space-y-4 flex flex-col justify-between">
            {/* Pillar 1: Deep-Tech Hardware */}
            <RevealSection delay={0.1}>
              <div className="p-6 rounded-3xl bg-white border border-[#076FB8]/15 shadow-sm hover:shadow-xl transition-all relative overflow-hidden group hover:border-[#076FB8]/40">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#076FB8] px-3 py-1 rounded-full bg-[#076FB8]/10 border border-[#076FB8]/20 w-fit">
                    Edge IoT Architecture
                  </span>
                  <div className="flex items-center gap-2 text-[11px] font-semibold text-emerald-600">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Sub-500ms Sampling Telemetry</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#043E69] mb-2 group-hover:text-[#076FB8] transition-colors">
                  Deep-Tech Hardware Integration
                </h3>
                <p className="text-xs text-[#043E69]/75 leading-relaxed">
                  Intelligent embedded systems and custom IoT controllers for sub-second electrical telemetry, power switching automation, and distributed energy infrastructure management.
                </p>
              </div>
            </RevealSection>

            {/* Pillar 2: AI-Driven Energy Intelligence */}
            <RevealSection delay={0.2}>
              <div className="p-6 rounded-3xl bg-white border border-[#076FB8]/15 shadow-sm hover:shadow-xl transition-all relative overflow-hidden group hover:border-[#EE7797]/40">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#EE7797] px-3 py-1 rounded-full bg-[#EE7797]/10 border border-[#EE7797]/25 w-fit">
                    Time-Series & Predictive AI
                  </span>
                  <div className="flex items-center gap-2 text-[11px] font-semibold text-[#076FB8]">
                    <span>94.8% Occupancy Accuracy</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#043E69] mb-2 group-hover:text-[#EE7797] transition-colors">
                  AI-Driven Energy Intelligence
                </h3>
                <p className="text-xs text-[#043E69]/75 leading-relaxed">
                  Predictive machine learning algorithms calculating real-time queue probability, dynamic driver rerouting, and operational load balancing across commercial sites.
                </p>
              </div>
            </RevealSection>

            {/* Pillar 3: Sustainable Infrastructure */}
            <RevealSection delay={0.3}>
              <div className="p-6 rounded-3xl bg-white border border-[#076FB8]/15 shadow-sm hover:shadow-xl transition-all relative overflow-hidden group hover:border-[#FEC958]/60">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#043E69] px-3 py-1 rounded-full bg-[#FEC958]/25 border border-[#FEC958]/40 w-fit">
                    Zero-CapEx Partner Model
                  </span>
                  <div className="flex items-center gap-2 text-[11px] font-semibold text-emerald-600">
                    <span>Automated Revenue Sharing</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#043E69] mb-2 group-hover:text-[#076FB8] transition-colors">
                  Sustainable Infrastructure & Ecosystems
                </h3>
                <p className="text-xs text-[#043E69]/75 leading-relaxed">
                  Building scalable, host-friendly infrastructure that empowers local businesses to participate in the EV transition while expanding clean transportation access.
                </p>
              </div>
            </RevealSection>
          </div>
        </div>
      </div>
    </section>
  );
};


