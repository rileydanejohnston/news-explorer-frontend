const { NODE_ENV } = process.env;
const baseUrl = NODE_ENV === 'production' ? 'UNDER CONSTRUCTION' : 'http://localhost:3000';

const handleResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject();
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
    return handleResponse(res);
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
    return handleResponse(res);
  });
}