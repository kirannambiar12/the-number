/** @type {import('tailwindcss').Config} */
const { shake } = require("./app/global/configStore/tailwind/animations");

module.exports = {
  mode: "jit",
  theme: {
    extend: {
      keyframes: {
        shake: { ...shake },
      },
      animation: {
        "error-shake": "shake 0.5s linear",
      },
    },
  },
  content: [
    "./public/*.html",
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
