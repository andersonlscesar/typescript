/**
 * Ao criarmos um decorator qualquer, teremos implicitamente alguns parâmetros com valores pré definidos.
 * 
 * @param target // O target sempre apontará para o elemento ao qual você associá-lo: Classe, função, atributo.
 * 
 * Neste exemplo, o target é a nossa classe "Person"
 */

function log(target: any) { 
    console.log(target)
}

// Será emitido no console 

/**
 * 
 * 
 class Person {
    constructor() {
    }
}


 */

@log
export class Person {
    constructor() {
        
    }
}

new Person() 