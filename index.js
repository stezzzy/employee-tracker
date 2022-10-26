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