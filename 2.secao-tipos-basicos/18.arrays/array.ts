const person: {
    name: string, 
    age: number,
    hobbies: string[]
} = {
    name: 'Anderson',
    age: 30,
    hobbies: ['Sports', 'Cooking']
}

let favoriteActivities: string[] // Array of strings
favoriteActivities = ['Sports']

for(const hobby of person.hobbies) {
    console.log(hobby)
}