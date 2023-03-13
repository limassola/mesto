import Card from "./Card.js";
import FormValidator from "./FormValidator.js";

const formValidationConfig = { 
  formSelector: '.form', 
  inputSelector: '.form__item', 
  inputErrorClass: 'form__item_type_error', 
  buttonSelector: '.form__button', 
  buttonDisabledClass: 'form__button_disabled', 
  errorClass: 'form__error_visible' 
};


const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const editButton = document.querySelector('.profile__button-edit');
const addButton = document.querySelector('.profile__button-add')

const closeButtons = document.querySelectorAll('.popup__button');


const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');
const imagePopup = document.querySelector('.popup_type_image');

const profileContent = document.querySelector('.profile__name');
const jobContent = document.querySelector('.profile__job');



const nameInput = document.querySelector('.form__item_type_name');
const jobInput = document.querySelector('.form__item_type_job');

const cardsContainer = document.querySelector('.cards');
const titleInput = document.querySelector('.form__item_type_title');
const linkInput = document.querySelector('.form__item_type_link');


const imageActive = imagePopup.querySelector('.popup__image');
const titleActive = imagePopup.querySelector('.popup__title');
const template = document.querySelector('.cards__item-template');

const popupEditFormElement = popupEdit.querySelector('.form');
const popupAddFormElement = popupAdd.querySelector('.form');

 function createNewCards (item) {
    cardsContainer.prepend(renderCard(item));
 }


function renderCard(data) {
  const newCard = new Card(data, '.cards__item-template', (cardName, cardLink) => {
    imageActive.src = cardLink;
    imageActive.alt = cardName;
    titleActive.textContent = cardName;
    openPopup(imagePopup);
  });
   return newCard.generateCard();
};

initialCards.forEach((item) => {
  createNewCards (item)
});


const editFormValidation = new FormValidator(formValidationConfig, '.form_edit');
editFormValidation.enableValidation();
const addFormValidation = new FormValidator(formValidationConfig, '.form_add');
addFormValidation.enableValidation();


// function открытия попапов
function openPopup(popup) {
    popup.classList.add('popup_opened')
    document.addEventListener('keydown', closeByEscape);
}

function openEditPopup() {
  nameInput.value = profileContent.textContent;
  jobInput.value = jobContent.textContent;
  openPopup(popupEdit);
  editFormValidation.resetValidation();
}

function openAddPopup() {
  titleInput.value = '';
  linkInput.value = '';
  openPopup(popupAdd);
  addFormValidation.resetValidation();
}

editButton.addEventListener('click', openEditPopup);
addButton.addEventListener('click', openAddPopup);


// fuction закрытия всех попапов

function closeByEscape(evt) {
  if(evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
};

closeButtons.forEach(button =>{
  const popupItem = button.closest('.popup');  
  button.addEventListener('click', function(evt){
        closePopup(popupItem);
    })
});

function handleFormSubmit (evt) {
    evt.preventDefault();

    profileContent.textContent = nameInput.value;
    jobContent.textContent = jobInput.value;
    closePopup (popupEdit);
}

popupEditFormElement.addEventListener('submit', handleFormSubmit); 



function addFormHandler(evt, item){
  evt.preventDefault();
  const cardName = titleInput.value
  const cardLink = linkInput.value
  createNewCards({name:cardName, link:cardLink});
  closePopup (popupAdd);
};


popupAddFormElement.addEventListener('submit', addFormHandler);

// функция закрытия по нажатию на оверлэй

function closeByOverlay(evt) {
  if(evt.target.classList.contains('popup_opened')) {
    closePopup(evt.target);
  }
}

imagePopup.addEventListener('mousedown', closeByOverlay);

popupAdd.addEventListener('mousedown', closeByOverlay);

popupEdit.addEventListener('mousedown', closeByOverlay);





