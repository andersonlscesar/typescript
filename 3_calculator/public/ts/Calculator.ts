class Calculator
{
    
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
        this.analyseExpression();

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
        this.validateSign(childNodes); // validando sinais
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
        value = this.validateZeros(value);

        if(!value.includes(',')) value = value.replace(/\./g, '');        
        if (value.length > 3 && !value.includes(',')) value = value.replace(/(\d)(?=(\d{3})+$)/g, '$1.');
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

    private preventMoreThanOneComma(value: string): string 
    {
        let comma: string[] = value.split(',');
        if (comma.length > 1) value = comma[0] + ',' + comma.slice(1).join('');
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

    private validateZeros(value: string): string
    {
        const zeros = /^0+$/g;
        const zeroFollowedByAnotherNumber = /^0[1-9]$/g;

        if (value.startsWith(',')) value = '0,';

        if (zeros.test(value)) {
            value = value.replace(zeros, '0');
        } else if (zeroFollowedByAnotherNumber.test(value)) {
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
    * 
    * 
    * @param {NodeListOf<ChildNode>} value                                           
    *                                                                     
    *
    ************************************************************************/


    private validateSign(value: NodeListOf<ChildNode>)
    {  
        const firstItem = value[0].nodeType === 1 ? value[0] : null; // capturando apenas o primeiro item da NodeList e verificando se ele é  do tipo SPAN        
        if (firstItem !== null) this.removeSign(firstItem);        
        this.changeOperation(value);
        
    }
    
    /**********************************************************
    *
    *  Impede que o sinal esteja logo no começo da expressão
    *                                                       
    *  @param {ChildNode} value                             
    *
    **********************************************************/
    
    private removeSign(value: ChildNode)
    {
        const startsWithSpan = this.startsWithSpan() ; // Regex que verifica se a expressão começa com "<span></span>"
        const span = value as HTMLSpanElement; // Casting do nodeChild para span element
        const spanString = span.outerHTML; // Conversão de span para string
        if (startsWithSpan.test(spanString)) value.remove();
    }

    /*********************************************************************************
    *
    *  Aqui verificamos os sinais contidos na expressão e impedimos situações como:
    *                                                                              
    *  9%----                                                                      
    *  9%+++                                                                       
    *  9+++                                                                        
    *                                                                              
    *  @param {NodeListOf<ChildNode>} children                                     
    *
    *********************************************************************************/
    
    private changeOperation(children: NodeListOf<ChildNode>)
    {
        for (let i = 0; i < children.length; i++) {
            if (children[i].textContent === '%' && children[i].nextSibling?.nodeType === 1) {
                let next = children[i].nextSibling as ChildNode;

                if (next.textContent === '%') {
                    this.displayCurrent.replaceChild(next, next.previousSibling as ChildNode);
                } else if(next.nextSibling?.nodeType === 1) {
                    next = children[i].nextSibling as ChildNode;
                    this.displayCurrent.replaceChild(next.nextSibling as ChildNode, next)
                }
                
            }else if (children[i].nodeType === 1 && children[i].nextSibling?.nodeType === 1) {
                this.displayCurrent.replaceChild(children[i].nextSibling as ChildNode, children[i]);
            }
        }
    }


    private analyseExpression()
    {
        let childNodes: NodeListOf<ChildNode> = this.displayCurrent.childNodes;
        let arr: (string | ChildNode | null | undefined)[] = Array.from(childNodes).map(node => {
            if(node.nodeType === Node.TEXT_NODE) {
                return node.textContent;
            } else if (node.nodeType === Node.ELEMENT_NODE && node.nodeName === 'SPAN') {
                return node.textContent?.trim();
            }
            return node;
        })

        this.executeOperation(arr);
        
        
    }


    private executeOperation(arr: (string | ChildNode | null | undefined)[])
    {   
      
        if (arr !== null && arr !== undefined) {


        }
    }


    private sum(number: number): number 
    {
        return number + number;
    }




    private isNumber(value: string): boolean
    {
        return /^\d+$/.test(value);
    }


    /************************************************************************************************
    *
    *  Retorna uma expressão que verifica se existe um espan com innerHTML = + ou - ou / ou x ou %
    *                                                                                             
    *  @returns {RegExp}                                                                          
    *
    ************************************************************************************************/

    private startsWithSpan(): RegExp
    {
        return /<span class=".*">[\+\-\x\/\%]<\/span>+/ig;
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