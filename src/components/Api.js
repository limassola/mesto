class Api {
    constructor(config) {
        this._url = config.url;
        this._headers = config.headers;
    }

    _handleResponse(res) {
        if(res.ok){
            return res.json();
            }

            return Promise.reject(`Ошибка: ${res.status}`);
    }

    getInitialCards() {
        return fetch(`${this._url}/cards`, {
            method: 'GET',
            headers: this._headers,
        }).then(this._handleResponse)

    }

    addCard(data){
        return fetch(`${this._url}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify(data),
        })
        .then(this._handleResponse)
    }

    deleteCard(id) {
        return fetch(`${this._url}cards/${id}`, {
            method: 'DELETE',
            headers: this._headers,
        })
        .then(res => {
            if(res.ok){
            return res.json();
            }
    
            return Promise.reject(`Ошибка: ${res.status}`);
        })
    }

    getUserInfo() {
        return fetch(`${this._url}users/me`, {
            method: 'GET',
            headers: this._headers,
        })
        .then(this._handleResponse)
    }

    editUserInfo({name, about}) {
        return fetch(`${this._url}users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                about: about,
            }),
        })
        .then(this._handleResponse)
    }

    setAvatar(link) {
        return fetch(`${this._url}users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: link,
            }),
        })
        .then(this._handleResponse)
    }

}

export default Api