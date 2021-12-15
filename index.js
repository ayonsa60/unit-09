// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path');
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    { type: 'input',
    name: 'username',
    message: 'What is your GitHub username?'
},
    { type: 'input',
    name: 'email',
        message: 'What is your email address?'
},
    { type: 'input',
        name: 'title',
        message: 'What is your project title?'
},
    { type: 'input',
        name: 'purpose',
        message: "Why did you build this project?"
},
    { type: 'input',
        name: 'license',
        message: "What kind of licence should your project have?"
},
    { type: 'input',
        name: 'dependencies',
        message: "What command should be run to install dependencies?"
},
    { type: 'input',
        name: 'test',
        message: "What command should be run to run test?"
},
    { type: 'input',
        name: 'hints',
        message: "What does your user need to know about using your repo?"
},
    { type: 'input',
        name: 'contribution',
        message: "What does your user need to know about contributing to your repo?"
}];


    function fileWrite(filename, data){
        return fs.writeFileSync(path.join(process.cwd(), filename), data);
        error ? console.error(error) : console.log("Complete!");
    };


// // TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
.then((answers) => {
    console.log(answers);
    fileWrite('README.md', generateMarkdown({...answers}))
})}

// // Function call to initialize app
init();