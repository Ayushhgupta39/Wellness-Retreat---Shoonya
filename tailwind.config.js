/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom_blue: "#1b3252",
        custom_brown: "#e0d9cf"
      },
      fontFamily: {
        open_sans: ["Open Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}

