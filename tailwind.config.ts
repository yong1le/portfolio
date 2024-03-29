import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#3C2B00",
        white: "#FDF7E4",
        accent: "#CD8D7A",
        highlight: "#ED7D31"
      },
    },
  },
  plugins: [],
};
export default config;
