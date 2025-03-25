/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'nav-dark': '#1a1a1a',  // Dark background for navigation
          'nav-blue': '#007bff',  // Blue for accents and active states
          'nav-white': '#ffffff',  // White text
          'nav-gray': '#6c757d',   // Gray for subtle text
        },
        fontFamily: {
          'sans': ['Open Sans', 'Poppins', 'Arial', 'sans-serif'],  // Clean sans-serif fonts
        },
        animation: {
          'fadeIn': 'fadeIn 1s ease-in',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
        },
      },
    },
    plugins: [],
  }