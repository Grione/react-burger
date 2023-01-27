import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GET_INGREDIENTS_START, GET_INGREDIENTS_SUCCESS, GET_INGREDIENTS_FAILURE } from '../../services/action-types';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import { getIngredients } from '../../utils/burger-api';

function App() {

  const { isLoading, hasError, ingredients } = useSelector(state => state.ingredients);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_INGREDIENTS_START });
    getIngredients()
      .then((data) => {
        dispatch({ type: GET_INGREDIENTS_SUCCESS, payload: data.data })
      })
      .catch((error) => {
        dispatch({ type: GET_INGREDIENTS_FAILURE })
      })
  }, [dispatch]);

  return (
    <div className='wrapper'>
      <AppHeader />
      <main className='main container'>
        {isLoading && 'Loading...'}
        {hasError && 'Erron defined'}
        {
          !isLoading && !hasError && (
            <>
              <BurgerIngredients data={ingredients} />
              <BurgerConstructor />
            </>


          )

        }
      </main>
    </div>
  );
}

export default App;
