const validator = require('validator');
const chalk = require('chalk');
const log = console.log;


console.log(validator.isEmail('nitesh111sinha@gmail.com'));
console.log(validator.isURL('https://mead.io'));


log(chalk.blue.bgRed.bold('Nitesh Kumar'));
