/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Gill Sans', 'sans-serif'],
    },
    screens: {
      sm: '576px',
      md: '960px',
      lg: '1440px',
    },
  },
  plugins: [],
};
