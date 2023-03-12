class FormValidator {
    constructor (config, formElement) {
        this._form = document.querySelector(formElement);
        this._formSelector = config.formSelector;
        this._inputSelector = config.inputSelector;
        this._inputErrorClass = config.inputErrorClass;
        this._buttonSelector = config.buttonSelector;
        this._buttonDisabledClass = config.buttonDisabledClass;
        this._errorClass = config.errorClass;

        this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
        this._buttonSubmit = this._form.querySelector(this._buttonSelector);
    }

    _removeErrorFormInput(input) {
        const inputId = input.id;
        const errorElement = this._form.querySelector(`#${inputId}-error`);

        input.classList.remove(this._inputErrorClass);
        errorElement.classList.remove(this._errorClass);
        errorElement.textContent = '';
    }

    _addErrorFormInput(input) {
        const inputId = input.id;
        const errorElement = this._form.querySelector(`#${inputId}-error`);

        input.classList.add(this._inputErrorClass);
        errorElement.classList.add(this._errorClass)
        errorElement.textContent = input.validationMessage;
    }

    _hasInvalidInput() {
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    }

    _checkInputValid(input) {
        if (this._hasInvalidInput(input)) {
            this._addErrorFormInput(input);
        } else {
            this._removeErrorFormInput(input);
        }
    }

    _disableSubmit(event) {
        event.preventDefault();
    }

    _toggleButtonState() {
        this._isFormValid = this._form.checkValidity(); 
        this._buttonSubmit.disabled = !this._isFormValid; 
        this._buttonSubmit.classList.toggle(this._buttonDisabledClass, !this._isFormValid); 
    }

    _setEventListeners() {  
        this._form.addEventListener('submit', this._disableSubmit.bind(this));
        this._inputList.forEach((input) => {
            input.addEventListener('input', () => {
                this._checkInputValid(input);
                this._toggleButtonState();
            })
        });
    }

    resetValidation() {
        this._toggleButtonState();
        this._inputList.forEach((input) => {
            this._removeErrorFormInput(input);
        })
    }

    enableValidation() {
        this._setEventListeners(); 
        this._toggleButtonState();
    }
}

export default FormValidator