"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Car, Building2 } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";
import { AnimatedGradientText } from "../animation/AnimatedGradientText";
import { IMAGERY } from "@/data/imagery";

const EV_DRIVER_CHALLENGES = [
  {
    num: "01",
    title: "Availability",
    desc: "Is the charger actually available right now, or is the station offline?",
  },
  {
    num: "02",
    title: "Timing",
    desc: "Will it still be available when I arrive at the station in 15 minutes?",
  },
  {
    num: "03",
    title: "Waiting",
    desc: "How long will I have to wait in an uncoordinated queue if all docks are occupied?",
  },
  {
    num: "04",
    title: "Route",
    desc: "Should I continue driving to my target hub or reroute to a safer alternative immediately?",
  },
];

const COMMERCIAL_HOST_CHALLENGES = [
  {
    num: "01",
    title: "Upfront Cost",
    desc: "Traditional charging hardware and grid capacity upgrades require steep capital investment.",
  },
  {
    num: "02",
    title: "Utilization",
    desc: "How can commercial parking spaces attract steady, high-intent EV driver traffic daily?",
  },
  {
    num: "03",
    title: "Operations",
    desc: "How can active charging sessions and hardware uptime be monitored with zero operational burden?",
  },
  {
    num: "04",
    title: "Revenue",
    desc: "How can charging infrastructure generate sustainable, transparent automated revenue for hosts?",
  },
];

export const ChallengeSection: React.FC = () => {
  const [activePerspective, setActivePerspective] = useState<"driver" | "host">("driver");

  return (
    <section id="challenge" className="py-28 relative bg-[#043E69] text-white overflow-hidden">
      {/* Consistent Static Background Image Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-15 mix-blend-overlay z-0">
        <Image
          src={IMAGERY.challengeFriction.src}
          alt={IMAGERY.challengeFriction.alt}
          fill
          className="object-cover"
        />
      </div>

      {/* Consistent Static Ambient Lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#076FB8]/25 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#EE7797]/15 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Section Title */}
        <SectionHeader
          index="02"
          badge="CHALLENGE"
          theme="dark"
          title={
            <span className="text-white">
              Two Sides of the{" "}
              <AnimatedGradientText className="text-white">
                Charging Bottleneck.
              </AnimatedGradientText>
            </span>
          }
          description="Accelerating EV adoption creates distinct operational uncertainties for both the driver behind the wheel and the commercial property host."
        />

        {/* Dual-Perspective Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mt-12">
          
          {/* Left Vertical Perspective Selector Buttons */}
          <div className="lg:col-span-4 flex lg:flex-col gap-4 z-20">
            {/* EV Driver Perspective Button */}
            <button
              onClick={() => setActivePerspective("driver")}
              className={`p-5 rounded-2xl border text-left transition-all duration-300 flex items-center gap-4 cursor-pointer ${
                activePerspective === "driver"
                  ? "bg-white/15 border-[#076FB8] shadow-lg ring-1 ring-[#076FB8]/50 opacity-100 scale-[1.02]"
                  : "bg-white/5 border-white/10 opacity-40 hover:opacity-75"
              }`}
            >
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors ${
                  activePerspective === "driver"
                    ? "bg-[#076FB8] text-white shadow-md"
                    : "bg-white/10 text-white/60"
                }`}
              >
                <Car className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#FEC958] uppercase block">
                  PERSPECTIVE 01
                </span>
                <span className="text-base font-black text-white block">
                  EV DRIVER
                </span>
              </div>
            </button>

            {/* Commercial Host Perspective Button */}
            <button
              onClick={() => setActivePerspective("host")}
              className={`p-5 rounded-2xl border text-left transition-all duration-300 flex items-center gap-4 cursor-pointer ${
                activePerspective === "host"
                  ? "bg-white/15 border-[#FEC958] shadow-lg ring-1 ring-[#FEC958]/50 opacity-100 scale-[1.02]"
                  : "bg-white/5 border-white/10 opacity-40 hover:opacity-75"
              }`}
            >
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors ${
                  activePerspective === "host"
                    ? "bg-[#FEC958] text-[#043E69] shadow-md"
                    : "bg-white/10 text-white/60"
                }`}
              >
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#FEC958] uppercase block">
                  PERSPECTIVE 02
                </span>
                <span className="text-base font-black text-white block">
                  COMMERCIAL HOST
                </span>
              </div>
            </button>
          </div>

          {/* Right Column: Equal-Height Dynamic View (No Shifting) */}
          <div className="lg:col-span-8 min-h-[480px] lg:min-h-[500px]">
            <AnimatePresence mode="wait">
              {activePerspective === "driver" ? (
                /* Perspective 01: EV Driver Only */
                <motion.div
                  key="driver-perspective"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="space-y-6 flex flex-col justify-start"
                >
                  <div className="h-20 sm:h-22 flex flex-col justify-end border-b border-white/15 pb-3">
                    <span className="text-xs font-mono font-bold text-[#076FB8] tracking-widest uppercase block mb-1">
                      PERSPECTIVE 01 — EV DRIVER
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                      Finding a charger shouldn&apos;t feel uncertain.
                    </h3>
                  </div>

                  <div className="space-y-5 pt-2">
                    {EV_DRIVER_CHALLENGES.map((item) => (
                      <div
                        key={item.num}
                        className="border-l-2 border-[#076FB8] pl-5 sm:pl-6 py-1 min-h-[64px] flex flex-col justify-center hover:border-[#FEC958] transition-colors"
                      >
                        <div className="text-xs font-mono font-bold text-[#FEC958] uppercase tracking-wider">
                          {item.num} — {item.title}
                        </div>
                        <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed font-normal mt-0.5">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ) : (
                /* Perspective 02: Commercial Host Only */
                <motion.div
                  key="host-perspective"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="space-y-6 flex flex-col justify-start"
                >
                  <div className="h-20 sm:h-22 flex flex-col justify-end border-b border-white/15 pb-3">
                    <span className="text-xs font-mono font-bold text-[#FEC958] tracking-widest uppercase block mb-1">
                      PERSPECTIVE 02 — COMMERCIAL HOST
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                      Charging infrastructure creates a different set of challenges.
                    </h3>
                  </div>

                  <div className="space-y-5 pt-2">
                    {COMMERCIAL_HOST_CHALLENGES.map((item) => (
                      <div
                        key={item.num}
                        className="border-l-2 border-[#FEC958] pl-5 sm:pl-6 py-1 min-h-[64px] flex flex-col justify-center hover:border-[#EE7797] transition-colors"
                      >
                        <div className="text-xs font-mono font-bold text-[#FEC958] uppercase tracking-wider">
                          {item.num} — {item.title}
                        </div>
                        <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed font-normal mt-0.5">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
