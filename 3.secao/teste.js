"use strict";
let nome;
nome = 'Anderson';
class Person {
    #nome;
    #sobrenome;
    constructor(nome = 'Anderson', sobrenome = 'Cesar') {
        this.#nome = nome;
        this.#sobrenome = sobrenome;
    }
}
