/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      sans: ["Poppins", 'sans-serif']
    },
    extend: {
      colors: {
        beige: "#F7F7F7",
        orange: "#FFA500",
        red: "#800000",
        yellow: "#FFD700",
        brown: "#A0522D",
        green: "#008000",
        black: "#333333"
      }
    },
  },
  plugins: [],
}

