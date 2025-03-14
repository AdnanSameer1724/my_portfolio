/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          modernBlack: "#1b1f24",
        }
      },
    },
    plugins: [
      function ({ addComponents }) {
        addComponents({
          '.icon-gray': {
            filter: 'invert(62%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(85%) contrast(90%)',
            transition: 'filter 0.3s ease-in-out',
          },
          '.icon-gray:hover': {
            filter: 'invert(69%) sepia(68%) saturate(447%) hue-rotate(98deg) brightness(93%) contrast(89%)',
          },
        });
      },
    ],
  }
  