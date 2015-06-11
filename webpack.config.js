// webpack.config.js
module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "index.js"
  },
  module: {
    loaders: [
      { test: /\.vue$/, loader: "vue-multi-loader" },
      { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' }
    ]
  }
};