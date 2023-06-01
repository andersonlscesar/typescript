"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class MyWiki {
    constructor(input) {
        this.input = input;
        this.url = 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&origin=*&srsearch=';
        this.config = {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        };
        this.result = document.querySelector('#results');
        this.manageEvents();
    }
    manageEvents() {
        this.input.addEventListener('input', this.getData.bind(this));
    }
    getData() {
        return __awaiter(this, void 0, void 0, function* () {
            this.result.innerHTML = 'Carregando ...';
            let dataSearched = this.url + this.input.value;
            try {
                const fetchData = yield fetch(dataSearched, this.config);
                const json = yield fetchData.json();
                this.render(json.query.search);
            }
            catch (error) {
                this.result.innerHTML = 'Nada a pesquisar ...';
            }
        });
    }
    render(data) {
        let html = '';
        console.log(data);
        data.forEach(data => {
            html += `
                        <div class="results__card">
                            <h1>${data.title}</h1>
                            <p>${data.snippet}</p>
                        </div>
    
            `;
        });
        this.result.innerHTML = html;
    }
}
const input = document.querySelector('.search__input');
new MyWiki(input);
