/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      
      textShadow: {
        sm: '0 1px 2px ',
       
        lg: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
      colors: {
        primary: "#fa8907",
      },
    },
  },
plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
};
