const mysql = require("mysql2");
const inquirer = require("inquirer");
require("console.table");

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "password",
    database: "employee_tracker_db",
  },
  console.log(`Connected to the employee_tracker_db database.`)
);

db.connect((err) => {
    if (err) throw err;
  });
  function init(){
    inquirer.prompt([
      {
          type: "list",
          message: "What would you like to do?", 
          choices: ["View All Employees", "Add Employees", "Update Employee Role", "View All Roles", "Add Role", "View All Departments", "Add Department", "Quit"],
          name: "choices"
      },
    ]).then(welcome => {
      if(welcome.choices === "View All Employees"){
          viewAllEmployees()
      } else if (welcome.choices === "Add Employees"){
          addEmployees()
      } else if (welcome.choices === "Update Employee Role"){
          updateEmployeeRole()
      } else if (welcome.choices === "View All Roles"){
          viewAllRoles()
      } else if (welcome.choices === "Add Role"){
          addRole()
      } else if (welcome.choices === "View All Departments"){
          viewAllDepartments()
      } else if(welcome.choices === "Add Department"){
          addDepartment()
      } else {
          process.exit()
      }
  });
  };

  init()

function viewAllDepartments(){
    db.query(`SELECT * from department`, (err, results) => {
        console.table(results)
        init()
    });
};

function viewAllEmployees(){
    db.query(`SELECT * from employee`, (err, results) => {
        console.table(results)
        init()
    });
};

function viewAllRoles(){
    db.query(`SELECT * from role`, (err, results) => {
        console.table(results)
        init()
    });
};

function addEmployees(){
    db.query(`SELECT * from role`, (err, results) => {
        console.table(results)
    inquirer.prompt([
        {
            type: "input",
            message: "What is the employee's first name?", 
            name: "first_name"
        },
        {
            type: "input",
            message: "What is the employee's last name?", 
            name: "last_name"
        },
        {
            type: "list",
            message: "Who is the employee's manager id?", 
            name: "manager_id",
            choices: [1, 2, "null", 4]
        },
        {
            type: "list",
            message: "What is the employee's role id?", 
            name: "role_id",
            choices: [1, 2, 3, 4, 5, 6, 7, 8, 9]
        },

    ]).then(function(answers){
        console.log(answers);
        
        db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("${answers.first_name}", "${answers.last_name}", ${answers.role_id}, ${answers.manager_id})`,
        function(error) {
            if (error) throw error;
            console.log("Added Employee")
            init()
        })
    })
})
}

function addDepartment(){
    inquirer.prompt({
        type: "input",
        message: "What is the departments name?", 
        name: "department"
    }).then(hotdogs => {
        db.query(`INSERT INTO department (department) VALUES ("${hotdogs.department}")`,
        function(error) {
            if (error) throw error;
            console.log("Added hotdog")
            init()
        })
    })

}

function addRole(){
    db.query(`SELECT * from department`, (err, results) => {
        console.table(results)
    inquirer.prompt([
        {
            type: "input",
            message: "What is the role's title?", 
            name: "title"
        },
        {
            type: "input",
            message: "What is the salary?", 
            name: "salary"
        },
        {
            type: "list",
            message: "Who is the department id?", 
            name: "department_id",
            choices: [1, 2, 3, 4, 5]
        },
    ]).then(function(answers){
        console.log(answers);
        
        db.query(`INSERT INTO role (title, salary, department_id) VALUES ("${answers.title}", "${answers.salary}", ${answers.department_id})`,
        function(error) {
            if (error) throw error;
            console.log("Added Role")
            init()
        })
    })
})
}