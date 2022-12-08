/**
 Pode ser que em certas situações pode ser necessário você customizar como um decorator é aplicado à uma declaração. Para isso, é necessário criar um Decorator Factory , que é uma função que retorna a expressão que será executada. Seguindo o mesmo exemplo, imagine que agora você queira adicionar um prefixo estático nos logs, o resultado seria algo assim:
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function log(prefix) {
    return (target) => {
        console.log(`${prefix} ${target}`); // o target, nesse caso, é a class Car
    };
}
/**
 * Resultado no console:
Awsome class Car {
   }
 */
let Car = class Car {
};
Car = __decorate([
    log('Awsome')
], Car);
export { Car };
