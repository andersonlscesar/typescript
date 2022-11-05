abstract class Department {
    private id: string
    private name: string 
    private employees: string[] = []
    private readonly salario: number = 2000

    constructor(id: string, name: string) {
        this.id = id
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

    get Salario() {
        return this.salario
    }
}

class ITDepartment extends Department {
    admins: string[]
    constructor(id: string,  admins: string[]) {
        super(id, 'IT')
        this.admins = admins
    }
}

const department = new ITDepartment('e1', ['Anderson'])
const salario = department.Salario
console.log(salario)
department.describe()
department.addEmployee('Marcos')
department.addEmployee('Lucas')
department.addEmployee('João')
department.printEmployeeInformation()
