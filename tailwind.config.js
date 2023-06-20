/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'theme-light': '#edf2f4',
        'muji-white': '#F8F4F9',
        white: '#EFEFEF',
        black: '#070707',
        'muji-blue': '#3454D1',
        green: '#71816D',
        khaki: '#C9B79C',
        champagne: '#F1E0C5',
        cardinal: '#C5304B',
      },
    },
  },
  plugins: [],
};
