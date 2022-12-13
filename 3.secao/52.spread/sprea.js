"use strict";
const hobbies = ['Sports', 'Cooking'];
// console.log(...hobbies)
const person = {
    name: 'Anderson',
    age: 24
};
const novoObjeto = Object.assign({}, person);
novoObjeto.name = 'Ana';
console.log(person.name);
console.log(novoObjeto.name);
