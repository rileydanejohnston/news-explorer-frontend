const { NODE_ENV } = process.env;
const baseUrl = NODE_ENV === 'production' ? 'https://api.my-news-explorer.students.nomoreparties.sbs' : 'http://localhost:3000';

let tempOk;

// extract status from response for errors
const extractData = (res) => {
  if (!res.ok)  {
    const { ok } = res;
    tempOk = ok;
  }

  return res.json();
}

// return data or promise reject/error
// res from extractData won't have the error message so we get it from handleResponse
const handleResponse = (data) => {
  if (tempOk) {
    return data;
  }
  return Promise.reject(new Error(data.message));
}

// register
export const register = (email, password, name) => {
  return fetch(`${baseUrl}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password,
      name
    })
  })
  .then((res) => {
    return extractData(res);
  })
  .then((data) => {
    return handleResponse(data);
  });
}

// signin
export const login = (email, password) => {
  return fetch(`${baseUrl}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  })
  .then((res) => {
    return extractData(res);
  })
  .then((data) => {
    return handleResponse(data);
  });
}