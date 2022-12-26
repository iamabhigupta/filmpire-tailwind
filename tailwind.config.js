/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "rgb(59 130 246)",
        secondary: "#252A34",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "#DEFCF9",
      },
    },
  },
  plugins: [],
};
