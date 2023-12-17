/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/app/js/script.js", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        Hanken: ['Hanken Grotesk'],
      }
    },
  },
  plugins: [],
}

