// Import Employee class
const Employee = require("./Employee");

// Define Manager class and extends Employee
class Manager extends Employee {
    // Initialize name, id, email and officeNumber properties
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    // Method to get role of the manager
    getRole() {
        return "Manager";
    }

    // Method to get office number of the manager
    getOfficeNumber() {
        return this.officeNumber;
    }
}
module.exports = Manager;