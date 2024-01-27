/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      neutral: colors.neutral,
      purple: colors.purple,
      sky: colors.sky,
      yellow: colors.yellow,
      red: colors.red,
      green: colors.green,
    },
    
    extend: {
      fontFamily: {
        graphik: ['"Graphik"'],
        graphikSemiBold: ['"Graphik-Semibold"'],
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}

