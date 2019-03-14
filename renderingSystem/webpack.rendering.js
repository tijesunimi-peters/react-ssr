const path = require('path');
const fs = require('fs');

// fs.copyFileSync(path.resolve(__dirname, "../client/src/App.js"), path.resolve(__dirname, "./src/App.js"))
// fs.copyFileSync(path.resolve(__dirname, "../client/src/hellofresh-logo.svg"), path.resolve(__dirname, "./src/hellofresh-logo.svg"))

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

