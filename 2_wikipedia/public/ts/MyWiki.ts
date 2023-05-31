interface Elemetns {
    input: HTMLInputElement,    
}


class MyWiki 
{
    public readonly url: string = 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&origin=*&srsearch';
    
    public readonly config = {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    };

    constructor
    (
        private input: HTMLInputElement
    )
    {
        this.manageEvents();
    }

    private manageEvents(): void 
    {
        this.input.addEventListener( 'input', this.loadData.bind( this ) );
    }


    private loadData()
    {
        
    }

}

const input = document.querySelector( '.search__input' ) as HTMLInputElement;
new MyWiki( input );