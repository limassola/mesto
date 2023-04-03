import Popup from "./Popup.js";

class PopupWithForm extends Popup {
    constructor(popupSelector, {submitCallback}) {
        super(popupSelector);
        this._submitCallback = submitCallback;
        this._formElement = this._popup.querySelector('.form');
        this._formSubmitButton = this._formElement.querySelector('.form__button');
        this._inputList = this._formElement.querySelectorAll('.form__item');
        this._formSubmitButtonTextContent = this._formSubmitButton.textContent
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
            // this.close();
        })
    }

    close() {
        super.close();
        this._formElement.reset();
    }

    renderLoading(isLoading) {
        if(isLoading) {
            this._formSubmitButton.textContent = "Сохранение...";
        } else {
            this._formSubmitButtonTextContent;
        }
    }

}

export default PopupWithForm;