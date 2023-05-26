export class Modal {
    constructor(_images, _modal) {
        this._images = _images;
        this._modal = _modal;
        this._btnCloseModal = document.querySelector('.close-modal');
        this._images = _images;
        this._modal = _modal;
        this._manageEvents();
    }
    _manageEvents() {
        window.addEventListener('keyup', this._closeModalByEsc.bind(this));
        this._btnCloseModal.addEventListener('click', this._closeModal.bind(this));
        this._modal.modalContainer.addEventListener('click', this._outsideClick.bind(this));
        this._images.forEach((img) => {
            img.addEventListener('click', this._openModal.bind(this, img));
        });
    }
    _openModal(img) {
        this._modal.modalContainer.classList.add('modal--active');
        let i = img;
        this._setImage(i);
    }
    _closeModal() {
        this._modal.modalContainer.classList.remove('modal--active');
    }
    _closeModalByEsc(e) {
        if (e.key === 'Escape') {
            this._closeModal();
        }
    }
    _outsideClick(e) {
        if (e.target === this._modal.modalContainer)
            this._closeModal();
    }
    _setImage(img) {
        let i = img;
        this._modal.modalContent.children[this._modal.modalContent.children.length - 1].setAttribute('src', `${i.src}`);
    }
}
