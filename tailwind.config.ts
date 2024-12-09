import type { Config } from "tailwindcss";

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
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        'accent-dark': "#000000",
        'accent-orange': "#FA4616",
        'accent-blue': "#0021A5",
        'light-orange': "#FA4616",
        'light-blue': "#8BC5F7",
        'gradient-stop-1': "#000000",
        'gradient-stop-2': "#B0B8FF",
      },
      fontFamily: {
        title: ["Michroma", "sans-serif"],
        body: ["Krub", "sans-serif"]
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
