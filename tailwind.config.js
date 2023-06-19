/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'theme-light': '#edf2f4',
        'muji-white': '#e5ece9',
        'muji-green': '#95B191',
        'theme-blue': '#a2d2ff',
      },
    },
  },
  plugins: [],
};
