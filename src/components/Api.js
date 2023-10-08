export class Api {
    constructor({ url, headers }) {
        this._url = url;
        this._headers = headers;
    }


    _getResponseData(options, url) {
        return fetch(options, url)
        .then((res) => {
            if (!res.ok) {
                return Promise.reject(`Ошибка: ${res.status}`); 
            }
            return res.json();
        })
    }


    getUserInfoApi() {
        return this._getResponseData(`${this._url}/users/me`, {
            method: 'GET',
            headers: this._headers
        })
            

    }

    getAllCards() {
        return this._getResponseData(`${this._url}/cards`, {
            method: 'GET',
            headers: this._headers
        })
            

    }

    getRedactProfile(data) {
        return this._getResponseData(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                about: data.about
            })
        })
            

    }


    createCardApi(data) {
        return this._getResponseData(`${this._url}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                link: data.link
            })
        })
            

    }

    likeCardsApi(data) {
        return this._getResponseData(`${this._url}/cards/${data}/likes`, {
            method: 'PUT',
            headers: this._headers
        })
            

    }

    likeCardsApiDelete(data) {
        return this._getResponseData(`${this._url}/cards/${data}/likes`, {
            method: 'DELETE',
            headers: this._headers
        })
            

    }


    cardDeleteApi(data) {
        return this._getResponseData(`${this._url}/cards/${data}`, {
            method: 'DELETE',
            headers: this._headers
        })
            

    }


    avatarApi(data) {
        return this._getResponseData(`${this._url}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: data.avatar
            })
        })
            

    }

}