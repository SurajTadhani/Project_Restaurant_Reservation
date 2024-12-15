/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode :"class",
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      colors: {
        customBackground: 'white',
        customText: 'black',
      },
      animation: {
        'slow-spin': 'spin 10s linear infinite',
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        spin_right: {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

