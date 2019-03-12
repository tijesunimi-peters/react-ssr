require('dotenv').config();

var express = require("express");
var app = express();
app.use(express.static('public'))

app.get('/', (_, res) => { res.send("../public/index.html") });
app.get('/favicon.ico', (_, res) => res.send('./src/favicon.ico'))

app.listen(process.env.PORT, () => console.log("App listening on PORT: " + process.env.PORT))

