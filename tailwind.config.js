/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        darkBackground: '#0F0F12',
        light: '#D9D9D9',
      },
      fontFamily: {
        Spectral: ['Spectral', 'serif'],
        IBM: ['IBM Plex Sans', 'sans-serif'],
      },
      fontSize: {
        landing: '11.4rem',
      },
      animation: {
        fadeInOut: 'fadeInOut 2s ease-in-out',
        fadeIn: 'fadeIn 2s ease-in',
        floatUp: 'floatUp 3s ease-out',
      },
      keyframes: {
        fadeInOut: {
          '0%, 100%': { opacity: 0 },
          '25%, 75%': { opacity: 1 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '50%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        floatUp: {
          '0%': {
            opacity: 0,
          },
          '40%': {
            opacity: 0,
            transform: 'translateY(80%)',
          },
          '60%': {
            opacity: 0,
          },
          '80%': {
            opacity: 0.8,
            transform: 'translateY(0%)',
          },
          '100%': {
            opacity: 0.8,
            transform: 'translateY(0%)',
          },
        },
      },
    },
  },
  plugins: [],
};
