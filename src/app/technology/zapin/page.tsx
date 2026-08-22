"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap,
  Smartphone,
  Navigation,
  Lock,
  ArrowRight,
  CheckCircle2,
  Clock,
  MapPin,
  TrendingUp,
  CreditCard,
  ShieldCheck,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedGradientText } from "@/components/animation/AnimatedGradientText";
import { RevealSection } from "@/components/animation/RevealSection";

const ZAPIN_STICKY_STATES = [
  {
    step: "01",
    title: "Real-Time Availability Stream",
    subtitle: "Telemetry & Dock Live Status",
    description: "ZapIn ingests live contactor telemetry every 500ms over MQTT TLS. Drivers view actual plug availability before embarking on their journey.",
    badge: "STATE 01: AVAILABILITY",
    screenContent: {
      title: "Hub #01 - Plaza Senayan",
      dockCount: "3 / 4 Docks Idle",
      powerRate: "180 kW DC Fast",
      statusText: "PLUGS AVAILABLE",
      statusColor: "#076FB8",
      actionText: "View Live Prediction",
    },
  },
  {
    step: "02",
    title: "Predictive Availability Engine",
    subtitle: "AI Time-Series Forecasting",
    description: "Evaluating dwell curves, vehicle SOC targets, and traffic latency to estimate whether a charger will remain free upon vehicle arrival.",
    badge: "STATE 02: PREDICTION",
    screenContent: {
      title: "Target Dock Forecast",
      dockCount: "Est. Release: 6 Mins",
      powerRate: "Confidence: 94%",
      statusText: "OCCUPANCY RISK: 84% (HIGH)",
      statusColor: "#EE7797",
      actionText: "Trigger Auto-Reroute",
    },
  },
  {
    step: "03",
    title: "AI Dynamic Rerouting",
    subtitle: "Proactive Navigation Shift",
    description: "If high queue risk is detected at Target Station A, ZapIn automatically reroutes the driver to nearby Station B with guaranteed idle capacity.",
    badge: "STATE 03: REROUTING",
    screenContent: {
      title: "Reroute → Hub #02 SCBD",
      dockCount: "2 / 2 Docks Available",
      powerRate: "240 kW Ultra Fast",
      statusText: "RISK INDEX: 8% (OPTIMAL)",
      statusColor: "#FEC958",
      actionText: "Lock 15-Min Spot",
    },
  },
  {
    step: "04",
    title: "15-Minute Guaranteed Spot Lock",
    subtitle: "En-Route Reservation Hold",
    description: "Drivers activate a 15-minute spot lock while traveling. If arrival is delayed, the system seamlessly converts to dynamic queue re-allocation.",
    badge: "STATE 04: RESERVATION",
    screenContent: {
      title: "Spot Hold Active",
      dockCount: "Dock #B2 Reserved for You",
      powerRate: "Timer: 14:48 Mins Remaining",
      statusText: "HOLD GUARANTEED",
      statusColor: "#076FB8",
      actionText: "Navigate to Dock",
    },
  },
  {
    step: "05",
    title: "Smart Charging & Sub-Second Monitoring",
    subtitle: "Plug Activation & IoT Telemetry",
    description: "Scan QR code at charger to initiate session. Live dashboard streams voltage, current, energy kWh, duration, and billing cost in real-time.",
    badge: "STATE 05: SMART CHARGING",
    screenContent: {
      title: "Charging Session #8842",
      dockCount: "Output: 50.2 kW (Active)",
      powerRate: "Energy Delivered: 14.8 kWh",
      statusText: "CHARGING IN PROGRESS",
      statusColor: "#FEC958",
      actionText: "Stop & Settle",
    },
  },
  {
    step: "06",
    title: "Automated Payment & E-Receipt",
    subtitle: "QRIS & Digital Settlement",
    description: "Seamless automatic wallet deduction upon session end. Instant e-receipt generated with automated revenue share to host business partner.",
    badge: "STATE 06: PAYMENT",
    screenContent: {
      title: "Session Completed",
      dockCount: "Total Energy: 22.4 kWh",
      powerRate: "Amount: Rp 58.500",
      statusText: "SETTLED VIA QRIS",
      statusColor: "#076FB8",
      actionText: "Download Receipt",
    },
  },
];

