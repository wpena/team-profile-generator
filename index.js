const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const outputPath = './output/team.html';
const teamMembers = [];
const render = require("./src/page-template.js");

let managerAdded = false;

function promptManager() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter the team manager's name:"
        },
        {
            type: "input",
            name: "id",
            message: "Enter the team manager's employee ID:"
        },
        {
            type: "input",
            name: "email",
            message: "Enter the team manager's email address:"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Enter the team manager's office number:"
        }
    ]);
}

function promptEngineer() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter the engineer's name:"
        },
        {
            type: "input",
            name: "id",
            message: "Enter the engineer's employee ID:"
        },
        {
            type: "input",
            name: "email",
            message: "Enter the engineer's email address:"
        },
        {
            type: "input",
            name: "github",
            message: "Enter the engineer's GitHub username:"
        }
    ]);
}

function promptIntern() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter the intern's name:"
        },
        {
            type: "input",
            name: "id",
            message: "Enter the intern's employee ID:"
        },
        {
            type: "input",
            name: "email",
            message: "Enter the intern's email address:"
        },
        {
            type: "input",
            name: "school",
            message: "Enter the intern's school:"
        }
    ]);
}

function promptMenu() {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'option',
            message: 'Select an option:',
            choices: ['Add an engineer', 'Add an intern', 'Finish building the team']
        }
    ]);
}

function addEngineer() {
    return promptEngineer()
        .then(engineer => {
            const engineerObj = new Engineer(engineer.name, engineer.id, engineer.email, engineer.github);
            teamMembers.push(engineerObj);
            console.log('Engineer added successfully!');
        });
}

function addIntern() {
    return promptIntern()
        .then(intern => {
            const internObj = new Intern(intern.name, intern.id, intern.email, intern.school);
            teamMembers.push(internObj);
            console.log('Intern added successfully!');
        });
}

function buildTeam() {
    if (!managerAdded) {
        return promptManager()
            .then(manager => {
                const managerObj = new Manager(manager.name, manager.id, manager.email, manager.officeNumber);
                teamMembers.push(managerObj);
                managerAdded = true;
                return buildTeam();
            })
            .catch(err => console.log(err));
    }

    return promptMenu()
        .then(menu => {
            switch (menu.option) {
                case 'Add an engineer':
                    return addEngineer().then(buildTeam);
                case 'Add an intern':
                    return addIntern().then(buildTeam);
                case 'Finish building the team':
                    return renderAndSave();
                default:
                    console.log('Invalid option');
                    return buildTeam();
            }
        })
        .catch(err => console.log(err));
}

function renderAndSave() {
    const html = render(teamMembers);
    fs.writeFile(outputPath, html, err => {
        if (err) {
            console.error('Error writing to file:', err);
        } else {
            console.log('Team HTML file generated successfully:', outputPath);
        }
    });
}

// Start the application
buildTeam();