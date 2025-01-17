/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        title: "82px",
        subtitle: "56px",
        body: "32px",
      },
      fontFamily: {
        base: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#1D3A46",
        contraste: "#6A7B80",
      },
    },
  },
  plugins: [],
};
