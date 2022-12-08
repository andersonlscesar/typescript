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

function enumarable(newValue: boolean) {
    return (target: any, propertyKey: string, propertyDescriptor: PropertyDescriptor) => {   
        propertyDescriptor.enumerable = newValue;
    }
}

export class User {
    name: string = 'Marcos';

    @enumarable(false)
    changePassword(newPassword: string) {}
}