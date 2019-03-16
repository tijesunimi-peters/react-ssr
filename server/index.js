/**
 * @name ServerSystem
 * @file Express Server<br />
 * Uses `public/index.html` as template for the rendering system
 */

require('dotenv').config();

const express = require("express");

const app = express();
const fs = require('fs');
const path = require('path');

const renderingSystem = require('../renderingSystem/dist/main').templater;

app.use('/media',express.static('public/assets'));
app.use(express.static('public/assets'));

app.get('*', function (req, res) {
  const template = fs.readFileSync(path.resolve(__dirname, "../public/index.html")).toString();
  const body = renderingSystem('Home', template, req.url);
  res.send(body);
});

app.get('/favicon.ico', function (_, res) {
  return res.send('./favicon.ico');
});

app.listen(process.env.PORT, function () {
  return console.log("App listening on PORT: " + process.env.PORT);
});
