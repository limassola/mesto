class Api {
    constructor(config) {
        this._url = config.url;
        this._headers = config.headers;
    }

    getInitialCards() {
        return fetch(this._url+`${'cards'}`, {
            method: 'GET',
            headers: this._headers,
        }).then((res) => {
            if(res.ok){
            return res.json();
            }

            return Promise.reject(`Ошибка: ${res.status}`);
        })

    }

    addCard(data){
        return fetch(this._url+`${'cards'}`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify(data),
        })
        .then(res => {
            if(res.ok){
            return res.json();
            }
    
            return Promise.reject(`Ошибка: ${res.status}`);
        })
    }

}

export default Api