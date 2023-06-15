const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'YOUR PASSWORD HERE',
    database: 'employeesdb'
});

module.exports = db;