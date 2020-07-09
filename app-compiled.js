"use strict";

/* eslint-disable no-console */
require('dotenv/config');

var express = require('express');

var http = require('http');

var chalk = require('chalk');

var app = express();
var PORT = process.env.PORT || 8080;
app.get('/', function (req, res) {
  res.send('Hello World');
});
app.set('port', PORT);
var server = http.createServer(app);
console.log(process.env.MY_SECRETE);
server.listen(PORT, function () {
  console.log(chalk.green.inverse.bold("The app is running on port ".concat(PORT)));
});
