/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "Wotfard-Medium": ["Wotfard-Medium", "sans-sarif"],
        "Wotfard-Bold": ["Wotfard-Bold", "sans-sarif"],
        "Wotfard-Thin": ["Wotfard-Thin", "sans-sarif"],
        "Wotfard-Light": ["Wotfard-Light", "sans-sarif"],
        "Wotfard-Regular": ["Wotfard-Regular", "sans-sarif"],
        "Wotfard-ExtraLight": ["Wotfard-ExtraLight", "sans-sarif"],
        "Wotfard-SemiBold": ["Wotfard-SemiBold", "sans-sarif"],
      },

      colors: {
        primary: {
          50: "#f3f4f7",
          100: "#e8e8ee",
          200: "#c5c6d5",
          300: "#a1a4bc",
          400: "#5b5f8a",
          500: "#151B58",
          600: "#13184f",
          700: "#101442",
          800: "#0d1035",
          900: "#0a0d2b",
        },

        secondary: {
          50: "#fafdfd",
          100: "#f4fbfb",
          200: "#e5f5f5",
          300: "#d5eeee",
          400: "#b5e2e2",
          500: "#95D5D5",
          600: "#86c0c0",
          700: "#70a0a0",
          800: "#598080",
          900: "#496868",
        },
      },
    },
  },
  plugins: [],
};
