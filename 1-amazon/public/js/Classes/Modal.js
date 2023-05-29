import { Drag } from './Drag.js';
export class Modal {
    constructor(_images, _modal) {
        this._images = _images;
        this._modal = _modal;
        this._btnCloseModal = document.querySelector('.close-modal');
        this._images = _images;
        this._modal = _modal;
        this._drag = new Drag(this._modal.modalContent);
        this._manageEvents();
    }
    /**
     * Manage all the events
     */
    _manageEvents() {
        window.addEventListener('keyup', this._closeModalByEsc.bind(this));
        this._btnCloseModal.addEventListener('click', this._closeModal.bind(this));
        this._modal.modalContainer.addEventListener('click', this._outsideClick.bind(this));
        this._images.forEach((img) => {
            img.addEventListener('click', this._openModal.bind(this, img));
        });
    }
    /**
     * It opens the modal element
     * @param { T } img
     */
    _openModal(img) {
        this._modal.modalContainer.classList.add('modal--active');
        let i = img;
        this._setImage(i);
    }
    /**
     * It closes the modal element
     */
    _closeModal() {
        this._modal.modalContainer.classList.remove('modal--active');
        setTimeout(() => {
            this._drag.isDragging = false;
            this._drag.resetModalPosition();
        }, 200);
    }
    /**
     * this function is actived when the user press the escape key
     * @param { KeyboardEvent } e
     */
    _closeModalByEsc(e) {
        if (e.key === 'Escape') {
            this._closeModal();
        }
    }
    /**
     * By convention, it's like a standard, it possible click outside of the modal in order to close it
     * @param { MouseEvent } e
     */
    _outsideClick(e) {
        if (e.target === this._modal.modalContainer)
            this._closeModal();
    }
    /**
     * It sets the src for the image in the modal
     * @param { unknown} img
     */
    _setImage(img) {
        let i = img;
        this._modal.modalContent.children[this._modal.modalContent.children.length - 1].setAttribute('src', `${i.src}`);
    }
}
