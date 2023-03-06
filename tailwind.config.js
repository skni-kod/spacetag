const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import("tailwindcss").Config} */
const tailwindCssConfig = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [],
  theme: {
    extend: {
      backgroundImage: {
        stars: "url('https://i.imgur.com/l5kIze3.png')",
      },
      fontFamily: {
        sans: ["var(--font-titillium-web)", ...defaultTheme.fontFamily.mono],
      },
    },
    zIndex: {
      0: "0",
      1: "1",
      drawer: "4",
      loader: "2",
      navbar: "3",
    },
  },
};

module.exports = tailwindCssConfig;
