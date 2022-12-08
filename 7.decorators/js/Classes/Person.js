/**
 * Ao criarmos um decorator qualquer, teremos implicitamente alguns parâmetros com valores pré definidos.
 *
 * @param target // O target sempre apontará para o elemento ao qual você associá-lo: Classe, função, atributo.
 *
 * Neste exemplo, o target é a nossa classe "Person"
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function log(target) {
    console.log(target);
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
let Person = class Person {
    constructor() {
    }
};
Person = __decorate([
    log
], Person);
export { Person };
new Person();
