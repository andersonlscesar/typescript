export class ZoomImage
{
    private _lens!: HTMLDivElement;

    constructor
    (
        private _image: HTMLImageElement
    )
    {
        this._image = _image;
        this.manageEvents();
    }

    private manageEvents(): void 
    {
        this._image.addEventListener( 'mouseenter', this._onMouseEnter.bind( this ) );
        this._image.addEventListener( 'mouseleave', this._onMouseLeave.bind( this ) );
    }


    /**
     * it is actived when the user over the main image
     * @param { MouseEvent } e 
     */

    private _onMouseEnter( e: MouseEvent ): void 
    {
        this._createLens();
    }   

    /**
     * It is actived when the cursor leaves the main image
     */

    private _onMouseLeave(): void 
    {
        this._lens?.remove();
    }


    private _createLens(): void 
    {
        this._lens = document.createElement( 'div' );
        this._lens.classList.add( 'lens' );
        this._image.parentElement?.appendChild( this._lens );
    }
}