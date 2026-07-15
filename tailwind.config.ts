import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-archivo)", "var(--font-inter)", "sans-serif"],
      },
      colors: {
        // Monochrome core (noth.in-inspired)
        background: "#000000",
        "background-secondary": "#080808",
        surface: "#0E0E0E",
        "surface-alt": "#141414",
        "surface-card": "#0C0C0C",

        // Inverted (light) sections — pure contrast panels
        "light-background": "#FFFFFF",
        "light-surface": "#F4F4F4",
        "light-surface-alt": "#EAEAEA",

        // Text
        primary: "#F5F5F5",
        secondary: "#9A9A9A",
        muted: "#5C5C5C",

        // Text on light sections
        "light-primary": "#050505",
        "light-secondary": "#555555",

        // Borders
        border: "rgba(255,255,255,0.12)",
        "light-border": "rgba(0,0,0,0.12)",

        // Accent — kept monochrome (near-white) for a strict editorial look
        accent: "#FFFFFF",
        "accent-light": "#E4E4E4",
        "accent-soft": "#BDBDBD",
        "accent-subtle": "#1A1A1A",
        "accent-glow": "rgba(255,255,255,0.14)",
      },
      spacing: {
        8: "8px",
        16: "16px",
        24: "24px",
        32: "32px",
        40: "40px",
        48: "48px",
        64: "64px",
        80: "80px",
        96: "96px",
        128: "128px",
        160: "160px",
      },
      borderRadius: {
        button: "999px",
        card: "4px",
        container: "6px",
        input: "2px",
        image: "4px",
      },
      fontSize: {
        hero: ["120px", { lineHeight: "100%" }],
        "hero-lg": ["160px", { lineHeight: "94%" }],
        "hero-xl": ["220px", { lineHeight: "88%" }],
        "page-title": ["72px", { lineHeight: "100%" }],
        "page-title-lg": ["96px", { lineHeight: "96%" }],
        "section-title": ["48px", { lineHeight: "104%" }],
        "section-title-lg": ["64px", { lineHeight: "100%" }],
        subtitle: ["28px", { lineHeight: "128%" }],
        "subtitle-lg": ["36px", { lineHeight: "120%" }],
        body: ["18px", { lineHeight: "165%" }],
        "body-lg": ["20px", { lineHeight: "160%" }],
        small: ["14px", { lineHeight: "155%" }],
        "small-lg": ["16px", { lineHeight: "155%" }],
        label: ["12px", { lineHeight: "155%" }],
        "label-lg": ["14px", { lineHeight: "155%" }],
      },
      fontWeight: {
        400: "400",
        500: "500",
        600: "600",
        700: "700",
        800: "800",
        900: "900",
      },
      boxShadow: {
        subtle: "0 1px 2px rgba(0, 0, 0, 0.4)",
        medium: "0 4px 20px rgba(0, 0, 0, 0.5)",
        large: "0 20px 60px rgba(0, 0, 0, 0.6)",
        "large-hover": "0 30px 80px rgba(0, 0, 0, 0.7)",
        "glow-sm": "0 0 20px rgba(255, 255, 255, 0.06)",
        "glow-md": "0 0 40px rgba(255, 255, 255, 0.08)",
        "glow-lg": "0 0 60px rgba(255, 255, 255, 0.1)",
        "glow-accent": "0 0 40px rgba(255, 255, 255, 0.12)",
      },
      maxWidth: {
        content: "1440px",
        desktop: "1600px",
      },
      screens: {
        tablet: "768px",
        desktop: "1024px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.2" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "marquee-fast": "marquee 18s linear infinite",
        "marquee-reverse": "marquee-reverse 30s linear infinite",
        "fade-in": "fade-in 0.6s ease-out forwards",
        blink: "blink 1.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
