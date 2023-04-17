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
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
