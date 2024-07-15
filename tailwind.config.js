/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      screens: {
        xs: '480px'
      },
      colors: {
        primary: '#1052BA',
        'primary-dark': '#4C1717',
        'footer-bg': '#2E0E0E',
        dark: '#020203',
        'primary-light': '#F6C1C1'
      }
    }
  },
  plugins: []
}
