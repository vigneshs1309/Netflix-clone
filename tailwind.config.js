/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'navbar':'liner-gradient(180deg, rgba(0,0,0,0.7) 10% transparent)'
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}

