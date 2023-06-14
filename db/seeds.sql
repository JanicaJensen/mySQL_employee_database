USE employeesdb;

INSERT INTO departments (deptName) VALUES 
('Faculty'),
('Staff'),
('Admin'),
('Paraeducator');

INSERT INTO roles(title, salary, department_id) VALUES
  ('Teacher', 50000, 1),
  ('Team Lead', 55000, 2),
  ('Admin', 80000, 3),
  ('Staff', 50000, 4);

INSERT INTO employees(first_name, last_name, role_id, manager_id) VALUES
  ('William', 'Tovar', 1, 2),
  ('Jillian', 'Holmieres', 1, 3),
  ('Sofia', 'Quenard', 2, 3),
  ('Luis', 'Gil', 3, 3);
