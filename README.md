# Team Profile Generator
The application takes in information about employees on a software engineering team, then displays a basic summary for each person, so that a user has quick access to their emails and GitHub profiles.

## Installation
To run the application locally, follow the following steps:  
- Make sure to have node installed on your machine.
- In the directory that has index.js, type [npm init -y] in the terminal to create a package.json file
- Type [npm i inquirer@8.2.4] (The version is not required, however this is the version that was used for this program) to install the node_modules
- Type [npm i jest@28.1.3] to install Jest to run the test
- Run the test with [npm test (test folder e.g __ tests __)]

## Usage
- Run the program by typing [node index.js] in the terminal
- You will be welcomed with a prompt that asks you to fill in Manager information
- You then have the options to add Engineers and Interns
- Once you're finished, select 'Finish building team' and new html file called 'team.html' will be generated in an output folder
- Open the generated HTML file in a browser to view the rendered result

## Result
**Example of Rendered Result:**  



## Credits
https://stackoverflow.com/questions/58742344/how-to-create-an-html-file-using-fs-writefile  
https://www.reddit.com/r/node/comments/kn7q2s/question_inquirer_loop_with_asyncawait_scripts/

## License
### Please refer to the LICENSE in the repo.