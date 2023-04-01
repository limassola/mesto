import Popup from "./Popup.js";

class PopupWithSubmit extends Popup {
    constructor(popupSelector, {handleFormSubmit}){
        super(popupSelector);
        this._form = this._popup.querySelector('.form');
        this._handleFormSubmit = handleFormSubmit;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault()
            this._handleFormSubmit(this._cardId, this._card)
        })
    }

    close() {
        super.close();
        this._form.reset();
    }

    open(cardId, card) {
        super.open()
        this._cardId = cardId;
        this._card = card;
    }
}

export default PopupWithSubmit;