import { useEffect, useState } from 'react';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import getIngredients from '../../utils/burger-api';
import { IngredientsContext } from '../../services/ingredientsContext';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    getIngredients()
      .then((data) => {
        setIngredients(data.data);
      })
      .catch((error) => {
        setHasError(true);
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false)
      });

  }, []);

  return (
    <div className='wrapper'>
      <AppHeader />
      <main className='main container'>
        {isLoading && 'Loading...'}
        {hasError && 'Erron defined'}
        {
          !isLoading && !hasError && (
            <IngredientsContext.Provider value={ingredients}>
              <BurgerIngredients data={ingredients} />
              <BurgerConstructor />
            </IngredientsContext.Provider>
          )

        }
      </main>
    </div>
  );
}

export default App;
