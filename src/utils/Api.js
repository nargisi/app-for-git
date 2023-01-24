import { API_CONFIG, perPage } from './constants';

class Api {
  constructor(options) {
    this._baseURL = options.baseURL;
    this._headers = options.headers;
  }

  _checkResponse(res) {
    console.log('res', res);
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getUserInfo(username) {
    return fetch(`${this._baseURL}/users/${username}`, {
      headers: { ...this._headers },
    })
      .then(this._checkResponse)
      .catch((err) => {
        console.log(err);
      });
  }

  getRepositories(username, pageNumber) {
    return fetch(
      `${this._baseURL}/users/${username}/repos?page=${pageNumber}&per_page=${perPage}`,
      {
        headers: { ...this._headers },
      }
    )
      .then(this._checkResponse)
      .catch((err) => {
        console.log(err);
      });
  }
}

const api = new Api(API_CONFIG);
export default api;
