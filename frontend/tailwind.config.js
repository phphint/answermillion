/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust as needed for your project structure
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'aqua': '#1f7e8e',
        'dark': '#0e111b',
        'light-aqua': '#77b9ce',
        'light': '#fdfeff',
      },
    },
  },
  plugins: [],
}
