const VueLoaderPlugin = require('vue-loader/lib/plugin')

// webpack.config.js
module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "index.js",
    library: "VuePanel",
    libraryTarget: "umd"
  },
  module: {
    rules: [
      { test: /\.vue$/, loader: "vue-loader" }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  mode: "development"
};
