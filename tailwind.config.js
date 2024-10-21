/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // black: {100: '',200:''} // primitive
        // brand: { dark: '', light:'', normal:''} //semantic

        // main_black: "#03050F",
        // heading_black: "#141938",
        // subHeading: "#7981B2",
        // gray_100: "#AEACF359",
        // gray_200: "#CCD1EE",
        // button_steps: "#A9AFD9",
        gray: {
          50: "#AEACF359", // Más claro, transparente
          100: "#CCD1EE", // Ligero
          200: "#A9AFD9", // Intermedio
          300: "#7981B2", // Más oscuro
          400: "#141938", // Oscuro (heading)
          500: "#03050F", // Muy oscuro (main black)
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
