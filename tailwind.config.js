const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    colors: {
      primary: colors.blue,
      secondary: colors.blueGray,
      neutral: colors.coolGray,
      white: colors.white,
      black: colors.black,
      transparent: 'transparent'
    },
    fontFamily: {
      primary: ['Poppins', 'sans-serif'],
      secondary: ['Space Mono', 'sans-serif'],
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1350px',
      // => @media (min-width: 1350px) { ... }

      '3xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.text-vertical': {
          writingMode: 'vertical-lr'
        }
      }
      addUtilities(newUtilities, {
        variants: ['responsive']
      })
    })
  ],
}
