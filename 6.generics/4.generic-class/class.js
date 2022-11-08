"use strict";
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    get getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('Anderson');
textStorage.addItem('Luiz');
textStorage.addItem('Santos');
textStorage.addItem('César');
console.log(textStorage.getItems);
