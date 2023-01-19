const URL = 'https://norma.nomoreparties.space/api';

const checkRes = (res) => {
  return res.ok ? res.json() : res.json().then(err => Promise.reject(err));
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

export { getIngredients, postOrder }
