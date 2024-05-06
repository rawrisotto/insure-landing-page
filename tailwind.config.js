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
        'neutral-300': 'hsl(0, 0%, 97%)',
        'neutral-400': 'hsl(273, 4%, 51%)',
        'neutral-800': 'hsl(270, 9%, 17%)',
      },
      fontFamily: {
        'heading': ['Karla', 'sans-serif'],
        'body': ['DM Serif Display', 'serif']
      },
      backgroundImage: {
        'hamburger': "url('/images/icon-hamburger.svg')",
        'close': "url('/images/icon-close.svg')",
        'nav-menu': "url('/images/bg-pattern-mobile-nav.svg')",
        'footer-mobile': "url('/images/bg-pattern-footer-mobile.svg')",
        'footer-desktop': "url('/images/bg-pattern-footer-desktop.svg')",
        'pattern-work-mobile': "url('/images/bg-pattern-how-we-work-mobile.svg')",
        'pattern-work-desktop': "url('/images/bg-pattern-how-we-work-desktop.svg')",
        'pattern-left-mobile': "url('/images/bg-pattern-intro-left-mobile.svg')",
        'pattern-right-mobile': "url('/images/bg-pattern-intro-right-mobile.svg')",
      }
    },
  },
  plugins: [],
}