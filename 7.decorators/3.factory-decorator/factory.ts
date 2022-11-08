function Logger(logString: string) {
    return (constructor: Function) =>  {
        console.log(logString)
        console.log(constructor)
    }
}

@Logger('Teste')
class Person {
    name = 'Anderson'

    constructor() {
        console.log('Creating person object ...')
    }
}

const pers = new Person()