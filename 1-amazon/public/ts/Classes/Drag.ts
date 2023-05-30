export class Drag 
{
    public isDragging: boolean = false;
    private _initialX: number = 0;
    private _initialY: number = 0;
    private _currentX: number = 0;
    private _currentY: number = 0;
    private _modalImage=  this._modal.querySelector( 'img' ) as HTMLImageElement;

    constructor ( private _modal: HTMLDivElement )
    {
        this._modal = _modal;    
        this._manage();

    }

    private _manage(): void 
    {
        this._modal.addEventListener( 'mousedown', this._startGrabbing.bind( this ) );
        this._modal.addEventListener( 'mouseup', this._endGrabbing.bind( this ) );
        this._modal.addEventListener( 'pointermove', this._dragging.bind( this ) );
    }

    private _startGrabbing( e: MouseEvent ): void 
    {
        this.isDragging = true;
        const { clientX, clientY } = e;
        this._initialX = clientX - this._modal.offsetLeft;
        this._initialY = clientY - this._modal.offsetTop;
        this._changeCursor();
        this._preventImageDragging();
    }

    private _endGrabbing(): void 
    {
        this.isDragging = false;
        this._changeCursor();
    }

    private _changeCursor(): void 
    {
        this._modal.classList.toggle( 'modal__content--grabbing', this.isDragging );
    }

    /**
     * It handles with the ghost image
     */
    
    private _preventImageDragging(): void 
    {
        this._modalImage.addEventListener( 'dragstart',  e => e.preventDefault() );        
    }



    private _dragging( e: PointerEvent ): void 
    {
        if ( this.isDragging ) {
            const { clientX, clientY } = e;
            this._currentX = clientX - this._initialX;
            this._currentY = clientY - this._initialY;
            this._setModalPosition( e );
        }
    }
    
    private _setModalPosition( e: PointerEvent ): void 
    {
        const { height, width } = this._modal.getBoundingClientRect();

        
        if ( this._currentY - height / 2 < 0 ) {
            this._currentY =  height / 2;
            this._modal.style.top = `${ this._currentY }px`;
        } else if ( this._currentY > window.innerHeight - height / 2 ) {
            this._currentY = window.innerHeight - height / 2;
            this._modal.style.top = `${ this._currentY }px`;
        } else if ( this._currentX - width / 2 < 0 ) {
            this._currentX = width / 2;
            this._modal.style.left = `${ this._currentX }px`;
        } else if ( this._currentX > document.documentElement.clientWidth - width / 2 ) {
            this._currentX =document.documentElement.clientWidth - width / 2;
            this._modal.style.left = `${ this._currentX }px`;
        }
        
        if ( this._currentY - height / 2 <= 0 && this._currentX - width / 2 <= 0) {
            this._currentY =  height / 2;
            this._currentX = width / 2;
            this._modal.style.top = `${ this._currentY }px`;
            this._modal.style.left = `${ this._currentX }px`;
        } else if ( this._currentY >= window.innerHeight - height / 2 && this._currentX - width / 2 <= 0 ) {
            this._currentX = width / 2;
            this._currentY = window.innerHeight - height / 2;
            this._modal.style.top = `${ this._currentY }px`;
            this._modal.style.left = `${ this._currentX }px`;
        } else if ( this._currentY - height / 2 <= 0 && this._currentX >= document.documentElement.clientWidth - width / 2) {
            this._currentY =  height / 2;
            this._currentX =  document.documentElement.clientWidth - width / 2;
            this._modal.style.top = `${ this._currentY }px`;
            this._modal.style.left = `${ this._currentX }px`;
        } else if ( this._currentY >= window.innerHeight - height / 2 && this._currentX >= document.documentElement.clientWidth - width / 2) {
            this._currentY = window.innerHeight - height / 2;
            this._currentX = document.documentElement.clientWidth - width / 2;
            this._modal.style.top = `${ this._currentY }px`;
            this._modal.style.left = `${ this._currentX }px`;
        }
        
        this._modal.style.top = `${ this._currentY }px`;
        this._modal.style.left = `${ this._currentX }px`;
        this._modal.setPointerCapture( e.pointerId );
    }
    
    
    public resetModalPosition(): void 
    {
        if ( !this.isDragging ) {
            this._modal.style.top = ``;
            this._modal.style.left = ``;
        }
    }
}