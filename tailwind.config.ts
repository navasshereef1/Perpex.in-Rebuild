import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#fdfcfa",
          100: "#edebe5",
          200: "#e2dfd6",
        },
        navy: {
          950: "#03060c",
          900: "#031126",
          800: "#0f2a45",
          700: "#16324f",
        },
        gold: {
          300: "#ecc27c",
          400: "#e0ac4c",
          500: "#c9932f",
        },
        teal: {
          400: "#2dd4bf",
          500: "#14b8a6",
        },
      },
      fontFamily: {
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
