"use strict";
/**
    Suponhamos que você tenha um aplicação que recebe dados de um back end ou algum lugar
    onde você não sabe certamente se um objeto ou propriedade está definido.
 */
var _a;
const fetchedUserData = {
    id: 'u1',
    name: 'Max',
    job: { title: 'CEO', description: 'My own Company' }
};
// Verificando se fetchedUserData existe, para então acessar job, e verificando se job existe, para então acessar title
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
