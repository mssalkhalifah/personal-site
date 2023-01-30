/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Roboto"],
      },
      colors: {
        "dark-blue": "#1D2B53",
        white: "#FFF1E8",
        red: "#FF004D",
      },
    },
  },
  plugins: [],
};
