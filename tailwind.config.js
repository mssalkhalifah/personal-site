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
        "dark-blue": "#1D2B53",
        "darker-blue": "#111D35",
        white: "#FFF1E8",
        red: "#FF004D",
      },
      backgroundImage: {
        "screen-border": "url(../../public/bezel.png)",
      },
    },
  },
  plugins: [],
};
