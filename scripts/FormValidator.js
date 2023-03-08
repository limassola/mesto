const formValidationConfig = {
    formSelector: '.form',
    inputSelector: '.form__item',
    inputErrorClass: 'form__item_type_error',
    buttonSelector: '.form__button',
    buttonDisabledClass: 'form__button_disabled',
    errorClass: 'form__error_visible'
};


 class FormValidator {
    constructor (config, form) {
        this._form = document.querySelector(form);
        this._formSelector = config.formSelector;
        this._inputSelector = config.inputSelector;
        this._inputErrorClass = config.inputErrorClass;
        this._buttonSelector = config.buttonSelector;
        this._buttonDisabledClass = config.buttonDisabledClass;
        this._errorClass = config.errorClass;
    }

    _handleFormInput(item) {
        this._input = item;
        this._inputId = this._input.id;
        this._errorElement = this._form.querySelector(`#${this._inputId}-error`);

        if (this._input.validity.valid) {
            this._input.classList.remove(this._inputErrorClass);
            this._errorElement.classList.remove(this._errorClass)
            this._errorElement.textContent = '';
        } else {
            this._input.classList.add(this._inputErrorClass);
            this._errorElement.classList.add(this._errorClass)
            this._errorElement.textContent = this._input.validationMessage;
        }
    }

    _disableSubmit(event) {
        event.preventDefault();
    }

    _toggleButton() {
        this._buttonSubmit = this._form.querySelector(this._buttonSelector);
        this._isFormValid = this._form.checkValidity();
        this._buttonSubmit.disabled = !this._isFormValid;
        this._buttonSubmit.classList.toggle(this._buttonDisabledClass, !this._isFormValid);
    }

    _addInputListeners() {
        this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
        this._inputList.forEach((item) => {
            item.addEventListener('input', () => {
                this._handleFormInput(item);
            })
        });
    }


    enableValidation() {
        this._addInputListeners();
        this._toggleButton();
        
        this._form.addEventListener('submit', (event) => {
            this._disableSubmit(event);
        });

        this._form.addEventListener('input', () => {
            this._toggleButton();
        });

        
    }

}

export { formValidationConfig, FormValidator }