type ModalInfo<U, I> = {
    modalContainer: U,
    modalContent: I
}

export class Modal<T extends Node>
{
    private _btnCloseModal = document.querySelector( '.close-modal' ) as HTMLElement;

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
        window.addEventListener( 'keyup', this._closeModalByEsc.bind( this ) );
        this._btnCloseModal.addEventListener( 'click', this._closeModal.bind( this ) );
        this._modal.modalContainer.addEventListener( 'click', this._outsideClick.bind( this ) );
        this._images.forEach( ( img ) => {
            img.addEventListener( 'click', this._openModal.bind( this, img ) );
        } );
    }   

    private _openModal( img: T ): void 
    {
        this._modal.modalContainer.classList.add( 'modal--active' );
        let i = <unknown> img;
        this._setImage( i );
    }

    private _closeModal(): void 
    {
        this._modal.modalContainer.classList.remove( 'modal--active' );
    }

    private _closeModalByEsc( e: KeyboardEvent): void 
    {
        if ( e.key === 'Escape' ) {
            this._closeModal();
        }
    }

    private _outsideClick( e: MouseEvent ): void 
    {
        if ( e.target === this._modal.modalContainer) this._closeModal();
    }


    private _setImage( img: unknown ): void 
    {        
        let i = <HTMLImageElement> img;
        this._modal.modalContent.children[ this._modal.modalContent.children.length - 1 ].setAttribute( 'src', `${ i.src }` );
    }
}