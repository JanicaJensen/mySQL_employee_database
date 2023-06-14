const mysql = require('mysql');
const inquirer = require('inquirer');
const dotenv = require('dotenv').config();
const consoleTable = require("console.table");


const connection = mysql.createConnection(
    {
        host: 'localhost',

        port: 3306,

        user: 'root',

        password: 'hermione',
        database: 'employeesdb'


    }
);

// connection.connect(function (err) {
//     if (err) throw err;
//     console.log('connected as id ' + connection.threadId);

//     // I saw someone else do this and I thought it was cool.
//     console.log(`
// #                    ###           #######                             ### 
// #       ###### ##### ###  ####        #    #####    ##    ####  #    # ### 
// #       #        #    #  #            #    #    #  #  #  #    # #   #  ### 
// #       #####    #   #    ####        #    #    # #    # #      ####    #  
// #       #        #            #       #    #####  ###### #      #  #       
// #       #        #       #    #       #    #   #  #    # #    # #   #  ### 
// ####### ######   #        ####        #    #    # #    #  ####  #    # ### 
                                                                                                                                                                                
                                                                                                                            
//     `);

//     prompt();

// });


// function prompt() {
//     inquirer
//         .prompt({
//             type: "list",
//             name: "task",
//             message: "Would you like to do?",
//             choices: [
//                 "Show employees",
//                 "Show employees by department",
//                 "Add an employee",
//                 "Remove an employee",
//                 "Update employee role",
//                 "Add role",
//                 "End"]
//         })
//         .then(function ({ task }) {
//             switch (task) {
//                 case "Show employees":
//                     showEmployees();
//                     break;

//                 case "Show employees by department":
//                     showByDepartment();
//                     break;

//                 case "Add an employee":
//                     addEmployee();
//                     break;

//                 case "Remove an employee":
//                     removeEmployee();
//                     break;

//                 case "Update employee role":
//                     updateEmployeeRole();
//                     break;

//                 case "End":
//                     connection.end();
//                     break;
//             }
//         });
// };









// function showEmployees() {
//     console.log('Showing employees\n');
//     connection.query('SELECT * FROM employee', function (err, res) {
//         if (err) throw err;
//         console.table(res);
//         prompt();
//     });
// }


// function showByDepartment() {
//     console.log('Showing employees by department\n');
//     connection.query('SELECT * FROM department', function (err, res) {
//         if (err) throw err;
//         console.table(res);
//         prompt();
//     });
// }

// function addEmployee() {
//     console.log('Adding employee\n');
//     var query =
//         `
//     SELECT r.id, r.title, r.salary FROM role r
//     `

//     connection.query(query, function (err, res) {
//         if (err) throw err;

//         const roleChoices = res.map(({ id, title, salary }) => ({
//             value: id, title: `${title}`, salary: `${salary}`
//         }));

//         console.table(res);
//         console.log('RoleToInsert!\n');

//         promptInsert(roleChoices);
//     });
// }

// function promptInsert(roleChoices) {

//     inquirer
//         .prompt(
//             [
//                 {
//                     type: 'input',
//                     name: 'first_name',
//                     message: 'What is the employees first name?',
//                 },
//                 {
//                     type: 'input',
//                     name: 'last_name',
//                     message: 'What is the employees last name?',
//                 },
//                 {
//                     type: 'list',
//                     name: 'role_id',
//                     message: 'What is the employees role?',
//                     choices: roleChoices
//                 },

//             ]
//         )
//         .then(function (answer) {
//             console.log(answer);

//             var query = `INSERT INTO employee SET ?`

//             connection.query(query, {
//                 first_name: answer.first_name,
//                 last_name: answer.last_name,
//                 role_id: answer.role_id,
//                 manager_id: answer.manager_id,
//             },

//                 function (err, res) {
//                     if (err) throw err;

//                     console.table(res);
//                     console.log(res.insertedRows + 'Inserted successfully!\n');

//                     prompt();
//                 });
//         });
// }


// connection.end();