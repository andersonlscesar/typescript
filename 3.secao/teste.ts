let nome: string 
nome = 'Anderson'



class Person {
    #nome: string
    #sobrenome: string

    constructor(nome: string = 'Anderson', sobrenome:string = 'Cesar') {
        this.#nome = nome 
        this.#sobrenome = sobrenome
    }
}
