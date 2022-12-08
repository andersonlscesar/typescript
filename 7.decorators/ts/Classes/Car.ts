/**
 Pode ser que em certas situações pode ser necessário você customizar como um decorator é aplicado à uma declaração. Para isso, é necessário criar um Decorator Factory , que é uma função que retorna a expressão que será executada. Seguindo o mesmo exemplo, imagine que agora você queira adicionar um prefixo estático nos logs, o resultado seria algo assim:
 */

 function log(prefix: string) {
    return (target: any) => {
        console.log(`${prefix} ${target}`) // o target, nesse caso, é a class Car
    }
 }

 /**
  * Resultado no console:
 Awsome class Car {
    }   
  */

 @log('Awsome')
 export class Car {

 }