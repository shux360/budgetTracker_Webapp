/** @type {import('tailwindcss').Config} */
module.exports = {
 
  content: ["./dist/*.{html,js,css}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

