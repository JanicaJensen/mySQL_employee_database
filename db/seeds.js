INSERT INTO department(name)
VALUES("Foreign Language");
INSERT INTO department(name)
VALUES("English");
INSERT INTO department(name)
VALUES("Math");
INSERT INTO department(name)
VALUES("Science");

INSERT INTO role(title, salary, department_id)
VALUES("Teacher", 56000, 1);
INSERT INTO role(title, salary, department_id)
VALUES("Team Lead", 60000, 1);
INSERT INTO role(title, salary, department_id)
VALUES("Admin", 70000, 2);
INSERT INTO role(title, salary, department_id)
VALUES("Staff", 40000, 3);
INSERT INTO role(title, salary, department_id)
VALUES("Aids", 30000, 4);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES("Becca", "Wassleman", 1, 3);
INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES("Chandra", "Loughlin", 2, 1);
INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES("Chanderie", "Palin", 3, null);
INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES("Persephone", "Reppling", 4, 3);
INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES("Rushton", "Nuñez", 5, null);
INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES("Winnie", "Poplar", 2, null);
INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES("Margaret", "Quailman", 4, 7);
INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES("Penelope", "Pig", 1, 2);