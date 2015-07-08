var inquirer = require('inquirer');
var Joi = require('joi');
var _ = require('lodash');

function processAnswers(answers){
  console.log("And your answers are:", answers);
}

function onValidation(err,val){
    if(err){
        console.log(err.message);
        return err.message;         
    }
    else{
        return true;            
    }
           
}

function validateName(name) {
       return Joi.validate(name, Joi.string().required(), onValidation);
}


function validateAge(age) {
       return Joi.validate(age, Joi.number().required().min(10).max(99), onValidation);
}

function validateEmail(email) {
       return Joi.validate(email, Joi.string().email(), onValidation);
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
{
    message: "What's your email?",
    type: "input",
    name: "email",
    validate: validateEmail
}   
];
inquirer.prompt(questions, processAnswers);