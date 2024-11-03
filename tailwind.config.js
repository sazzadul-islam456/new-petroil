/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'primary':["Poppins", 'sans-serif',]
      },
      maxWidth: {
        'container': '1140px',
      },
      backgroundImage: {
        'banner': "url('/src/assets/banner.png')",
      }
    },
  },
  plugins: [],
}