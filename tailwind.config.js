/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        neu: "#e6ebf5 ",
        faded: "#707070",
        pink: "#ee9fd4",
        "light-faded": "#404040",
        "light-white": "#f5f7fb",
        "light-pink": "#f2d1e1",
        "dark-text": "#495057",
        "input-border": "#bfd1e3",
        blue: "#5959D9",
        darkpurple: "#e159a2",
      },
      boxShadow: {
        "4y": "0 4px 4px  rgba(0, 0, 0, 0.3)",
      },
      fontFamily: {
        lato: "lato",
        comic: "comic-neue",
        source: "source",
      },
    },
  },
  plugins: [],
};
