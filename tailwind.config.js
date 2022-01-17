module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightGrayBlue: "#1c2431",
        darkGrayBlue: "#181f2b",
      },
      fontFamily: {
        inter: ["Inter"],
      },
      height: {
        sm: "40rem",
        md: "65rem",
        lg: "80rem",
      },
      width: {
        sm: "40rem",
        md: "65rem",
        lg: "80rem",
        xl: "100%",
      },
    },
  },
  plugins: [],
};
