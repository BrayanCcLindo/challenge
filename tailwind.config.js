/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          50: "#AEACF359",
          100: "#CCD1EE",
          200: "#A9AFD9",
          300: "#7981B2",
          400: "#141938",
          500: "#03050F",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
