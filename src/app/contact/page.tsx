"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Linkedin,
  Instagram,
  Send,
  CheckCircle2,
  Sparkles,
  ArrowLeft,
  Building2,
  Zap,
  ShieldCheck,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedGradientText } from "@/components/animation/AnimatedGradientText";
import { RevealSection } from "@/components/animation/RevealSection";
import { IMAGERY } from "@/data/imagery";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    interest: "Zero-CapEx Host Partner",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-12 pb-24 bg-[#F0F7FB] selection:bg-[#076FB8]/20 selection:text-[#076FB8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#076FB8] hover:text-[#043E69] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to ZapIn Homepage</span>
          </Link>
        </div>

        {/* Editorial Section Header */}
        <SectionHeader
          index="CONTACT"
          badge="PARTNERSHIPS"
          title={
            <>
              Let&apos;s Build the Future of{" "}
              <AnimatedGradientText>Energy Together.</AnimatedGradientText>
            </>
          }
          description="Direct inquiry channel for Zero-CapEx host partners (Kafe & Retail), commercial properties, fleet operators, and investor relations."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-12">
          
          {/* Left Column: HQ & Innovation Facilities Details */}
          <RevealSection direction="left" className="lg:col-span-5 space-y-6">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#043E69] text-white shadow-2xl border border-white/20 space-y-6 relative overflow-hidden">
              
              {/* Background HQ Photo */}
              <div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay">
                <Image
                  src={IMAGERY.contactHQ.src}
                  alt={IMAGERY.contactHQ.alt}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute top-0 right-0 w-64 h-64 bg-[#076FB8]/25 rounded-full blur-3xl pointer-events-none" />

              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#FEC958] relative z-10">
                <Sparkles className="w-3.5 h-3.5" />
                <span>ZapIn Headquarters</span>
              </div>

              <div className="relative z-10 space-y-4">
                <h3 className="text-2xl font-bold">Contact & Operations Center</h3>
                <p className="text-xs text-blue-100/90 leading-relaxed">
                  Our engineering laboratory and operations hub coordinate real-time EV telemetry and host deployments across Indonesia.
                </p>

                <div className="space-y-4 pt-4 border-t border-white/15 text-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-[#FEC958] shrink-0 border border-white/15">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-semibold text-white">Locations</span>
                      <p className="text-xs text-blue-100/80 mt-0.5">Malang, Jawa Timur, Indonesia</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-[#FEC958] shrink-0 border border-white/15">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-semibold text-white">Direct Partnerships</span>
                      <p className="text-xs text-blue-100/80 mt-0.5 font-mono">
                        <a href="mailto:info@zapin.id" className="hover:text-white transition-colors">
                          info@zapin.id
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/15 flex items-center gap-3">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-[#076FB8] transition-colors border border-white/15"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-[#EE7797] transition-colors border border-white/15"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Benefits Strip */}
            <div className="p-6 rounded-3xl bg-white border border-[#076FB8]/15 shadow-sm space-y-3">
              <div className="text-xs font-mono font-bold text-[#076FB8] uppercase">
                Why Partner With ZapIn?
              </div>
              <div className="space-y-2 text-xs text-[#043E69]/80">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#FEC958] shrink-0" />
                  <span>Zero upfront hardware investment for commercial hosts</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#076FB8] shrink-0" />
                  <span>Automated monthly revenue splits & driver foot traffic</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#EE7797] shrink-0" />
                  <span>Sub-500ms telemetry & guaranteed 15-minute spot lock</span>
                </div>
              </div>
            </div>
          </RevealSection>

          {/* Right Column: Full Interactive Partnership Form */}
          <RevealSection direction="right" className="lg:col-span-7">
            <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#076FB8]/15 shadow-xl">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16 space-y-4"
                >
                  <div className="w-20 h-20 rounded-full bg-[#F0F7FB] text-[#076FB8] flex items-center justify-center mx-auto border-2 border-[#076FB8]/20">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  <h3 className="text-3xl font-bold text-[#043E69]">Inquiry Received!</h3>
                  <p className="text-sm text-[#043E69]/75 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out to ZapIn. Our partnership team will review your property or project requirements and reach out within 24 business hours.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-3 rounded-xl bg-[#076FB8] text-white text-xs font-semibold hover:bg-[#043E69] transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-black text-[#043E69]">
                      Start a Partnership Inquiry
                    </h3>
                    <p className="text-xs text-[#043E69]/70 mt-1">
                      Fill out the form below and our team will get in touch with you shortly.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-[#043E69] uppercase tracking-wider mb-1.5 font-mono">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Pratama"
                        className="w-full px-4 py-3 rounded-xl border border-[#076FB8]/20 focus:outline-none focus:ring-2 focus:ring-[#076FB8] text-sm text-[#043E69]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#043E69] uppercase tracking-wider mb-1.5 font-mono">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-xl border border-[#076FB8]/20 focus:outline-none focus:ring-2 focus:ring-[#076FB8] text-sm text-[#043E69]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-[#043E69] uppercase tracking-wider mb-1.5 font-mono">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+62 812-xxxx-xxxx"
                        className="w-full px-4 py-3 rounded-xl border border-[#076FB8]/20 focus:outline-none focus:ring-2 focus:ring-[#076FB8] text-sm text-[#043E69]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#043E69] uppercase tracking-wider mb-1.5 font-mono">
                        Organization / Venue Name
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="e.g. Kopi Ruang Senja / SCBD Retail"
                        className="w-full px-4 py-3 rounded-xl border border-[#076FB8]/20 focus:outline-none focus:ring-2 focus:ring-[#076FB8] text-sm text-[#043E69]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#043E69] uppercase tracking-wider mb-1.5 font-mono">
                      Partnership Category *
                    </label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#076FB8]/20 focus:outline-none focus:ring-2 focus:ring-[#076FB8] text-sm text-[#043E69] bg-white"
                    >
                      <option value="Zero-CapEx Host Partner">Zero-CapEx Host Partner (Kafe, Resto & Retail)</option>
                      <option value="Commercial Property">Commercial Property & Parking Lot Owner</option>
                      <option value="Fleet Operator">Fleet & Mobility Operator</option>
                      <option value="Investor Relations">Investor Relations</option>
                      <option value="Technology & Hardware">Technology & Hardware Collaboration</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#043E69] uppercase tracking-wider mb-1.5 font-mono">
                      Message & Location Details *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please describe your venue location, estimated parking space availability, or collaboration scope..."
                      className="w-full px-4 py-3 rounded-xl border border-[#076FB8]/20 focus:outline-none focus:ring-2 focus:ring-[#076FB8] text-sm text-[#043E69] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#076FB8] text-white font-bold hover:bg-[#043E69] transition-all shadow-lg flex items-center justify-center gap-2 text-sm cursor-pointer"
                  >
                    <span>Send Partnership Inquiry</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </RevealSection>

        </div>
      </div>
    </div>
  );
}
