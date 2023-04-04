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
        primary: " var(--primary)",
        accent: "var(--accent)",
        positive: "var(--positive)",
        warning: "var(--warning)",
      },
      fontFamily: {
        title: ["Dancing Script, cursive"],
      },
    },
  },
  plugins: [],
};
