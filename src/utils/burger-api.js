import { getCookie, setCookie } from "./cookie";

const URL = 'https://norma.nomoreparties.space/api';

const checkRes = (res) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
}


async function getIngredientsRequest() {
  const res = await fetch(`${URL}/ingredients`);
  return checkRes(res);
}

async function postOrder(ids) {
  const res = await fetch(`${URL}/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({
      "ingredients": ids
    })
  });
  return checkRes(res);
}

async function recoveryPassword(email) {
  const res = await fetch(`${URL}/password-reset`,
    {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ "email": email })
    }
  );
  return checkRes(res);
}

async function resetPassword(password, code) {
  const res = await fetch(`${URL}/password-reset/reset`,
    {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ "password": password, "token": code })
    }
  );
  return checkRes(res);
}

async function loginRequest(form) {
  const res = await fetch(`${URL}/auth/login`, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(form)
  });

  return checkRes(res);
}

async function registerRequest(form) {
  const res = await fetch(`${URL}/auth/register`, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(form)
  });

  return checkRes(res);

}

async function userRequest() {
  const res = await fetch(`${URL}/auth/user`, {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      authorization: getCookie('accessToken')
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  });
  return checkRes(res);
}

async function userChangeRequest(form) {
  const res = await fetch(`${URL}/auth/user`, {
    method: 'PATCH',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      authorization: getCookie('accessToken')
    },
    body: JSON.stringify(form),
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  });
  return checkRes(res);
}

async function refreshTokenRequest() {
  const res = await fetch(`${URL}/auth/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({
      token: localStorage.getItem('refreshToken')
    })
  })

  return checkRes(res);

}

const saveTokens = (refreshToken, accessToken) => {
  setCookie('accessToken', accessToken);
  localStorage.setItem('refreshToken', refreshToken);
}

async function logOutRequest() {
  const res = await fetch(`${URL}/auth/logout`, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify({
      token: localStorage.getItem('refreshToken')
    })
  });

  return checkRes(res);
}

export {
  getIngredientsRequest,
  postOrder,
  recoveryPassword,
  resetPassword,
  loginRequest,
  registerRequest,
  userRequest,
  refreshTokenRequest,
  saveTokens,
  userChangeRequest,
  logOutRequest
}
