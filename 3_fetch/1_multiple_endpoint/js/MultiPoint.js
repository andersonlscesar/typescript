"use strict";
class MultiPoint {
    constructor() {
        /****************************************
        *
        *  Container para inserção dos buttons
        *  @type {HTMLDivElement}
        *
        ****************************************/
        this.buttonContainer = document.querySelector('.button-container');
        /*********************************************************
        *
        *  Local onde será inserida a table com as informações
        *  @type {HTMLDivElement}
        *
        *********************************************************/
        this.info = document.querySelector('.info');
        /*************************************************
        *
        *  Array de objetos com informações sobre a API
        *  @type {ArrayObj}
        *
        *************************************************/
        this.urls = [
            {
                url: 'https://www.discoveryvip.com/shared/books2.json',
                arr: 'books',
                button_title: 'Books list'
            },
            {
                url: 'https://www.discoveryvip.com/shared/1people.json',
                arr: 'data',
                button_title: 'People list'
            },
            {
                url: 'https://www.discoveryvip.com/shared/coin.json',
                arr: 'data',
                button_title: 'Bitcoin Currency'
            }
        ];
        this.generateButtons();
    }
    /*****************************************************
    *
    *  Função responsável por gerar os buttons
    *  de acordo com a quantidade de itens no array URL
    *
    *****************************************************/
    generateButtons() {
        this.urls.forEach((url, index) => {
            const button = document.createElement('button');
            const newIndex = index;
            button.classList.add('btn', 'btn-primary');
            button.textContent = url.button_title;
            button.setAttribute('index', newIndex);
            this.buttonContainer.appendChild(button);
            this.addEvent(button);
        });
    }
    /*********************************************
    *
    *  Função responsável por adicionar eventos
    *  aos buttons que forem sendo gerados
    *  @param {HTMLButtonElement} button
    *
    *********************************************/
    addEvent(button) {
        button.addEventListener('click', this.consumeAPI.bind(this));
    }
    /*****************************************************
    *
    *  Função assíncrona responsável por consumir a API
    *  @param {MouseEvent} e
    *  @returns {Promise<void>}
    *
    *****************************************************/
    async consumeAPI(e) {
        try {
            const button = e.target;
            const currentIndex = Number(button.getAttribute('index'));
            const response = await fetch(this.urls[currentIndex].url);
            const data = await response.json();
            this.HTMLTemplate(data);
        }
        catch (err) {
            throw new Error('Não foi possível atender a sua solicitção');
        }
    }
    /**********************************************************************************************************
    *
    *  Função responsável por gerar a estrutura HTML de um table
    *  Também é responsável por pegar apenas as chaves dos objetos vindos da API e "mergar" com os "values".
    *
    *  É por ela que inserimos a table no documento HTML.
    *
    *  @param {MainObj} obj
    *
    *
    **********************************************************************************************************/
    HTMLTemplate(obj) {
        this.info.innerHTML = '';
        const key = Object.keys(obj)[0]; // Chave para acessar o array com os dados
        const data = obj[key]; // array com os dados
        const table = document.createElement('table');
        table.classList.add('table', 'mt-5');
        const thead = document.createElement('thead');
        table.appendChild(thead);
        const trTitle = document.createElement('tr');
        thead.appendChild(trTitle);
        const tbody = document.createElement('tbody');
        table.appendChild(tbody);
        for (const d of data) {
            let title = Object.keys(d); // pegando apenas os titulos do objeto
            for (const t of title) {
                trTitle.innerHTML += `<th>${t}</th>`;
            }
            break;
        }
        for (const d of data) {
            let values = Object.values(d);
            const trValue = document.createElement('tr');
            tbody.appendChild(trValue);
            for (const v of values) {
                trValue.innerHTML += `<td>${v}</td>`;
                console.log(v);
            }
        }
        this.info.appendChild(table);
    }
}
new MultiPoint;
