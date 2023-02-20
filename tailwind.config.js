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
      backgroundImage: {
        "screen-border": "url(../../public/bezel.png)",
      },
    },
  },
  plugins: [],
};
