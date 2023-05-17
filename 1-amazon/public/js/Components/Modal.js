import { Modal } from "../Classes/Modal.js";
export default () => {
    const images = document.querySelectorAll('.index-images__image');
    const info = {
        modalContainer: document.querySelector('.modal'),
        modalContent: document.querySelector('.modal__content')
    };
    new Modal(images, info);
};
