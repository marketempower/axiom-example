const axiomTailwindConfig = require('./themes/axiom/tailwind.config.js');

// Unset the safelist, already included in Theme.
axiomTailwindConfig.purge.options.safelist = [];

module.exports = {
  presets: [
    axiomTailwindConfig
  ],
  theme: {
    extend: {
      // Example: How to add a custom font family
      fontFamily: {
        'content-custom': ['Custom Font', 'sans-serif'],
      },
    },
  },
}
