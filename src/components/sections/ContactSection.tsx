"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, Instagram, Send, CheckCircle2, Sparkles } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";
import { AnimatedGradientText } from "../animation/AnimatedGradientText";
import { RevealSection } from "../animation/RevealSection";
import { IMAGERY } from "@/data/imagery";

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    interest: "Host Partner",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#F0F7FB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Get in Touch"
          title={
            <>
              Let&apos;s Build the Future of{" "}
              <AnimatedGradientText>Energy Together.</AnimatedGradientText>
            </>
          }
          description="For investors, technology partners, host businesses, researchers, and organizations interested in collaborating with ZapTech."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-8">
          {/* Left Column: Contact & Location Info with Photography Frame */}
          <RevealSection direction="left" className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-[#043E69] text-white shadow-2xl border border-white/20 space-y-6 relative overflow-hidden">
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

              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#FEC958] border border-white/20 text-xs font-semibold relative z-10 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5" />
                <span>ZapTech HQ Partnerships</span>
              </div>

              <div className="relative z-10 space-y-4">
                <h3 className="text-2xl font-bold">Contact & Innovation Facilities</h3>
                <p className="text-xs text-blue-100/90 leading-relaxed">
                  Our R&D laboratory and operations are based in Greater Jakarta and Bandung, Indonesia.
                </p>

                <div className="space-y-4 pt-4 border-t border-white/15 text-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-[#FEC958] shrink-0 border border-white/15">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-semibold text-white">Location</span>
                      <p className="text-xs text-blue-100/80 mt-0.5">Jakarta & Bandung, West Java, Indonesia</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-[#FEC958] shrink-0 border border-white/15">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-semibold text-white">Direct Email</span>
                      <p className="text-xs text-blue-100/80 mt-0.5">
                        <a href="mailto:info@zaptech.id" className="hover:text-white transition-colors">
                          info@zaptech.id
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
          </RevealSection>

          {/* Right Column: Interactive Partnership Form */}
          <RevealSection direction="right" className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#076FB8]/15 shadow-xl">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-[#F0F7FB] text-[#076FB8] flex items-center justify-center mx-auto border border-[#076FB8]/20">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#043E69]">Inquiry Received!</h3>
                  <p className="text-sm text-[#043E69]/75 max-w-md mx-auto">
                    Thank you for reaching out to ZapTech. Our partnership team will review your message and respond within 24 business hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-[#076FB8] text-white text-xs font-semibold"
                  >
                    Send Another Inquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-bold text-[#043E69] mb-2">Start a Conversation</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-[#043E69] uppercase tracking-wider mb-1.5">
                        Your Full Name *
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
                      <label className="block text-xs font-semibold text-[#043E69] uppercase tracking-wider mb-1.5">
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
                      <label className="block text-xs font-semibold text-[#043E69] uppercase tracking-wider mb-1.5">
                        Organization / Company
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="Organization name"
                        className="w-full px-4 py-3 rounded-xl border border-[#076FB8]/20 focus:outline-none focus:ring-2 focus:ring-[#076FB8] text-sm text-[#043E69]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#043E69] uppercase tracking-wider mb-1.5">
                        Primary Interest Area
                      </label>
                      <select
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#076FB8]/20 focus:outline-none focus:ring-2 focus:ring-[#076FB8] text-sm text-[#043E69] bg-white"
                      >
                        <option value="Host Partner">Host Partner (Charger Deployment)</option>
                        <option value="Investor Relations">Investor Relations</option>
                        <option value="Technology & R&D">Technology & Hardware R&D</option>
                        <option value="Fleet Operator">Fleet & Mobility Operator</option>
                        <option value="General Inquiry">General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#043E69] uppercase tracking-wider mb-1.5">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your project, location, or partnership proposal..."
                      className="w-full px-4 py-3 rounded-xl border border-[#076FB8]/20 focus:outline-none focus:ring-2 focus:ring-[#076FB8] text-sm text-[#043E69] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#076FB8] text-white font-bold hover:bg-[#043E69] transition-all shadow-md flex items-center justify-center gap-2 text-sm"
                  >
                    <span>Submit Inquiry</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
};
