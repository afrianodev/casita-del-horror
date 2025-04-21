/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-gray': '#1f1f1f', 
        'mid-gray': '#121212'
      }
    },
  },
  plugins: [],
}

