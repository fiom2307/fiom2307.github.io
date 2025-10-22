/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'pink-soft': '#ffeff4',
        'dark-blue': '#003370',
        'pink': '#e49fb4',
        'dark-pink': '#d24b75',
      },
    },
  },
  plugins: [],
}

