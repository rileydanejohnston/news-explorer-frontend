class Api {
  constructor(settings){
    this._baseUrl = settings.baseUrl;
    this._headers = settings.headers;
    this._apiKey = settings.headers.Authorization;
  }

  _handleResponse(res) {
    if (res.ok){
      return res.json();
    }
    return Promise.reject();
  }

  getNews(keyword) {
    return fetch(`${this._baseUrl}?q=${keyword}`, {
      method: 'GET',
      headers: this._headers
    })
      .then((res) => {
        return this._handleResponse(res);
      })
  }
}

const baseUrl = 'https://newsapi.org/v2/everything';
const { REACT_APP_KEY } = process.env;

const newsApi = new Api({
  baseUrl: baseUrl,
  headers: {
      Authorization: REACT_APP_KEY
    }
});

export default newsApi;