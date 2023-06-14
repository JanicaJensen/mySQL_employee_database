/* Drops the database */

DROP DATABASE IF EXISTS employeesdb;
/*RE-creates the databasee */
CREATE DATABASE employeesdb;
/* Tells the app to use this database */
USE employeesdb;

/* Creates the table for DEPARTMENTS */
CREATE TABLE departments(
    /* ID is required and will auto increment when new are added */
    id INT NOT NULL AUTO_INCREMENT,
    /* Must be 100 cahracters or less and not null */
    deptName VARCHAR(100) NOT NULL,
    /* States to refer to the id property above as the primary key */
    PRIMARY KEY (id)
);


/* pretty much the same as above with an added coupld of columns */
    CREATE TABLE roles(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    salary  DECIMAL(10,2) NOT NULL,
    department_id INT NOT NULL,
    PRIMARY KEY (id)
    );


/*about the same as above but with more columns*/
CREATE TABLE employees(
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(45) NULL,
  last_name VARCHAR(45) NULL,
  role_id INT NULL,
  manager_id INT NULL,
  PRIMARY KEY (id)
);


