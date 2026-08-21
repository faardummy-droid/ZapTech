"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap, ChevronRight, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_ITEMS, FEATURED_PRODUCTS } from "@/data/navigation";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    if (pathname === "/") {
      const sectionIds = ["hero", ...NAV_ITEMS.map((a) => a.id), "contact"];
      const observerCallback: IntersectionObserverCallback = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      };

      const observer = new IntersectionObserver(observerCallback, {
        rootMargin: "-20% 0px -40% 0px",
        threshold: 0.15,
      });

      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });

      return () => {
        window.removeEventListener("scroll", handleScroll);
        observer.disconnect();
      };
    } else {
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [pathname]);

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setProductDropdownOpen(false);

    if (pathname === "/") {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(`/#${id}`);
    }
  };

  const primaryProduct = FEATURED_PRODUCTS.find((p) => p.status === "featured") || FEATURED_PRODUCTS[0];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-[#076FB8]/10 shadow-soft py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#076FB8] via-[#EE7797] to-[#FEC958] p-0.5 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                <Zap className="w-5 h-5 text-[#076FB8] fill-[#076FB8]/20 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-[#043E69] leading-none">
                Zap<span className="text-[#076FB8]">Tech</span>
              </span>
              <span className="text-[10px] font-semibold text-[#076FB8]/60 uppercase tracking-widest leading-none mt-1">
                Clean Energy R&D
              </span>
            </div>
          </Link>

          {/* Desktop Single-Page Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#076FB8]/15 shadow-sm">
            {NAV_ITEMS.map((item) => {
              if (item.isProduct) {
                const isProductActive = pathname.startsWith("/technology/zapin") || activeSection === "featured-product";
                return (
                  <div
                    key={item.id}
                    className="relative"
                    onMouseEnter={() => setProductDropdownOpen(true)}
                    onMouseLeave={() => setProductDropdownOpen(false)}
                  >
                    <button
                      onClick={(e) => handleNavClick(e, "featured-product")}
                      className={cn(
                        "px-3 py-1.5 rounded-full text-xs font-semibold transition-all relative flex items-center gap-1",
                        isProductActive
                          ? "text-[#076FB8] font-bold"
                          : "text-[#043E69]/70 hover:text-[#076FB8]"
                      )}
                    >
                      <span>Featured Product</span>
                      <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                      {isProductActive && (
                        <motion.div
                          layoutId="activeNavLine"
                          className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#076FB8] rounded-full"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </button>

                    {/* Data-Driven Featured Product Dropdown */}
                    <AnimatePresence>
                      {productDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 5 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-64 p-3 rounded-2xl bg-white border border-[#076FB8]/15 shadow-xl"
                        >
                          <Link
                            href={primaryProduct.slug}
                            onClick={() => setProductDropdownOpen(false)}
                            className="flex flex-col p-2.5 rounded-xl hover:bg-[#F0F7FB] transition-colors group"
                          >
                            <span className="text-xs font-bold text-[#043E69] group-hover:text-[#076FB8]">
                              {primaryProduct.name}
                            </span>
                            <span className="text-[10px] text-[#076FB8]/70 mt-0.5">
                              {primaryProduct.tagline}
                            </span>
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              const isActive = pathname === "/" && activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`/#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={cn(
                    "px-3 py-1.5 rounded-full text-xs font-semibold transition-all relative",
                    isActive
                      ? "text-[#076FB8] font-bold"
                      : "text-[#043E69]/70 hover:text-[#076FB8]"
                  )}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavLine"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#076FB8] rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="/#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#076FB8] text-white text-sm font-semibold hover:bg-[#043E69] transition-all shadow-md shadow-[#076FB8]/20 hover:shadow-lg hover:scale-105 active:scale-95"
            >
              <span>Contact</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl text-[#043E69] hover:bg-[#F0F7FB] focus:outline-none transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#076FB8]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-[#076FB8]/15 overflow-hidden shadow-xl"
          >
            <div className="px-4 pt-4 pb-6 space-y-1.5">
              {NAV_ITEMS.map((item) => {
                if (item.isProduct) {
                  return (
                    <Link
                      key={item.id}
                      href={primaryProduct.slug}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-bold text-[#076FB8] bg-[#F0F7FB]"
                    >
                      <span>Featured Product ({primaryProduct.name})</span>
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  );
                }

                const isActive = pathname === "/" && activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={`/#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={cn(
                      "flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-all",
                      isActive
                        ? "bg-[#F0F7FB] text-[#076FB8] font-bold border-l-2 border-[#076FB8]"
                        : "text-[#043E69]/80 hover:bg-[#F0F7FB]"
                    )}
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="w-4 h-4 opacity-40" />
                  </a>
                );
              })}
              <div className="pt-3 border-t border-[#076FB8]/10">
                <a
                  href="/#contact"
                  onClick={(e) => handleNavClick(e, "contact")}
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-[#076FB8] text-white font-semibold shadow-md"
                >
                  <span>Contact ZapTech</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
