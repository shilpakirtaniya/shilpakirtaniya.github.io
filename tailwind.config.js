/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      calibri: ["calibri"],
      display: ["display"],
      noto: ["noto"],
    },
    fontWeight: {
      light: 100,
      normal: 400,
      bold: 700,
    },
    screens: {
      xxs: "350px",
      xs: "450px",
      "3xl": "1700px",
      "4xl": "1900px",
      ...defaultTheme.screens,
    },
    colors: {
      black: "#14142B",
      grey: "#EEEEEE",
      white: "#ffffff",
      offwhite: "#EFF0F6",
      blue: "#1A80E6",
      offblue: "#A9D7D5",
      mud: "#C54045",
    },
    extend: {
      backgroundImage: {
        header1: "url('/src/project/Social Media/cover image.jpg')",
        background1:
          "url('/src/project/Social Media/page 1/background image.jpg')",
        vilasita: "url('/src/project/VILASITA/page 5/background image.png')",
        weddingHero: "url('/src/project/Wedding card/HERO IMAGE.png')",
        mainHero: "url('')",
      },
      keyframes: {
        scrollRight: {
          "0%, 100%": { transfrom: "translateX(100%)" },
        },
      },
      animation: {
        scrollRight: "scrollRight 20s linear infinite",
      },
    },
  },
  plugins: [],
};
