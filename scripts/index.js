let openButton = document.querySelector('.profile__button-edit');

let closeButton = document.querySelector('.popup__button');

let popUp = document.querySelector('.popup');

let profileContent = document.querySelector('.profile__name');
let jobContent = document.querySelector('.profile__job');



let nameInput = document.querySelector('.form__item_type_name');
let jobInput = document.querySelector('.form__item_type_job');





function openPopup() {
    popUp.classList.add('popup_opened')
    
    nameInput.value = profileContent.textContent;
    jobInput.value = jobContent.textContent;
    
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

    profileContent.textContent = nameInput.value;
    jobContent.textContent = jobInput.value;

    closePopup ();
}

formElement.addEventListener('submit', handleFormSubmit); 

