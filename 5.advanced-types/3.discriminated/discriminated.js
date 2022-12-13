"use strict";
function moveAnimal(animal) {
    switch (animal.type) {
        case 'bird':
            console.log(`This is the flying speed ${animal.flyingSpeed}`);
            break;
        case 'horse':
            console.log(`This is the running speed ${animal.runningSpeed}`);
            break;
    }
}
