class NewsApi {
  constructor(baseUrl){
    this._baseUrl = baseUrl;
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
    return fetch(`${this._baseUrl}?q=${keyword}&from=${this._getDate()}&pageSize=100&apiKey=b8073dea22c9459e912450c29081a0ec`, {
      method: 'GET'
    })
      .then((res) => {
        return this._handleResponse(res);
      })
  }
}

const { NODE_ENV } = process.env;
const baseUrl = NODE_ENV === 'production' ? 'https://nomoreparties.co/news/v2/everything' : 'https://newsapi.org/v2/everything';

const newsApi = new NewsApi(baseUrl);

export default newsApi;