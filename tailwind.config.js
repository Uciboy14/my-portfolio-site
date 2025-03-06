const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", ...fontFamily.sans],
        inter: ["var(--font-inter), sans-serif"],
        muli: ["Muli", "sans-serif"],
      },
    },
  },
  plugins: [],
};
