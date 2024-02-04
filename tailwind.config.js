/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#CDFF8D',
        },
        secondary: {
          DEFAULT: '#4F4F4F',
        },
        detail: {
          DEFAULT: '#FFDFA1',
        },
        background: {
          DEFAULT: '#888BA8',
        }
      },
    },
  },
  plugins: [],
};