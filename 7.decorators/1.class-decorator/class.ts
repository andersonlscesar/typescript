function Logger(constructor: Function) {
    console.log('Logging ...')
    console.log(constructor)
}

@Logger
class Person {
    name = 'Anderson'

    constructor() {
        console.log('Creating person object ...')
    }
}

const pers = new Person()