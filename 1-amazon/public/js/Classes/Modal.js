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
        this._images.forEach((img) => {
            img.addEventListener('click', this._openModal.bind(this, img));
        });
        this._btnCloseModal.addEventListener('click', this._closeModal.bind(this));
    }
    _openModal(img) {
        this._modal.modalContainer.classList.add('modal--active');
        let i = img;
        this._setImage(i);
    }
    _closeModal() {
        this._modal.modalContainer.classList.remove('modal--active');
    }
    _setImage(img) {
        let i = img;
        this._modal.modalContent.children[this._modal.modalContent.children.length - 1].setAttribute('src', `${i.src}`);
    }
}
