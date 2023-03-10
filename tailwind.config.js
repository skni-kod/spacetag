const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import("tailwindcss").Config} */
const tailwindCssConfig = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [],
  theme: {
    extend: {
      animation: {
        caret: "caret 1s linear infinite",
        scroll: "scroll 4s linear infinite",
        twinkle: "twinkle 30s alternate infinite linear",
      },
      backgroundImage: {
        horizon:
          "radial-gradient(#000000 70%, #ffffff 70.1%, #0ea5e9 70.3%, #0ea5e900 70.7%)",
        twinkle: "url(/assets/images/twinkle.png)",
      },
      fontFamily: {
        sans: ["var(--font-titillium-web)", ...defaultTheme.fontFamily.mono],
      },
      gridTemplateColumns: {
        timeline: "minmax(0, 1fr) 8rem minmax(0, 1fr)",
      },
      keyframes: {
        caret: {
          "0%, 49.99%, 100%": {
            opacity: "0",
          },
          "50%, 99.99%": {
            opacity: "1",
          },
        },
        scroll: {
          "0%, 25%": {
            opacity: "0",
            transform: "translateY(-1rem)",
          },
          "50%": {
            opacity: "10",
          },
          "75%, 100%": {
            opacity: "0",
            transform: "translateY(1rem)",
          },
        },
        twinkle: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-1000px 500px",
          },
        },
      },
      screens: Object.fromEntries(
        Object.entries(defaultTheme.screens).map(([key, value]) => [
          `h-${key}`,
          {
            raw: `(min-height: ${value})`,
          },
        ])
      ),
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
