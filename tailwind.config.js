/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        nord: {
          night0: '#2E3440',
          night1: '#3B4252',
          night2: '#434C5E',
          night3: '#4C566A',
          snow0: '#D8DEE9',
          snow1: '#E5E9F0',
          snow2: '#ECEFF4',
          frost0: '#8FBCBB',
          frost1: '#88C0D0',
          frost2: '#81A1C1',
          frost3: '#5E81AC',
          auroraRed: '#BF616A',
          auroraOrange: '#D08770',
          auroraYellow: '#EBCB8B',
          auroraGreen: '#A3BE8C',
          auroraPurple: '#B48EAD',
        },
      },
    },
  },
  plugins: [],
};
