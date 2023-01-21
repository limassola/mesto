let openButton = document.querySelector('.profile__button-edit');
// let addButton = document.querySelector('.profile__button-add')

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
// addButton.addEventListener('click', openPopup);

function closePopup (currentPopup) {
    currentPopup.classList.remove('popup_opened')
};


// fuction закрытия всех попапов
let buttonsClose = document.querySelectorAll('.popup__button')

buttonsClose.forEach(button =>{
    button.addEventListener('click', function(evt){
        const popupItem = evt.target.closest('.popup');
        closePopup(popupItem);
    })
});







let formElement = document.querySelector('.form')
// let formElement = form.querySelector('.button__save')



function handleFormSubmit (evt) {
    evt.preventDefault();

    profileContent.textContent = nameInput.value;
    jobContent.textContent = jobInput.value;

    closePopup ();
}

formElement.addEventListener('submit', handleFormSubmit); 

