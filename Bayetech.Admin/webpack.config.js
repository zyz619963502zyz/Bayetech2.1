const path = require('path');

const config = {
  output: {
    filename: 'BayetechJs.bundle.js'
  },
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  }
};

module.exports = config;