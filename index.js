const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const mockData = {
    title: 'Some Title',
    description: "Here is a short description of this project. It's basically a bunch of bullshit that is going to be used to fill the description portion of the read me. Just as a side note, I think that this is an incredibly boring project and would rather something more interesting.",
    installation: 'Here are some steps / heres a second step / heres a third step / heres a fourth / fifth / last step of them all',
    usage: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah',
    confirmOpen: true,
    contribution: 'Please feel free to contribute by following the steps below. /step one /step two / step three / step 4',
    tests: 'fuck I hate this project its bullshit',
    license: 'Academic Free Licence v3.0',
    githubUsername: 'maplesyrupman',
    email: 'will_weiland@hotmail.ca'
  }

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
        validate: description => {
            if (description) return true;
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
            console.log(confirmOpen);
            return confirmOpen ? true : false;
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Testing instructions:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select a licence, or continue without selecting if no licence is required:',
        choices: ['No license', 'MIT', 'Academic Free Licence v3.0', 'GNU General Public Licence 3.0']
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'Github username (required):',
        validate: username => {
            if (username) return true;
            console.log('Please enter a valid Github username.');
            return false;
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email address:'
    }
];

// TODO: Create a function to write README file
function writeToFile(data) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./README.md', generateMarkdown(data), err => {
            if (err) return reject(err);

            resolve({
                ok: true,
                message: 'File created!'
            })
        })
    })
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions);
}

// Function call to initialize app
// init().then(response => console.log(response));

writeToFile(mockData)
    .then(success => console.log(success.message))
    .catch(err => console.log(err.message));
