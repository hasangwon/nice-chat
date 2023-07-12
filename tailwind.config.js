/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.tsx",
    "./components/**/*.ts",
    "./pages/**/*.tsx",
    "./pages/**/*.ts",
    "./context/**/*.tsx",
    "./context/**/*.ts",
  ],
  theme: {
    extend: {
      colors: {
        yeondu: {
          DEFAULT: "#cbe86b",
        },
        dark: {
          DEFAULT: "#1c140d",
        },
        bright: {
          DEFAULT: "#f2e9e1",
        },
      },
    },
  },
  plugins: [],
};
