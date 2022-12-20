let openButton = document.querySelector('.button__edit');

let closeButton = document.querySelector('.button__close');

let popUp = document.querySelector('.popup');

let profileContent = document.querySelector('.profile__name');
let jobContent = document.querySelector('.profile__job');

let nameValue = profileContent.textContent
let jobValue = jobContent.textContent

let nameInput = document.querySelector('.form__item_type_name')
let jobInput = document.querySelector('.form__item_type_job')


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


