const mongoose = require('mongoose');
const chalk = require('chalk');

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});

mongoose.connection.on('connected', () => {
  console.log(chalk.bold.white.bgGreen('connection to database was successful'));
})

mongoose.connection.on('error', (err) => {
  console.log(chalk.bold.red.inverse(`Error: ${err}`));
})

module.exports = mongoose;

