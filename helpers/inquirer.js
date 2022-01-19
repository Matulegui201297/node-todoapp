const inquirer = require ('inquirer');
const Choices = require('inquirer/lib/objects/choices');
require('colors');

const menu = [
    {
        type: 'list',
        name: 'option',
        message: 'What do you do?',
        choices: [
            {
                value: 1,
                name: `${'1-'.blue} Create Task` 
            },
            {
                value: 2,
                name: `${'2-'.green} Get Task` 
            },
            {
                value: 'X',
                name: `${'X-'.yellow} Exit` 
            },
        ]
    }
]

const inquirerMenu = async () => {
    console.log('===================='.america);
    console.log('Select an option'.white);
    console.log('===================='.america);

    const { option } = await inquirer.prompt(menu);
    return option;

}

const inquirerInput = async (message) => {
    const question = [
        {
            type: 'input', 
            name: 'description',
            message,
        }
    ];

    const { description } = await inquirer.prompt(question);
    return description;
}

module.exports = {
    inquirerMenu,
    inquirerInput,
}