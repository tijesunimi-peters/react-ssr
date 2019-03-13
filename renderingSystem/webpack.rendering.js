const path = require('path');
const fs = require('fs');

const devMode = process.env.NODE_ENV !== 'production';
fs.copyFileSync(path.resolve(__dirname, "../client/src/App.js"), path.resolve(__dirname, "./src/App.js"))
// fs.copyFileSync(path.resolve(__dirname, "../client/src/App.css"), path.resolve(__dirname, "./src/App.css"))
fs.copyFileSync(path.resolve(__dirname, "../client/src/hellofresh-logo.svg"), path.resolve(__dirname, "./src/hellofresh-logo.svg"))

module.exports = {
  name: 'Redering Engine',
  target: 'node',
  entry: path.resolve(__dirname, './src/index.js'),
  mode: devMode ? "development" : 'production',
  output: {
    path: path.resolve(__dirname, 'views'),
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
}

