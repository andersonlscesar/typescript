/**
 * Um decorator de propriedade deve ser declarado antes da declaração da propriedade. Dessa vez, o decorator, recebe 2 parâmetros, target e key. O parâmetro target é o     protótipo da classe em que está sendo aplicado o decorator, já o parâmetro key é o nome da propriedade da classe em que está sendo aplicado o decorator.
 * 
 * @param target // aponta para a class
 * @param key // Nome da propriedade da classe em que está sendo declarado o decorator
 */


function analyze(target: any, key: string) {
    console.log(target, key);
}


export class Task {
    @analyze
    public title: string;

    constructor(title: string) {
        this.title = title;
    }

}