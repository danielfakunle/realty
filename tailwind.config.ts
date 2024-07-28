import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
        xl: "3rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
      },
    },
    extend: {
      boxShadow: {
        highlight: "inset 0 0 1px 1px theme(colors.white/8%)",
        sm: "0px 1px 2px 0px rgba(17, 24, 39, 0.05)",
        DEFAULT:
          "0px 1px 3px 0px rgba(17, 24, 39, 0.10), 0px 1px 2px 0px rgba(17, 24, 39, 0.06)",
        md: "0px 4px 8px -2px rgba(17, 24, 39, 0.10), 0px 2px 4px -2px rgba(17, 24, 39, 0.06)",
        lg: "0px 12px 16px -4px rgba(17, 24, 39, 0.08), 0px 4px 6px -2px rgba(17, 24, 39, 0.03)",
        xl: "0px 20px 24px -4px rgba(17, 24, 39, 0.08), 0px 8px 8px -4px rgba(17, 24, 39, 0.03)",
        "2xl": "0px 24px 48px -12px rgba(17, 24, 39, 0.18)",
      },
      dropShadow: {
        sm: "0px 1px 2px 0px rgba(17, 24, 39, 0.05)",
        DEFAULT:
          "0px 1px 3px 0px rgba(17, 24, 39, 0.10), 0px 1px 2px 0px rgba(17, 24, 39, 0.06)",
        md: "0px 4px 8px -2px rgba(17, 24, 39, 0.10), 0px 2px 4px -2px rgba(17, 24, 39, 0.06)",
        lg: "0px 12px 16px -4px rgba(17, 24, 39, 0.08), 0px 4px 6px -2px rgba(17, 24, 39, 0.03)",
        xl: "0px 20px 24px -4px rgba(17, 24, 39, 0.08), 0px 8px 8px -4px rgba(17, 24, 39, 0.03)",
        "2xl": "0px 24px 48px -12px rgba(17, 24, 39, 0.18)",
      },
      letterSpacing: {
        "display-base": "-0.022em",
        "display-sm": "-0.021em",
        "display-xs": "-0.019em",
        "text-xl": "-0.017em",
        "text-lg": "-0.014em",
        "text-base": "-0.011em",
        "text-sm": "-0.006em",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;

