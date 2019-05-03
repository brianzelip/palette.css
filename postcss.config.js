const postcssImport = require('postcss-import');
const postcssCustomMedia = require('postcss-custom-media');
const postcssCustomProperties = require('postcss-custom-properties');
const postcssCalc = require('postcss-calc');
const postcssColorFunction = require('postcss-color-function');
const postcssAutoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    postcssImport(),
    postcssCustomMedia(),
    postcssCustomProperties(),
    postcssCalc(),
    postcssColorFunction(),
    postcssAutoprefixer()
  ]
};
