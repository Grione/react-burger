import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_ERROR
} from '../services/action-types';
import BurgerIngredients from '../components/burger-ingredients/burger-ingredients';
import BurgerConstructor from '../components/burger-constructor/burger-constructor';
import { getIngredients } from '../utils/burger-api';

export function HomePage() {
  const { isLoading, hasError, ingredients } = useSelector(state => state.ingredients);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_INGREDIENTS_REQUEST });
    getIngredients()
      .then((data) => {
        dispatch({ type: GET_INGREDIENTS_SUCCESS, payload: data.data })
      })
      .catch((error) => {
        dispatch({ type: GET_INGREDIENTS_ERROR })
      })
  }, [dispatch]);
  return (
    <>
      {isLoading && 'Loading...'}
      {hasError && 'Erron defined'}
      {
        !isLoading && !hasError && (
          <DndProvider backend={HTML5Backend}>
            <BurgerIngredients data={ingredients} />
            <BurgerConstructor />
          </DndProvider>
        )
      }
    </>
  )
}