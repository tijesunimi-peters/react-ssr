require('dotenv').config();

const express = require("express");

const app = express();
const fs = require('fs');
const path = require('path');
var renderingSystem = require('../renderingSystem/views/main').templater;

app.use('/media',express.static('public/assets'));
app.use(express.static('public/assets'));

app.get('/', function (_, res) {
  const template = fs.readFileSync(path.resolve(__dirname, "../public/index.html")).toString();
  body = renderingSystem('Home', template);
  res.send(body);
});

app.get('/favicon.ico', function (_, res) {
  return res.send('./favicon.ico');
});

app.listen(process.env.PORT, function () {
  return console.log("App listening on PORT: " + process.env.PORT);
});
