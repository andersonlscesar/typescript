class Calculator
{
    private readonly allowedExp: string[] = ['+', '-', 'x', '/'];
    
    private clearButton         = document.querySelector('.clear-button')       as HTMLButtonElement;
    private buttons             = document.querySelectorAll('.primary')         as NodeListOf<HTMLButtonElement>;
    private buttonsOperations   = document.querySelectorAll('.op')              as NodeListOf<HTMLButtonElement>;
    private displayCurrent      = document.querySelector('.display__current')   as HTMLSpanElement;
    private displayPrevious     = document.querySelector('.display__previous')  as HTMLSpanElement;
    private expressions: string[] = [];

    constructor() 
    {
        this.addEvents();
    }

    /**********************************************
    *
    *  Função responsável por adicionar eventos 
    *  aos elementos.                           
    *
    **********************************************/

    private addEvents()
    {
        this.buttons.forEach( btn => btn.addEventListener('click', this.display.bind(this)));
        this.buttonsOperations.forEach( btn => btn.addEventListener('click', this.addOperation.bind(this)));
        this.clearButton.addEventListener('click', this.clearAll.bind(this));
    }

    /**********************************************
    *
    * Exibe os números no diplay da calculadora
    * @param {MouseEvent} e
    *
    **********************************************/

    private display(e: MouseEvent)
    {
        const btn = e.target as HTMLButtonElement;
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


    private addOperation(e: MouseEvent)
    {
        const btn = e.target as HTMLButtonElement;
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


    private observeChanges(): void 
    {
        const childNodes: NodeListOf<ChildNode> = this.displayCurrent.childNodes;
        childNodes.forEach(child => {
            if (child.nodeType === 3) child.nodeValue = this.formatNumber(child.nodeValue as string);
        });
    }

    /********************************************************************************************************
    *
    *  Função responsável por verificar as expressões e realizar a formatação em dezenas, milhares etc ...
    *  @param {string} value                                                                              
    *
    ********************************************************************************************************/


    private formatNumber(value: string): string
    {
        value = this.preventMoreThanOneComma(value);

        if(!value.includes(',')) value = value.replace(/\./g, '');        
        if (value.length > 3 && !value.includes(',')) value = value.replace(/(\d)(?=(\d{3})+$)/g, '$1.');
        return value;
    }

    /***********************************************************************
    *
    *  Essa função não permite que haja mais de uma virgula por expressão
    *                                                                    
    *  @param {string} value                                             
    *
    ***********************************************************************/

    private preventMoreThanOneComma(value: string): string 
    {
        let comma: string[] = value.split(',');
        if (comma.length > 1) value = comma[0] + ',' + comma.slice(1).join('');
        return value;
    }
    


    /*******************************
    *
    *  Cria um elemento span     
    *  @returns {HTMLSpanElement}
    *
    *******************************/


    private createSpan(): HTMLSpanElement
    {
        const span = document.createElement('span')
        return span;
    }

    /*****************************************
    *
    *  Apaga todas as expressões no display
    *
    *****************************************/

    private clearAll()
    {
        this.displayCurrent.innerHTML = '';
    }
}


new Calculator;