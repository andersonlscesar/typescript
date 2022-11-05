class Department {
    private name: string 
    private employees: string[] = []
    private readonly salario: number = 2000

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

    getSalario() {
        return this.salario
    }
}

const department = new Department('Anderson')
const salario = department.getSalario()
console.log(salario)
department.describe()
// const accountingCopy = { name: 'André',  describe: department.describe }
// accountingCopy.describe()
department.addEmployee('Marcos')
department.addEmployee('Lucas')
department.addEmployee('João')
department.printEmployeeInformation()
