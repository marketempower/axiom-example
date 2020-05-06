const defaultTheme = require('tailwindcss/defaultTheme')
const axiomTheme = require('./themes/axiom/tailwind.config')

// Unset to prevent duplication
axiomTheme.purge.options.whitelist = [];

// Example: How to add a custom font family
axiomTheme.theme.extend.fontFamily = {
  'content-custom': ['Custom Font', 'sans-serif']
};

module.exports = axiomTheme;
