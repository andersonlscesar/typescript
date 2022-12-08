function setApiVersion(constructor: any) {
    constructor.api = '0.0.1'; // Criando uma propriedade chamada api na classe
}

// Decorator factory

function setApiVersionFactory(constructor: any) {
    return class extends constructor {
        version = '0.0.2';
    }
}

@setApiVersionFactory
export class Wizard {}