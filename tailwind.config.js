/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode:"class",
  theme: {
    extend: {
      colors:{
        primary:"#ec28fe",
        secondary:"#ed00a2"
      },
      container:{
        center:true,
        padding:{
          DEFAULT:"1rem",
          sm:"3rem",
          // lg:"4rem",
          // xl:"5rem",
          // "2xl":""
        }
      }
    },
  },
  plugins: [],
}

