/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-400': 'hsl(216, 30%, 68%)',
        'primary-700': 'hsl(256, 26%, 20%)',
        'neutral-100': 'hsl(0, 0%, 98%)',
        'neutral-400': 'hsl(273, 4%, 51%)',
        'neutral-800': 'hsl(270, 9%, 17%)',
      },
      fontFamily: {
        'heading': ['Karla', 'sans-serif'],
        'body': ['DM Serif Display', 'serif']
      }
    },
  },
  plugins: [],
}

