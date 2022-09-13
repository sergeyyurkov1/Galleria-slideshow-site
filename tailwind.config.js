// const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "600px",
      md: "1024px",
      lg: "1440px",
      xl: "1920px",
      // ...defaultTheme.screens,
    },
    extend: {
      // gridTemplateColumns: {
      //   4: "repeat(4, 1fr)",
      // },
    },
  },
  fontFamily: {
    serif: ["Roboto Serif", "serif"],
  },
  plugins: [],
  prefix: "tw-",
};
