const URL = 'https://norma.nomoreparties.space/api';


export function getIngredients() {
  return fetch(`${URL}/ingredients`)
    .then((res) => {
      return res.ok ? res.json() : res.json().then(err => Promise.reject(err));
    });
}

export function postOrder(ids) {
  return fetch(`${URL}/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({
      "ingredients": ids
    })
  }).then((res) => {
    return res.ok ? res.json() : res.json().then(err => Promise.reject(err))
  })
}
