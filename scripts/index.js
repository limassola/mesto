let editButton = document.querySelector('.profile__button-edit');
let addButton = document.querySelector('.profile__button-add')

let closeButtons = document.querySelectorAll('.popup__button');

// let popup = document.querySelector('.popup');
let popupEdit = document.querySelector('.popup_type_edit');
let popupAdd = document.querySelector('.popup_type_add')


let profileContent = document.querySelector('.profile__name');
let jobContent = document.querySelector('.profile__job');



let nameInput = document.querySelector('.form__item_type_name');
let jobInput = document.querySelector('.form__item_type_job');




// function открытия попапов
function openPopup(popup) {
    popup.classList.add('popup_opened')
    
    nameInput.value = profileContent.textContent;
    jobInput.value = jobContent.textContent;
    
}


editButton.addEventListener('click', ()=>openPopup(popupEdit));
addButton.addEventListener('click', ()=>openPopup(popupAdd));

function closePopup (currentPopup) {
    currentPopup.classList.remove('popup_opened')
};




// fuction закрытия всех попапов
closeButtons.forEach(button =>{
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


const likeButtons = document.querySelectorAll('.cards__button')

// function like() {
//     likeButton.classList.toggle('cards__button_active')
// }

likeButtons.forEach(item => {
    item.addEventListener('click', function(evt){
        const currentButton = evt.target;
        currentButton.classList.toggle('cards__button_active')
    })
})