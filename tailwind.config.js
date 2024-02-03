/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        default: "2px 2px #1E1E1E",
      },
      colors: {
        bgcolor: "#302F3D",
        bdcolor: "#00FF00",
      },
      spacing: {
        default: "40px 40px 0",
      },
      textColor: {
        boxTxColor: "#837E9F",
      },
      fontFamily: {
        merri: ["Merriweather Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
