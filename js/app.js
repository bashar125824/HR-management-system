'use strict';

let employeeArr = [];

function Employee(name, department, level, image , salary) {
    this.emplyeeId = 0;
    this.name = name;
    this.department = department;
    this.level = level;
    this.image = image;
    this.salary = 0;
    employeeArr.push(this); 
}



let startEmployeeid = 1000;

function digitGeneratr() {
    return startEmployeeid++;
}

Employee.prototype.getId = function(){
    this.emplyeeId = digitGeneratr();
}



let form = document.getElementById("dataForm");
let addEmployee = document.getElementById("submit");
let employeeDiv = document.getElementById("employeeDiv");


form.addEventListener("submit", handler);


function handler(event) {
    event.preventDefault();
    let name = event.target.name.value;
    let department = event.target.department.value;
    let level = event.target.level.value;
    let image = event.target.image.value;
    let newEmployee = new Employee(name, department, level, image);
    newEmployee.getId();
    newEmployee.getSalary();
    newEmployee.render();
    console.log(employeeArr);
    form.reset();
}

Employee.prototype.getSalary = function () {
     
    
    var theSalary;
    var tax;
    var netSalary;
    if (this.level == "Senior") {
        theSalary = (Math.floor(Math.random() * (2000 - 1500)) + 1500);
        tax = theSalary * 0.075;
        netSalary = theSalary - tax;
    }

    else if (this.level == "Mid-Senior") {
        theSalary = (Math.floor(Math.random() * (1500 - 1000)) + 1000);
        tax = theSalary * 0.075;
        netSalary = theSalary - tax;
    }

    else if (this.level == "Junior") {
        theSalary = (Math.floor(Math.random() * (1000 - 500)) + 500);
        tax = theSalary * 0.075;
        netSalary = theSalary - tax;
    }
    this.salary = netSalary;

 

let Ghazi = new Employee("Ghazi Samer", "Administration", "Senior", 'assets/Ghazi Samer.png');
Ghazi.getId();
let Lana = new Employee("Lana Ali", "Finance", "Senior", 'assets/Lana Ali.jpg');
Lana.getId();
let Tamara = new Employee("Tamara Ayoub", "Marketing", "Senior", 'assets/Tamara Ayoub.jpg');
Tamara.getId();
let Safi = new Employee("Safi Walid", "Administration", "Mid-Senior", 'assets/Safi Walid.jpg');
Safi.getId();
let Omar = new Employee("Omar Zaid", "Development", "Senior", 'assets/Omar Zaid.jpg');
Omar.getId();
let Rana = new Employee("Rana Saleh", "Development", "Junior", 'assets/Rana Saleh.jpg');
Rana.getId();
let Hadi = new Employee("Hadi Ahmad", "Finance", "Mid-Senior", 'assets/Hadi Ahmad.jpg');
Hadi.getId();


Employee.prototype.render = function () {

let divShow = document.createElement("div");
    divShow.setAttribute('class', "Show");

    let imgShow = document.createElement("img");
    imgShow.setAttribute("src" , this.image);
    divShow.appendChild(imgShow);

    let thetitle = document.createElement("h3");
    thetitle.textContent = "Name :" + this.name;
    divShow.appendChild(thetitle);

    let titleId = document.createElement("h3");
    titleId.textContent="Id :"+this.emplyeeId;
    divShow.appendChild(titleId);

    let titleDep = document.createElement("h3");
    titleDep.textContent="Department :" +this.department;
    divShow.appendChild(titleDep);

    let titleLevel = document.createElement("h3");
    titleLevel.textContent="Level :" +this.level;
    divShow.appendChild(titleLevel);

    let salary = document.createElement("h3");
    salary.textContent = `Salary : ${this.salary}$`;
    divShow.appendChild(salary);


    employeeDiv.appendChild(divShow);



function renderAll(){
for (let i = 0; i < employeeArr.length; i++) {
    employeeArr[i].getId();
    employeeArr[i].getSalary();
    employeeArr[i].render();

}
}

renderAll();
