const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const outputPath = './output/team.html';
const teamMembers = [];

const render = require("./src/page-template.js");

function promptManager() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter the team manager's name..."
        },
        {
            type: "input",
            name: "id",
            message: "Enter the team manager's employee ID..."
        },
        {
            type: "input",
            name: "email",
            message: "Enter the team manager's email address..."
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Enter the team manager's office number..."
        }
    ]);
}

function promptEngineer() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter the engineer's name..."
        },
        {
            type: "input",
            name: "id",
            message: "Enter the engineer's employee ID..."
        },
        {
            type: "input",
            name: "email",
            message: "Enter the engineer's email address..."
        },
        {
            type: "input",
            name: "github",
            message: "Enter the engineer's GitHub username..."
        }
    ]);
}

function promptIntern() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter the intern's name..."
        },
        {
            type: "input",
            name: "id",
            message: "Enter the intern's employee ID..."
        },
        {
            type: "input",
            name: "email",
            message: "Enter the intern's email address..."
        },
        {
            type: "input",
            name: "school",
            message: "Enter the intern's school..."
        }
    ]);
}
