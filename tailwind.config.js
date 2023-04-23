/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      spacing: {
        8.75: "2.188rem", // sm
        11.5: "2.875rem", // md
        16.75: "4.188rem", // lg
        22: "5.5rem", // xl
        25: "6.25rem", // 2xl
      },
    },
  },
  plugins: [],
};
