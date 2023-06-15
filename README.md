# MYSQL Employee Database 
A minimalistic terminal-run program to track employees, done as an assignment for class. 

## Description

This is an app that runs in the terminal using Node.js, it allows the user to view 3 separate tables with employee information.The employee information is created, stored, and updated using mySQL. The user can update the database by adding employees and updating their roles, adding new departments to sort the employees, etc. 

## Table of Contents

1. [Team](#team)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Tests](#tests)
5. [Bugs](#bugs)
6. [Questions](#questions)
7. [Contribution Guidelines](#contribution-guidelines)
8. [License](#license)

## Team

---

The app was created by myself, Janica Jackson. Though there are many just like it out there.

_Other tools utilized:_

Node.js: https://nodejs.org/en

npm Inquirer.js: https://www.npmjs.com/package/inquirer

mySQL: https://www.mysql.com/

## Installation

---

To run this program, one should have Node.js version 16 installed as well as node package manager (npm) Inquirer, as the app does consider it "required". Once assured that Node.js is installed, the user will want to run the common commands that are required to run a node application in the "npm i" command to initiate the node dependencies. This will automatically install inquirer and mySQL2. At that point, the user will want to seed the mySQL databases by navigating to the db folder, using command "mysql -u root -p", typing in their own mySQL password, typing in "source schema.sql" and then within the mySQL shell, also run "source seeds.sql" and the seeds should populate the database at which point the user can run "exit". At that point, the user should be able to navigate back out to the main filesystem and then run "node server.js" to start the program. 

## Usage

---
Once the installation instructions have been followed, the user can use the arrow keys to navigate the options avilable and view the various tables. The user can also easily update or add information by answering simple questions presented on-screen. When the user is done, they may choose "Log out" and the program will terminate, having saved any changes. 



video that demonstrates full usage: https://drive.google.com/file/d/1TKYYX7nuxBMW9wSAQIBPyob4AKEX-xMl/view?usp=drive_link

## Tests

---

There are no tests for this app. 


## Bugs

---

There is an issue with updating 'role' by itself, I am working on it.

## Questions

---

Please refer any questions to: janicajackson@gmail.com

**GitHub profile:** https://github.com/janicajensen

## Contribution Guidelines

---

If anyone wishes to contribute to this project, they may find the GitHub repository at https://github.com/JanicaJensen/mySQL_employee_database and they are welcome to create a fork.

## License

---

This project is covered under the MIT license.
More info can be found by clicking the badge above the description.


