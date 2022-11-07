interface ErrorContainer {
    [prop: string]: string
}

const errorBag: ErrorContainer = {
    email: 'Not a Valid Email',
    username: 'Must start with a capital character!'
}