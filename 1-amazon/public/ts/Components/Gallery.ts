import { Gallery } from "../Classes/Gallery.js";

export default () => {
    const images = document.querySelectorAll( '.index-images__image' ) as NodeListOf<HTMLImageElement>;
    const mainImage = document.querySelector( '.main-image__image' ) as HTMLImageElement;
    new Gallery( images, mainImage );
}