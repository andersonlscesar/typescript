var person = {
    name: 'Anderson',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
};
var favoriteActivities; // Array of strings
favoriteActivities = ['Sports'];
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
