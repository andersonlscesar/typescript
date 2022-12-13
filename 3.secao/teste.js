"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Person_nome, _Person_sobrenome;
let nome;
nome = 'Anderson';
class Person {
    constructor(nome = 'Anderson', sobrenome = 'Cesar') {
        _Person_nome.set(this, void 0);
        _Person_sobrenome.set(this, void 0);
        __classPrivateFieldSet(this, _Person_nome, nome, "f");
        __classPrivateFieldSet(this, _Person_sobrenome, sobrenome, "f");
    }
}
_Person_nome = new WeakMap(), _Person_sobrenome = new WeakMap();
