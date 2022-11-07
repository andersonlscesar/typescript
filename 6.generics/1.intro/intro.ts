const names: Array<string> = []
const names1: string[] = []

// Primeira forma

type Combine = string | number | boolean

// function returnAnyValue(value: Combine): Combine {
//     return value
// }

// const result1 = returnAnyValue('Anderson')
// const result2 = returnAnyValue(12)
// const result3 = returnAnyValue(true)


// function returnAnyValue(value: string): string
// function returnAnyValue(value: number): number
// function returnAnyValue(value: boolean): boolean

// function returnAnyValue(value: Combine) {

//     if(typeof value === 'string') {
//         return 'Olá, ' + value
//     } else if(typeof value === 'number') {
//         return 2 + value
//     } else if(typeof value === 'boolean') {
//         return !value
//     }

//     return value
// }

// const result1 = returnAnyValue('Anderson')
// const result2 = returnAnyValue(12)
// const result3 = returnAnyValue(true)


function returnAnyValue <T>(value: T): T {
    return value
}

const result1 = returnAnyValue<string>('Anderson')
const result2 = returnAnyValue<number>(12)
const result3 = returnAnyValue<boolean>(true)
