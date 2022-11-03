const person: {
    name: string 
    age: number
    hobbies: string[]
    role: [number, string] // Especificando um array com dois elementos, ao qual, o primeiro é do tipo number e segundo string.
} = {
    name: 'Anderson',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']

}

let favoriteActivities: string[] // Array of strings
favoriteActivities = ['Sports']

for(const hobby of person.hobbies) {
    console.log(hobby)
}