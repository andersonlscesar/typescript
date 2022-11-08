class DataStorage<T> {
    private data: T[] = []

    addItem(item: T) {
        this.data.push(item)
    }

    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1)
    }

    get getItems() {
        return [...this.data]
    }
}

const textStorage = new DataStorage<string>()
textStorage.addItem('Anderson')
textStorage.addItem('Luiz')
textStorage.addItem('Santos')
textStorage.addItem('César')
console.log(textStorage.getItems)