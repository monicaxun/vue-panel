const merge = require('webpack-merge');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const config = require('./webpack.config')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// webpack.dev.config.js
module.exports = merge(config, {
  entry: "./examples/index.js",
  output: {
    filename: "index.js"
  },
  devtool: '#source-map',
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader" 
      },
      {
        test: /\.css$/,
        use: ["style-loader", MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js' // 用 webpack 1 时需用 'vue/dist/vue.common.js'
    }
  },
  devServer: {
    hot: true,
    open: true,
    quiet: true,
    clientLogLevel: 'warning',
    proxy: {
      '/validate/*': {
        target: 'http://10.203.68.138:8088'
      }
    },
    host: 'localhost',
    port: 8080
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: 'examples/index.html'
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
    new VueLoaderPlugin()
  ],
  mode: "development"
});
