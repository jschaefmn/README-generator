// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const genMd = require('./utils/generateMarkdown');

// set fs.writefile function to use promises
const writeFileSync = util.promisify(fs.writeFile);


// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'username'
  },
  {
    type: 'input',
    message: 'What is your email address?',
    name: 'email'
  },
  {
    type: 'input',
    message: 'What is the name of your project?',
    name: 'title'
  },
  {
    type: 'input',
    message: 'write a short description of your project',
    name: 'description'
  },
  {
    type: 'list',
    message: 'What license should your project have?',
    name: 'license',
    choices: [
      'MIT',
      'Unlicense',
      'Apache 2.0',
      'BSD 2-Clause',
      'BSD 3-Clause',
      'GPLv3',
    ]
  },
  {
    type: 'input',
    message: 'What command should be run to install the dependencies?',
    name: 'installation',
    default: 'npm i'
  },
  {
    type: 'input',
    message: 'What command should be used to run tests?',
    name: 'tests',
    default: 'npm run test'
  },
  {
    type: 'input',
    message: 'What does the user need to know about using your repository?',
    name: 'usage'
  },
  {
    type: 'input',
    message: 'What does the user need to know about contributing to the repository?',
    name: 'contribute'
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
