export class ZoomImage {
    constructor(_image, _result) {
        this._image = _image;
        this._result = _result;
        this._angleX = 0;
        this._angleY = 0;
        this._image = _image;
        this._result = _result;
        this.manageEvents();
    }
    manageEvents() {
        this._image.addEventListener('mouseenter', this._onMouseEnter.bind(this));
        this._image.addEventListener('mouseleave', this._onMouseLeave.bind(this));
        this._image.addEventListener('mousemove', this._onMouseMove.bind(this));
    }
    /**
     * it is actived when the user over the main image
     * @param { MouseEvent } e
     */
    _onMouseEnter(e) {
        this._createLens();
        this._setLensPosition(e);
        this._result.classList.add('show-result');
    }
    /**
     * It is actived when the cursor leaves the main image
    */
    _onMouseLeave() {
        var _a;
        (_a = this._lens) === null || _a === void 0 ? void 0 : _a.remove();
        this._result.classList.remove('show-result');
    }
    _onMouseMove(e) {
        this._setBackgroundImage(this._setLensPosition(e));
    }
    /**
     * This function creates the lens
     */
    _createLens() {
        var _a;
        this._lens = document.createElement('div');
        this._lens.classList.add('lens');
        (_a = this._image.parentElement) === null || _a === void 0 ? void 0 : _a.appendChild(this._lens);
    }
    /**
     * It will collect and set the x and y coordinates from the cursor pointer
     * and it sets the lens's position
     * @param { MouseEvent } e
     */
    _setLensPosition(e) {
        const { offsetX, offsetY } = e;
        const { height, width } = this._lens.getBoundingClientRect();
        this._lens.style.top = `${offsetY - height / 2}px`;
        this._lens.style.left = `${offsetX - width / 2}px`;
        return {
            x: offsetX,
            y: offsetY
        };
    }
    _setBackgroundImage(obj) {
        let positionX = obj.x - this._lens.offsetWidth / 2;
        let positionY = obj.y - this._lens.offsetHeight / 2;
        this._angleX = this._result.offsetWidth / this._lens.offsetWidth;
        this._angleY = this._result.offsetHeight / this._lens.offsetHeight;
        this._result.style.backgroundImage = `url(${this._image.src})`;
        this._result.style.backgroundRepeat = 'no-repeat';
        this._result.style.backgroundSize = `${this._angleX * this._image.width}px ${this._angleY * this._image.height}px`;
        this._result.style.backgroundPosition = `${-positionX * this._angleX}px ${-positionY * this._angleY}px`;
    }
}
