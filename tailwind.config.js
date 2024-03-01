/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#46145e",
        secondary: "#1F0259",
        vim: "#15F5BA",
      },
      screens: {
        lg: "1600px",
        md: "440px",
      },
      fontFamily: {
        "poppins-thin-italic": ["Poppins", "sans-serif", "italic", 100],
      },
    },
    plugins: [],
  },
};
