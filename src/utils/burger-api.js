const URL = 'https://norma.nomoreparties.space/api';


function getIngredients() {
  return fetch(`${URL}/ingredients`)
    .then((res) => {
      return res.ok ? res.json() : res.json().then(err => Promise.reject(err));
    });
}

export default getIngredients;

