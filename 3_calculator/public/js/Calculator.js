"use strict";
class Calculator {
    constructor() {
        this.allowedExp = ['+', '-', 'x', '/'];
        this.clearButton = document.querySelector('.clear-button');
        this.buttons = document.querySelectorAll('.primary');
        this.buttonsOperations = document.querySelectorAll('.op');
        this.displayCurrent = document.querySelector('.display__current');
        this.displayPrevious = document.querySelector('.display__previous');
        this.expressions = [];
        this.addEvents();
    }
    /**********************************************
    *
    *  Função responsável por adicionar eventos
    *  aos elementos.
    *
    **********************************************/
    addEvents() {
        this.buttons.forEach(btn => btn.addEventListener('click', this.display.bind(this)));
        this.buttonsOperations.forEach(btn => btn.addEventListener('click', this.addOperation.bind(this)));
        this.clearButton.addEventListener('click', this.clearAll.bind(this));
    }
    /**********************************************
    *
    * Exibe os números no diplay da calculadora
    * @param {MouseEvent} e
    *
    **********************************************/
    display(e) {
        const btn = e.target;
        this.displayCurrent.innerHTML += btn.value;
    }
    addOperation(e) {
        const btn = e.target;
        console.log(this.displayCurrent.innerHTML);
    }
    /*******************************
    *
    *  Cria um elemento span
    *  @returns {HTMLSpanElement}
    *
    *******************************/
    createSpan() {
        const span = document.createElement('span');
        return span;
    }
    /*****************************************
    *
    *  Apaga todas as expressões no display
    *
    *****************************************/
    clearAll() {
        this.displayCurrent.innerHTML = '';
    }
}
new Calculator;
