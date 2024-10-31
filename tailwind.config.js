/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1141px',
      },
      backgroundImage: {
        'banner': "url('/src/assets/banner.png')",
      }
    },
  },
  plugins: [],
}