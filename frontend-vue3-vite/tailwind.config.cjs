/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rt-black': '#11151c',
        'rt-dark-slate': '#1d2b41',
        'rt-slate': '	#364156',
        'rt-dark-orange': '#7d4e57',
        'rt-orange': '#d66853'
      },
    }
  },
  plugins: [],
}
