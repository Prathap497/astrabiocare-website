import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0ea5e9",
        primaryDark: "#0369a1",
        accentFrom: "#0ea5e9",
        accentTo: "#a855f7",
        neutralBg: "#f8fafc",
        content: "#0f172a",
        headerFooterBg: "#0b0f19",
        headerFooterText: "#e5e7eb",
        success: "#10b981",
        warning: "#f59e0b",
        danger: "#ef4444",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system"],
      },
    },
  },
  plugins: [],
};

export default config;
