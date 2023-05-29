import { Drag } from './Drag.js';

type ModalInfo<U, I> = {
    modalContainer: U,
    modalContent: I
}

export class Modal<T extends Node>
{
    private _btnCloseModal = document.querySelector( '.close-modal' ) as HTMLElement; 
    private _drag!: Drag;

    constructor
    (
        private _images: NodeListOf<T>,
        private _modal: ModalInfo<HTMLElement, HTMLDivElement>
    )
    {
        this._images = _images;
        this._modal = _modal;
        this._drag = new Drag( this._modal.modalContent );
        this._manageEvents();
    }

    /**
     * Manage all the events
     */

    private _manageEvents(): void 
    {
        window.addEventListener( 'keyup', this._closeModalByEsc.bind( this ) );
        this._btnCloseModal.addEventListener( 'click', this._closeModal.bind( this ) );
        this._modal.modalContainer.addEventListener( 'click', this._outsideClick.bind( this ) );
        this._images.forEach( ( img ) => {
            img.addEventListener( 'click', this._openModal.bind( this, img ) );
        } );
    }  
    
    /**
     * It opens the modal element
     * @param { T } img 
     */

    private _openModal( img: T ): void 
    {
        this._modal.modalContainer.classList.add( 'modal--active' );
        let i = <unknown> img;
        this._setImage( i );
    }

    /**
     * It closes the modal element
     */

    private _closeModal(): void 
    {
        this._modal.modalContainer.classList.remove( 'modal--active' );
        setTimeout( () => {
            this._drag.isDragging = false;
            this._drag.resetModalPosition();           

        }, 200);
    }

    /**
     * this function is actived when the user press the escape key
     * @param { KeyboardEvent } e 
     */

    private _closeModalByEsc( e: KeyboardEvent): void 
    {
        if ( e.key === 'Escape' ) {
            this._closeModal();
        }
    }

    /**
     * By convention, it's like a standard, it possible click outside of the modal in order to close it
     * @param { MouseEvent } e 
     */

    private _outsideClick( e: MouseEvent ): void 
    {
        if ( e.target === this._modal.modalContainer) this._closeModal();
    }

    /**
     * It sets the src for the image in the modal
     * @param { unknown} img 
     */

    private _setImage( img: unknown ): void 
    {        
        let i = <HTMLImageElement> img;
        this._modal.modalContent.children[ this._modal.modalContent.children.length - 1 ].setAttribute( 'src', `${ i.src }` );
    }
}