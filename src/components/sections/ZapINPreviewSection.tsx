"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";
import { AnimatedGradientText } from "../animation/AnimatedGradientText";
import { RevealSection } from "../animation/RevealSection";
import { FEATURED_PRODUCTS } from "@/data/navigation";

export const ZapINPreviewSection: React.FC = () => {
  const currentProduct = FEATURED_PRODUCTS.find((p) => p.status === "featured") || FEATURED_PRODUCTS[0];
  const [activeTab, setActiveTab] = useState<"reroute" | "lock" | "telemetry">("reroute");

  return (
    <section id="featured-product" className="py-24 bg-gradient-to-b from-[#F0F7FB] via-white to-[#F0F7FB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Featured Innovation"
          title={
            <>
              Meet {currentProduct.name}: EV Charging, Built Around{" "}
              <AnimatedGradientText>Certainty.</AnimatedGradientText>
            </>
          }
          description="ZapIN connects EV drivers with distributed charging stations through real-time telemetry, AI availability prediction, dynamic rerouting, and 15-minute guaranteed reservation holds."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Interactive Feature Selector (No Boxed Icons) */}
          <RevealSection direction="left" className="lg:col-span-6 space-y-4">
            <div className="space-y-3.5">
              {/* Feature 1: AI Dynamic Rerouting */}
              <div
                onClick={() => setActiveTab("reroute")}
                className={`p-6 rounded-3xl border transition-all cursor-pointer relative overflow-hidden ${
                  activeTab === "reroute"
                    ? "bg-white border-[#076FB8] shadow-xl ring-2 ring-[#076FB8]/20"
                    : "bg-white/80 border-[#076FB8]/15 hover:border-[#076FB8]/35 shadow-sm"
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#076FB8] px-3 py-1 rounded-full bg-[#076FB8]/10 border border-[#076FB8]/20">
                    Predictive Navigation
                  </span>
                  <span className="text-[11px] font-semibold text-emerald-600">
                    Queue Risk: 8% Optimal
                  </span>
                </div>
                <h4 className="text-lg font-bold text-[#043E69] mb-1">AI Dynamic Rerouting</h4>
                <p className="text-xs text-[#043E69]/75 leading-relaxed">
                  Predicts station congestion before vehicle arrival and dynamically guides drivers to optimal alternative charging docks.
                </p>
              </div>

              {/* Feature 2: 15-Min Spot Lock */}
              <div
                onClick={() => setActiveTab("lock")}
                className={`p-6 rounded-3xl border transition-all cursor-pointer relative overflow-hidden ${
                  activeTab === "lock"
                    ? "bg-white border-[#EE7797] shadow-xl ring-2 ring-[#EE7797]/20"
                    : "bg-white/80 border-[#076FB8]/15 hover:border-[#EE7797]/35 shadow-sm"
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#EE7797] px-3 py-1 rounded-full bg-[#EE7797]/10 border border-[#EE7797]/25">
                    Guaranteed Hold
                  </span>
                  <span className="text-[11px] font-semibold text-[#EE7797]">
                    15-Minute Lock Timer
                  </span>
                </div>
                <h4 className="text-lg font-bold text-[#043E69] mb-1">15-Minute Guaranteed Spot Lock</h4>
                <p className="text-xs text-[#043E69]/75 leading-relaxed">
                  Digitally reserves target charging docks while en-route to eliminate range anxiety and arrival queue friction.
                </p>
              </div>

              {/* Feature 3: Sub-Second Telemetry */}
              <div
                onClick={() => setActiveTab("telemetry")}
                className={`p-6 rounded-3xl border transition-all cursor-pointer relative overflow-hidden ${
                  activeTab === "telemetry"
                    ? "bg-white border-[#FEC958] shadow-xl ring-2 ring-[#FEC958]/30"
                    : "bg-white/80 border-[#076FB8]/15 hover:border-[#FEC958]/50 shadow-sm"
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#043E69] px-3 py-1 rounded-full bg-[#FEC958]/25 border border-[#FEC958]/40">
                    Edge IoT Telemetry
                  </span>
                  <span className="text-[11px] font-semibold text-[#076FB8]">
                    Sub-500ms Edge Stream
                  </span>
                </div>
                <h4 className="text-lg font-bold text-[#043E69] mb-1">Sub-Second Edge Telemetry</h4>
                <p className="text-xs text-[#043E69]/75 leading-relaxed">
                  Direct hardware synchronization with ZapTech ESP32 microcontrollers for real-time power metering, plug status, and automated payments.
                </p>
              </div>
            </div>

            <div className="pt-3">
              <Link
                href={currentProduct.slug}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#076FB8] text-white font-bold hover:bg-[#043E69] transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 text-sm"
              >
                <span>Explore ZapIN Product Architecture</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </RevealSection>

          {/* Right Column: Dynamic Mobile App Interactive Preview */}
          <RevealSection direction="right" className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-sm rounded-[40px] p-4 bg-[#043E69] shadow-2xl border-4 border-[#022744] relative">
              {/* Phone Notch */}
              <div className="w-32 h-5 bg-[#022744] rounded-b-2xl mx-auto absolute top-0 left-1/2 -translate-x-1/2 z-20" />

              {/* Phone Screen Mockup Content */}
              <div className="w-full aspect-[9/18] rounded-[32px] bg-[#022744] overflow-hidden text-white p-5 flex flex-col justify-between relative border border-white/10">
                {/* Top Status Bar */}
                <div className="pt-4 flex items-center justify-between text-[11px] text-blue-100/80 font-semibold border-b border-white/10 pb-2">
                  <span>ZapIN Live Platform</span>
                  <span className="text-[#FEC958] font-bold">● LIVE GRID</span>
                </div>

                {/* Dynamic Screen Content Depending on Active Tab */}
                <AnimatePresence mode="wait">
                  {activeTab === "reroute" && (
                    <motion.div
                      key="reroute"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="my-auto space-y-3"
                    >
                      <div className="p-4 rounded-2xl bg-white/10 border border-white/15 space-y-2 backdrop-blur-md">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-bold text-white">Hub SCBD #02</span>
                          <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-full font-semibold">
                            AVAILABLE
                          </span>
                        </div>
                        <div className="text-[11px] text-blue-100/80">
                          240kW DC Fast • 2 Docks Idle
                        </div>
                        <div className="pt-2 flex items-center justify-between text-xs">
                          <span className="text-[#FEC958] font-bold">ETA: 9 Mins</span>
                          <span className="text-xs bg-[#076FB8] px-3 py-1 rounded-lg text-white font-semibold shadow">
                            Reserve Dock
                          </span>
                        </div>
                      </div>

                      <div className="p-3.5 rounded-xl bg-[#076FB8]/25 border border-[#076FB8]/40 text-xs">
                        <span className="text-[11px] text-blue-100/90 leading-tight block">
                          AI Dynamic Reroute Active — Alternative Hub Suggested (Traffic Risk: Low)
                        </span>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "lock" && (
                    <motion.div
                      key="lock"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="my-auto space-y-3"
                    >
                      <div className="p-4 rounded-2xl bg-[#EE7797]/15 border border-[#EE7797]/30 space-y-3 backdrop-blur-md text-center">
                        <span className="text-[10px] uppercase font-bold text-[#EE7797] tracking-wider">
                          Spot Reserved & Held
                        </span>
                        <div className="text-3xl font-black text-[#FEC958] tracking-tight">
                          14:52 <span className="text-xs font-normal text-white">MIN</span>
                        </div>
                        <div className="text-xs text-white/90">
                          Dock #02 at Hub SCBD is locked exclusively for your vehicle.
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-white/10 border border-white/15 text-xs text-center text-blue-100/80">
                        Auto-cancels if arrival exceeds 15 minutes.
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "telemetry" && (
                    <motion.div
                      key="telemetry"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="my-auto space-y-3"
                    >
                      <div className="p-4 rounded-2xl bg-white/10 border border-white/15 space-y-2.5 backdrop-blur-md">
                        <div className="flex justify-between text-xs">
                          <span className="text-blue-100/70">Voltage / Amperage</span>
                          <span className="font-bold text-white">400V • 125A</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-blue-100/70">Power Output</span>
                          <span className="font-bold text-[#FEC958]">50 kW Active</span>
                        </div>
                        <div className="flex justify-between text-xs pt-1 border-t border-white/10">
                          <span className="text-blue-100/70">Edge Latency</span>
                          <span className="font-bold text-emerald-400">12ms MQTT</span>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-[#FEC958]/15 border border-[#FEC958]/30 text-xs text-center text-white/90">
                        ESP32 Edge Microcontroller Telemetry Streaming Active
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Bottom Charging Telemetry Mockup */}
                <div className="bg-white/10 p-3 rounded-2xl border border-white/15 grid grid-cols-2 gap-2 text-center text-[10px]">
                  <div className="bg-white/10 p-2.5 rounded-xl border border-white/10">
                    <div className="text-blue-100/70 font-medium uppercase text-[9px]">Grid Node</div>
                    <div className="text-xs font-bold text-[#FEC958] mt-0.5">HUB-SCBD-02</div>
                  </div>
                  <div className="bg-white/10 p-2.5 rounded-xl border border-white/10">
                    <div className="text-blue-100/70 font-medium uppercase text-[9px]">Dock Status</div>
                    <div className="text-xs font-bold text-white mt-0.5">SECURED</div>
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


