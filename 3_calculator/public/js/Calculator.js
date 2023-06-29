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
        this.observeChanges();
    }
    /************************************************************************************************************
    *
    *  adiciona as operações dentro de um span para que seja possível adicionar um style próprio para o sinal.
    *
    *  @param {MouseEvent} e
    *
    ************************************************************************************************************/
    addOperation(e) {
        const btn = e.target;
        const operator = this.createSpan();
        operator.classList.add('operator');
        operator.textContent = btn.value;
        this.displayCurrent.appendChild(operator);
        this.observeChanges();
    }
    /*********************************************************************************************
    *
    *  Essa função coleta os childNodes para que seja possível formatar cada expressão númerica
    * Exemplo:
    * 9 + 9
    * 9 é um childNode do tipo 3 => teremos mais facilidade em coletar apenas as expressões sem sinai
    * Cada expressão é constituida por um <span></span>, este childNode é do tipo 1
    * Assim conseguiremos diferenciar os elementos
    *
    *********************************************************************************************/
    observeChanges() {
        const childNodes = this.displayCurrent.childNodes;
        childNodes.forEach(child => {
            if (child.nodeType === 3)
                child.nodeValue = this.formatNumber(child.nodeValue);
        });
    }
    formatNumber(value) {
        value = value.replace(/\./g, '');
        if (value.length > 3 && !value.includes(','))
            value = value.replace(/(\d)(?=(\d{3})+$)/g, '$1.');
        return value;
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
