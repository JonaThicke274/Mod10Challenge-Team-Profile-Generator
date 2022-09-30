// Enables Engineer to extend Employee as it's parent class
const Employee = require("./Employee.js");

class Intern extends Employee {
    constructor(name, id, email, school){
        // Calls parent constructor
        super(name, id, email);

        this.school = school;
    }

    getSchool() {
        return this.school;
    }
    
    // Overrides Employee.getRole() to return "Intern"
    getRole() {
        return "Intern";
    }
}

module.exports = Intern;