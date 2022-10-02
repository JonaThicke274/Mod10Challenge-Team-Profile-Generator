// Enables Engineer to extend Employee as it's parent class
const Employee = require("./Employee.js");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        // Calls parent constructor
        super(name, id, email);

        this.github = github;
    }      

    getGithub() {
        return this.github;
    }

    // Overrides Employee.getRole() to return "Engineer"
    getRole() {
        return "Engineer"
    }
}

module.exports = Engineer;