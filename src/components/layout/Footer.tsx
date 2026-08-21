"use client";

import React from "react";
import Link from "next/link";
import { Zap, Linkedin, Instagram, ArrowRight, Heart } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#022744] text-white/80 pt-16 pb-12 border-t border-[#076FB8]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#076FB8] via-[#EE7797] to-[#FEC958] p-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-[#022744] rounded-[10px] flex items-center justify-center">
                  <Zap className="w-5 h-5 text-[#076FB8] fill-[#076FB8]/20" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white leading-none">
                  Zap<span className="text-[#076FB8]">Tech</span>
                </span>
                <span className="text-[10px] font-semibold text-[#076FB8] uppercase tracking-widest leading-none mt-1">
                  Clean Energy R&D
                </span>
              </div>
            </Link>

            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              Indonesia-focused clean-tech R&D company pioneering intelligent distributed charging infrastructure through custom IoT hardware, edge computing, and predictive AI.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-[#076FB8] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-[#EE7797] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-bold text-[#FEC958] uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="/#about" className="hover:text-white transition-colors">
                  About ZapTech
                </a>
              </li>
              <li>
                <a href="/#challenge" className="hover:text-white transition-colors">
                  Industry Challenge
                </a>
              </li>
              <li>
                <a href="/#solution" className="hover:text-white transition-colors">
                  Ecosystem Solution
                </a>
              </li>
              <li>
                <a href="/#technology" className="hover:text-white transition-colors">
                  Deep-Tech R&D
                </a>
              </li>
              <li>
                <a href="/#team" className="hover:text-white transition-colors">
                  Leadership Team
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Products & Technology */}
          <div>
            <h4 className="text-xs font-bold text-[#FEC958] uppercase tracking-wider mb-4">
              Featured Platform
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/technology/zapin"
                  className="hover:text-white transition-colors font-bold text-[#076FB8]"
                >
                  ZapIN Driver Platform →
                </Link>
              </li>
              <li>
                <a href="/#technology" className="hover:text-white transition-colors">
                  Predictive AI Engine
                </a>
              </li>
              <li>
                <a href="/#technology" className="hover:text-white transition-colors">
                  ESP32 Microcontroller
                </a>
              </li>
              <li>
                <a href="/#impact" className="hover:text-white transition-colors">
                  Measurable Impact
                </a>
              </li>
              <li>
                <a href="/#milestones" className="hover:text-white transition-colors">
                  Milestone Roadmap
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Locations & Contact */}
          <div>
            <h4 className="text-xs font-bold text-[#FEC958] uppercase tracking-wider mb-4">
              Headquarters
            </h4>
            <div className="space-y-3 text-sm text-white/70">
              <p>Jakarta & Bandung, West Java, Indonesia</p>
              <p className="text-xs text-white/90">info@zaptech.id</p>
              <div className="pt-2">
                <a
                  href="/#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FEC958] hover:underline"
                >
                  <span>Start Partnership</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-4">
          <div>
            © {new Date().getFullYear()} ZapTech Clean Energy R&D. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/#contact" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/#contact" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/#contact" className="hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
