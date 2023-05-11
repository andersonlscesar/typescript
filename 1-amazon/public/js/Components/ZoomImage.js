import { ZoomImage } from "../Classes/ZoomImage.js";
export default () => {
    const image = document.querySelector('.main-image__image');
    const result = document.querySelector('.result');
    new ZoomImage(image, result);
};
