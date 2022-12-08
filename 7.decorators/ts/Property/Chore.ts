/**
 * 
 * @param target // Diz respeito a classe ao qual esse decorator será indexado
 * @param key // Diz respeito ao nome da propriedade ao qual esse decorator será indexado
 */

function logProperty(target: any, key: string) {
    const newKey = `_${key}`;

    Object.defineProperty(target, key, {
        get() {
            console.log(`Get: ${key} => ${this[newKey]}`);
            return this[newKey];
        },

        set(newVal) {
            console.log(`Set: ${key} => ${newVal}`);
            this[newKey] = newVal;
        },

        enumerable: true,
        configurable: true
    });
}

export class Chore {

    @logProperty
    public id: number;

    @logProperty
    public title: string;

    constructor(id: number, title: string) {
        this.id = id;
        this.title = title;
    }
}