/**
 *
 * @param newValue // Valor para definir o enumerable
 * @returns
 *
 * target               => Diz respeito a classe
 * propertyKey          => Diz respeito ao nome do método ao qual esse decorator foi indexado
 * propertyDescriptor   => conjunto de propriedades como: enumerable, configurable, writable e value
 *
 * vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
 *
 * --> writable     => Se algum programador / usuário poderá alterar o valor de algum propriedade no objeto.
 * --> enumerable   => Se essa propriedade aparecerá em enumerações como o loop for in ou for of ou Object.keys.
 * --> value        => se trata do valor atual da propriedade. Nesse caso, se trata do nome da função "changePassword".
 * --> configurable => Se o programador / Usuário pode alterar as propriedades do propertyDescriptor, como: Alterar o valor do: value, writable ou enumerable.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function enumarable(newValue) {
    return (target, propertyKey, propertyDescriptor) => {
        propertyDescriptor.enumerable = newValue;
    };
}
export class User {
    constructor() {
        this.name = 'Marcos';
    }
    changePassword(newPassword) { }
}
__decorate([
    enumarable(false)
], User.prototype, "changePassword", null);
