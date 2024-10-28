/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "heading-color": "#212529",
        "main-color": "#235ab9",
        "sub-color": "#ffefef",
        "nav-color": "#C3C3C3",
        "p-color": "#fcfcfc",
        "sub-black" : "#212529",
      },
      fontSize: {
        extraSmall: "12px",
        small: "16px",
        md:"20px",
        lg: "24px",
        large: "30px",
        larger: "45px",
      },
      screens: {
        xs: "320px",
        sm: "520px",
        md: "768px",
        lg: "992px",
      },
      borderRadius: {
        base: "0% 100% 100% 0%",
        basic: "0% 0% 100% 0%",
      },
      borderWidth: {
        1.5: "1.5px",
      },
      ringWidth: {
        1.5: "1.5px",
      },
    },
  },
  plugins: [],
};
