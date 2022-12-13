"use strict";
class Department {
    constructor(id, name) {
        this.employees = [];
        this.salario = 2000;
        this.id = id;
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
    get Salario() {
        return this.salario;
    }
}
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
}
const department = new ITDepartment('e1', ['Anderson']);
const salario = department.Salario;
console.log(salario);
department.describe();
department.addEmployee('Marcos');
department.addEmployee('Lucas');
department.addEmployee('João');
department.printEmployeeInformation();
