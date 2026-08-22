"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Building2,
  Clock,
  Navigation,
  ArrowRight,
  Zap,
  MapPin,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";
import { AnimatedGradientText } from "../animation/AnimatedGradientText";
import { RevealSection } from "../animation/RevealSection";

export const FeaturedProductSection: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState<"map" | "reserve" | "prediction">("map");

  return (
    <section
      id="featured-product"
      className="py-28 bg-gradient-to-b from-white via-[#F0F7FB] to-white relative overflow-hidden"
    >
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#076FB8]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Section Title */}
        <SectionHeader
          index="04"
          badge="FEATURED PRODUCT"
          title={
            <>
              ZapIn: Three Core Advantages,{" "}
              <AnimatedGradientText>One Unified Layer.</AnimatedGradientText>
            </>
          }
          description="ZapIn transforms commercial spaces into intelligent charging destinations while giving EV drivers unprecedented journey predictability."
        />

        {/* 3-Pillar + Centered Phone Desktop Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mt-12">
          
          {/* Left Column: Advantage 01 & Advantage 02 */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Advantage 01 */}
            <div
              onClick={() => setActiveScreen("map")}
              className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 cursor-pointer ${
                activeScreen === "map"
                  ? "bg-white border-[#076FB8] shadow-xl ring-2 ring-[#076FB8]/20 scale-[1.02]"
                  : "bg-white/80 border-[#076FB8]/15 hover:border-[#076FB8]/35 shadow-sm"
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#076FB8]">
                  ADVANTAGE 01
                </span>
                <span className="text-xs font-mono font-semibold text-[#076FB8] bg-[#076FB8]/10 px-2.5 py-0.5 rounded-full">
                  B2B Expansion
                </span>
              </div>
              <h3 className="text-xl font-extrabold text-[#043E69] mb-2 leading-tight">
                Ekspansi B2B Zero-CapEx UMKM (Kafe)
              </h3>
              <p className="text-xs text-[#043E69]/75 leading-relaxed">
                Empowers local cafes, hospitality venues, and retail hubs to deploy EV charging infrastructure with zero upfront hardware capital and automated revenue sharing.
              </p>
            </div>

            {/* Advantage 02 */}
            <div
              onClick={() => setActiveScreen("reserve")}
              className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 cursor-pointer ${
                activeScreen === "reserve"
                  ? "bg-white border-[#EE7797] shadow-xl ring-2 ring-[#EE7797]/20 scale-[1.02]"
                  : "bg-white/80 border-[#076FB8]/15 hover:border-[#EE7797]/35 shadow-sm"
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#EE7797]">
                  ADVANTAGE 02
                </span>
                <span className="text-xs font-mono font-semibold text-[#EE7797] bg-[#EE7797]/10 px-2.5 py-0.5 rounded-full">
                  15-Min Hold
                </span>
              </div>
              <h3 className="text-xl font-extrabold text-[#043E69] mb-2 leading-tight">
                Smart Temporary Reservation (15 Minutes)
              </h3>
              <p className="text-xs text-[#043E69]/75 leading-relaxed">
                Digitally secures and holds target charging docks for 15 minutes en route, completely eliminating arrival queue friction and range anxiety.
              </p>
            </div>

          </div>

          {/* Center Column: Prominent Smartphone Mockup with Interactive Dummy Screens */}
          <div className="lg:col-span-4 flex justify-center py-4">
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="w-full max-w-[320px] sm:max-w-[340px] rounded-[44px] p-3.5 bg-[#022744] shadow-2xl border-4 border-[#043E69] relative shadow-[#076FB8]/20"
            >
              {/* Phone Speaker / Dynamic Island */}
              <div className="w-28 h-4 bg-black/80 rounded-full mx-auto absolute top-2 left-1/2 -translate-x-1/2 z-30" />

              {/* Phone Screen Container */}
              <div className="w-full aspect-[9/18.5] rounded-[36px] bg-[#043E69] text-white p-5 flex flex-col justify-between relative overflow-hidden border border-white/10">
                
                {/* Status Bar */}
                <div className="pt-3 flex justify-between items-center text-[10px] text-blue-100/80 font-mono border-b border-white/10 pb-2.5">
                  <span className="font-bold text-white">ZapIN App</span>
                  <span className="text-[#FEC958] font-bold">● LIVE GRID</span>
                </div>

                {/* Dynamic Screen Contents */}
                <AnimatePresence mode="wait">
                  
                  {/* Screen: Map / B2B Kafe Hub */}
                  {activeScreen === "map" && (
                    <motion.div
                      key="screen-map"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.25 }}
                      className="my-auto space-y-3"
                    >
                      <div className="text-[10px] font-mono text-[#FEC958] uppercase">
                        Nearby UMKM Partner Hub
                      </div>

                      <div className="p-4 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md space-y-2">
                        <div className="flex justify-between items-center text-xs">
                          <span className="font-bold text-white">Kopi Kenangan Senopati</span>
                          <span className="text-[9px] bg-emerald-500/20 text-[#FEC958] border border-white/20 px-2 py-0.5 rounded-full font-bold">
                            HOST PARTNER
                          </span>
                        </div>
                        <div className="text-[11px] text-blue-100/80">
                          2x 22kW AC Fast • 1 Dock Idle
                        </div>
                        <div className="text-[10px] text-[#FEC958] pt-1 font-semibold">
                          Zero-CapEx Partner Node #JKT-042
                        </div>
                      </div>

                      <button
                        onClick={() => setActiveScreen("reserve")}
                        className="w-full py-2.5 rounded-xl bg-[#076FB8] text-white text-xs font-bold shadow-md hover:bg-[#0983d6]"
                      >
                        Reserve at Kafe Hub →
                      </button>
                    </motion.div>
                  )}

                  {/* Screen: Reservation 15-Min Hold */}
                  {activeScreen === "reserve" && (
                    <motion.div
                      key="screen-reserve"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.25 }}
                      className="my-auto space-y-3 text-center"
                    >
                      <div className="p-4 rounded-2xl bg-[#EE7797]/15 border border-[#EE7797]/30 space-y-2 backdrop-blur-md">
                        <div className="text-[10px] font-mono uppercase text-[#EE7797] font-bold">
                          Temporary Reservation
                        </div>
                        <div className="text-3xl font-mono font-black text-[#FEC958]">
                          14:55 <span className="text-xs font-sans text-white">MIN</span>
                        </div>
                        <div className="text-xs text-white/90">
                          Dock #01 at Senopati Kafe locked for you.
                        </div>
                      </div>

                      <button
                        onClick={() => setActiveScreen("prediction")}
                        className="w-full py-2.5 rounded-xl bg-[#076FB8] text-white text-xs font-bold shadow-md hover:bg-[#0983d6]"
                      >
                        Check Dynamic Route →
                      </button>
                    </motion.div>
                  )}

                  {/* Screen: AI Prediction & Reroute */}
                  {activeScreen === "prediction" && (
                    <motion.div
                      key="screen-pred"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.25 }}
                      className="my-auto space-y-3"
                    >
                      <div className="text-[10px] font-mono text-[#FEC958] uppercase">
                        AI Availability Forecast
                      </div>

                      <div className="p-4 rounded-2xl bg-white/10 border border-white/15 space-y-2 backdrop-blur-md">
                        <div className="flex justify-between text-xs">
                          <span className="text-blue-100/70">Occupancy Risk</span>
                          <span className="font-bold text-[#FEC958]">8% (Optimal)</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-blue-100/70">ETA to Hub</span>
                          <span className="font-bold text-white">11 Mins</span>
                        </div>
                        <div className="pt-1 border-t border-white/10 text-[10px] text-blue-100/90">
                          Auto-reroute active if queue risk exceeds 60%.
                        </div>
                      </div>

                      <button
                        onClick={() => setActiveScreen("map")}
                        className="w-full py-2.5 rounded-xl bg-[#076FB8] text-white text-xs font-bold shadow-md hover:bg-[#0983d6]"
                      >
                        Back to Map →
                      </button>
                    </motion.div>
                  )}

                </AnimatePresence>

                {/* Bottom Mockup Navigation Bar */}
                <div className="bg-white/10 p-2.5 rounded-2xl border border-white/15 flex justify-around text-[10px] text-blue-100/80">
                  <button
                    onClick={() => setActiveScreen("map")}
                    className={`px-2 py-1 rounded-lg ${activeScreen === "map" ? "bg-white/20 text-white font-bold" : ""}`}
                  >
                    Map
                  </button>
                  <button
                    onClick={() => setActiveScreen("reserve")}
                    className={`px-2 py-1 rounded-lg ${activeScreen === "reserve" ? "bg-white/20 text-[#EE7797] font-bold" : ""}`}
                  >
                    Hold
                  </button>
                  <button
                    onClick={() => setActiveScreen("prediction")}
                    className={`px-2 py-1 rounded-lg ${activeScreen === "prediction" ? "bg-white/20 text-[#FEC958] font-bold" : ""}`}
                  >
                    AI Route
                  </button>
                </div>

              </div>
            </motion.div>
          </div>

          {/* Right Column: Advantage 03 & Product Detail Link */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Advantage 03 */}
            <div
              onClick={() => setActiveScreen("prediction")}
              className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 cursor-pointer ${
                activeScreen === "prediction"
                  ? "bg-white border-[#FEC958] shadow-xl ring-2 ring-[#FEC958]/30 scale-[1.02]"
                  : "bg-white/80 border-[#076FB8]/15 hover:border-[#FEC958]/45 shadow-sm"
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#043E69]">
                  ADVANTAGE 03
                </span>
                <span className="text-xs font-mono font-semibold text-[#043E69] bg-[#FEC958]/25 px-2.5 py-0.5 rounded-full border border-[#FEC958]/40">
                  AI Dynamic Engine
                </span>
              </div>
              <h3 className="text-xl font-extrabold text-[#043E69] mb-2 leading-tight">
                AI Availability Prediction & Rerouting
              </h3>
              <p className="text-xs text-[#043E69]/75 leading-relaxed">
                Evaluates historical dwell times, traffic latency, and vehicle SOC to proactively forecast plug availability and redirect drivers before queues form.
              </p>
            </div>

            {/* Deep-Tech Product Page CTA */}
            <div className="p-6 rounded-3xl bg-[#043E69] text-white shadow-xl space-y-4">
              <div className="text-xs font-mono text-[#FEC958] uppercase font-bold">
                PLATFORM ARCHITECTURE
              </div>
              <p className="text-xs text-blue-100/90 leading-relaxed">
                Explore the complete technical pipeline including ESP32 hardware relays, MQTT telemetry streams, and payment APIs.
              </p>
              <Link
                href="/technology/zapin"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#FEC958] hover:text-white transition-colors"
              >
                <span>View Full ZapIn Technical Specs</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
