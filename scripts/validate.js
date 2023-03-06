const formValidationConfig = {
    formSelector: '.form',
    inputSelector: '.form__item',
    inputErrorClass: 'form__item_type_error',
    buttonSelector: '.form__button',
    buttonDisabledClass: 'form__button_disabled',
    errorClass: 'form__error_visible'
};

function disableSubmit(evt) {
    evt.preventDefault();
 }
 
function enableValidation(config) {
    const formList = Array.from(document.querySelectorAll(config.formSelector));
    formList.forEach((form) => {
        form.addEventListener('submit', disableSubmit);
        form.addEventListener('input', () => {
            toggleButton(form, config);
        });
        addInputListeners(form, config);
        toggleButton(form, config);
    })

    
}

function handleFormInput(event, config) {
    const input = event.target;
    const inputId = input.id
    const errorElement = document.querySelector(`#${inputId}-error`);
    

    if (input.validity.valid) {
        input.classList.remove(config.inputErrorClass);
        errorElement.classList.remove(config.errorClass)
        errorElement.textContent = '';
    } else {
        input.classList.add(config.inputErrorClass);
        errorElement.classList.add(config.errorClass)
        errorElement.textContent = input.validationMessage;
    }
}

function toggleButton(form, config) {
    const buttonSubmit = form.querySelector(config.buttonSelector);
    const isFormValid = form.checkValidity();
    buttonSubmit.disabled = !isFormValid;
    buttonSubmit.classList.toggle(config.buttonDisabledClass, !isFormValid)

}

function addInputListeners(form, config) {
    const inputList = Array.from(form.querySelectorAll(config.inputSelector));

    inputList.forEach(function (item){
        item.addEventListener('input', (event) => {
            handleFormInput(event, config);
        })
    });
}


enableValidation(formValidationConfig);



