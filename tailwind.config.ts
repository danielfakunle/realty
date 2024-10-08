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
      screens: {
        xs: "320px",
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
    },
    fontSize: {
      xs: [
        "var(--text-xs-font-size)",
        {
          lineHeight: "var(--text-xs-line-height)",
          letterSpacing: "var(--text-xs-letter-spacing)",
        },
      ],
      sm: [
        "var(--text-sm-font-size)",
        {
          lineHeight: "var(--text-sm-line-height)",
          letterSpacing: "var(--text-sm-letter-spacing)",
        },
      ],
      base: [
        "var(--text-base-font-size)",
        {
          lineHeight: "var(--text-base-line-height)",
          letterSpacing: "var(--text-base-letter-spacing)",
        },
      ],
      lg: [
        "var(--text-lg-font-size)",
        {
          lineHeight: "var(--text-lg-line-height)",
          letterSpacing: "var(--text-lg-letter-spacing)",
        },
      ],
      xl: [
        "var(--text-xl-font-size)",
        {
          lineHeight: "var(--text-xl-line-height)",
          letterSpacing: "var(--text-xl-letter-spacing)",
        },
      ],
      "display-xs": [
        "var(--display-xs-font-size)",
        {
          lineHeight: "var(--display-xs-line-height)",
          letterSpacing: "var(--display-xs-letter-spacing)",
        },
      ],
      "display-sm": [
        "var(--display-sm-font-size)",
        {
          lineHeight: "var(--display-sm-line-height)",
          letterSpacing: "var(--display-sm-letter-spacing)",
        },
      ],
      "display-base": [
        "var(--display-base-font-size)",
        {
          lineHeight: "var(--display-base-line-height)",
          letterSpacing: "var(--display-base-letter-spacing)",
        },
      ],
      "display-lg": [
        "var(--display-lg-font-size)",
        {
          lineHeight: "var(--display-lg-line-height)",
          letterSpacing: "var(--display-lg-letter-spacing)",
        },
      ],
      "display-xl": [
        "var(--display-xl-font-size)",
        {
          lineHeight: "var(--display-xl-line-height)",
          letterSpacing: "var(--display-xl-letter-spacing)",
        },
      ],
      "display-2xl": [
        "var(--display-2xl-font-size)",
        {
          lineHeight: "var(--display-2xl-line-height)",
          letterSpacing: "var(--display-2xl-letter-spacing)",
        },
      ],
    },
    extend: {
      boxShadow: {
        focus: "var(--shadow-focus)",
        xs: "var(--shadow-xs)",
        "xs-skeuomorphic": "var(--shadow-xs-skeuomorphic)",
        "focus-xs": "var(--shadow-focus-xs)",
        "focus-xs-skeuomorphic": "var(--shadow-focus-xs-skeuomorphic)",
        sm: "var(--shadow-sm)",
        "sm-skeuomorphic": "var(--shadow-sm-skeuomorphic)",
        DEFAULT: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        xl: "var(--shadow-xl)",
        "2xl": "var(--shadow-2xl)",
        "3xl": "var(--shadow-3xl)",
        "portfolio-mockup-centre-md":
          "var(--shadow-portfolio-mockup-centre-md)",
        "portfolio-mockup-centre-lg":
          "var(--shadow-portfolio-mockup-centre-lg)",
        "portfolio-mockup-grid-md": "var(--shadow-portfolio-mockup-grid-md)",
        "portfolio-mockup-left-lg": "var(--shadow-portfolio-mockup-left-lg)",
        "portfolio-mockup-right-lg": "var(--shadow-portfolio-mockup-right-lg)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      spacing: {
        120: "var(--spacing-120)",
        140: "var(--spacing-140)",
        160: "var(--spacing-160)",
        180: "var(--spacing-180)",
        192: "var(--spacing-192)",
        256: "var(--spacing-256)",
        320: "var(--spacing-320)",
        360: "var(--spacing-360)",
        400: "var(--spacing-400)",
        480: "var(--spacing-480)",
      },
      maxWidth: {
        "2xl": "1440px",
        "2xs": "224px",
        lg: "1024px",
        md: "480px",
        sm: "320px",
        xl: "1280px",
        xs: "256px",
      },
      width: {
        "2xl": "1440px",
        "2xs": "224px",
        lg: "1024px",
        md: "480px",
        sm: "320px",
        xl: "1280px",
        xs: "256px",
      },

      colors: {
        // Background colors
        "bg-active": "var(--bg-active)",
        "bg-black": "var(--bg-black)",
        "bg-brand-primary": "var(--bg-brand-primary)",
        "bg-brand-primary-alt": "var(--bg-brand-primary-alt)",
        "bg-brand-secondary": "var(--bg-brand-secondary)",
        "bg-brand-section": "var(--bg-brand-section)",
        "bg-brand-section-subtle": "var(--bg-brand-section-subtle)",
        "bg-brand-solid": "var(--bg-brand-solid)",
        "bg-brand-solid-hover": "var(--bg-brand-solid-hover)",
        "bg-disabled": "var(--bg-disabled)",
        "bg-disabled-subtle": "var(--bg-disabled-subtle)",
        "bg-error-primary": "var(--bg-error-primary)",
        "bg-error-secondary": "var(--bg-error-secondary)",
        "bg-error-solid": "var(--bg-error-solid)",
        "bg-error-solid-hover": "var(--bg-error-solid-hover)",
        "bg-overlay": "var(--bg-overlay)",
        "bg-primary": "var(--bg-primary)",
        "bg-primary-hover": "var(--bg-primary-hover)",
        "bg-primary-solid": "var(--bg-primary-solid)",
        "bg-quaternary": "var(--bg-quaternary)",
        "bg-quaternary-hover": "var(--bg-quaternary-hover)",
        "bg-secondary": "var(--bg-secondary)",
        "bg-secondary-hover": "var(--bg-secondary-hover)",
        "bg-secondary-solid": "var(--bg-secondary-solid)",
        "bg-success-primary": "var(--bg-success-primary)",
        "bg-success-secondary": "var(--bg-success-secondary)",
        "bg-success-solid": "var(--bg-success-solid)",
        "bg-success-solid-hover": "var(--bg-success-solid-hover)",
        "bg-tertiary": "var(--bg-tertiary)",
        "bg-tertiary-hover": "var(--bg-tertiary-hover)",
        "bg-warning-primary": "var(--bg-warning-primary)",
        "bg-warning-secondary": "var(--bg-warning-secondary)",
        "bg-warning-solid": "var(--bg-warning-solid)",
        "bg-warning-solid-hover": "var(--bg-warning-solid-hover)",
        "bg-white": "var(--bg-white)",
        // Border colors
        "border-brand": "var(--border-brand)",
        "border-brand-alt": "var(--border-brand-alt)",
        "border-brand-subtle": "var(--border-brand-subtle)",
        "border-disabled": "var(--border-disabled)",
        "border-disabled-subtle": "var(--border-disabled-subtle)",
        "border-error": "var(--border-error)",
        "border-error-subtle": "var(--border-error-subtle)",
        "border-primary": "var(--border-primary)",
        "border-primary-solid": "var(--border-primary-solid)",
        "border-secondary": "var(--border-secondary)",
        "border-success": "var(--border-success)",
        "border-success-subtle": "var(--border-success-subtle)",
        "border-tertiary": "var(--border-tertiary)",
        "border-warning": "var(--border-warning)",
        "border-warning-subtle": "var(--border-warning-subtle)",
        // Foreground colors
        "fg-brand-primary": "var(--fg-brand-primary)",
        "fg-brand-primary-alt": "var(--fg-brand-primary-alt)",
        "fg-brand-secondary": "var(--fg-brand-secondary)",
        "fg-disabled": "var(--fg-disabled)",
        "fg-disabled-subtle": "var(--fg-disabled-subtle)",
        "fg-error-primary": "var(--fg-error-primary)",
        "fg-error-secondary": "var(--fg-error-secondary)",
        "fg-primary": "var(--fg-primary)",
        "fg-quaternary": "var(--fg-quaternary)",
        "fg-quaternary-hover": "var(--fg-quaternary-hover)",
        "fg-quinary": "var(--fg-quinary)",
        "fg-quinary-hover": "var(--fg-quinary-hover)",
        "fg-secondary": "var(--fg-secondary)",
        "fg-secondary-hover": "var(--fg-secondary-hover)",
        "fg-senary": "var(--fg-senary)",
        "fg-success-primary": "var(--fg-success-primary)",
        "fg-success-secondary": "var(--fg-success-secondary)",
        "fg-tertiary": "var(--fg-tertiary)",
        "fg-tertiary-hover": "var(--fg-tertiary-hover)",
        "fg-warning-primary": "var(--fg-warning-primary)",
        "fg-warning-secondary": "var(--fg-warning-secondary)",
        "fg-white": "var(--fg-white)",
        // Text colors
        "text-brand-primary": "var(--text-brand-primary)",
        "text-brand-secondary": "var(--text-brand-secondary)",
        "text-brand-tertiary": "var(--text-brand-tertiary)",
        "text-brand-tertiary-alt": "var(--text-brand-tertiary-alt)",
        "text-disabled": "var(--text-disabled)",
        "text-error-primary": "var(--text-error-primary)",
        "text-placeholder": "var(--text-placeholder)",
        "text-placeholder-subtle": "var(--text-placeholder-subtle)",
        "text-primary": "var(--text-primary)",
        "text-primary-on-brand": "var(--text-primary-on-brand)",
        "text-primary-solid": "var(--text-primary-solid)",
        "text-quaternary": "var(--text-quaternary)",
        "text-quaternary-on-brand": "var(--text-quaternary-on-brand)",
        "text-secondary": "var(--text-secondary)",
        "text-secondary-hover": "var(--text-secondary-hover)",
        "text-secondary-on-brand": "var(--text-secondary-on-brand)",
        "text-success-primary": "var(--text-success-primary)",
        "text-tertiary": "var(--text-tertiary)",
        "text-tertiary-hover": "var(--text-tertiary-hover)",
        "text-tertiary-on-brand": "var(--text-tertiary-on-brand)",
        "text-warning-primary": "var(--text-warning-primary)",
        "text-white": "var(--text-white)",
        // Utility colors
        "utility-blue-100": "var(--utility-blue-100)",
        "utility-blue-200": "var(--utility-blue-200)",
        "utility-blue-300": "var(--utility-blue-300)",
        "utility-blue-400": "var(--utility-blue-400)",
        "utility-blue-50": "var(--utility-blue-50)",
        "utility-blue-500": "var(--utility-blue-500)",
        "utility-blue-600": "var(--utility-blue-600)",
        "utility-blue-700": "var(--utility-blue-700)",
        "utility-brand-100": "var(--utility-brand-100)",
        "utility-brand-200": "var(--utility-brand-200)",
        "utility-brand-300": "var(--utility-brand-300)",
        "utility-brand-400": "var(--utility-brand-400)",
        "utility-brand-50": "var(--utility-brand-50)",
        "utility-brand-500": "var(--utility-brand-500)",
        "utility-brand-600": "var(--utility-brand-600)",
        "utility-brand-700": "var(--utility-brand-700)",
        "utility-brand-800": "var(--utility-brand-800)",
        "utility-brand-900": "var(--utility-brand-900)",
        "utility-error-100": "var(--utility-error-100)",
        "utility-error-200": "var(--utility-error-200)",
        "utility-error-300": "var(--utility-error-300)",
        "utility-error-400": "var(--utility-error-400)",
        "utility-error-50": "var(--utility-error-50)",
        "utility-error-500": "var(--utility-error-500)",
        "utility-error-600": "var(--utility-error-600)",
        "utility-error-700": "var(--utility-error-700)",
        "utility-gray-100": "var(--utility-gray-100)",
        "utility-gray-200": "var(--utility-gray-200)",
        "utility-gray-300": "var(--utility-gray-300)",
        "utility-gray-400": "var(--utility-gray-400)",
        "utility-gray-50": "var(--utility-gray-50)",
        "utility-gray-500": "var(--utility-gray-500)",
        "utility-gray-600": "var(--utility-gray-600)",
        "utility-gray-700": "var(--utility-gray-700)",
        "utility-gray-800": "var(--utility-gray-800)",
        "utility-gray-900": "var(--utility-gray-900)",
        "utlity-indigo-100": "var(--utility-indigo-100)",
        "utlity-indigo-200": "var(--utility-indigo-200)",
        "utlity-indigo-300": "var(--utility-indigo-300)",
        "utlity-indigo-400": "var(--utility-indigo-400)",
        "utlity-indigo-50": "var(--utility-indigo-50)",
        "utlity-indigo-500": "var(--utility-indigo-500)",
        "utlity-indigo-600": "var(--utility-indigo-600)",
        "utlity-indigo-700": "var(--utility-indigo-700)",
        "utlity-indigo-800": "var(--utility-indigo-800)",
        "utlity-indigo-900": "var(--utility-indigo-900)",
        "utlity-orange-100": "var(--utility-orange-100)",
        "utlity-orange-200": "var(--utility-orange-200)",
        "utlity-orange-300": "var(--utility-orange-300)",
        "utlity-orange-400": "var(--utility-orange-400)",
        "utlity-orange-50": "var(--utility-orange-50)",
        "utlity-orange-500": "var(--utility-orange-500)",
        "utlity-orange-600": "var(--utility-orange-600)",
        "utlity-orange-700": "var(--utility-orange-700)",
        "utility-pink-100": "var(--utility-pink-100)",
        "utility-pink-200": "var(--utility-pink-200)",
        "utility-pink-300": "var(--utility-pink-300)",
        "utility-pink-400": "var(--utility-pink-400)",
        "utility-pink-50": "var(--utility-pink-50)",
        "utility-pink-500": "var(--utility-pink-500)",
        "utility-pink-600": "var(--utility-pink-600)",
        "utility-pink-700": "var(--utility-pink-700)",
        "utility-purple-100": "var(--utility-purple-100)",
        "utility-purple-200": "var(--utility-purple-200)",
        "utility-purple-300": "var(--utility-purple-300)",
        "utility-purple-400": "var(--utility-purple-400)",
        "utility-purple-50": "var(--utility-purple-50)",
        "utility-purple-500": "var(--utility-purple-500)",
        "utility-purple-600": "var(--utility-purple-600)",
        "utility-purple-700": "var(--utility-purple-700)",
        "utility-success-100": "var(--utility-success-100)",
        "utility-success-200": "var(--utility-success-200)",
        "utility-success-300": "var(--utility-success-300)",
        "utility-success-400": "var(--utility-success-400)",
        "utility-success-50": "var(--utility-success-50)",
        "utility-success-500": "var(--utility-success-500)",
        "utility-success-600": "var(--utility-success-600)",
        "utility-success-700": "var(--utility-success-700)",
        "utility-warning-100": "var(--utility-warning-100)",
        "utility-warning-200": "var(--utility-warning-200)",
        "utility-warning-300": "var(--utility-warning-300)",
        "utility-warning-400": "var(--utility-warning-400)",
        "utility-warning-50": "var(--utility-warning-50)",
        "utility-warning-500": "var(--utility-warning-500)",
        "utility-warning-600": "var(--utility-warning-600)",
        "utility-warning-700": "var(--utility-warning-700)",
        // shadcn
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
