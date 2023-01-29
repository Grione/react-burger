import { combineReducers } from 'redux';
import { ingredientsReducer } from './ingredients-reducer';
import { currentIngredientReducer } from './current-ingredient-reducer';
import { orderReducer } from './order-reducer';

const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  currentIngredient: currentIngredientReducer,
  order: orderReducer
});

export { rootReducer }