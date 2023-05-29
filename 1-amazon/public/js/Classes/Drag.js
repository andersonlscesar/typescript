export class Drag {
    constructor(_modal) {
        this._modal = _modal;
        this.isDragging = false;
        this._initialX = 0;
        this._initialY = 0;
        this._currentX = 0;
        this._currentY = 0;
        this._modalImage = this._modal.querySelector('img');
        this._modal = _modal;
        this._manage();
    }
    _manage() {
        this._modal.addEventListener('mousedown', this._startGrabbing.bind(this));
        this._modal.addEventListener('mouseup', this._endGrabbing.bind(this));
        this._modal.addEventListener('pointermove', this._dragging.bind(this));
    }
    _startGrabbing(e) {
        this.isDragging = true;
        const { clientX, clientY } = e;
        this._initialX = clientX - this._modal.offsetLeft;
        this._initialY = clientY - this._modal.offsetTop;
        this._changeCursor();
        this._preventImageDragging();
    }
    _endGrabbing() {
        this.isDragging = false;
        this._changeCursor();
    }
    _changeCursor() {
        this._modal.classList.toggle('modal__content--grabbing', this.isDragging);
    }
    /**
     * It handles with the ghost image
     */
    _preventImageDragging() {
        this._modalImage.addEventListener('dragstart', e => e.preventDefault());
    }
    _dragging(e) {
        if (this.isDragging) {
            const { clientX, clientY } = e;
            this._currentX = clientX - this._initialX;
            this._currentY = clientY - this._initialY;
            this._setModalPosition(e);
        }
    }
    _setModalPosition(e) {
        const { height, width } = this._modal.getBoundingClientRect();
        this._modal.style.top = `${this._currentY}px`;
        this._modal.style.left = `${this._currentX}px`;
        this._modal.setPointerCapture(e.pointerId);
        if (this._currentY - height / 2 < 0) {
            this._currentY = height / 2;
            this._modal.style.top = `${this._currentY}px`;
        }
        else if (this._currentY > window.innerHeight - height / 2) {
            this._currentY = window.innerHeight - height / 2;
            this._modal.style.top = `${this._currentY}px`;
        }
        else if (this._currentX - width / 2 < 0) {
            this._currentX = width / 2;
            this._modal.style.left = `${this._currentX}px`;
        }
        else if (this._currentX > document.documentElement.clientWidth - width / 2) {
            this._currentX = document.documentElement.clientWidth - width / 2;
            this._modal.style.left = `${this._currentX}px`;
        }
        console.log(this._currentX, window.innerWidth);
    }
    resetModalPosition() {
        if (!this.isDragging) {
            this._modal.style.top = ``;
            this._modal.style.left = ``;
        }
    }
}
