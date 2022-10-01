// Role Profile Constructor Calls
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

// Packages for application: Inquirer, File System, and generateHTML.js
const fs = require("fs");
const inquirer = require("inquirer");
const genHTML = require("./src/generateHTML.js");

// Array for team members
const teamArray = [];

// Manager Prompts
const promptManager = function() {
    console.log("Prompts for team manager info:");
    
    return inquirer.prompt([
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

        teamArray.push(manager);
        console.log(manager);
    })
};

// Employee Prompts
const promptEmployee = function() {
    console.log("Prompts for employee info:")

    return inquirer.prompt([
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

            teamArray.push(employee)
            console.log(employee);
        }
        else if (role === "Intern") {
            intern = new Intern (name, id, email, school);

            teamArray.push(intern)
            console.log(intern);
        }

        if (confirmAddEmployee) {
            return promptEmployee();
        }
        else {
            return teamArray;
        }
    })
};

// Function for generating index.html in the dist folder
const writeToFile = (fileContent) => {
    return new Promise((resolve, reject) => {
        fs.writeFile("./dist/index.html", fileContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve ({
                ok: true,
                message: "Team profile index.html has been generated. Please see the dist folder."
            })
        });
    });
};

promptManager()
    .then(promptEmployee)
    .then(function(teamArray) {
        return genHTML(teamArray);
    }) 
    .then(function(pageHtml) {
        return writeToFile("test");
    })
    .then(function(writeFileResponse) {
        console.log(writeFileResponse.message);
    })
    .catch(function(err) {
        console.log("Error generating index.html. File was not created.")
    });