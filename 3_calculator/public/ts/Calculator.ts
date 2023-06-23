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
    }


    private addOperation(e: MouseEvent)
    {
        const btn = e.target as HTMLButtonElement;
        
        console.log(this.displayCurrent.innerHTML);
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