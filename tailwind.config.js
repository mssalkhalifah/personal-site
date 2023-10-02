/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Roboto"],
        terminal: ["VT323"],
      },
      colors: {
        primary: "rgb(219, 216, 227)",
        secondary: "rgb(92, 84, 112)",
        third: "rgb(53, 47, 68)",
        fourth: "rgb(42, 36, 56)",
      },
      backgroundImage: {
        "screen-border": "url(../../public/bezel.png)",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 300ms",
      },
      screens: {
        xs: "411px",
        "2xs": "360px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
