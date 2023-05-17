import { Modal } from "../Classes/Modal.js";


export default () => {
    const images = document.querySelectorAll( '.index-images__image' ) as NodeListOf<HTMLImageElement>;
    
    const info = {
        modalContainer: document.querySelector( '.modal' ) as HTMLElement,
        modalContent: document.querySelector( '.modal__content' ) as HTMLDivElement
    };

    new Modal<HTMLImageElement>( images, info );
}