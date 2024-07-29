import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            "*": {
              color: "#3C2B00",
            },
          },
        },
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
  daisyui: {
    logs: false,
    themes: [
      {
        default: {
          ...require("daisyui/src/theming/themes")["autumn"],
          primary: "#CD8D7A",
          "primary-content": "#FDF7E4",
          secondary: "#FDF7E4",
          "secondary-content": "#3C2B00",
          accent: "#ED7D31",
          "accent-content": "#FDF7E4",
          "base-100": "#000",
          "base-content": "#fff",
        },
      },
    ],
  },
};
export default config;
