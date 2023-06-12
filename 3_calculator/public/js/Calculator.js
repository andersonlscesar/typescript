"use strict";
class Calculator {
    constructor() {
        this.buttons = document.querySelectorAll('button');
        this.displayInput = document.querySelector('.display__input');
        this.displayPrevious = document.querySelector('.display__previous');
        this.clearButton = document.querySelector('.clear-button');
        this.operations = ['+', '-', '*', '/'];
        this.expressions = [];
        this.addEvents();
    }
    addEvents() {
        this.clearButton.addEventListener('click', this.clearAll.bind(this));
        /**
         * Adicionando eventos para todos os botões da calculadora
         */
        this.buttons.forEach(button => {
            button.addEventListener('click', this.displayInformation.bind(this));
        });
    }
    /**
     * Exibe as informações no display da calculadora através do click nos botões
     * @param { MouseEvent } e
     */
    displayInformation(e) {
        if (!this.limitCaracter()) {
            this.displayInput.value = this.formatNumber(this.preventZeros(this.displayInput.value += this.getButtonValue(e)));
            this.validateComma();
        }
        this.changeFontSize();
    }
    /**
     * Esta função impede que na calculadora haja uma expressão como: "00000000000"
     * Aqui verificamos tbm se a expressão começou com "," e assim substituimos isso por "0,"
     * Se o número "0" for digitado e em seguida for digitado o "8". O "0" será substituído pelo "8"
     *
     * @param { string } value
     * @returns { string }
     */
    preventZeros(value) {
        // Adiciona "0," caso o usuário insira apenas a virgula
        if (value.startsWith(',')) {
            return this.displayInput.value = '0,';
        }
        this.preventInvalidOperations();
        switch (true) {
            case /^0+/.test(value): // Verificando se o usuário começou pelo 0 e está tentando inserir mais zeros
                if (/^0+[1-9]/.test(value)) { // Verfica se o user está digitando outro número diferente de zero (assim, substituimos o zero pelo novo número digitado)
                    return this.displayInput.value.replace(/^0+[1-9]/, value.split('')[1]);
                }
                return this.displayInput.value.replace(/^0+/, '0').replace(/^0+[1-9]/, '0');
            case /^0+[1-9]/.test(value):
                return this.displayInput.value = value;
            case /^0+,[0-9]{0}/.test(value):
                return this.displayInput.value = value;
            default:
                return this.displayInput.value;
        }
    }
    /**
     * Limpa todas as informações no display
     */
    clearAll() {
        this.displayInput.value = '';
    }
    /**
     * Altera o tamanho da fonte quando a quantidade de caracteres for maior ou igual a 12
     */
    changeFontSize() {
        this.displayInput.value.length >= 12 ? this.displayInput.classList.add('change--font-size') : this.displayInput.classList.remove('change--font-size');
    }
    /**
     * Esta função formata o número adequadamente em centenas, milhares ...
     * @param { string } number
     * @returns { string }
     */
    formatNumber(number) {
        let pureNumber = '';
        this.operations.forEach(operation => {
            if (this.displayInput.value.includes(operation)) {
                this.expressions = number.split(operation);
                console.log(this.expressions);
            }
        });
        pureNumber = number.split('.').join('');
        if (pureNumber.length > 3 && !number.includes(',')) {
            pureNumber = pureNumber.replace(/(\d)(?=(\d{3})+$)/g, '$1.');
        }
        else {
            pureNumber = number;
        }
        return pureNumber;
    }
    /**
     * Aqui estamos limitando a quantidade de caracteres que serão inseridos na calculadora
     * @returns { boolean }
     */
    limitCaracter() {
        return this.displayInput.value.length === 19;
    }
    /**
     * Esta função não permite que haja mais de uma virgula na expressão exibida na calculadora
     */
    validateComma() {
        let slices = this.displayInput.value.split(',');
        if (slices.length > 2) {
            this.displayInput.value = slices[0] + ',' + slices.slice(1).join('');
        }
    }
    /**
     * Esta função impede que o usuário insira os sinais das operações antes de qualquer número
     */
    preventInvalidOperations() {
        const startWithNumber = /^[0-9]+/g.test(this.displayInput.value);
        if (!startWithNumber) {
            this.displayInput.value = '';
        }
    }
    /**
     * Função responsável por capturar o valor do botão que for clicado
     * @param { MouseEvent } e
     * @return { string }
     */
    getButtonValue(e) {
        let button = e.target;
        return button.value;
    }
}
new Calculator;
