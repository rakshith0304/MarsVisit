/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: {
          400: '#FBBF24', // Bright yellow for primary highlights
          300: '#FCD34D', // Softer yellow for supporting elements
        },
      },
    },
  },
  plugins: [],
}