/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  important: "#root",
  theme: {
    extend: {
      colors: {
        primary: "#5CBF91",
        inputBorder: "#E0E0E0",
        textGrey: "#949494",
        textDarkBold: "#1A1A1A",
        textRed: "#CC274C",
        bgGrey: "#FAFAFA",
        textPlaceHolder: "#949494",
      },
    },
  },
  plugins: [],
};
