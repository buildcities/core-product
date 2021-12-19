const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    '../node_modules/@buildcities/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  thtme: {
    extend: {
      colors: {
        'gray-paragraph': '#969696',
        'purple-selected': '#7B61FF',
      },
    },
  },
  presets: [
    require('../../node_modules/@buildcities/build-ui.tailwind-styles/tailwind.config'),
  ],
}
