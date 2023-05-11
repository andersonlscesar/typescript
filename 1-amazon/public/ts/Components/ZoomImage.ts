import { ZoomImage } from "../Classes/ZoomImage.js";

export default () => {
    const image = document.querySelector( '.main-image__image' ) as HTMLImageElement;
    const result = document.querySelector( '.result' ) as HTMLDivElement;
    new ZoomImage( image, result );
 }