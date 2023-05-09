export class Gallery {
    constructor(_images, // All images in the section
    _mainImage) {
        this._images = _images;
        this._mainImage = _mainImage;
        this._images = _images;
        this._mainImage = _mainImage;
        this._manageEvents();
    }
    /**
     * It manages all the event on the elements
     */
    _manageEvents() {
        this._images.forEach((image) => {
            image.addEventListener('mouseover', this._onMouseOver.bind(this, image));
        });
    }
    /**
     * this function is actived when the user over the images indicators
     * @param { HTMLImageElement } img
     */
    _onMouseOver(img) {
        this._mainImage.src = img.src;
        console.log(img.src);
    }
}
