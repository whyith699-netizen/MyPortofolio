import tailwindScrollbar from "tailwind-scrollbar";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#000000",
        mist: "#a1a1aa",
        panel: "rgba(255, 255, 255, 0.06)",
      },
      fontFamily: {
        display: ['"Space Grotesk"', "sans-serif"],
        body: ['"Plus Jakarta Sans"', "sans-serif"],
        brand: ['"Cormorant Garamond"', "serif"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255, 255, 255, 0.08), 0 24px 80px rgba(255, 255, 255, 0.06)",
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px)",
      },
    },
  },
  plugins: [tailwindScrollbar],
};
