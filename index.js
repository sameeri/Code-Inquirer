var inquirer = require('inquirer');
var _ = require('lodash');

function processAnswers(answers){
  console.log("And your answers are:", answers);
}

function validateName(name){
        return name !== '';
    }

function validateAge(age)
{
   var reg = /^\d+$/;
   return reg.test(age) || "Age should be a number!";
}

var questions = [
{
    message: "What's your first name?",
    type: "input",
    name: "firstName",
    validate: validateName
},
{
    message: "What's your last name?",
    type: "input",
    name: "lastName",
    validate: validateName
},  
{
    message: "What's your age?",
    type: "input",
    name: "age",
    validate: validateAge
},    

];
inquirer.prompt(questions, processAnswers);