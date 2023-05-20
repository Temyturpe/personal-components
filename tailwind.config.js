/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "680px",
      md: "920px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536",
    },
    extend: {},
  },
  plugins: [],
}

