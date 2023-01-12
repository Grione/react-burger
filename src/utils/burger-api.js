const URL = 'https://norma.nomoreparties.space/api';


function getIngredients() {
  return fetch(`${URL}/ingredients`)
    .then((response) => {
      if (response.ok) {
        return response.json().then((data) => {
          return data;
        })
      } else {
        console.log('response status:' + response.status);
      }

    });
}

export default getIngredients;

