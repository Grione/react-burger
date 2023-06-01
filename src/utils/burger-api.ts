import { getCookie, setCookie } from "./cookie";
import { TLogin, TRegister } from "../types";

const URL = 'https://norma.nomoreparties.space/api';
const checkRes = <T>(res: Response): Promise<T> => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
}

async function getIngredientsRequest() {
  const res = await fetch(`${URL}/ingredients`);
  return checkRes(res);
}

async function getOrder(number:string) {
  const res = await fetch(`${URL}/orders/${number}`);
  return checkRes(res);
}

async function postOrder(ids: number[]) {
  const res = await fetch(`${URL}/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      authorization: 'Bearer ' + getCookie('accessToken') || "",
    },
    body: JSON.stringify({
      "ingredients": ids,
    })
  });
  return checkRes(res);
}

async function recoveryPassword(email: string) {
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

async function resetPassword(password: string, code: string) {
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


async function loginRequest(form: TLogin) {
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

async function registerRequest(form: TRegister) {
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
      authorization: 'Bearer ' + getCookie('accessToken') || "",
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  });
  return checkRes(res);
}

async function userChangeRequest(data: {
  name: string,
  email: string,
  password: string,
}) {
  const res = await fetch(`${URL}/auth/user`, {
    method: 'PATCH',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      authorization: 'Bearer ' + getCookie('accessToken') || "",
    },
    body: JSON.stringify(data),
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

const saveTokens = (refreshToken: string, accessToken: string) => {
  setCookie('accessToken', accessToken.split('Bearer ')[1]);
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
  logOutRequest,
  getOrder,
}
