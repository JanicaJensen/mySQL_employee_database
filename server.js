const mysql = require('mysql');
const inquirer = require('inquirer');
const db = require('./db/connection');




db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    console.log(`
    ___      _______  _______  __   _______    _______  ______    _______  _______  ___   _  __  
    |   |    |       ||       ||  | |       |  |       ||    _ |  |   _   ||       ||   | | ||  | 
    |   |    |    ___||_     _||__| |  _____|  |_     _||   | ||  |  |_|  ||       ||   |_| ||  | 
    |   |    |   |___   |   |       | |_____     |   |  |   |_||_ |       ||       ||      _||  | 
    |   |___ |    ___|  |   |       |_____  |    |   |  |    __  ||       ||      _||     |_ |__| 
    |       ||   |___   |   |        _____| |    |   |  |   |  | ||   _   ||     |_ |    _  | __  
    |_______||_______|  |___|       |_______|    |___|  |___|  |_||__| |__||_______||___| |_||__| 
    `)
    employee_tracker();
});

var employee_tracker = function () {
    inquirer.prompt([{
        type: 'list',
        name: 'prompt',
        message: 'What would you like to do?',
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update employee roles', 'Log Out']
    }])
    .then((answers) => {
        if (answers.prompt === 'View all departments'){
            db.query(`SELECT* FROM departments`,(err, result) => {
                if(err) throw err;
                console.log('Viewing all departments');
                console.table(result);
                employee_tracker();
            })
        } else if (answers.prompt === 'View all roles') {
            db.query(`SELECT * FROM roles`,(err, result) => {
                if (err) throw err;
                console.log('Viewing all roles');
                console.table(result);
                employee_tracker();
            });
        } else if (answers.prompt === 'View all employees') {
            db.query(`SELECT * FROM employees`, (err, result) => {
            if (err) throw err;
            console.log('Viewing all employees');
            console.table(result);
            employee_tracker();
            });
        } else if (answers.prompt === 'Add a department'){
            inquirer.prompt([{
                type: 'input',
                name: 'department',
                message: 'Enter the department name:',
                validate: departmentInput => {
                    if (departmentInput) {
                        return true;
                    } else {
                        return false;
                    }
                }
            }]) .then ((answers)=> {
                db.query(`INSERT INTO departments (deptName) VALUES (?)`, [answers.department], (err, result)=> {
                    if (err) throw err;
                    console.log(`Added ${answers.department} to the database.`)
                    employee_tracker();
                });
          });
        } else if (answers.prompt === 'Add a role'){
            db.query(`SELECT * FROM departments`, (err,result) => {
                if (err) throw err;

                inquirer.prompt ([{
                    type: 'input',
                    name: 'role',
                    message: 'Enter the role name:',
                    validate: roleInput => {
                        if (roleInput) {
                            return true;
                        } else {
                            console.log('Please enter a role name.');
                            return false;
                        }
                    }
                },
            {
                type: 'input',
                name: 'salary',
                message: 'Enter the salary for this role:',
                validate: salaryInput => {
                    if (salaryInput){
                        return true;
                    } else {
                        console.log('Please enter a salary.');
                        return false;
                    }
                }
            },
            {
                type: 'list',
                name: 'department',
                message: 'Select the department for this role:',
                choices: () => {
                    var array = [];
                    for (var i = 0;i <result.length; i++){
                        array.push(result[i].name)
                    }
                    return array;
                }
            }
            ]).then ((answers) => {
                for (var i=0; i < result.length; i++){ // should this be answers.department? 
                    if (result[i].name === answers.department){
                        var department_id = result[i].id;
                    }
        
                }

                db.query(`INSERT INTO role (title, salary,department_id) VALUES (?, ?, ?)`, [answers.role, answers.salary, department.id, (err, result) => {
                    if (err) throw err;
                    console.log(`Added ${answers.role} to the database.`)
                    employee_tracker();
                }])
            })
            });
        } else if (answers.prompt === 'Add an employee'){
            db.query(`SELECT * FROM employees, roles`, (err,result) => {
                if (err) throw err;

                inquirer.prompt([{
                    type: 'input',
                    name: 'first_name',
                    message: 'Enter the employee first name:',
                    validate: firstNameInput => {
                        if (firstNameInput) {
                            return true;
                        } else {
                            console.log('Add a first name.');
                            return false;
                        }
                    }
                },
            {
                type: 'input',
                name: 'last_name',
                message: 'Enter the employee last name:',
                validate: lastNameInput => {
                    if (lastNameInput){
                        return true;
                    } else {
                        console.log('Add a last name.');
                        return false;
                    }
                }
            },
            {
                type: 'list',
                name: 'role',
                message: 'Select the role for this employee:',
                choices: () => {
                    var array = [];
                    for (var i = 0; i < result.length; i++){
                        array.push(result[i].title)
                    }
                    var newArray = [...new Set(array)];
                    return newArray
                }
            },
            {
                type: 'input',
                name: 'manager',
                message: 'Enter the manager for this employee:',
                validate: managerInput => {
                    if (managerInput){
                        return true;
                    } else {
                        console.log('Add a manager.');
                        return false;
                    }
                }
            }
            ]).then ((answers) => {
                for (var i = 0; i < result.length; i++){
                    if (result[i].title === answers.role){
                        var role_id = result[i].id; // online they have var role = result[i] so check that
                    }
                }
                db.query(`INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`, [answers.first_name, answers.last_name, role_id, answers.manager], (err, result) => {
                    if (err) throw err;
                    console.log(`Added ${answers.first_name} ${answers.last_name} to the database.`)
                    employee_tracker();
                });
            })
            });
        } else if (answers.prompt === 'Update employee roles'){
            db.query(`SELECT * FROM employees, roles`, (err, result) => {
                if (err) throw err;

                inquirer.prompt([{
                    type: 'list',
                    name: 'employee',
                    message: 'Select the employee to update:',
                    choices: () => {
                        var array = [];
                        for (var i = 0; i < result.length; i++){
                            array.push(result[i].first_name)
                        }
                       var employeeArray = [...new Set(array)];
                       return employeeArray;
                    }
                },
            {
                type: 'list',
                name: 'role',
                message: 'Select the role for this employee:',
                choices: () => {
                    var array = [];
                    for (var i = 0; i < result.length; i++){
                        array.push(result[i].title)
                    }
                    var newArray = [...new Set(array)];
                    return newArray;
                }
            }
            ]).then ((answers) => {
                for (var i = 0; i < result.length; i++){
                    if (result[i].first_name === answers.employee){
                        var employee_id = result[i].id;
                    }
                    if (result[i].title === answers.role){
                        var role_id = result[i].id;
                    }
                }
                db.query(`UPDATE employees SET role_id = ? WHERE id = ?`, [role_id, employee_id], (err, result) => {
                    if (err) throw err;
                    console.log(`Updated ${answers.employee} role to ${answers.role}.`)
                    employee_tracker();
                });
            })
            });
        }  else if (answers.prompt === 'Log Out') {
            db.end();
            console.log("All done!");
}})}
