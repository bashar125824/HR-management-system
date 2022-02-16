'use strict';


var arr = [];

function Employee(ID , FullName , Department , Level ){
    this.ID = ID;
    this.FullName = FullName;
    this.Department = Department;
    this.Level = Level;
    arr.push(this)
}



 
Employee.prototype.Salary = function (Level){
   
    var salary;
    var tax;
    var netSalary;
if(this.Level == "Senior")
{   
     salary = (Math.floor(Math.random() * (2000 - 1500)) + 1500) ;
    tax = salary * 0.075;
    netSalary = salary - tax;
    }

else if (this.Level == "Mid-Senior"){
    salary = (Math.floor(Math.random() * (1500 - 1000)) + 1000);
    tax = salary * 0.075;
    netSalary = salary - tax;
    }

else if (this.Level == "Junior") {
    salary = (Math.floor(Math.random() * (1000 - 500)) + 500);
    tax = salary * 0.075;
    netSalary = salary - tax;
    }
    return netSalary;

}


Employee.prototype.render = function(){

        document.writeln(`<p>${this.FullName}  :  ${this.Salary(this.Level)}</p>`);

}



let Ghazi = new Employee(1000, "Ghazi Samer", "Administration", "Senior");
let Lana = new Employee(1001, "Lana Ali", "Finance", "Senior");
let Tamara = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior");
let Safi = new Employee(1003, "Safi Walid", "Administration", "Mid-Senior");
let Omar = new Employee(1004, "Omar Zaid", "Development", "Senior");
let Rana = new Employee(1005, "Rana Saleh", "Development", "Junior");
let Hadi = new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior");

for (let i = 0; i < arr.length; i++) {
   arr[i].render();
}

