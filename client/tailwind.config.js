/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#46145E",
        secondary: "#1F0259",
        vim: "#15F5BA",
        grey: "#8D8D8D",
        pink: "#FEC5E4",
        cream: "#FFF9CD",
        "light-blue": "#ABEFFE",
        "light-purple": "#CDC6FF",
      },
      fontFamily: {
        "poppins-thin-italic": ["Poppins", "sans-serif", "italic", 100],
      },
    },
    plugins: [],
  },
};
