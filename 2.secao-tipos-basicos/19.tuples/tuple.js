"use strict";
const person = {
    name: 'Anderson',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
};
let favoriteActivities; // Array of strings
favoriteActivities = ['Sports'];
for (const hobby of person.hobbies) {
    console.log(hobby);
}
