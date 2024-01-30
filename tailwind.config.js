/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#64748b',
        },
        secondary: {
          DEFAULT: '#fff',
        },
        detail: {
          DEFAULT: '#474306',
        },
      },
    },
  },
  plugins: [],
};
