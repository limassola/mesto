import Popup from "./Popup.js";

class PopupWithForm extends Popup {
    constructor(popupSelector, submitCallback) {
        super(popupSelector);
        this._submitCallback = submitCallback;
        this._formElement = this._popup.querySelector('.form');
        this._inputList = this._formElement.querySelectorAll('.form__item');
    }

    _getInputValues() {
        this._inputValues = {};
        this._inputList.forEach(input => {
            this._inputValues[input.name] = input.value;
        });
        return this._inputValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitCallback(this._getInputValues());
            this.close();
        })
    }

    close() {
        super.close();
        this._formElement.reset();
    }
}

export default PopupWithForm;