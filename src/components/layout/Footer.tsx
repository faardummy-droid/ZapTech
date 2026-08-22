"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Linkedin, Instagram, ArrowRight } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#022744] text-white/80 pt-16 pb-12 border-t border-[#076FB8]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5 sm:gap-3 group">
              <div className="w-10 h-10 sm:w-11 sm:h-11 relative shrink-0">
                <Image
                  src="/images/icon.svg"
                  alt="ZapIn Icon"
                  fill
                  sizes="(max-width: 640px) 40px, 44px"
                  className="object-contain"
                />
              </div>
              <div className="h-10 sm:h-11 w-40 sm:w-48 relative shrink-0">
                <Image
                  src="/images/zapinputih.svg"
                  alt="ZapIn — Powering Your Journey, Smarter!"
                  fill
                  sizes="(max-width: 640px) 160px, 192px"
                  className="object-contain object-left"
                />
              </div>
            </Link>

            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              ZapIn is an intelligent EV charging platform connecting drivers, commercial hosts, and clean-energy infrastructure into a seamless, predictable journey.
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
            <h4 className="text-xs font-mono font-bold text-[#FEC958] uppercase tracking-wider mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="/#about" className="hover:text-white transition-colors">
                  01 — About
                </a>
              </li>
              <li>
                <a href="/#challenge" className="hover:text-white transition-colors">
                  02 — Challenge
                </a>
              </li>
              <li>
                <a href="/#solution" className="hover:text-white transition-colors">
                  03 — Solution
                </a>
              </li>
              <li>
                <a href="/#featured-product" className="hover:text-white transition-colors">
                  04 — Featured Product
                </a>
              </li>
              <li>
                <a href="/#team" className="hover:text-white transition-colors">
                  07 — Leadership Team
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Product & Technology */}
          <div>
            <h4 className="text-xs font-mono font-bold text-[#FEC958] uppercase tracking-wider mb-4">
              Platform & Growth
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/technology/zapin"
                  className="hover:text-white transition-colors font-bold text-[#FEC958]"
                >
                  ZapIn Technical Specs →
                </Link>
              </li>
              <li>
                <a href="/#featured-product" className="hover:text-white transition-colors">
                  15-Min Spot Lock
                </a>
              </li>
              <li>
                <a href="/#featured-product" className="hover:text-white transition-colors">
                  Zero-CapEx B2B UMKM
                </a>
              </li>
              <li>
                <a href="/#impact" className="hover:text-white transition-colors">
                  05 — Measurable Impact
                </a>
              </li>
              <li>
                <a href="/#growth-map" className="hover:text-white transition-colors">
                  06 — Growth Map
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Locations & Contact */}
          <div>
            <h4 className="text-xs font-mono font-bold text-[#FEC958] uppercase tracking-wider mb-4">
              Headquarters
            </h4>
            <div className="space-y-3 text-sm text-white/70">
              <p>Malang, Jawa Timur, Indonesia</p>
              <p className="text-xs text-white/90 font-mono">info@zapin.id</p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FEC958] hover:underline"
                >
                  <span>Start Host Partnership</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-4">
          <div>
            © {new Date().getFullYear()} ZapIn. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
