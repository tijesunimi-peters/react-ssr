const path = require('path');


/**
 * @name BundlingSystem/RenderingSystem
 * @param {boolean} devMode
 * @file This is the bundling system for Server Side Rendering system to a commonjs library that can be used by `server/index.js`
 *
 * Entry:
 * ```
 * renderingSystem/src/index.js
 * ```
 *
 * Output:
 * ```
 * renderingSystem/dist/**
 * ```
 *

 */
module.exports = (devMode = true) => ({
  name: 'Rendering Engine',
  target: 'node',
  watch: devMode ? true : false,
  entry: path.resolve(__dirname, './src/index.js'),
  mode: devMode ? "development" : 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].js",
    library: 'main',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.(svg|png|jpg|jpeg)$/,
        loader: "file-loader"
      },
      {
        test: /\.(css)$/,
        use: ["css-loader"]
      }
    ]
  },
  plugins: []
})

