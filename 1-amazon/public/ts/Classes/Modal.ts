type ModalInfo<U, I> = {
    modalContainer: U,
    modalContent: I
}

export class Modal<T extends Node>
{
    constructor
    (
        private _images: NodeListOf<T>,
        private _modal: ModalInfo<HTMLElement, HTMLDivElement>
    )
    {
        this._images = _images;
        this._modal = _modal;
        this._manageEvents();
    }

    private _manageEvents(): void 
    {
        this._images.forEach( ( img ) => {
            img.addEventListener( 'mouseenter', this._onMouseEenter.bind( this, img ) );
        } );
    }   


    private _onMouseEenter( img: T ): void 
    {        

        
    }
}