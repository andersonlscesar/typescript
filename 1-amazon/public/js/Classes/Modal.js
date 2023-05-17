export class Modal {
    constructor(_images, _modal) {
        this._images = _images;
        this._modal = _modal;
        this._images = _images;
        this._modal = _modal;
        this._manageEvents();
    }
    _manageEvents() {
        this._images.forEach((img) => {
            img.addEventListener('mouseenter', this._onMouseEenter.bind(this, img));
        });
    }
    _onMouseEenter(img) {
    }
}
