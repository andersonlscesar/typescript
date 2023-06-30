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
        this.validateSign(childNodes); // validando sinais
        childNodes.forEach(child => {
            if (child.nodeType === 3)
                child.nodeValue = this.formatNumber(child.nodeValue);
        });
    }
    /********************************************************************************************************
    *
    *  Função responsável por verificar as expressões e realizar a formatação em dezenas, milhares etc ...
    *  @param {string} value
    *
    ********************************************************************************************************/
    formatNumber(value) {
        value = this.preventMoreThanOneComma(value);
        value = this.validateZeros(value);
        if (!value.includes(','))
            value = value.replace(/\./g, '');
        if (value.length > 3 && !value.includes(','))
            value = value.replace(/(\d)(?=(\d{3})+$)/g, '$1.');
        return value;
    }
    /***********************************************************************
    *
    *  Essa função não permite que haja mais de uma virgula por expressão
    *
    *  @param {string} value
    *  @returns {string}
    *
    ***********************************************************************/
    preventMoreThanOneComma(value) {
        let comma = value.split(',');
        if (comma.length > 1)
            value = comma[0] + ',' + comma.slice(1).join('');
        return value;
    }
    /**********************************************************************************************************
    *
    *  Impede que o usuário tente inserir vários zeros
    *
    *  "000000000" = "0"
    *
    *  Caso o usuário digite "0" e em seguida um número entre 1-9, esse "0" será substituído por este número
    *  "03" = "3"
    *
    *  @param {string} value
    *  @returns {string}
    *
    **********************************************************************************************************/
    validateZeros(value) {
        const zeros = /^0+$/g;
        const zeroFollowedByAnotherNumber = /^0[1-9]$/g;
        if (value.startsWith(','))
            value = '0,';
        if (zeros.test(value)) {
            value = value.replace(zeros, '0');
        }
        else if (zeroFollowedByAnotherNumber.test(value)) {
            value = value.slice(1);
        }
        return value;
    }
    /************************************************************************
    *
    *  Função responsável pela validação dos sinais "+,- .."
    *
    *  Aqui impediremos que o usuário comece a expressão com algum sinal.
    *  - + 9 | - 9 ..
    * @param {NodeListOf<ChildNode>} value
    *
    *
    ************************************************************************/
    validateSign(value) {
        const startsWithSpan = /<span class=".*">.*<\/span>+/g; // Regex que verifica se a expressão começa com "<span></span>"
        const firstItem = value[0].nodeType === 1 ? value[0] : null; // capturando apenas o primeiro item da NodeList e verificando se ele é  do tipo SPAN
        if (firstItem !== null) {
            const span = firstItem; // Casting do nodeChild para Span element
            const spanString = span.outerHTML; // Conversão de span element para string
            if (startsWithSpan.test(spanString)) {
                value[0].remove();
            }
        }
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
