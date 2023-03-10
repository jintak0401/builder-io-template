/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.indigo,
      },
      transitionProperty: {
        width: 'width',
      },
    },
  },
};
