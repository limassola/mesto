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

// let popup = document.querySelector('.popup');
const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add')


const profileContent = document.querySelector('.profile__name');
const jobContent = document.querySelector('.profile__job');



const nameInput = document.querySelector('.form__item_type_name');
const jobInput = document.querySelector('.form__item_type_job');




// function открытия попапов
function openPopup(popup) {
    popup.classList.add('popup_opened')
}

function openEditPopup() {
  nameInput.value = profileContent.textContent;
  jobInput.value = jobContent.textContent;
  openPopup(popupEdit);
}

function openAddPopup() {
  titleInput.value = '';
    linkInput.value = '';
    openPopup(popupAdd);
}

editButton.addEventListener('click', openEditPopup);
addButton.addEventListener('click', openAddPopup);



function closePopup(popup) {
    popup.classList.remove('popup_opened')
};




// fuction закрытия всех попапов
closeButtons.forEach(button =>{
    button.addEventListener('click', function(evt){
        const popupItem = evt.target.closest('.popup');
        closePopup(popupItem);
    })
});



const editFormElement = popupEdit.querySelector('.form')


function handleFormSubmit (evt) {
    evt.preventDefault();

    profileContent.textContent = nameInput.value;
    jobContent.textContent = jobInput.value;

    closePopup (popupEdit);
}

editFormElement.addEventListener('submit', handleFormSubmit); 



// render cards


const cards = document.querySelector('.cards');
const titleInput = document.querySelector('.form__item_type_title');
const linkInput = document.querySelector('.form__item_type_link');

const createCard = (cardName, cardLink) => {
  
  const imagePopup = document.querySelector('.popup_type_image');
  const imageActive = imagePopup.querySelector('.popup__image');
  const titleActive = imagePopup.querySelector('.popup__title');


  const template = document.querySelector('.cards__item-template')
  const card = template.content.querySelector('.cards__item').cloneNode(true);
  
  const cardImage = card.querySelector('.cards__image');
  const cardTitle = card.querySelector('.cards__title');
  
  cardTitle.textContent = cardName;
  cardImage.setAttribute("src", cardLink);
  cardImage.setAttribute("alt", cardName);

  const likeBtn = card.querySelector('.cards__button-like');
  likeBtn.addEventListener('click', function(evt){
    const currentButton = evt.target;
    currentButton.classList.toggle('cards__button-like_active')
});

  const deleteBtn = card.querySelector('.cards__button-delete');
  deleteBtn.addEventListener('click', ()=>{
    card.remove();
  })

  
  
  cardImage.addEventListener('click', () => {
    openPopup(imagePopup)
    imageActive.src = cardLink;
    imageActive.alt = cardLink;
    titleActive.textContent = cardName;
  })

  return card;
}

const renderCard = (cardName, cardLink) => {
  cards.prepend(createCard(cardName, cardLink))
}

initialCards.forEach((item)=>{
  cardName = item.name;
  cardLink = item.link
  renderCard(cardName, cardLink);
})

const addFormElement = popupAdd.querySelector('.form')

function addFormHandler(evt, item){
  evt.preventDefault();
  const cardName = titleInput.value
  const cardLink = linkInput.value
  renderCard(cardName,cardLink);
  closePopup (popupAdd);
}


addFormElement.addEventListener('submit', addFormHandler);