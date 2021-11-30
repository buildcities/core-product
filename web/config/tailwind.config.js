const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.{js,jsx,ts,tsx}',
    '../node_modules/@buildcities/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  presets: [
    require('../../node_modules/@buildcities/build-ui.tailwind-styles/tailwind.config'),
  ],
}
