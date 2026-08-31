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
          950: "#00112e",
          900: "#001b4a",
          800: "#0a2c5c",
          700: "#153a6e",
        },
        cyan: {
          300: "#66cdff",
          400: "#00b2ff",
          500: "#0090d1",
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
