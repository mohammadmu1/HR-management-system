'use strict'
let emp=[];

// save objects to Locala Storage
function saveDataToLocalaStorage(){

  let stringData=JSON.stringify(emp);
  localStorage.setItem('employeesData' , stringData);
  localStorage.setItem('num' , num.toString());
  }
  function renderAll(){
    let length=emp.length;
    for(let i=0;i<length;i++){
      emp[i].renderEmployee();
    }
  }
  // retrive objects from Locala Storage
  function getDataFromLocalaStorageToRender(){
    let stringData=localStorage.getItem('employeesData');
    let arrObj=JSON.parse(stringData);
    
    if(arrObj != null){
    for(let i=0 ; i<arrObj.length;i++){
    //(EmployeeID, FullName, Department, Level, ImageURL,Salary)
    new employee(arrObj[i].EmployeeID , arrObj[i].FullName , arrObj[i].Department,arrObj[i].Level,
      arrObj[i].ImageURL,arrObj[i].Salary);
      emp[i].setNetSalary();
      num=Number(localStorage.getItem('num'));
    }
    renderAll();
  }
    
  }
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
  }
class employee{
  constructor(EmployeeID, FullName, Department, Level, ImageURL,Salary) {
  this.EmployeeID = EmployeeID;
  this.FullName = FullName;
  this.Department = Department;
  this.Level = Level;
  this.ImageURL = ImageURL;
  this.Salary = Salary;
  this.netSalary = 0;
  emp.push(this)
}


setNetSalary() {
  this.netSalary=Math.round(( this.Salary - this.Salary * 0.075) * 100) / 100;
}
};

//generate salary depend on experince level
employee.prototype.randomSalary = function() {
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
// ID generator
let num = 0;
function idGenerator(num) {
  let str = num.toString();
  let string = "0000";
  let id = string.substring(0, string.length - str.length) + str;
  return id;
}

//chose the form to set event on it
const myForm = document.getElementById("myForm");
//start of event 
myForm.addEventListener("submit", (event)=> {
  event.preventDefault();
  
  let fullname = document.getElementById('Name').value;
  let department =document.getElementById("Department").value;
  let level = document.getElementById("Level").value;
  num++;
  let registeredEmployee = new employee(idGenerator(num), fullname, department, level);
  registeredEmployee.randomSalary();
  registeredEmployee.setNetSalary();
  saveDataToLocalaStorage();
  registeredEmployee.renderEmployee();
  });
  

//render employee data that taken from user in html page 
employee.prototype.renderEmployee=function(){
let empData = document.getElementById("employeeData");
let img = document.createElement("img");
img.src = "assets/emp.png";
img.width = 85;
let empName = document.createElement("p");
empName.textContent = this.FullName;
let departmentLevel = document.createElement("p");
departmentLevel.textContent = "Department: " + this.Department + " - Level: " + this.Level;
let empId = document.createElement("p");
empId.textContent = `ID : ${this.EmployeeID}`;
let empSalary = document.createElement("p");
empSalary.textContent = `the net salary is : ${this.netSalary}`;
empData.appendChild(img);
empData.appendChild(empName);
empData.appendChild(departmentLevel);
empData.appendChild(empId);
empData.appendChild(empSalary);
}


getDataFromLocalaStorageToRender();


let cBtn=document.getElementById('clearButton');

cBtn.addEventListener("click",(event)=>{
  localStorage.clear();
  location.reload();
})


