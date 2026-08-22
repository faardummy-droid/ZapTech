import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#F0F7FB",
          surface: "#FFFFFF",
          blue: "#076FB8",
          blueDark: "#043E69",
          blueDeep: "#022744",
          blueNight: "#02182B",
          yellow: "#FEC958",
          pink: "#EE7797",
          // Opacity-based brand blue text helpers
          textMain: "rgba(7, 111, 184, 0.95)",
          textMuted: "rgba(7, 111, 184, 0.70)",
          textLight: "rgba(7, 111, 184, 0.50)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.04)" },
        },
        gradientFlow: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        orbitRotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        orbitReverse: {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-33.333%)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        pulseGlow: "pulseGlow 3s ease-in-out infinite",
        "gradient-flow": "gradientFlow 6s ease infinite",
        "orbit-rotate": "orbitRotate 24s linear infinite",
        "orbit-reverse": "orbitReverse 32s linear infinite",
        marquee: "marquee 25s linear infinite",
      },
      boxShadow: {
        soft: "0 10px 30px -10px rgba(7, 111, 184, 0.08)",
        glass: "0 8px 32px 0 rgba(7, 111, 184, 0.06)",
        glow: "0 0 25px rgba(7, 111, 184, 0.25)",
        halo: "0 0 50px rgba(7, 111, 184, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
