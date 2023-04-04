import {formValidationConfig, editButton, addButton, nameInput, jobInput, avatarEditButton, profileContent, jobContent, profileAvatar} from "../utils/constants.js"
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import '../pages/index.css';
import Api from "../components/Api.js";
import PopupWithSubmit from "../components/PopupWithSubmit.js";


// Api
const api = new Api({
  url:'https://mesto.nomoreparties.co/v1/cohort-62/',
  headers: {
    'content-type': 'application/json',
    'authorization': 'b0a7590b-647f-433a-aa05-717d75f49ba7',
  }
})

let userId
 
//Запросы для получения инфы о карточка и пользователе
 Promise.all([
  api.getInitialCards(),
  api.getUserInfo()
 ])
 .then(([cards, userData]) => {
  userId = userData._id
  cardsSection.renderItems(cards)
  userInfo.setUserInfo({name: userData.name, about: userData.about});
  userInfo.setAvatar(userData.avatar);

 })

// Валидация 
const editFormValidation = new FormValidator(formValidationConfig, '.form_edit');
editFormValidation.enableValidation();
const addFormValidation = new FormValidator(formValidationConfig, '.form_add');
addFormValidation.enableValidation();
const avatarFormValidation = new FormValidator(formValidationConfig, '.form_type_avatar');
avatarFormValidation.enableValidation();

//Попап изменения аватара
const avatarEditPopup = new PopupWithForm('.popup_type_avatar', {
  submitCallback: (formData) => {
    avatarEditPopup.renderLoading(true)
    api.setAvatar(formData.link)
    .then((data) => {
      userInfo.setAvatar(data.avatar)
    })
    .then(() => {
      avatarEditPopup.close()
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      avatarEditPopup.renderLoading(false)
    })
  }
})
avatarEditPopup.setEventListeners()

avatarEditButton.addEventListener('click', () => {
  avatarFormValidation.resetValidation();
  avatarEditPopup.open();
})


//Попап с картинкой
const photoPopup = new PopupWithImage('.popup_type_image');
photoPopup.setEventListeners();


//Попап добавления карточки
const addCardPopup = new PopupWithForm('.popup_type_add', {
  submitCallback:(formData) => {
    addCardPopup.renderLoading(true)
    api.addCard(formData.name, formData.link)
    .then((data) => {
      cardsSection.addItem(createCard(data))
    })
    .then(() => {
      addCardPopup.close()
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      addCardPopup.renderLoading(false)
    })
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
    editProfilePopup.renderLoading(true)
    api.editUserInfo(formData.name, formData.about)
    .then((formData) => {
      userInfo.setUserInfo(formData);
    })
    .then(() => {
      editProfilePopup.close();
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      editProfilePopup.renderLoading(false)
    })
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
    renderer: (data) => {
      // const card = createCard(data);
      cardsSection.addItem(createCard(data))
    }
  },
  '.cards',
  );

  function createCard(item) {
    const newCard = new Card({
      card: item,
      handleCardClick:(name, link) => {
        photoPopup.open(name, link);
      },
      openDeletePopup:() => {
        deletePopup.open(newCard)
      }
    },
    '.cards__item-template',
    api,
    userId
    );
    return newCard.generateCard();
  }


    function createNewCards (item) {
      cardsContainer.prepend(createCard(item));
   }




// UserInfo
const userInfo = new UserInfo({
  nameSelector: '.profile__name',
  aboutSelector: '.profile__job',
  avatarSelector: '.profile__avatar'
});

// Попап удаления карточки
const deletePopup = new PopupWithSubmit('.popup_type_delete', {
  handleFormSubmit:(card) => {
    api.deleteCard(card._id)
    .then(() => {
    card.deleteCard()
    })
    .then(() => {
      deletePopup.close()
    })
    .catch((err) => console.log(err))
  }
});
deletePopup.setEventListeners();

