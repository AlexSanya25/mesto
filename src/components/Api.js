export class Api {
    constructor({ url, headers }) {
        this._url = url;
        this._headers = headers;
    }

    getUserInfoApi() {
        return fetch(`${this._url}/users/me`, {
            method: 'GET',
            headers: this._headers
        })
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                throw new error('Ошибка...')
            })
            .catch((error) => {
                console.log(error);
            })
    }

    getAllCards() {
        return fetch(`${this._url}/cards`, {
            method: 'GET',
            headers: this._headers
        })
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                throw new error('Ошибка...')
            })
            .catch((error) => {
                console.log(error);
            })
    }

    getRedactProfile(data) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                about: data.about
            })
        })
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                throw new error('Ошибка...')
            })
            .catch((error) => {
                console.log(error);
            })
    }


    createCardApi(data) {
        return fetch(`${this._url}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                link: data.link
            })
        })
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                throw new error('Ошибка...')
            })
            .catch((error) => {
                console.log(error);
            })
    }

    likeCardsApi(data) {
        return fetch(`${this._url}/cards/${data}/likes`, {
            method: 'PUT',
            headers: this._headers
        })
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                throw new error('Ошибка...')
            })
            .catch((error) => {
                console.log(error);
            })
    }

    likeCardsApiDelete(data) {
        return fetch(`${this._url}/cards/${data}/likes`, {
            method: 'DELETE',
            headers: this._headers
        })
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                throw new error('Ошибка...')
            })
            .catch((error) => {
                console.log(error);
            })
    }


    cardDeleteApi(data) {
        return fetch(`${this._url}/cards/${data}`, {
            method: 'DELETE',
            headers: this._headers
        })
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                throw new error('Ошибка...')
            })
            .catch((error) => {
                console.log(error);
            })
    }


    avatarApi(data) {
        return fetch(`${this._url}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: data.avatar 
            })
        })
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                throw new error('Ошибка...')
            })
            .catch((error) => {
                console.log(error);
            })
    }
    
}