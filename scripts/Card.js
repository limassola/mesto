class Card {
    constructor(card, templateSelector, openImage){
        this._name = card.name;
        this._link = card.link;
        this._templateSelector = templateSelector;
        this._openImage = openImage;
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
    }

    _setEventListeners() {
        this._elementLikeBtn.addEventListener('click', () => {
            this._likeCard();
        });
        this._elementDeleteBtn.addEventListener('click', () => {
            this._deleteCard();
        });

        this._elementImage.addEventListener('click', () => {
            this._openImage
        })
    }
};

export default Card;
