function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB)
}

const objA: {
    name: string 
    hobbies: string[]
} = {
    name: 'Anderson',
    hobbies: ['Sports']
}

const objB: {
    age: number
} = {
    age: 20
}

const mergedObj = merge(objA, objB)

interface Lengthy {
    length: number
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no value'
    if(element.length > 0) {
        descriptionText = `Got ${element.length} elements`
    }
    return [element, descriptionText]
}

console.log(countAndDescribe('Hi, There'))