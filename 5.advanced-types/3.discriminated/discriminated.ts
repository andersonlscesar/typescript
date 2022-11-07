interface Bird {
    type: 'bird'
    flyingSpeed: number
}

interface Horse {
    type: 'horse'
    runningSpeed: number
}

type Animal = Bird | Horse

function moveAnimal(animal: Animal) {
    switch(animal.type) {
        case 'bird':
            console.log(`This is the flying speed ${animal.flyingSpeed}`)
            break
        case 'horse':
            console.log(`This is the running speed ${animal.runningSpeed}`)
            break
    }
}

