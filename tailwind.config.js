/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        signature: ['Great Vibes', 'cursive', ...fontFamily.sans],
      },
      colors: {
        neon: '#00f7ff',
        dark: {
          DEFAULT: '#030014',
          card: 'rgba(17, 25, 40, 0.75)',
        },
        primary: '#bccedc',
        secondary: '#dcd5cd',
        accent: '#5c4a46',
      },
      backgroundColor: {
        light: '#ffffff',
        'light-secondary': '#f8f9fa',
      },
    },
  },
  plugins: [],
}
