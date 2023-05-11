type Positions = {
    x: number,
    y: number
}

export class ZoomImage
{
    private _lens!: HTMLDivElement;
    private _angleX: number = 0;
    private _angleY: number = 0;

    constructor
    (
        private _image: HTMLImageElement,
        private _result: HTMLDivElement
    )
    {
        this._image = _image;
        this._result = _result;
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
        this._result.classList.add( 'show-result' );
    }   
    
    /**
     * It is actived when the cursor leaves the main image
    */
   
   private _onMouseLeave(): void 
   {
       this._lens?.remove();
       this._result.classList.remove( 'show-result' );       
   }
    
    
    private _onMouseMove( e: MouseEvent ): void 
    {
        this._setBackgroundImage( this._setLensPosition( e ) );
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

    private _setLensPosition( e: MouseEvent ): Positions 
    {
        const { offsetX, offsetY } = e;
        const { height, width } = this._lens.getBoundingClientRect();
        this._lens.style.top = `${ offsetY - height / 2 }px`;
        this._lens.style.left = `${ offsetX - width / 2 }px`;   
        return {
            x: offsetX,
            y: offsetY
        }     
    }


    private _setBackgroundImage( obj: Positions ): void 
    {
        let positionX = obj.x - this._lens.offsetWidth / 2;
        let positionY = obj.y - this._lens.offsetHeight / 2;
        this._angleX = this._result.offsetWidth / this._lens.offsetWidth;
        this._angleY = this._result.offsetHeight / this._lens.offsetHeight;
        this._result.style.backgroundImage = `url(${ this._image.src })`;
        this._result.style.backgroundRepeat = 'no-repeat';
        this._result.style.backgroundSize = `${ this._angleX * this._image.width }px ${ this._angleY * this._image.height }px`;
        this._result.style.backgroundPosition = `${ - positionX * this._angleX }px ${ - positionY * this._angleY }px`;        
    }
}