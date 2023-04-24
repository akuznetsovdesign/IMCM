/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'rgba(255, 255, 255, 0)',
      'black': '#101010',
      'white': '#FFFFFF',
      'blue': '#007AFF',
      'gray': '#5B5B5B',
    },
    screens: {
      mobS: '320px',
      mobM: '375px',
      mobL: '425px',
      tablet: '768px',
      laptop: '1024px',
      laptopL: '1440px',
      'fhd': '1920px',
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
    },
  },
  plugins: [
  ],
}