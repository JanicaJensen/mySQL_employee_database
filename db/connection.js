const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'hermione',
    database: 'employeesdb'
});

module.exports = db;