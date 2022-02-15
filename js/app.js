let employeeArr = [];

function Employee(name, department, level, image) {
    this.name = name;
    this.department = department;
    this.level = level;
    this.image = image;
    employeeArr.push(this);
}

function digitGeneratr() {
    let idNum = Math.floor(1000 + Math.random() * 9000);
    return idNum;
}

let form = document.getElementById("dataForm");

function handler(event) {
    event.preventDefault();
    let name = event.target.name.value;
    let department = event.target.department.value;
    let level = event.target.level.value;
    let image = event.target.image.value;

    let newEmployee = new Employee(name, department, level, image);
    newEmployee.digitGeneratr();
    console.log(employeeArr);
}

form.addEventListener("submit", handler)




//Employee.prototype.render = function () {

  //  document.writeln(`<p>${this.name}  :  ${this.Salary(this.level)}</p>`);

//}




//for (let i = 0; i < arr.length; i++) {
//    arr[i].render();
//}

