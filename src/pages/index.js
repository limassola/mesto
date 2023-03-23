import {formValidationConfig, initialCards, editButton, addButton, nameInput, jobInput} from "../utils/constants.js"
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import '../pages/index.css';



// Валидация 
const editFormValidation = new FormValidator(formValidationConfig, '.form_edit');
editFormValidation.enableValidation();
const addFormValidation = new FormValidator(formValidationConfig, '.form_add');
addFormValidation.enableValidation();


//Попап с картинкой
const photoPopup = new PopupWithImage('.popup_type_image');
photoPopup.setEventListeners();


//Попап добавления карточки
const addCardPopup = new PopupWithForm('.popup_type_add', {
  submitCallback:(formData) => {
    cardsSection.addItem(createCard(formData))
    addCardPopup.close()
  }  
  });
  addCardPopup.setEventListeners();

addButton.addEventListener('click', () => {
  addFormValidation.resetValidation();
  addCardPopup.open()
})


//Попап редактирования
const editProfilePopup = new PopupWithForm('.popup_type_edit', {
  submitCallback: (formData) => {
    userInfo.setUserInfo(formData);
    editProfilePopup.close();
  }
});
editProfilePopup.setEventListeners();

editButton.addEventListener('click', () => {
  const userInfoValues = userInfo.getUserInfo();
  nameInput.value = userInfoValues.name;
  jobInput.value = userInfoValues.about;
  editFormValidation.resetValidation();
  editProfilePopup.open()
})


// Отрисовка карточек
const cardsSection = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      cardsSection.addItem(createCard(item))
    }
  },
  '.cards'
  );

  function createCard(item) {
    const newCard = new Card({
      card: item,
      handleCardClick:(name, link) => {
        photoPopup.open(name, link);
      }
    },
    '.cards__item-template');
    return newCard.generateCard();
  }

    function createNewCards (item) {
      cardsContainer.prepend(createCard(item));
   }

cardsSection.renderItems();


// UserInfo
const userInfo = new UserInfo({
  nameSelector: '.profile__name',
  aboutSelector: '.profile__job'
});

// // function открытия попапов
// function openPopup(popup) {
//     popup.classList.add('popup_opened')
//     document.addEventListener('keydown', closeByEscape);
// }

