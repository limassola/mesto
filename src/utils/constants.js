export const formValidationConfig = { 
    formSelector: '.form', 
    inputSelector: '.form__item', 
    inputErrorClass: 'form__item_type_error', 
    buttonSelector: '.form__button', 
    buttonDisabledClass: 'form__button_disabled', 
    errorClass: 'form__error_visible' 
  };
  
  
export const initialCards = [
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
  
export const editButton = document.querySelector('.profile__button-edit');
export const addButton = document.querySelector('.profile__button-add')
  
export const closeButtons = document.querySelectorAll('.popup__button');
  
  
export const popupEdit = document.querySelector('.popup_type_edit');
export const popupAdd = document.querySelector('.popup_type_add');
export const imagePopup = document.querySelector('.popup_type_image');
  
export const profileContent = document.querySelector('.profile__name');
export const jobContent = document.querySelector('.profile__job');
  
  
  
export const nameInput = document.querySelector('.form__item_type_name');
export const jobInput = document.querySelector('.form__item_type_job');
  
export const cardsContainer = document.querySelector('.cards');
export const titleInput = document.querySelector('.form__item_type_title');
export const linkInput = document.querySelector('.form__item_type_link');
  
  
export const imageActive = imagePopup.querySelector('.popup__image');
export const titleActive = imagePopup.querySelector('.popup__title');
export const template = document.querySelector('.cards__item-template');
  
export const popupEditFormElement = popupEdit.querySelector('.form');
export const popupAddFormElement = popupAdd.querySelector('.form');