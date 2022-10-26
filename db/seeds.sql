-- Departments
INSERT INTO department (department)
VALUES ("Chief Officers"),
("Engineer Team"),
("Sales Team"),
("Legal Team");

-- Roles
INSERT INTO role (title, salary, department_id)
VALUES ("CEO", 300000, 1),
("CFO", 280000, 1),
("COO", 250000, 1),
("Project Lead", 200000, 2),
("Senior Engineer", 15000, 2),
("Head of Sales", 120000, 3),
("Sales Representative", 80000, 3),
("Legal Lead", 175000, 4);

-- Employees
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUES ("Harry", "Winks", null, 1),
("Aaron", "Banks", null, 2),
("Cara", "Becker", null, 3),
("Rohan", "Gupta", 1, 4),
("Allie", "Jacobs", 4, 5),
("Daniel", "Jones", 1, 6),
("Spencer", "Burford", 2, 7),
("Jimmy", "Garropolo", 4, 8);