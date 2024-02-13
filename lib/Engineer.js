// Import Employee class
const Employee = require("./Employee");

// Define Enginner class and extends Employee
class Engineer extends Employee {
    // Initialize name, id, email and github properties
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    // Get role of the Engineer
    getRole() {
        return 'Engineer';
    }

    // Get github username of the Engineer
    getGithub() {
        return this.github;
    }
}
module.exports = Engineer;