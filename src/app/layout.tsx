import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ZapTech — Intelligent Energy & Clean Technology",
  description:
    "ZapTech builds intelligent clean-energy infrastructure by combining AI, IoT and smart hardware for a more connected and sustainable future.",
  keywords: [
    "ZapTech",
    "ZapIN",
    "Clean-Tech Indonesia",
    "EV Infrastructure",
    "AI Charging Rerouting",
    "IoT Energy Metering",
    "Smart EV Charging",
  ],
  authors: [{ name: "ZapTech Team" }],
  openGraph: {
    title: "ZapTech — Intelligent Energy & Clean Technology",
    description:
      "Accelerating Indonesia's Clean Mobility Through Intelligent Energy Innovation.",
    url: "https://zaptech.id",
    siteName: "ZapTech",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZapTech — Intelligent Energy Infrastructure",
    description:
      "Pioneering clean-tech hardware, edge IoT telemetry, and AI dynamic rerouting for EV infrastructure.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="bg-[#F0F7FB] text-slate-900 antialiased min-h-screen flex flex-col selection:bg-[#076FB8]/20 selection:text-[#076FB8]">
        <Navbar />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
