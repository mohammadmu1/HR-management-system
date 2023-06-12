'use strict';

let employeeArr = []; // Creating an array to store employee instances

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }
class Employee{
    constructor(EmployeeID, FullName, Department, Level, ImageURL) {
    this.EmployeeID = EmployeeID;
    this.FullName = FullName;
    this.Department = Department;
    this.Level = Level;
    this.ImageURL = ImageURL;
    this.Salary = 0;
    employeeArr.push(this);
    this.netSalary = function() {
    this.Salary = this.Salary - this.Salary * 0.075;
  }
}
};


Employee.prototype.randomSalary = function() {
  if (this.Level === "Junior") {
    this.Salary = getRandomNumber(500 , 1000);
  }
  if (this.Level === "Mid-Senior") {
    this.Salary = getRandomNumber(1000,1500 );
  }
  if (this.Level === "Senior") {
    this.Salary = getRandomNumber(1500 , 2000);
  }
};


Employee.prototype.renderEmployee = function() {
  let empData = document.getElementById("employeeData");
  let img = document.createElement("img");
  img.src = "assets/emp.png";
  img.width = 85;
  let empName = document.createElement("p");
  empName.textContent = this.FullName;
  let departmentLevel = document.createElement("p");
  departmentLevel.textContent = "Department: " + this.Department + " - Level: " + this.Level;
  let empId = document.createElement("p");
  empId.textContent = this.EmployeeID;
  empData.appendChild(img);
  empData.appendChild(empName);
  empData.appendChild(departmentLevel);
  empData.appendChild(empId);
};


let num = 0;
function idGenerator(num) {
  let str = num.toString();
  let string = "0000";
  let id = string.substring(0, string.length - str.length) + str;
  return id;
}


const myForm = document.getElementById("myForm");


myForm.addEventListener("submit", submitHandler);

function submitHandler(event) {
  event.preventDefault();
  console.log(event);
  let fullname = event.target.Name.value;
  let department = event.target.Department.value;
  let level = event.target.Level.value;
  num++;
  let registeredEmployee = new Employee(idGenerator(num), fullname, department, level);
  registeredEmployee.randomSalary();
  registeredEmployee.netSalary();
  registeredEmployee.renderEmployee();
}
