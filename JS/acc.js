'use strict';
let adminstrationEmplyees=[];
let marketingEmplyees=[];
let developmentEmplyees=[];
let financeEmplyees=[];
let employeesNumber=0;
let totlaSalary=0;
class employee{

  constructor(EmployeeID, FullName, Department, Level, ImageURL,Salary) {
  this.EmployeeID = EmployeeID;
  this.FullName = FullName;
  this.Department = Department;
  this.Level = Level;
  this.ImageURL = ImageURL;
  this.Salary = Salary;
  this.netSalary = Math.round(( this.Salary - this.Salary * 0.075) * 100) / 100;;
}

}

function getDataFromLocalaStorageToRender(){
  let stringData=localStorage.getItem('employeesData');
  let arrObj=JSON.parse(stringData);
  if(arrObj != null){
    for(let i=0 ; i<arrObj.length;i++){
    //(EmployeeID, FullName, Department, Level, ImageURL,Salary)
    let emp=new employee(arrObj[i].EmployeeID , arrObj[i].FullName , arrObj[i].Department,arrObj[i].Level,
      arrObj[i].ImageURL,arrObj[i].Salary);

      if(emp.Department=='Administration'){
        adminstrationEmplyees.push(emp);
      }
      else if(emp.Department=='Marketing'){
        marketingEmplyees.push(emp);
      }
      else if(emp.Department=='Development'){
        developmentEmplyees.push(emp);
      }
      else{
        financeEmplyees.push(emp);
      }
    }
  
}
}
function renderAll(){
  renderAdminstration();
  renderMarketing();
  renderDevelopment();
  renderFinance();
  renderAllEmployeeInfo();
}

function renderAdminstration(){
  
  let numE=document.getElementById('adm-num');
  let length=adminstrationEmplyees.length;
  numE.textContent=length;
  employeesNumber+=length;
  if(length !=0){
  let sum=0;
  for(let i=0;i<length;i++){
    sum+=Number(adminstrationEmplyees[i].Salary);
  }
  let avgS=document.getElementById('adm-avg');
  avgS.textContent=`$${(sum/length).toFixed(2)}`;

  let totS=document.getElementById('adm-tot');
  totS.textContent=`$${sum}`;
  totlaSalary+=sum;
}

}
function renderMarketing(){
  let numE=document.getElementById('mark-num');
  let length=marketingEmplyees.length;
  numE.textContent=length;
  employeesNumber+=length;
  if(length !=0){
  let sum=0;
  for(let i=0;i<length;i++){
    sum+=Number(marketingEmplyees[i].Salary);
  }
  let avgS=document.getElementById('mark-avg');
  avgS.textContent=`$${(sum/length).toFixed(2)}`;

  let totS=document.getElementById('mark-tot');
  totS.textContent=`$${sum}`;
  totlaSalary+=sum;
  }
  
}
function renderDevelopment(){
  let numE=document.getElementById('dev-num');
  let length=developmentEmplyees.length;
  numE.textContent=length;
  employeesNumber+=length;
  if(length !=0){
  let sum=0;
  for(let i=0;i<length;i++){
    sum+=Number(developmentEmplyees[i].Salary);
  }
  let avgS=document.getElementById('dev-avg');
  avgS.textContent=`$${(sum/length).toFixed(2)}`;

  let totS=document.getElementById('dev-tot');
  totS.textContent=`$${sum}`;
  totlaSalary+=sum;
  }
}
function renderFinance(){
  let numE=document.getElementById('fin-num');
  let length=financeEmplyees.length;
  numE.textContent=length;
  employeesNumber+=length;
  if(length !=0){
  let sum=0;
  for(let i=0;i<length;i++){
    sum+=Number(financeEmplyees[i].Salary);
  }
  let avgS=document.getElementById('fin-avg');
  avgS.textContent=`$${(sum/length).toFixed(2)}`;

  let totS=document.getElementById('fin-tot');
  totS.textContent=`$${sum}`;
  totlaSalary+=sum;
  }
}
function renderAllEmployeeInfo(){
  let num=document.getElementById('emp-num');
  num.textContent=employeesNumber;
  let totSal=document.getElementById('tot-sal');
  totSal.textContent=`$${totlaSalary}`;
  if(employeesNumber != 0){
  let avgSal=document.getElementById('avg-sal')
  avgSal.textContent=`$${(totlaSalary/employeesNumber).toFixed(2)}`;
}
}

getDataFromLocalaStorageToRender();
renderAll();