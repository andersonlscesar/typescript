"use strict";
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const objA = {
    name: 'Anderson',
    hobbies: ['Sports']
};
const objB = {
    age: 20
};
const mergedObj = merge(objA, objB);
function countAndDescribe(element) {
    let descriptionText = 'Got no value';
    if (element.length > 0) {
        descriptionText = `Got ${element.length} elements`;
    }
    return [element, descriptionText];
}
console.log(countAndDescribe('Hi, There'));
