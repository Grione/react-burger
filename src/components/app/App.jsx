import { useEffect, useState } from 'react';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import getIngredients from '../../utils/burger-api'

function App() {
  const [state, setState] = useState({ data: [], isLoading: true, hasError: false });

  useEffect(() => {
    getIngredients().then((data) => {
      if (data) {
        setState({ ...state, data: data.data, isLoading: false })
      } else {
        setState({ ...state, hasError: true, isLoading: false })
      }
    });

  }, []);

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
