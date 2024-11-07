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
      },
      colors: {
        primary: "#ff8901",
        secondary: "#fb923c",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
}