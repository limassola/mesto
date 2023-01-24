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

function closePopup (popup) {
    popup.classList.remove('popup_opened')
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

    closePopup (popupEdit);
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

// render cards


const cards = document.querySelector('.cards');
const titleInput = document.querySelector('.form__item_type_title');
const linkInput = document.querySelector('.form__item_type_link');

const createCard = (cardName, cardLink) => {
  const template = `
  <div class="cards__item">
    <img class="cards__image">
    <div class="cards__heading">
        <h2 class="cards__title"></h2>
        <button type="button" class="button cards__button"></button>
    </div>
  </div>
  `;

  const container = document.createElement('div');
  container.innerHTML = template;
  container.querySelector('.cards__title').textContent = cardName;
  container.querySelector('.cards__image').setAttribute("src", cardLink);

  return container.firstElementChild;
}

const renderCard = (cardName, cardLink) => {
  cards.prepend(createCard(cardName, cardLink))
}

initialCards.forEach((item)=>{
  cardName = item.name;
  cardLink = item.link
  renderCard(cardName, cardLink);
})

function addFormHandler(evt, item){
  evt.preventDefault();
  const cardName = titleInput.value
  const cardLink = linkInput.value
  renderCard(cardName,cardLink);
  closePopup (popupAdd);
}


popupAdd.addEventListener('submit', addFormHandler);