export default function ZapInProductPage() {
  const [activeStepIdx, setActiveStepIdx] = useState<number>(0);
  const currentStep = ZAPIN_STICKY_STATES[activeStepIdx];

  return (
    <div className="py-12 space-y-24 bg-[#F0F7FB] selection:bg-[#076FB8]/20 selection:text-[#076FB8]">
      {/* 1. ZapIn Tech Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#043E69] text-white rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl border border-[#076FB8]/30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#EE7797]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FEC958]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#FEC958]">
                <Zap className="w-3.5 h-3.5 fill-[#FEC958]" />
                <span>ZapIn Architecture</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.15] text-white">
                Charging Should Be{" "}
                <AnimatedGradientText className="text-white">Predictable.</AnimatedGradientText>
              </h1>

              <p className="text-base sm:text-lg text-blue-100/90 leading-relaxed max-w-xl">
                ZapIn combines real-time IoT station telemetry, availability prediction algorithms, dynamic rerouting, and 15-minute spot locks to eliminate EV range anxiety.
              </p>

              <div className="pt-2 flex flex-wrap gap-3 text-xs font-mono font-medium text-blue-100/80">
                <span className="px-3 py-1.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-sm">
                  ● Prototype Active
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-sm">
                  ● Simulation Verified
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-sm">
                  ● Integrated Payment
                </span>
              </div>
            </div>

            {/* Right Phone Mockup Visual */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-xs rounded-[36px] p-4 bg-[#022744] shadow-2xl border-2 border-white/20 relative">
                <div className="w-28 h-4 bg-black/60 rounded-b-xl mx-auto absolute top-0 left-1/2 -translate-x-1/2 z-20" />

                <div className="w-full aspect-[9/17] rounded-[28px] bg-[#043E69] p-5 text-white flex flex-col justify-between border border-white/15 relative overflow-hidden">
                  <div className="pt-3 flex justify-between items-center text-[10px] font-mono font-semibold text-blue-100/80">
                    <span>ZapIn App</span>
                    <span className="text-[#FEC958] font-bold">ONLINE</span>
                  </div>

                  <div className="my-auto space-y-3">
                    <div className="text-xs font-mono font-bold text-[#FEC958] uppercase tracking-wider">
                      Connected Grid Hub
                    </div>
                    <div className="text-lg font-bold">Predictive Charging Network</div>
                    <div className="p-3 rounded-xl bg-white/10 border border-white/15 text-[11px] space-y-1 font-mono">
                      <div className="text-blue-100/70">Spot Lock Status</div>
                      <div className="text-xs font-bold text-[#FEC958]">GUARANTEED DOCK SCBD #02</div>
                    </div>
                  </div>

                  <div className="py-2.5 rounded-xl bg-[#076FB8] text-white text-center text-xs font-bold shadow-md">
                    Reserve Charging Spot
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Signature Sticky Phone Experience */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="01"
          badge="PRODUCT EXPERIENCE"
          title={
            <>
              Interactive States of the{" "}
              <AnimatedGradientText>ZapIn Driver Journey.</AnimatedGradientText>
            </>
          }
          description="Click through or inspect to observe how ZapIn handles every phase of the charging lifecycle."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-8">
          {/* Left Column: Interactive Narrative Selection */}
          <div className="lg:col-span-6 space-y-4">
            {ZAPIN_STICKY_STATES.map((st, idx) => {
              const isSelected = activeStepIdx === idx;
              return (
                <RevealSection key={st.step} delay={idx * 0.08}>
                  <div
                    onClick={() => setActiveStepIdx(idx)}
                    className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                      isSelected
                        ? "bg-white border-[#076FB8] shadow-md border-l-4 border-l-[#076FB8]"
                        : "bg-white/80 border-[#076FB8]/15 hover:border-[#076FB8]/30 shadow-sm"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-mono font-bold text-[#076FB8] bg-[#076FB8]/10 px-2.5 py-0.5 rounded-full border border-[#076FB8]/20">
                        {st.subtitle}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-[#043E69] mb-1">{st.title}</h3>
                    <p className="text-xs text-[#043E69]/75 leading-relaxed">{st.description}</p>
                  </div>
                </RevealSection>
              );
            })}
          </div>

          {/* Right Column: Sticky Mobile Phone Screen Visual */}
          <div className="lg:col-span-6 lg:sticky lg:top-28">
            <motion.div
              key={currentStep.step}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-md mx-auto rounded-[40px] p-5 bg-[#043E69] text-white shadow-2xl border-4 border-[#022744] relative"
            >
              {/* Phone Notch */}
              <div className="w-32 h-5 bg-[#022744] rounded-b-2xl mx-auto absolute top-0 left-1/2 -translate-x-1/2 z-20" />

              <div className="w-full aspect-[9/16] rounded-[32px] bg-[#022744] p-6 flex flex-col justify-between relative overflow-hidden border border-white/15">
                {/* Header */}
                <div className="pt-3 flex justify-between items-center text-[10px] font-mono font-semibold border-b border-white/10 pb-3">
                  <span>ZapIn Live Interface</span>
                  <span className="text-[#FEC958] font-bold">{currentStep.badge}</span>
                </div>

                {/* State Screen Details */}
                <div className="my-auto space-y-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono font-semibold text-[#FEC958] uppercase">
                      Active State Display
                    </span>
                    <h4 className="text-2xl font-bold text-white">{currentStep.screenContent.title}</h4>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/10 border border-white/15 space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-blue-100/70">Capacities</span>
                      <span className="font-bold text-white">{currentStep.screenContent.dockCount}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-blue-100/70">Power Class</span>
                      <span className="font-bold text-white">{currentStep.screenContent.powerRate}</span>
                    </div>
                    <div className="pt-2 border-t border-white/10 flex justify-between text-xs font-semibold">
                      <span className="text-blue-100/60">Condition</span>
                      <span
                        className="font-bold"
                        style={{ color: currentStep.screenContent.statusColor }}
                      >
                        {currentStep.screenContent.statusText}
                      </span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-blue-100/90 leading-relaxed">
                    {currentStep.description}
                  </div>
                </div>

                {/* Action CTA Button */}
                <button className="w-full py-3 rounded-xl bg-[#076FB8] text-white text-xs font-bold shadow-md hover:bg-[#043E69] transition-colors">
                  {currentStep.screenContent.actionText} →
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Technical Architecture Data Flow */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="02"
          badge="TECHNICAL PIPELINE"
          title={
            <>
              End-to-End Data Flow: From Driver App to{" "}
              <AnimatedGradientText>Hardware Relay.</AnimatedGradientText>
            </>
          }
          description="Integrated system pipeline connecting React Native / Next.js client applications, MQTT cloud brokers, AI predictors, and ESP32 edge microcontrollers."
        />

        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#076FB8]/15 shadow-xl space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-left">
            <div className="p-5 rounded-2xl bg-[#F0F7FB] border border-[#076FB8]/15 space-y-2.5">
              <span className="inline-block text-[10px] font-mono font-bold text-[#076FB8] uppercase tracking-wider">
                01. Client Interface
              </span>
              <div className="text-base font-bold text-[#043E69]">ZapIn Driver App</div>
              <div className="text-xs text-[#043E69]/75 leading-relaxed">
                React Native & Next.js user app with real-time station availability & spot reservations.
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#F0F7FB] border border-[#076FB8]/15 space-y-2.5">
              <span className="inline-block text-[10px] font-mono font-bold text-[#EE7797] uppercase tracking-wider">
                02. Machine Learning
              </span>
              <div className="text-base font-bold text-[#043E69]">Predictive ML Engine</div>
              <div className="text-xs text-[#043E69]/75 leading-relaxed">
                Python time-series models calculating queue risk probability and dynamic driver rerouting.
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#F0F7FB] border border-[#076FB8]/15 space-y-2.5">
              <span className="inline-block text-[10px] font-mono font-bold text-[#043E69] uppercase tracking-wider">
                03. Cloud Broker
              </span>
              <div className="text-base font-bold text-[#043E69]">TLS MQTT Stream</div>
              <div className="text-xs text-[#043E69]/75 leading-relaxed">
                Sub-500ms bidirectional message streaming across distributed charging hubs.
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#F0F7FB] border border-[#076FB8]/15 space-y-2.5">
              <span className="inline-block text-[10px] font-mono font-bold text-[#076FB8] uppercase tracking-wider">
                04. Edge Microcontroller
              </span>
              <div className="text-base font-bold text-[#043E69]">ESP32 Controller</div>
              <div className="text-xs text-[#043E69]/75 leading-relaxed">
                Hardware relays and CT sensor power metering for microsecond switching and safety.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Circular Business Ecosystem Loop */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="03"
          badge="BUSINESS ECOSYSTEM"
          title={
            <>
              Zero-CapEx Ecosystem for{" "}
              <AnimatedGradientText>Commercial Host Partners.</AnimatedGradientText>
            </>
          }
          description="Property hosts monetize idle parking spaces while ZapIn provides hardware installation, AI software management, and automated revenue splits."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-white border border-[#076FB8]/15 shadow-lg space-y-3 flex flex-col justify-between">
            <div>
              <span className="inline-block text-[11px] font-mono font-bold uppercase tracking-wider text-[#076FB8] mb-3">
                Commercial Benefits
              </span>
              <h3 className="text-xl font-bold text-[#043E69] mb-2">Host Partner Economics</h3>
              <p className="text-xs text-[#043E69]/75 leading-relaxed">
                Attract high-intent EV drivers to retail, dining, and hotel locations while enjoying automated monthly charging revenue shares.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-[#076FB8]/15 shadow-lg space-y-3 flex flex-col justify-between">
            <div>
              <span className="inline-block text-[11px] font-mono font-bold uppercase tracking-wider text-[#043E69] mb-3">
                Network Effect
              </span>
              <h3 className="text-xl font-bold text-[#043E69] mb-2">Flywheel Expansion Loop</h3>
              <p className="text-xs text-[#043E69]/75 leading-relaxed">
                More deployed stations → Higher availability certainty → More active EV drivers → Higher charging sessions → Scaled partner revenue.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-[#076FB8]/15 shadow-lg space-y-3 flex flex-col justify-between">
            <div>
              <span className="inline-block text-[11px] font-mono font-bold uppercase tracking-wider text-[#EE7797] mb-3">
                Hardware Validation
              </span>
              <h3 className="text-xl font-bold text-[#043E69] mb-2">MVP Transparency Matrix</h3>
              <p className="text-xs text-[#043E69]/75 leading-relaxed">
                Clear distinction between active prototype hardware, verified simulation models, planned QRIS payment integration, and future grid R&D.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Homepage CTA */}
      <div className="text-center pt-8 max-w-7xl mx-auto px-4">
        <Link
          href="/"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#076FB8] text-white font-bold hover:bg-[#043E69] transition-all shadow-lg hover:shadow-xl hover:scale-105 text-sm"
        >
          <span>Return to ZapIn Homepage</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}
