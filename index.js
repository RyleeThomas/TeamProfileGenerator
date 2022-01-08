const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./dist/generateHTMLPage');

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const teamList = [];

promptEmployee = function(){
    inquirer
        .prompt([
            {
                type: 'text',
                name: 'name',
                message: 'What is the Employees name? (Required)',
                validate: nameInput => {
                    if (nameInput){
                        return true;
                    } else {
                        console.log('Please enter Employees Name');
                        return false;
                    }
                }
            },
            {
                type: 'text',
                name: 'id',
                message: 'What is the Employees ID? (Required)',
                validate: nameInput => {
                    if (nameInput){
                        return true;
                    } else {
                        console.log('Please enter Employees ID');
                        return false;
                    }
                }
            },
            {
                type: 'text',
                name: 'email',
                message: 'What is the Employees Email? (Required)',
                validate: nameInput => {
                    if (nameInput){
                        return true;
                    } else {
                        console.log('Please enter Employees Email');
                        return false;
                    }
                }
            },
            {
                type: 'list',
                name: 'position',
                message: 'What is the Employees position? (Required)',
                choices: ['Manager','Engineer','Intern','Other']

            }
        ])
        .then(({name,id,email,position}) => {
            if(position == 'Manager'){
                promptManager(name,id,email);
            }
            if(position == 'Engineer'){
                promptEngineer(name,id,email);
            }
            if(position == 'Intern'){
                promptIntern(name,id,email);
            }
            if(position == 'Other'){
                const employee = new Employee(name,id,email);
                console.log('Employee added!');
                teamList.push(employee);
                addAnotherEmployee();
            }
        })
}

promptManager = function(name,id,email){
    inquirer
        .prompt(
        {
            type: 'text',
            name: 'office',
            message: 'What is the Managers Office Number? (Required)',
            validate: nameInput => {
                if (nameInput){
                    return true;
                } else {
                    console.log('Please enter Manager Office Number');
                    return false;
                }
            }
        })
        .then(({office}) => {
            const manager = new Manager(name,id,email,office);
            console.log('Manager added!');
            teamList.push(manager);
            addAnotherEmployee();
        });
};

promptEngineer = function(name,id,email){
    inquirer
        .prompt(
        {
            type: 'text',
            name: 'github',
            message: 'What is the Engineers github username? (Required)',
            validate: nameInput => {
                if (nameInput){
                    return true;
                } else {
                    console.log('Please enter Engineers github username');
                    return false;
                }
            }
        })
        .then(({github}) => {
            const eng = new Engineer(name,id,email,github);
            console.log('Engineer added!');
            teamList.push(eng);
            addAnotherEmployee();
        });
};

promptIntern = function(name,id,email){
    inquirer
        .prompt(
        {
            type: 'text',
            name: 'school',
            message: 'What is the Interns School Name? (Required)',
            validate: nameInput => {
                if (nameInput){
                    return true;
                } else {
                    console.log('Please enter Interns School Name');
                    return false;
                }
            }
        })
        .then(({school}) => {
            const int = new Intern(name,id,email,school);
            console.log('Intern added!');
            teamList.push(int);
            addAnotherEmployee();
        });
};

addAnotherEmployee = function() {
    inquirer
        .prompt({
            type: 'confirm',
            message: 'Add another employee? ',
            name: 'addAnother',
        })
        .then(({addAnother}) => {
            if(addAnother){
                promptEmployee();
            }
            else{
                const pageHTML = generatePage(teamList);
                fs.writeFile('./dist/index.html', pageHTML, err => {
                    if(err) throw new Error(err);
                    console.log('Page Created!');
                })
            }
        })
}

promptEmployee();

