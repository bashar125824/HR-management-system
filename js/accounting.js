
'use strict';

let arr = [];

let table = document.getElementById("tableDiv");
table.setAttribute("class", "tableDesign");

function renderHeader() {
    let tr = document.createElement("tr");
    table.appendChild(tr);

    let columnName = document.createElement("th");
    columnName.textContent = "Department Name";
    tr.appendChild(columnName);


    let columnNumberofemployees = document.createElement("th");
    columnNumberofemployees.textContent = "Number of employees in each department";
    tr.appendChild(columnNumberofemployees);


    let columnAveragesalary = document.createElement("th");
    columnAveragesalary.textContent = "Average salary of the department";
    tr.appendChild(columnAveragesalary);

    let columnTotalsalary = document.createElement("th");
    columnTotalsalary.textContent = "Total Salary";
    tr.appendChild(columnTotalsalary);

}


var parseEmployees;
function gitData() {
    let newEmployee = localStorage.getItem("Employees");
     parseEmployees = JSON.parse(newEmployee);

    if (parseEmployees != null) {
        for (let i = 0; i < parseEmployees.length; i++) {
            new Employee(
                parseEmployees[i].name,
                parseEmployees[i].department,
                parseEmployees[i].level,
                parseEmployees[i].image
            );


        }
        var departmentName = Employee.name;
        var numberOfemployees = Employee.length;

    }
    
}






function renderBody() {

    let tr = document.createElement("tr");

    let rowName = document.getElementById("td")
    rowName.textContent = departmentName;
    tr.appendChild(rowName);

    let rowNumberofemployees = document.getElementById("td")
    rowNumberofemployees.textContent = numberOfemployees;
    tr.appendChild(rowNumberofemployees);

    let rowTotalsalary = document.getElementById("td")
    rowTotalsalary.textContent = totalSalary;
    tr.appendChild(rowTotalsalary);

    let rowAveragesalary = document.getElementById("td")
    rowAveragesalary.textContent = averageSalary;
    tr.appendChild(rowAveragesalary);


};



renderHeader();
renderBody();

