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
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        marquee: {
          "0%":{transfrom:"translateX(0)"},
          "100%":{transform: "translateX(-50%)"},
        },
        pop: {
  "0%": { opacity: "0", transform: "scale(0.9)" },
  "100%": { opacity: "1", transform: "scale(1)" },
},
      },
      animation: {
        blink: "blink 1s infinite",
        marquee: "marquee 15s linear infinite",
        pop: "pop 0.3s ease-out",
      },
      colors: {
        white: "#f1f1f1",
        blue: "#79C7FD",
        dull: "#C1C1C1",
        orange: "#FF804E",
        "accent-dark": "#1a1a1a",
        "accent-orange": "#FA4616",
        "accent-blue": "#0021A5",
        "light-orange": "#FA4616",
        "light-blue": "#8BC5F7",
      },

      boxShadow: {
        "white-glow": "0 0 15px rgba(255,255,255,0.15)",
        "white-glow-hover": "0 0 30px rgba(255,255,255,0.3)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
