import { ZoomImage } from "../Classes/ZoomImage.js";

export default () => {
    const image = document.querySelector( '.main-image__image' ) as HTMLImageElement;
    new ZoomImage( image );
}