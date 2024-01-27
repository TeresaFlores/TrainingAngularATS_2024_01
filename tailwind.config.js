/** @type {import('tailwindcss').Config} */
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
      indigo: colors.indigo,
      yellow: colors.yellow,
      red: colors.red,
      green: colors.green,
    },
    extend: {},
  },
  plugins: [],
}

