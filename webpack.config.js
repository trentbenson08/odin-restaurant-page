const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
    homePage: './src/home-page.js',
    menuPage: './src/menu-page.js',
    contactPage: './src/contact-page.js'
  },
  mode: 'production',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
      }
    ]
  }
};
