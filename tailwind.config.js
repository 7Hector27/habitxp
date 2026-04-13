/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        emerald: {
          primary: "#10B981",
          dark: "#059669",
          glow: "#34D399",
        },
        gold: "#F59E0B",
      },
    },
  },
  plugins: [],
};
