/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1B5E9A",
        primaryDark: "#0E3E68",
        accentStart: "#4F46E5",
        accentEnd: "#EC4899",
        text: "#0F172A",
        muted: "#475569",
        mutedBg: "#F8FAFC",
        border: "#E2E8F0"
      },
      boxShadow: {
        brand: "0 6px 20px rgba(2, 6, 23, 0.08)"
      },
      borderRadius: {
        xl: "1rem",
        pill: "9999px"
      }
    }
  },
  plugins: []
};
