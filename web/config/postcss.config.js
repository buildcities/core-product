const path = require('path')

module.exports = {
  plugins: [
    require('../../node_modules/tailwindcss')(
      path.resolve(__dirname, 'tailwind.config.js')
    ),
    require('../../node_modules/autoprefixer'),
  ],
}
