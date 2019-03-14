const serverConfig = require("./server/webpack.server");
const clientConfig = require("./client/webpack.client");
const renderingConfig = require("./renderingSystem/webpack.rendering");

const devMode = process.env.NODE_ENV !== 'production';

module.exports = [ serverConfig(devMode), clientConfig(devMode), renderingConfig(devMode) ];
