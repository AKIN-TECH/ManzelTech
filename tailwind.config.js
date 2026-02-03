/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin")
const Myclass = plugin (function({ addUtilities}) {
  addUtilities({
    ".my-route-y-180":{
     transform:"rotateY(180deg)",
    },
    ".preserve-3d":{
      transformStyle:"preserve-3d" ,
    },
    ".perspective": {
      perspective:  "1000px",
    },
    ".backface-hidden":{
      backfaceVisibility:"hidden"
    }
   
    
  })
})
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    container: {
      
      center: true
    },
    extend: {
      colors: {
        backgroundImage: "#070713",
        primary: "#050816",
        // secondary: "#aaa6c3",
        tertiary: "#070713",

        // "black-100": "#100d25",
        // "black-200": "#090325",
        // "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #070713",
      },
      screens: {
        xs: "450px",
      },
      fontFamily: {
        roboto: "Roboto",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/hero.png')",
        "hero-footer":"url('/src/assets/spline.png')",
        "hero":"url('/src/assets/why.png')",
        "works-pattern": "url('/src/assets/intro.gif')"
      },
    },
  },
  plugins: [Myclass],
};
