let openButton = document.querySelector('.button_type_edit');

let closeButton = document.querySelector('.button_type_close');

let popUp = document.querySelector('.popup');

let profileContent = document.querySelector('.profile__name');
let jobContent = document.querySelector('.profile__job');

let nameValue = profileContent.textContent;
let jobValue = jobContent.textContent;

let nameInput = document.querySelector('.form__item_type_name');
let jobInput = document.querySelector('.form__item_type_job');



nameInput.setAttribute('value', nameValue)
jobInput.setAttribute('value', jobValue)

function openPopup() {
    popUp.classList.add('popup_opened')
}

openButton.addEventListener('click', openPopup);

function closePopup () {
    popUp.classList.remove('popup_opened')
}

closeButton.addEventListener('click', closePopup);







let formElement = document.querySelector('.form')
// let formElement = form.querySelector('.button__save')



function handleFormSubmit (evt) {
    evt.preventDefault();

    nameInput.value;
    jobInput.value;

    profileContent.textContent = nameInput.value;
    jobContent.textContent = jobInput.value;

    closePopup ();
}

formElement.addEventListener('submit', handleFormSubmit); 

