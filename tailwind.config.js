/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        wine: "#4b0f1a",
        gold: "#d4af37",
        royalBlue: "#1a2a44",
        royalGreen: "#0f3d2e",
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
