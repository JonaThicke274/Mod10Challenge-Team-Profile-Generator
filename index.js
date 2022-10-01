// Role Profile Constructor Calls
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

// Node modules
const fs = require("fs");
const inquirer = require("inquirer");

// Manager Prompts
const promptManager = function() {
    console.log("Prompts for team manager info:")
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Who is your team manager?",
            validate: function(nameInput) {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log("Please enter the team manager's name!");
                    return false;
                }
            },
        },
        {
            type: "input",
            name: "id",
            message: "What is your team manager's ID?",
            validate: function(idInput) {
                if (isNaN(idInput)) {
                    console.log("Please enter your team manager's ID! (Must be a number)");
                    return false;
                }
                else if (!idInput) {
                    console.log("Please enter your team manager's ID! (Must be a number)");
                    return false;
                }
                else {
                    return true;
                }
            },
        },
        {
            type: "input",
            name: "email",
            message: "What is your team manager's email?",
            validate: function(email) {
                emailValid = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
                if (emailValid) {
                    return true
                }
                else {
                    console.log("Please enter a valid email!");
                    return false;
                }
            },
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Please enter your team manager's office #.",
            validate: function(officeNumberInput) {
                if (isNaN(officeNumberInput)) {
                    console.log("Please enter your team manager's office number! (Must be a number)");
                    return false;
                }
                else if (!officeNumberInput) {
                    console.log("Please enter your team manager's office number! (Must be a number)");
                    return false;
                }
                else {
                    return true;
                }
            },
        }
    ])
    .then(function(managerInfo) {
        const { name, id, email, officeNumber } = managerInfo;
        const manager = new Manager (name, id, email, officeNumber);

        console.log(manager);
    })
};

// Employee Prompts
const promptEmployee = function() {
    console.log("Prompts for employee info:")

    inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "Please choose the team member's role.",
            choices: ["Engineer", "Intern"],
        },
        {
            type: "input",
            name: "name",
            message: "What is the team member's name?",
            validate: function(nameInput) {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log("Please enter the team member's name!");
                    return false;
                }
            },
        },
        {
            type: "input",
            name: "id",
            message: "What is your team member's ID?",
            validate: function(idInput) {
                if (isNaN(idInput)) {
                    console.log("Please enter your team members's ID! (Must be a number)");
                    return false;
                }
                else if (!idInput) {
                    console.log("Please enter your team members's ID! (Must be a number)");
                    return false;
                }
                else {
                    return true;
                }
            },
        },
        {
            type: "input",
            name: "email",
            message: "What is your team member's email?",
            validate: function(email) {
                emailValid = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
                if (emailValid) {
                    return true
                }
                else {
                    console.log("Please enter a valid email!");
                    return false;
                }
            },
        },
        {
            type: "input",
            name: "github",
            message: "What is the team member's github username?",
            when: function(employeeInfo) { if (employeeInfo.role === "Engineer") { return true; } },
            validate: function(usernameInput) {
                if (usernameInput) {
                    return true;
                }
                else {
                    console.log("Please enter the team member's github username!");
                    return false;
                }
            },
        },
        {
            type: "input",
            name: "school",
            message: "What school does the intern currently attend?",
            when: function(employeeInfo) { if (employeeInfo.role === "Intern") { return true; } },
            validate: function(schoolName) {
                if (schoolName) {
                    return true;
                }
                else {
                    console.log("Please enter the intern's school!");
                    return false;
                }
            },
        },
        {
            type: "confirm",
            name: "confirmAddEmployee",
            message: "Would you like to add more team members?",
            deafault: false,
        },
    ])
    .then(function(employeeInfo) {
        const { name, id, email, role, github, school, confirmAddEmployee } = employeeInfo;
        
        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);

            console.log(employee);
        }
        else if (role === "Intern") {
            employee = new Intern (name, id, email, school);

            console.log(employee);
        }

        if (confirmAddEmployee) {
            return promptEmployee();
        }
        else {
            return;
        }
    })
};

// promptManager();
promptEmployee();