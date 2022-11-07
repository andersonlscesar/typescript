type Combinable = string | number 


function add(a: number, b: number): number 
function add(a: string, b: string): string 

function add(a: Combinable, b: Combinable) {
    if(typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString()
    }

    return a + b
}

const result1 = add('Anderson', 'César')
const result2 = add(5, 5)