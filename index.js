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
       var schema =  Joi.string().required();
       return Joi.validate(name, schema, onValidation);
}

function validateAge(age) {
       var schema = Joi.number().required().min(10).max(99);
       return Joi.validate(age, schema , onValidation);
}

function validateEmail(email) {
       var schema = Joi.string().email();
       return Joi.validate(email, schema , onValidation);
}

function validateTopics(topics){
     var schema = Joi.array().min(1);
     return Joi.validate(topics, schema, onValidation);
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
    },
    {
        message: "What topics would you like to subscribe to?",
        type: "checkbox",
        name: "topics",
        choices: [{name: "JavaScript", checked: true}, 
                  {name: "C#", checked: false},
                  {name: "Java"},
                  {name: "Ruby"},
                  {name: "Python", checked:false} ],
        validate: validateTopics
    },
    {
        message: "How would you best describe yourself?",
        type: "list",
        name: "role",
        choices: ["Beginner", "Intermediate", "Coding Ninja" ]
    },
    {
        message: "How would you rate us?",
        type: "rawlist",
        name: "feedback",
        choices: ["Awesome", "Good", "Okay", "You suck" ]
    }
];
inquirer.prompt(questions, processAnswers);