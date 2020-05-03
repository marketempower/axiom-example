const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')({
  preset: 'default'
})
const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './*(layouts|content|data|static)/**/*.*(html|toml|md)',
  ],
  // tailwindcss/src/lib/purgeUnusedStyles.js
  defaultExtractor: content => {
    const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []
    const innerMatches = content.match(/[^<>"'`\s.(){}\[\]#=%]*[^<>"'`\s.(){}\[\]#=%:]/g) || []
    return broadMatches.concat(innerMatches)
  },
})

module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-nesting'),
    ...process.env.NODE_ENV === 'production'
      ? [purgecss, autoprefixer, cssnano]
      : []
  ]
}
