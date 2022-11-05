"use strict";
const add = (...numbers) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
const addNumbers = add(10, 20, 30);
console.log(addNumbers);
