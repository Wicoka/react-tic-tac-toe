/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#00a486' },
        neutral: { white: '#FFFFFF' },
      },
      textColor: {
        white: '#FFF',
        black: '#000',
      },
    },
  },
  plugins: [],
};
