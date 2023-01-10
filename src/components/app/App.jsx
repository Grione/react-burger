import React, { useEffect, useState } from 'react';

import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';

const URL = 'https://norma.nomoreparties.space/api/ingredients';

function App() {
  const [state, setState] = useState({ data: [], isLoading: true, hasError: false });

  useEffect(() => {
    const getIngredientData = async () => {
      setState({ ...state, hasError: false, isLoading: true });

      try {
        const response = await fetch(URL);
        const data = await response.json();

        setState({ ...state, data: data.data, isLoading: false });
      } catch (error) {
        setState({ ...state, hasError: true, isLoading: false })
      }
    }

    getIngredientData();

  }, [])
  const { data, isLoading, hasError } = state;

  return (
    <div className='wrapper'>
      <AppHeader />
      <main className='main container'>
        {isLoading && 'Loading...'}
        {hasError && 'Erron defined'}
        {
          !isLoading && !hasError && (
            <>
              <BurgerIngredients data={data} />
              <BurgerConstructor data={data} />
            </>
          )

        }

      </main>
    </div>
  );
}

export default App;
