/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./**/*.liquid"],
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        body: "Aeonik Rg",
        heading: "Burbank Bold",
        "heading-bold": "Burbank Black",
      },
      colors: {
        "blue-200": "#C3DEE9",
        "blue-400": "#27AAE1",
        "blue-600": "#2296C7",
        "blue-700": "#1E83AD",
        "gray-900": "#353535",
        strawberry: "#ED1C24",
        purple: "#662D91",
        gold: "#FFBD17",
        bluewish: "#2296C7",
        teal: "#00A79D",
        "light-blue": "#ECFAFF",
        "gray-bg": "#F8F8F8",
        "dark-gray": "#555555",
        "simple-yellow": "#FFDE8C",
      },
    },
  },
};
