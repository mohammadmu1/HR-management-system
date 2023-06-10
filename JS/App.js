'use strict';
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }

let employeeArr=[] 

class employee{
    constructor(ID , FullName , Department , Level ){
        this.ID=ID;
        this.FullName=FullName;
        this.Department=Department;
        this.Level=Level;
        this.Salary=0;
        this.netSalary=0;
        employeeArr.push(this);
        
    }
    setNetSalary= function(){
        this.netSalary=this.Salary-this.Salary*0.075;      
    
}
    
    
} 



// prototype function to calculate random salary based on level
employee.prototype.setSalary= function(){
    if(this.Level=='Senior' || this.Level=='senior' || this.Level=='SENOR'){
        this.Salary=getRandomNumber(1500 , 2000);
    }
    else if(this.Level=='Mid-Senior' || this.Level=='mid-senior' || this.Level=='MID-SENOR'){
        this.Salary=getRandomNumber(1000,1500);
    }
    else {
        this.Salary=getRandomNumber(500,1000);
    }
}

// prototype function to render the employeename and salary and net salary to the main page
employee.prototype.renderEmoloyee=function() {
    var node = document.getElementById('info');
    var newNode = document.createElement('p');
    newNode.appendChild(document.createTextNode("Employee Name: "+this.FullName+" , "+"Employee Salary: "+this.Salary +" , "+"Employee Net Salary: "+this.netSalary ));
    node.appendChild(newNode);
    }

    // creating instances of Employee from class
let ghazi = new employee(1000, "Ghazi Samer", "Administration", "Senior");
let lana = new employee(1001, "Lana Ali", "Finance", "Senior");
let tamara = new employee(1002, "Tamara Ayoub", "Marketing", "Senior");
let safi = new  employee(1003, "Safi Walid", "Administration", "Mid-Senior");
let omar = new employee(1004, "Omar Zaid", "Development", "Senior");
let rana= new employee(1005, "Rana Saleh", "Development", "Junior");
let hadi = new employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior");

for(let i = 0 ; i < employeeArr.length ; i++) {
    employeeArr[i].setSalary();
    employeeArr[i].setNetSalary();
    employeeArr[i].renderEmoloyee();
}