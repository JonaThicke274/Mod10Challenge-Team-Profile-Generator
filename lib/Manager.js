// Enables Manager to extend Employee as it's parent class
const Employee = require("./Employee.js")

// Manager class constructor
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // Call parent constructor
        super(name, id, email);

        this.officeNumber = officeNumber;
    }

    // Overrides Employee.getRole() so that it returns "Manager"
    getRole() {
        return "Manager"
    }
}

module.exports = Manager;