export class ZoomImage {
    constructor(_image) {
        this._image = _image;
        this._image = _image;
        this.manageEvents();
    }
    manageEvents() {
        this._image.addEventListener('mouseenter', this._onMouseEnter.bind(this));
        this._image.addEventListener('mouseleave', this._onMouseLeave.bind(this));
    }
    /**
     * it is actived when the user over the main image
     * @param { MouseEvent } e
     */
    _onMouseEnter(e) {
        this._createLens();
    }
    /**
     * It is actived when the cursor leaves the main image
     */
    _onMouseLeave() {
        var _a;
        (_a = this._lens) === null || _a === void 0 ? void 0 : _a.remove();
    }
    _createLens() {
        var _a;
        this._lens = document.createElement('div');
        this._lens.classList.add('lens');
        (_a = this._image.parentElement) === null || _a === void 0 ? void 0 : _a.appendChild(this._lens);
    }
}
