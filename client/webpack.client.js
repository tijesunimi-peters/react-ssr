const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (devMode = true) => ({
  name: 'Client',
  target: 'web',
  watch: devMode ? true : false,
  watchOptions: {
    ignored: [
      path.resolve(__dirname, '../public'),
      path.resolve(__dirname, 'index.html'),
      'node_modules',
    ],
  },
  mode: devMode ? 'development' : 'production',
  entry: {
    client: path.resolve(__dirname, './src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, '../public/assets'),
    filename: devMode ? '[name].js' : '[name].[hash].js',
    publicPath: "/media/"
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(svg|png|jpg|jpeg)/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './index.html'),
      filename: path.resolve(__dirname, '../public/index.html'),
      content: "\${content}",
      title: "\${title}",
    }),
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
});
