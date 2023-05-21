/** @type {import('tailwindcss').Config} */
const { shake } = require("./app/global/configStore/tailwind/animations");

module.exports = {
  theme: {
    extend: {
      keyframes: {
        shake: {
          "0%": { "margin-left": "0rem" },
          "25%": { "margin-left": "0.5rem" },
          "45%": { "margin-left": "-0.5rem" },
          "65%": { "margin-left": "0.5rem" },
          "85%": { "margin-left": "-0.5rem" },
          "100%": { "margin-left": "0rem" },
        },
      },
      animation: {
        "error-shake": "shake 0.5s linear",
      },
    },
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    {
      pattern: /(bg|text|border)-./,
    },
  ],
  options: {},
  plugins: [],
};
