/**
 * Um decorator de propriedade deve ser declarado antes da declaração da propriedade. Dessa vez, o decorator, recebe 2 parâmetros, target e key. O parâmetro target é o     protótipo da classe em que está sendo aplicado o decorator, já o parâmetro key é o nome da propriedade da classe em que está sendo aplicado o decorator.
 *
 * @param target // aponta para a class
 * @param key // Nome da propriedade da classe em que está sendo declarado o decorator
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function analyze(target, key) {
    console.log(target, key);
}
export class Task {
    constructor(title) {
        this.title = title;
    }
}
__decorate([
    analyze
], Task.prototype, "title", void 0);
