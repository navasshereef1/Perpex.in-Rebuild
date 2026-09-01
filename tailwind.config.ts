import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Cool neutral base so the page sits in the same temperature as the
        // navy/cyan brand pair. No warm creams anywhere.
        base: "#f4f6f9",
        mist: "#e9edf2",
        line: "#d9dee6",
        navy: {
          950: "#00112e",
          900: "#001b4a",
          800: "#0a2c5c",
          700: "#153a6e",
          600: "#3b4a66",
          500: "#5b6a86",
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
      transitionTimingFunction: {
        out: "cubic-bezier(0.16, 1, 0.3, 1)",
        soft: "cubic-bezier(0.32, 0.72, 0, 1)",
      },
      maxWidth: {
        site: "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
