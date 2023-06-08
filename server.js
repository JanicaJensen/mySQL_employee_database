const mysql = require('mysql');
const inquirer = require('inquirer');
const dotenv = require('dotenv').config();
require('console.table');


const connection = mysql.createConnection(
    {
        host: 'localhost',

        port: 3306,

        user: 'root',

        password: 'hermione',
        database: 'employeesdb'


    }
);

connection.connect(function (err) {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId);

    // I saw someone else do this and I thought it was cool.
    console.log(`
#                    ###           #######                             ### 
#       ###### ##### ###  ####        #    #####    ##    ####  #    # ### 
#       #        #    #  #            #    #    #  #  #  #    # #   #  ### 
#       #####    #   #    ####        #    #    # #    # #      ####    #  
#       #        #            #       #    #####  ###### #      #  #       
#       #        #       #    #       #    #   #  #    # #    # #   #  ### 
####### ######   #        ####        #    #    # #    #  ####  #    # ### 
                                                                                                                                                                                
                                                                                                                            
    `);

    prompt();

});


function prompt() {
    inquirer
        .prompt({
            type: "list",
            name: "task",
            message: "Would you like to do?",
            choices: [
                "Show employees",
                "Show employees by department",
                "Add an employee",
                "Remove an employee",
                "Update employee role",
                "Add role",
                "End"]
        })
};
.then(function ({ task }) {
    switch (task) {
        case "Show employees":
            showEmployees();
            break;

        case "Show employees by department":
            showByDepartment();
            break;

        case "Add an employee":
            addEmployee();
            break;

        case "Remove an employee":
            removeEmployee();
            break;

        case "Update employee role":
            updateEmployeeRole();
            break;

        case "End":
            connection.end();
            break;
    }
});




showEmployees();
showByDepartment();
addEmployee();
removeEmployee();
updateEmployeeRole();