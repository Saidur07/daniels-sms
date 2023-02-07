module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#2c2c2c",
          secondary: "#7C79FF",
          accent: "#f5f7f9",
          "base-100": "#fff",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
