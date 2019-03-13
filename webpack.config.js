const serverConfig = require("./server/webpack.server");
const clientConfig = require("./client/webpack.client");
const renderingConfig = require("./renderingSystem/webpack.rendering");

module.exports = [ serverConfig, clientConfig, renderingConfig ];
