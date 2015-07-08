var inquirer = require('inquirer');
var Joi = require('joi');
var _ = require('lodash');

function processAnswers(answers){
  console.log("And your answers are:", answers);
}

function validateAge(age) {
       var valid;
       Joi.validate(age, Joi.number().required().min(10).max(99), function(err,val){
           if (err){
               console.log(err.message);
               valid = err.message;           
           }
           else{
               valid = true;
               
           }
           
       });
       return valid;
}


function validateName(name) {
       var valid;
       Joi.validate(name, Joi.string().required(), function(err,val){
           if (err){
               console.log(err.message);
               valid = err.message;           
           }
           else{
               valid = true;
               
           }
           
       });
       return valid;
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