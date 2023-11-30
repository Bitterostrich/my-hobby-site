
/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        transitionDuration: {
          '500' : '0.5s',
        }
      },
    },
    plugins: [],
  }