"use strict";
class Department {
    constructor(name) {
        this.employees = [];
        this.salario = 2000;
        this.name = name;
    }
    describe() {
        console.log(`Department ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
    getSalario() {
        return this.salario;
    }
}
const department = new Department('Anderson');
const salario = department.getSalario();
console.log(salario);
department.describe();
// const accountingCopy = { name: 'André',  describe: department.describe }
// accountingCopy.describe()
department.addEmployee('Marcos');
department.addEmployee('Lucas');
department.addEmployee('João');
department.printEmployeeInformation();
