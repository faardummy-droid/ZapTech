"use client";

import React from "react";
import Image from "next/image";
import { SectionHeader } from "../ui/SectionHeader";
import { AnimatedGradientText } from "../animation/AnimatedGradientText";
import { RevealSection } from "../animation/RevealSection";
import { IMAGERY } from "@/data/imagery";

export const ChallengeSection: React.FC = () => {
  return (
    <section id="challenge" className="py-24 relative bg-[#043E69] text-white overflow-hidden">
      {/* Background Photography Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-15 mix-blend-overlay">
        <Image
          src={IMAGERY.challengeFriction.src}
          alt={IMAGERY.challengeFriction.alt}
          fill
          className="object-cover"
        />
      </div>

      {/* Vector Ambient Accents */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#076FB8]/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#EE7797]/25 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Industry Challenge"
          theme="dark"
          title={
            <span className="text-white">
              The Energy Transition Is Growing.{" "}
              <AnimatedGradientText className="text-white">
                Infrastructure Must Evolve
              </AnimatedGradientText>{" "}
              With It.
            </span>
          }
          description="As EV adoption accelerates, existing charging infrastructure faces severe bottlenecks on both driver and business partner fronts."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 01: EV Driver Perspective */}
          <RevealSection direction="left">
            <div className="p-8 sm:p-9 rounded-3xl bg-[#022744]/95 border border-white/20 shadow-2xl backdrop-blur-xl relative overflow-hidden group hover:border-[#076FB8]/60 transition-all flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-bold text-[#FEC958] uppercase tracking-wider px-3 py-1 rounded-full bg-[#FEC958]/15 border border-[#FEC958]/30">
                    For EV Drivers
                  </span>
                  <span className="text-[11px] font-semibold text-rose-400 bg-rose-500/10 px-2.5 py-0.5 rounded-full border border-rose-500/20">
                    High Friction Zone
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">The EV Driver Experience</h3>
                <p className="text-xs text-blue-100/90 mb-6 leading-relaxed">
                  EV owners encounter constant uncertainty, arrival anxiety, and wasted charging queues throughout urban journeys.
                </p>

                {/* Infographic Problem Cards (No Boxed Icons) */}
                <div className="space-y-3">
                  <div className="p-4 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md hover:border-white/30 transition-all">
                    <div className="flex items-center justify-between text-[11px] mb-1.5">
                      <span className="font-bold text-white text-sm">Range & Search Anxiety</span>
                      <span className="text-[#EE7797] font-semibold text-[10px] uppercase tracking-wider bg-[#EE7797]/15 px-2 py-0.5 rounded">
                        Fragmented Data
                      </span>
                    </div>
                    <p className="text-xs text-blue-100/80 leading-relaxed">
                      Manual station discovery across isolated apps with outdated charger statuses and inaccurate GPS locations.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md hover:border-white/30 transition-all">
                    <div className="flex items-center justify-between text-[11px] mb-1.5">
                      <span className="font-bold text-white text-sm">Uncertain Charger Availability</span>
                      <span className="text-[#FEC958] font-semibold text-[10px] uppercase tracking-wider bg-[#FEC958]/15 px-2 py-0.5 rounded">
                        Occupancy Spikes
                      </span>
                    </div>
                    <p className="text-xs text-blue-100/80 leading-relaxed">
                      Arriving at target charging spots only to find them occupied, out-of-order, or blocked without advance notice.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md hover:border-white/30 transition-all">
                    <div className="flex items-center justify-between text-[11px] mb-1.5">
                      <span className="font-bold text-white text-sm">Wasted Idle Waiting Time</span>
                      <span className="text-blue-300 font-semibold text-[10px] uppercase tracking-wider bg-[#076FB8]/25 px-2 py-0.5 rounded">
                        20–45 Min Delay
                      </span>
                    </div>
                    <p className="text-xs text-blue-100/80 leading-relaxed">
                      Unpredictable queue congestion during peak commuting hours draining productive hours for mobility users.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </RevealSection>

          {/* Card 02: Host Partner Perspective */}
          <RevealSection direction="right">
            <div className="p-8 sm:p-9 rounded-3xl bg-[#022744]/95 border border-white/20 shadow-2xl backdrop-blur-xl relative overflow-hidden group hover:border-[#FEC958]/50 transition-all flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-bold text-[#FEC958] uppercase tracking-wider px-3 py-1 rounded-full bg-[#FEC958]/15 border border-[#FEC958]/30">
                    For Commercial Hosts
                  </span>
                  <span className="text-[11px] font-semibold text-amber-300 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                    CapEx & Grid Barrier
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">The Commercial Host Challenge</h3>
                <p className="text-xs text-blue-100/90 mb-6 leading-relaxed">
                  Commercial property owners want to monetize parking spaces but face high capital risk, complex load balancing, and technical downtime.
                </p>

                {/* Infographic Problem Cards (No Boxed Icons) */}
                <div className="space-y-3">
                  <div className="p-4 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md hover:border-white/30 transition-all">
                    <div className="flex items-center justify-between text-[11px] mb-1.5">
                      <span className="font-bold text-white text-sm">High Initial CapEx Barrier</span>
                      <span className="text-[#FEC958] font-semibold text-[10px] uppercase tracking-wider bg-[#FEC958]/15 px-2 py-0.5 rounded">
                        High Risk
                      </span>
                    </div>
                    <p className="text-xs text-blue-100/80 leading-relaxed">
                      Prohibitive upfront equipment and installation costs preventing retail and hospitality venues from participating.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md hover:border-white/30 transition-all">
                    <div className="flex items-center justify-between text-[11px] mb-1.5">
                      <span className="font-bold text-white text-sm">Operational & Grid Complexity</span>
                      <span className="text-[#EE7797] font-semibold text-[10px] uppercase tracking-wider bg-[#EE7797]/15 px-2 py-0.5 rounded">
                        Load Demands
                      </span>
                    </div>
                    <p className="text-xs text-blue-100/80 leading-relaxed">
                      Managing peak electrical load constraints, complex maintenance schedules, and frequent charger hardware faults.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md hover:border-white/30 transition-all">
                    <div className="flex items-center justify-between text-[11px] mb-1.5">
                      <span className="font-bold text-white text-sm">Opaque Revenue & Reconciliation</span>
                      <span className="text-blue-300 font-semibold text-[10px] uppercase tracking-wider bg-[#076FB8]/25 px-2 py-0.5 rounded">
                        Manual Auditing
                      </span>
                    </div>
                    <p className="text-xs text-blue-100/80 leading-relaxed">
                      Lack of real-time IoT power metering resulting in delayed settlements and opaque monthly charging revenue splits.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
};


