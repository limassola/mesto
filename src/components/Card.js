class Card {
    constructor({card, handleCardClick}, templateSelector){
        this._name = card.name;
        this._link = card.link;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
    }

    _getTemplate() {
        const cardElement = document.querySelector(this._templateSelector).content.querySelector('.cards__item').cloneNode(true);
        
        return cardElement;
    }

    generateCard() {
        this._card = this._getTemplate();

        this._elementTitle = this._card.querySelector('.cards__title')
        this._elementImage = this._card.querySelector('.cards__image');
        this._elementLikeBtn = this._card.querySelector('.cards__button-like');
        this._elementDeleteBtn = this._card.querySelector('.cards__button-delete');

        this._elementTitle.textContent = this._name;
        this._elementImage.src = this._link;
        this._elementImage.alt = this._link;

        this._setEventListeners();
        return this._card;
    }

    _likeCard(){
        this._elementLikeBtn.classList.toggle('cards__button-like_active');
    }

    _deleteCard() {
        this._card.remove();
        this._card = null;
    }

    _setEventListeners() {
        this._elementLikeBtn.addEventListener('click', () => {
            this._likeCard();
        });
        this._elementDeleteBtn.addEventListener('click', () => {
            this._deleteCard();
        });

        this._elementImage.addEventListener('click', () => {
            this._handleCardClick(this._name, this._link);
        })
    }
};

export default Card;
