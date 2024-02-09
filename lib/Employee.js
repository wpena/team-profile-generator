// Define Employee class
class Employee {
    // Constructor to initialize name, id, and email properties
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // Method to get employee's name
    getName() {
        // Return the name property
        return this.name;
    }

    // Method to get employee's ID
    getId() {
        return this.id;
    }

    // Method to get employee's email
    getEmail() {
        return this.email;
    }

    // Method to get employee's role
    getRole() {
        // Returns "Employee for this class"
        return "Employee";
    }
}
module.exports = Employee;