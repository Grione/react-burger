import { combineReducers } from 'redux';
import { ingredientsReducer } from './ingredients-reducer';
import { orderReducer } from './order-reducer';
import { authReducer } from './auth-reducer';

const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  order: orderReducer,
  user: authReducer
});

export { rootReducer }