import { ZoomImage } from "../Classes/ZoomImage.js";
export default () => {
    const image = document.querySelector('.main-image__image');
    new ZoomImage(image);
};
