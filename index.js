const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Project title required):',
        validate: projectTitle => {
            if (projectTitle) return true;
            console.log('Please enter the name of your project');
            return false;
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Project description (required):',
        validate: projectDescription => {
            if (projectDescription) return true;
            console.log('Please enter a description');
            return false;
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Delineate the installation instructions. \n Seperate steps with a "/"'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage information:'
    },
    {
        type: 'confirm',
        name: 'confirmOpen',
        message: 'Would you like to accept contributions?',
        default: false
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Contribution guidelines:',
        when: ({ confirmOpen }) => {
            return confirmOpen ? true : false;
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions);
}

// Function call to initialize app
init().then(response => console.log(response));

