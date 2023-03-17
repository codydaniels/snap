/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  // content: ["./public/**/*.{html, js}"],
  content: [
    "./public/**/*.{html, js}",
    "./src/**/*.{njk, js}"
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      white: '#FFFFFF',
      black: '#001F25',
      dark: '#063b45',
      primary: '#3BA10D',
      yellow: '#FBB040',
      'body-color': '#959CB1',
    },
    screens: {
      sm: '540px',
      // => @media (min-width: 576px) { ... }

      md: '720px',
      // => @media (min-width: 768px) { ... }

      lg: '960px',
      // => @media (min-width: 992px) { ... }

      xl: '1140px',
      // => @media (min-width: 1200px) { ... }

      '2xl': '1320px',
      // => @media (min-width: 1400px) { ... }
    },
    extend: {
      boxShadow: {
        signUp: '0px 5px 10px rgba(4, 10, 34, 0.2)',
        one: '0px 2px 3px rgba(7, 7, 77, 0.05)',
      },
    },
  },
  plugins: [],
}
