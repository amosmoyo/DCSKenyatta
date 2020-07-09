/* eslint-disable no-console */
require('dotenv/config');
const express = require('express');
const http = require('http');
const chalk = require('chalk');

const app = express();

const PORT = process.env.PORT || 8080;

// DB configuration
require('./dbConfig/database');

app.get('/', (req, res) => {
  res.send('Hello World');
})

app.set('port', PORT);

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(chalk.green.inverse.bold(`The app is running on port ${PORT}`));
})