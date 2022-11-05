class Department {
    private name: string 
    private employees: string[] = []

    constructor(name: string) {
        this.name = name
    }

    describe(this: Department) {
        console.log(`Department ${this.name}`)
    }

    addEmployee(employee: string) {
        this.employees.push(employee)
    }

    printEmployeeInformation() {
        console.log(this.employees.length)
        console.log(this.employees)
    }
}

const department = new Department('Anderson')
department.describe()
// const accountingCopy = { name: 'André',  describe: department.describe }
// accountingCopy.describe()
department.addEmployee('Marcos')
department.addEmployee('Lucas')
department.addEmployee('João')
department.printEmployeeInformation()
