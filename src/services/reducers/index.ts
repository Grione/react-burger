import { combineReducers } from 'redux';
import { ingredientsReducer } from './ingredients-reducer';
import { orderReducer } from './order-reducer';
import { authReducer } from './auth-reducer';
import {wsReducer, userWsReducer, checkOpenWs} from './ws-reducer';
import { getOrderReducer } from './getOrder-reducer';

const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  order: orderReducer,
  user: authReducer,
  wsReducer,
  userWsReducer,
  checkOpenWs,
  getOrderReducer,
});

export { rootReducer }