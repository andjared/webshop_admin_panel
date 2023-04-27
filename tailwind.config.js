/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5c5c5c",
        accent: "#e7ab9a",
        positive: "#617143",
        warning: "#df7857",
      },
      fontFamily: {
        title: ["Dancing Script, cursive"],
      },
    },
  },
  plugins: [],
};
