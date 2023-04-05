class Card {
    constructor({card, handleCardClick, openDeletePopup, handleLikeClick}, templateSelector, userId){
        this._name = card.name;
        this._link = card.link;
        this._id = card._id;
        this._ownerId = card.owner._id;
        this._likes = card.likes;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
        this.handleLikeClick = handleLikeClick;
        this._openDeletePopup = openDeletePopup;
        this._userId = userId;
    }

    _getTemplate() {
        const cardElement = document.querySelector(this._templateSelector).content.querySelector('.cards__item').cloneNode(true);
        
        return cardElement;
    }

    generateCard() {
        this._card = this._getTemplate();
        this._card.id = this._id
        this._elementTitle = this._card.querySelector('.cards__title')
        this._elementImage = this._card.querySelector('.cards__image');
        this._elementLikeBtn = this._card.querySelector('.cards__button-like');
        this._elementDeleteBtn = this._card.querySelector('.cards__button-delete');
        this._elementLikeCount = this._card.querySelector('.cards__like-count');

        this._elementTitle.textContent = this._name;
        this._elementImage.src = this._link;
        this._elementImage.alt = this._name;
        this._elementLikeCount.textContent = this._likes.length;
        this._setEventListeners();

        if(this._ownerId !== this._userId) {
            this._elementDeleteBtn.remove();
        }

        const isLiked = this._likes.some((like) => like._id === this._userId);
        if(isLiked) {
            this._elementLikeBtn.classList.add('cards__button-like_active')
        }
        
        return this._card;
        
    }


    addLike(likes) {
        this._likes = likes
        this._elementLikeCount.textContent = this._likes.length;
        this._elementLikeBtn.classList.add('cards__button-like_active')
    }

    removeLike(likes) {
        this._likes = likes
        this._elementLikeCount.textContent = this._likes.length;
        this._elementLikeBtn.classList.remove('cards__button-like_active')
    }

    deleteCard() {
        this._card.remove();
        this._card = null;
    }

    _setEventListeners() {
        this._elementLikeBtn.addEventListener('click', () => {
            const isLiked = this._likes.some((like) => like._id === this._userId);
        
            this.handleLikeClick(this._id, isLiked)
        })
        
        
        if (this._ownerId === this._userId) {
            this._elementDeleteBtn.addEventListener('click', () => {
                this._openDeletePopup(this._card.id, this._card);
            });
        }

        this._elementImage.addEventListener('click', () => {
            this._handleCardClick(this._name, this._link);
        })
    }
};

export default Card;
