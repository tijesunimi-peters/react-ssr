const serverConfig = require("./server/webpack.server");
const clientConfig = require("./client/webpack.client");
const renderingConfig = require("./renderingSystem/webpack.rendering");

const devMode = process.env.NODE_ENV !== 'production';

/**
 * @file Webpack entrypoint for all sub-system bundling. <br />
 * Required
 *  ```
  *  server/webpack.server.js
  *  renderingSystem/webpack.rendering.js
  *  client/webpack.client.js
 *  ```
 *
 * @name BundlingSystem/Global
 * @requires server/webpack.server.js
 * @requires renderingSystem/webpack.rendering.js
 * @requires client/webpack.client.js
 */
module.exports = [ serverConfig(devMode), clientConfig(devMode), renderingConfig(devMode) ];
