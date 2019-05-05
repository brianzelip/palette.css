module.exports = ctx => ({
  plugins: {
    'postcss-import': {},
    'postcss-custom-media': {},
    'postcss-custom-properties': { preserve: false },
    'postcss-color-function': {},
    autoprefixer: {},
    cssnano: {
      preset: [
        'default',
        {
          mergeLonghand: false,
          mergeRules: false,
          normalizeWhitespace: ctx.env === 'unminified' ? false : true
        }
      ]
    }
  }
});
