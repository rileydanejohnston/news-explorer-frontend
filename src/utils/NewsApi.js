class NewsApi {
  constructor(settings){
    this._baseUrl = settings.baseUrl;
    this._headers = settings.headers;
  }

  _handleResponse(res) {
    if (res.ok){
      return res.json();
    }
    return Promise.reject();
  }

  _getDate() {
    // get previous date in miliseconds
    // create new date object based on ^ miliseconds
    const previousDateMili = Date.now() - 604800000;
    const previousDate = new Date(previousDateMili);

    // convert to string, remove the miliseconds for newsAPI
    const dateString = previousDate.toISOString().slice(0, 19);

    return dateString;
  }

  getNews(keyword) {
    return fetch(`${this._baseUrl}?q=${keyword}&from=${this._getDate()}`, {
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

const newsApi = new NewsApi({
  baseUrl: baseUrl,
  headers: {
      Authorization: REACT_APP_KEY
    }
});

export default newsApi;