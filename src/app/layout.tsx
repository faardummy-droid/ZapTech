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
  title: "ZapIn — Powering Your Journey, Smarter!",
  description:
    "ZapIn connects real-time charging infrastructure, predictive intelligence, and connected charging to turn charging uncertainty into an intelligent journey.",
  keywords: [
    "ZapIn",
    "EV Charging Indonesia",
    "Smart EV Charging",
    "AI Availability Prediction",
    "Dynamic Rerouting",
    "Zero-CapEx B2B UMKM",
    "Clean Energy Mobility",
  ],
  authors: [{ name: "ZapIn Team" }],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "ZapIn — Powering Your Journey, Smarter!",
    description:
      "From uncertainty to intelligent movement. Intelligent EV charging ecosystem.",
    url: "https://zapin.id",
    siteName: "ZapIn",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZapIn — Powering Your Journey, Smarter!",
    description:
      "Predictive AI availability, dynamic rerouting, 15-minute temporary reservation holds, and zero-CapEx commercial charging infrastructure.",
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
