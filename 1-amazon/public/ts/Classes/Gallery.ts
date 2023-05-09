export class Gallery
{
    constructor
    (
        private _images: NodeListOf<HTMLImageElement>, // All images in the section
        private _mainImage: HTMLImageElement
    )
    {
        this._images = _images;
        this._mainImage = _mainImage;
        this._manageEvents();
    }

    /**
     * It manages all the event on the elements
     */

    private _manageEvents(): void 
    {
        this._images.forEach( ( image ) => {
            image.addEventListener( 'mouseover', this._onMouseOver.bind( this, image ) );
        });
    }

    /**
     * this function is actived when the user over the images indicators
     * @param { HTMLImageElement } img 
     */

    private _onMouseOver( img: HTMLImageElement ): void 
    {
        this._mainImage.src = img.src;
        console.log( img.src)
    }
}