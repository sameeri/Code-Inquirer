var inquirer = require('inquirer');
console.log('Inquirer.js api', inquirer);

function doSomething(answers){
  // Do whateva you want!
}
var questions = [];
inquirer.prompt(questions, doSomething);