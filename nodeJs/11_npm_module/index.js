const validator = require('validator');
const chalk = require('chalk');
// console.log(chalk.blue.strikethrough.bgMagenta("hello blue"));
// console.log(chalk.red.inverse("Failed text"));
// console.log(chalk.green.inverse("Success"));


const res=validator.isEmail('vishalkhadaha@gmail.com');
// res?console.log('true'):console.log('false');
res?console.log(chalk.green.inverse("Valid Email")):console.log(chalk.red.inverse("Invalid Email, Please enter again !!"));



