/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#1E3A5F",
        accent: "#2196F3",
        card: "#1A1A2E",
        success: "#4CAF50",
        warning: "#FFC107",
        error: "#F44336",
        background: "#F5F7FA",
        surface: "#FFFFFF",
        textDark: "#1A1A2E",
        textGrey: "#6B7280",
      },
      fontFamily: {
        sans: ["Rubik_400Regular"],
        medium: ["Rubik_500Medium"],
        bold: ["Rubik_700Bold"],
      },
    },
  },
  plugins: [],
};
