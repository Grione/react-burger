const URL = 'https://norma.nomoreparties.space/api';

const checkRes = (res) => {
  return res.ok ? res.json() : res.json().catch(err => Promise.reject(err));
}


async function getIngredients() {
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
  const res = await fetch('https://norma.nomoreparties.space/api/password-reset',
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
  const res = await fetch('https://norma.nomoreparties.space/api/password-reset/reset',
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
  return await fetch('https://cosmic.nomoreparties.space/login', {
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
  
}

export { getIngredients, postOrder, recoveryPassword, resetPassword, loginRequest }
