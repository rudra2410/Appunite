/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "heading-color": "#212529",
        "main-color": "#235ab9",
        "sub-color": "#ffefef",
      },
      screens: {
        xs: "320px",
        sm: "520px",
        md: "768px",
        lg: "992px",
      },
      borderRadius: {
        base: "0% 100% 100% 0%",
        basic: "0% 0% 550% 0%",
      },
      borderWidth: {
        1.5: "1.5px",
      },
      ringWidth: {
        1.5: "1.5px",
      },
      // animation : {
      //   "loop-scroll" : "loop-scroll 10s linear infinite"
      // },
      // keyframes : {
      //   "loop-scroll" : {
      //     from : {transform : "transitionX(0)"},
      //     to : {transform : "translateX(100%)"},
      //   },
      // }
    },
  },
  plugins: [],
};
