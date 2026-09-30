/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cream: '#F7F5F2',
          sand: '#D7C7AE',
          'sand-light': '#F1ECE3',
          gold: '#C5A880',
          green: '#586B5A',
          'green-light': '#748A77',
          dark: '#2F3A33',
          darker: '#1B241E',
          charcoal: '#2D2D2D',
          muted: '#71717A',
          accent: '#9B784B'
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'luxury': '24px',
      },
      boxShadow: {
        'luxury': '0 20px 60px rgba(0, 0, 0, 0.08)',
        'luxury-hover': '0 30px 70px rgba(47, 58, 51, 0.15)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
      }
    },
  },
  plugins: [],
}
