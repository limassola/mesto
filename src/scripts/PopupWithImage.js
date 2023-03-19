import Popup from './Popup.js';

class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._imageElement = document.querySelector('.popup__image');
        this._titleElement = document.querySelector('.popup__title');
    }

    open(name, link) {
        this._imageElement.src = link;
        this._imageElement.alt = name;
        this._titleElement.textContent = name;
        super.open()
    }
}

export default PopupWithImage;