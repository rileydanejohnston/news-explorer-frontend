class Api {
  constructor(baseUrl, headers) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject();
  }

  getCurrentUser() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: this._headers
    })
    .then((res) => {
      return this._handleResponse(res);
    })
  }

  saveArticle(article) {
    return fetch(`${this._baseUrl}/articles/`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ article })
    })
    .then((res) => {
      return this._handleResponse(res);
    })
  }

  deleteArticle(_id) {
    return fetch(`${this._baseUrl}/articles/${_id}`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then((res) => {
      return this._handleResponse(res);
    })
  }

  getArticles() {
    return fetch(`${this._baseUrl}/articles/`, {
      method: 'GET',
      headers: this._headers
    })
    .then((res) => {
      return this._handleResponse(res);
    })
  }
};

export default Api;