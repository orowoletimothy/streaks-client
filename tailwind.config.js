/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        opensns: ['Open Sans', 'sans-serif'],
        worksns: ['Work Sans', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif']
      },
      keyframes: {
        "slide-right-once": {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(15px)" },
        },
      },
      animation: {
        "slide-right-once": "slide-right-once 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
}

