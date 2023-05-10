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
        this._image.addEventListener( 'mousemove', this._onMouseMove.bind( this ) );
    }


    /**
     * it is actived when the user over the main image
     * @param { MouseEvent } e 
     */

    private _onMouseEnter( e: MouseEvent ): void 
    {
        this._createLens();
        this._setLensPosition( e );
    }   

    /**
     * It is actived when the cursor leaves the main image
     */

    private _onMouseLeave(): void 
    {
        this._lens?.remove();
    }


    private _onMouseMove( e: MouseEvent ): void 
    {
        this._setLensPosition( e );
    }

    /**
     * This function creates the lens
     */

    private _createLens(): void 
    {
        this._lens = document.createElement( 'div' );
        this._lens.classList.add( 'lens' );
        this._image.parentElement?.appendChild( this._lens );
    }

    /**
     * It will collect and set the x and y coordinates from the cursor pointer
     * and it sets the lens's position
     * @param { MouseEvent } e 
     */

    private _setLensPosition( e: MouseEvent ): void 
    {
        const { offsetX, offsetY } = e;
        const { height, width } = this._lens.getBoundingClientRect();
        this._lens.style.top = `${ offsetY - height / 2 }px`;
        this._lens.style.left = `${ offsetX - width / 2 }px`;        
    }

}