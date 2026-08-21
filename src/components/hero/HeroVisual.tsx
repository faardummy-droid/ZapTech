"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Zap, Cloud, Activity, Radio, ShieldCheck, Gauge } from "lucide-react";

export const HeroVisual: React.FC = () => {
  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none flex items-center justify-center p-4">
      {/* Background Soft Glow Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#076FB8]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-10 w-48 h-48 bg-[#FEC958]/20 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-[#EE7797]/15 rounded-full blur-2xl pointer-events-none" />

      {/* Main Visual Container */}
      <div className="relative w-full aspect-[4/3] rounded-3xl bg-white/60 border border-white/80 shadow-2xl backdrop-blur-xl p-6 overflow-hidden flex flex-col justify-between">
        
        {/* Animated Vector Circuit Grid Background SVG */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none opacity-30"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid-pattern" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#076FB8" strokeWidth="0.5" strokeDasharray="2 2" />
            </pattern>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#076FB8" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#EE7797" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#FEC958" stopOpacity="0.8" />
            </linearGradient>
          </defs>

          <rect width="100%" height="100%" fill="url(#grid-pattern)" />

          {/* Animated Connecting Lines */}
          <motion.path
            d="M 60 100 Q 180 40 320 180 T 520 120"
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="2.5"
            strokeDasharray="6 6"
            animate={{ strokeDashoffset: [100, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />

          <motion.path
            d="M 40 240 C 160 300, 360 160, 480 280"
            fill="none"
            stroke="#076FB8"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            animate={{ strokeDashoffset: [0, 100] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          />
        </svg>

        {/* Top Header Card Telemetry */}
        <div className="relative z-10 flex items-center justify-between bg-white/90 rounded-2xl p-3.5 border border-slate-200/80 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#076FB8]/10 flex items-center justify-center text-[#076FB8]">
              <Radio className="w-4 h-4 animate-pulse" />
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-800">ZapTech IoT Grid Sync</div>
              <div className="text-[10px] text-slate-500 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
                Sub-Second Telemetry Active
              </div>
            </div>
          </div>
          <div className="text-right">
            <span className="text-xs font-mono font-bold text-[#076FB8]">99.8%</span>
            <div className="text-[10px] text-slate-500 uppercase tracking-wider">Uptime</div>
          </div>
        </div>

        {/* Center EV Technology Photo & Embedded Vector Overlay */}
        <div className="relative z-10 my-4 flex-1 rounded-2xl overflow-hidden border border-slate-200/90 shadow-md group">
          {/* Custom Stylized Technology / EV Charger Graphic Rendering */}
          <div className="w-full h-full bg-gradient-to-br from-slate-900 via-[#076FB8]/90 to-slate-900 p-6 flex flex-col justify-between relative">
            
            {/* Background Graphic Rings */}
            <div className="absolute right-4 top-4 w-40 h-40 rounded-full border border-white/10 flex items-center justify-center animate-spin-slow">
              <div className="w-28 h-28 rounded-full border border-[#FEC958]/30 border-dashed" />
            </div>

            <div className="relative z-10 flex items-center justify-between text-white/90">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono bg-white/10 backdrop-blur-md border border-white/20">
                <Zap className="w-3 h-3 text-[#FEC958]" />
                <span>EV CHARGING NODE #402</span>
              </div>
              <span className="text-[10px] font-mono text-[#FEC958] bg-black/40 px-2 py-0.5 rounded border border-white/10">
                240kW DC FAST
              </span>
            </div>

            {/* Middle Graphic Hero Badge */}
            <div className="relative z-10 py-4 text-center">
              <motion.div
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="inline-block"
              >
                <div className="text-2xl font-black text-white tracking-wider flex items-center justify-center gap-2">
                  <span>Zap<span className="text-[#FEC958]">IN</span></span>
                  <span className="text-xs px-2 py-0.5 rounded bg-[#EE7797] font-semibold text-white uppercase tracking-normal">
                    AI Reroute
                  </span>
                </div>
                <div className="text-[11px] text-slate-300 mt-1 font-mono">
                  ETA: 8 MINS • OCCUPANCY RISK: LOW (12%)
                </div>
              </motion.div>
            </div>

            {/* Bottom Real-time Telemetry Widgets */}
            <div className="relative z-10 grid grid-cols-3 gap-2">
              <div className="bg-white/10 backdrop-blur-md p-2 rounded-lg border border-white/15 text-center">
                <div className="text-[9px] uppercase tracking-wider text-slate-300">Voltage</div>
                <div className="text-xs font-mono font-bold text-white">400.2 V</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-2 rounded-lg border border-white/15 text-center">
                <div className="text-[9px] uppercase tracking-wider text-slate-300">Current</div>
                <div className="text-xs font-mono font-bold text-[#FEC958]">125.4 A</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-2 rounded-lg border border-white/15 text-center">
                <div className="text-[9px] uppercase tracking-wider text-slate-300">Active Power</div>
                <div className="text-xs font-mono font-bold text-[#EE7797]">50.2 kW</div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Technical Node Badges */}
        <div className="relative z-10 grid grid-cols-3 gap-3">
          <motion.div
            whileHover={{ y: -3 }}
            className="bg-white/90 rounded-xl p-2.5 border border-slate-200/80 shadow-sm flex items-center gap-2"
          >
            <div className="w-7 h-7 rounded-lg bg-[#076FB8]/10 flex items-center justify-center text-[#076FB8]">
              <Cpu className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] font-bold text-slate-800">ESP32 IoT</div>
              <div className="text-[9px] text-slate-500">Edge Meter</div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -3 }}
            className="bg-white/90 rounded-xl p-2.5 border border-slate-200/80 shadow-sm flex items-center gap-2"
          >
            <div className="w-7 h-7 rounded-lg bg-[#FEC958]/20 flex items-center justify-center text-[#8F6300]">
              <Cloud className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] font-bold text-slate-800">MQTT Cloud</div>
              <div className="text-[9px] text-slate-500">TLS Stream</div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -3 }}
            className="bg-white/90 rounded-xl p-2.5 border border-slate-200/80 shadow-sm flex items-center gap-2"
          >
            <div className="w-7 h-7 rounded-lg bg-[#EE7797]/15 flex items-center justify-center text-[#C02652]">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] font-bold text-slate-800">Reservation</div>
              <div className="text-[9px] text-slate-500">Locked Hold</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
