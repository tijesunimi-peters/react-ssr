const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = (devMode = true) => ({
  name: "Server Bundle",
  target: "node",
  watch: devMode ? true : false,
  watchOptions: {
    ignored: [path.resolve(__dirname, "../public"), 'node_modules']
  },
  mode: devMode ? 'development' : 'production',
  entry: {
    skeleton: path.resolve(__dirname, './src/styles/skeletons.scss'),
    style: path.resolve(__dirname, './src/styles/style.scss'),
  },
  output: {
    path: path.resolve(__dirname, '../public/assets'),
    filename: devMode ? '[name].js' : '[name].[hash].js',
    publicPath: '/media/'
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
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    }),
    new HtmlWebpackPlugin({
      title: "<%= htmlWebpackPlugin.options.title %>",
      template: path.resolve(__dirname, './src/index.html'),
      filename: path.resolve(__dirname, '../client/index.html'),
      favicon: path.resolve(__dirname, './src/favicon.ico'),
      manifest: path.resolve(__dirname, './src/manifest.json'),
      content: "<%= htmlWebpackPlugin.options.content %>"
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
