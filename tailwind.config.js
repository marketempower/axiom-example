const defaultTheme = require('tailwindcss/defaultTheme')
const axiomTheme = require('./themes/axiom/tailwind.config')

// Custom Tailwind config example
axiomTheme.theme.extend.fontFamily = {
  'content-custom': ['Custom Font', 'sans-serif']
}

module.exports = axiomTheme;
