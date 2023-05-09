import { Gallery } from "../Classes/Gallery.js";
export default () => {
    const images = document.querySelectorAll('.index-images__image');
    const mainImage = document.querySelector('.main-image__image');
    new Gallery(images, mainImage);
};
