interface JSONData {
    [key: string | number ]: string | number
}

class MyWiki 
{
    public readonly url: string = 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&origin=*&srsearch=';

    public readonly config = {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    };

    private result = document.querySelector( '#results' ) as HTMLDivElement;

    constructor
    (
        private input: HTMLInputElement
    )
    {
        this.manageEvents();
    }

    private manageEvents(): void 
    {
        this.input.addEventListener( 'input', this.getData.bind( this ) );
    }


    private async getData(): Promise<void>
    {   
        this.result.innerHTML = 'Carregando ...';
        let dataSearched = this.url + this.input.value;
        try {

            const fetchData: Response = await fetch( dataSearched, this.config );
            const json: any = await fetchData.json();
            this.render( json.query.search );

        } catch ( error ) { 
            this.result.innerHTML = 'Nada a pesquisar ...';
        }
    }


    private render( data: Array<JSONData> ): void
    {
        let html = '';
        data.forEach( data => {
            html += `
                        <div class="results__card">
                            <h1>${ data.title }</h1>
                            <p>${ data.snippet }</p>
                        </div>
    
            `;
        });
 
        this.result.innerHTML = html;

    }
}

const input = document.querySelector( '.search__input' ) as HTMLInputElement;
new MyWiki( input );