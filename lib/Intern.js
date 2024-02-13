// Import Employee class
const Employee = require("./Employee");

// Define Intern class and extends Employee
class Intern extends Employee {
    
    // Initialize name, id, email and school properties
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    // Method to get role of Intern
    getRole() {
        return "Intern";
    }

    // Method to get school of the Intern
    getSchool() {
        return this.school;
    }
}
module.exports = Intern;