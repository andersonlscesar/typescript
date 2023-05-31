"use strict";
class MyWiki {
    constructor(input) {
        this.input = input;
        this.url = 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&origin=*&srsearch';
        this.config = {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        };
        this.manageEvents();
    }
    manageEvents() {
        this.input.addEventListener('input', this.loadData.bind(this));
    }
    loadData() {
    }
}
const input = document.querySelector('.search__input');
new MyWiki(input);
