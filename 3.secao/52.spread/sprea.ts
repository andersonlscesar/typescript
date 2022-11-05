const hobbies = ['Sports', 'Cooking']

// console.log(...hobbies)

const person: {
    name: string
    age: number 
} = {
    name: 'Anderson',
    age: 24   
}

const novoObjeto = { ...person }
novoObjeto.name = 'Ana'
console.log(person.name)
console.log(novoObjeto.name)